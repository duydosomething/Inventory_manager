const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  email: String,
  password: String,
  isAdmin : {type: Boolean, default: false}
});

userSchema.methods.generateHash = password => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

userSchema.methods.validPassword = password => {
  return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model("User", userSchema);
