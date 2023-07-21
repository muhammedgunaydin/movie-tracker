const mongoose = require('mongoose')
const Schema = mongoose.Schema

const MovieSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
  year: {
    type: Date,
    default: null,
  },
  rating: {
    type: Number,
    default: 0,
  },
  director: {
    type: String,
    required: true,
  },
  actors: {
    type: [String],
    default: null,
  },
  types: {
    type: String,
    default: null,
  },
})

const Movie = mongoose.model('Movie', MovieSchema)
module.exports = Movie
