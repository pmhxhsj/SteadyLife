const mongoose = require('mongoose');
const todoTaskSchema = new mongoose.Schema({
  userID: String,
  category: String,
  title: String,
  startTime: String,
  endTime: String,
  remainingTime: String,
  date: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('TodoTask', todoTaskSchema);
