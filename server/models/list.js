const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Todo = new Schema({
  category: String,
  title: String,
  startTime: String,
  endTime: String,
});

Todo.statics.create = function (category, title, startTime, endTime) {
  const list = new this({
    category,
    title,
    startTime,
    endTime,
  });
  return list.save();
};

module.exports = mongoose.model('Todo', Todo);
