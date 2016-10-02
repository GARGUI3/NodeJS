var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlacementSchema = new Schema({
  name: {
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

module.exports = mongoose.model("Placement", PlacementSchema);
