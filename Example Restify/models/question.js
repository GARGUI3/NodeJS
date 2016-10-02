var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
  type_id: {
    type: Schema.objectId,
    ref: 'Type'
  },
  quiz_id: {
    type: Schema.objectId,
    ref: 'Quiz'
  }
  value: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Question", QuestionSchema);
