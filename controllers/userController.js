const User = require('../models/User')
const bcrypt = require('bcrypt')
require('dotenv').config()
const { generateJWT, verifyJWT } = require('../utils/jwtUtils')
const { setJWT, delJWT } = require('../services/redisService')

const signUp = async (req, res) => {
  try {
    const { email, password } = req.body
    const hashPass = await bcrypt.hash(password, 10)
    const user = new User({ email, password: hashPass })
    await user.save()
    res.status(201).send('Account created successfully')
  } catch (err) {
    res.status(500).send(`Error while creating account : ${err.message}`)
  }
}

const login = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(401).send(`${email} is not a valid user`)
    }
    const token = generateJWT(user._id)
    setJWT(user._id.toString(), token)
    const isValidPass = await bcrypt.compare(password, user.password)
    if (!isValidPass) {
      return res.status(401).send('Username or password is incorrect')
    }
    res.cookie('token', token, { httpOnly: true, secure: false, maxAge: 3600*60*60*24 })
    res.send(token)
  } catch (err) {
    res.status(500).send(err)
  }
}

const logout = async (req, res) => {
  const token = req.cookies.token
  if (!token) {
    return res.status(401).send('Unauthorized')
  }
  try {
    const decoded = verifyJWT(token, process.env.JWT_SECRET)
    console.log(decoded)
    delJWT(decoded.userId)
    res.clearCookie('token')
    res.json({ message: 'Logout successful' })
  } catch (error) {
    console.error(error)
    res.status(403).send('Invalid token')
  }
}

module.exports = { signUp, login, logout }
