const jwt = require('jsonwebtoken')

const secretKey = process.env.JWT_SECRET

const verifyToken = (req, res, next) => {
  const token = req.cookies.token

  if (!token) {
    return res.status(401).send('Unauth access!')
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(403).send('Invalid token!')
    }

    res.locals.user = decoded.userId
    console.log(decoded)
    next()
  })
}

module.exports = verifyToken
