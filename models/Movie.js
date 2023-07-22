const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MovieSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique:true
  },
  time: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    default: null,
  },
  rating: {
    type: String,
    default: 0,
  },
  director: {
    type: String,
    required: true,
  },
  actors: {
    type: String,
    default: null,
  },
  types: {
    type: String,
    default: null,
  },
})

const Movie = mongoose.model('Movie', MovieSchema)
module.exports = Movie
