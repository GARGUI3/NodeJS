var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SubsidiarySchema = new Schema({
  address_id: {
    type: Schema.objectId,
    ref: 'Address'
  },
  company_id: {
    type: Schema.objectId,
    ref: 'Company'
  },
  name: {
    type: String,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  }
});

module.export = mongoose.model("Subsidiary", SubsidiarySchema);
