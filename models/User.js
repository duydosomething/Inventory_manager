const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  email: String,
  password: String,
  firstName: String,
  lastName: String,
  isAdmin : {type: Boolean, default: false},
  devices : [{ type : mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

userSchema.methods.generateHash = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

userSchema.methods.validPassword = (password, hashedPassword) => {
  return bcrypt.compareSync(password, hashedPassword);
}

module.exports = mongoose.model("User", userSchema);
