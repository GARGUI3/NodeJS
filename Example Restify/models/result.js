var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ResultSchema = new Schema({
  employee_id: {
    type: Schema.objectId,
    ref: 'Employee'
  },
  quiz_id: {
    type: Schema.objectId,
    ref: 'Quiz'
  },
  score: {
    type: Number,
  },
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Result", ResultSchema);
