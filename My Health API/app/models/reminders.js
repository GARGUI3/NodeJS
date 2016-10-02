var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var ReminderSchema = new Schema({
  user_id: String,
  title: String,
  time: Number,
  description: String,
  type: Number,
  created: {type: Date, default: Date.now},
  expirationDate: Date
});

module.exports = mongoose.model('Reminder', ReminderSchema);
