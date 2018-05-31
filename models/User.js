const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  email: email,
  password: password,
  isAdmin: Boolean
});

userSchema.methods.generateHash = password => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

userSchema.methods.validPassowrd = password => {
  return bcrypt.compareSync(password, this.local.password);
}

modeul.exports = mongoose.model("User", userSchema);
