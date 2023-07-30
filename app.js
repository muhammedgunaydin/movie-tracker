const express = require('express')
require('./db/mongo')
require('./services/redisService')
const helmet = require('helmet')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const volleyball = require('volleyball')
const movieRouter = require('./router/movieRouter')
const authRouter = require('./router/authRouter')
require('dotenv').config()
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use(cookieParser())
app.use(helmet())
app.use(volleyball)

app.use('/auth', authRouter)
app.use('/movie', movieRouter)

const PORT = process.env.PORT || 9000
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})
