var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
  name: String,
  completed: { type: Boolean, "default": false }, 
  description: Sting,
  updated_at: { type: Date, "default": Date.now }
});

module.exports = mongoose.model('Task', TaskSchema)
