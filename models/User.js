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
  movies:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Movie'
  }]
})

const User = mongoose.model('User', UserSchema)
module.exports = User
