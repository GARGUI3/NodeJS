var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TypeSchema = new Schema({
  value: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Type", TypeSchema);
