const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  email: email,
  password: password,
  isAdmin: Boolean 
});

mongoose.model("users", userSchema);
