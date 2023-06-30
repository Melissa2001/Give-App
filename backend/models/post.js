const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  image: {
    type: String,
    required: false
  },
  content: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  userid: {
    type: String,
    required: true
}});

module.exports = mongoose.model('Post', postSchema);
