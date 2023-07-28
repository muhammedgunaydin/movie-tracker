const jwt = require('jsonwebtoken')
require('dotenv').config()

const JWT_SECRET = process.env.JWT_SECRET

function generateJWT(user) {
    return jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: 3600 });
  }

const verifyJWT = (token) => {
  return jwt.verify(token, JWT_SECRET)
}

module.exports = { generateJWT, verifyJWT }
