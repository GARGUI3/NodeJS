var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuizSchema = new Schema({
  placement_id: {
    type: Schema.objectId,
    ref: 'Placement'
  },
  company_id: {
    type: Schema.objectId,
    ref: 'Company'
  },
  name: {
    type: String,
    required: true
  },
  contestant: {
    type: Number,
    required: true
  },
  responded: {
    type: Number
  },
  evaluated: {
    type: Number
  },
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Quiz", QuizSchema);
