var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var EmployeeSchema = new Schema({
  placement_id: {
    type: Schema.objectId,
    ref: 'Placement'
  },
  address_id: {
    type: Schema.objectId,
    ref: 'Address'
  },
  subsidiary_id: {
    type: Schema.objectId,
    ref: 'Subsidiary'
  },
  name: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  birthday: {
    type: Date,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Employee", EmployeeSchema);
