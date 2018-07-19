const mongoose = require("mongoose");
const { Schema } = mongoose;


const deviceSchema = new Schema({
  sku: String,
  uid: String,
  serialNumber: String,
  owner: String,
  dateAdded : {type: Date, default: Date.now},
  dateUpdated: {type: Date, default: Date.now}
});



module.exports = mongoose.model("Device", deviceSchema);
