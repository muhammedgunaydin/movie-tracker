const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  email: {
    unique: true,
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  watchlist: [{
    type: Schema.Types.ObjectId,
    ref: 'Movie',
    unique: true,
  }],
  ratings: [{
    movie: {
      type: Schema.Types.ObjectId,
      ref: 'Movie',
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
  }],
})

const User = mongoose.model('User', UserSchema)
module.exports = User
