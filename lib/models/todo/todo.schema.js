const mongoose =require('mongoose');

const todo = mongoose.Schema({
  complete: { type: Boolean, default: false },
  text: { type: String },
  difficulty: { type: Number, default:1 },
  assignee: { type: String },
});

module.exports = mongoose.model('todo', todo);
