var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var KeySchema = new Schema({
  employee_id: {
    type: Schema.objectId,
    ref: 'Employee'
  },
  quiz_id: {
    type: Schema.objectId,
    ref: 'Quiz'
  },
  value: {
    type: String,
    required: true
  },
  expiry: {
    type: Date,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Key", KeySchema);
