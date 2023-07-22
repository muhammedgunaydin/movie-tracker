const express = require('express')
require('./db/mongo')
const volleyball = require('volleyball')
const bodyParser = require('body-parser')
const movieRouter = require('./router/movieRouter')
require('dotenv').config()

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(volleyball)

app.use('/movie',movieRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})
