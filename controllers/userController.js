const User = require('../models/User')
const bcrypt = require('bcrypt')
const { generateJWT } = require('../utils/jwtUtils')
const { setJWT } = require('../services/redisService')


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
    res.cookie('token', token, { httpOnly: true, secure: true })
    res.send(`Welcome ${email}`)
  } catch (err) {
    res.status(500).send(err)
  }
}

module.exports = { signUp, login }
