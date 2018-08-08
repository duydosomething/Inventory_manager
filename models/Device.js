const mongoose = require("mongoose");
const { Schema } = mongoose;


const deviceSchema = new Schema({
  sku: String,
  uid: String,
  serialNumber: String,
  deviceCategory: String,
  owner: [{ type : mongoose.Schema.Types.ObjectId, ref: 'User' }],
  dateAdded : {type: Date, default: Date.now},
  dateUpdated: {type: Date, default: Date.now}
});



module.exports = mongoose.model("Device", deviceSchema);
