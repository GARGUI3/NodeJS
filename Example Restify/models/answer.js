var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AnswerSchema = new Schema({
  question_id: {
    type: Schema.objectId,
    ref: 'Question'
  },
  value: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Answer", AnswerSchema);
