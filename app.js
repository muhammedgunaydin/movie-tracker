const express = require('express')
const volleyball = require('volleyball')
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(volleyball)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
})
