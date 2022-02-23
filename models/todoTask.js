const mongoose = require('mongoose');
const todoTaskSchema = new mongoose.Schema({
  category: String,
  title: String,
  startTime: String,
  endTime: String,
  date: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('TodoTask', todoTaskSchema);
