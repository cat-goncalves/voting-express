const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  displayName: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true,
    unique: true
  },
  votes: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('Movie', movieSchema)