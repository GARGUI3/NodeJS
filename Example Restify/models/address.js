var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AddressSchema = new Schema({
  street: {
    type: String,
    required: true
  },
  number: {
    type: String
  },
  suburb: {
    type: String,
    required: true
  },
  township: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Address", AddressSchema);
