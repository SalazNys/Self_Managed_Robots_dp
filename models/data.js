const mongoose = require("mongoose")
const bcrypt = require("bcryptjs");

let userSchema = mongoose.Schema({
  address: {
    city: String,
    country: String
  },
  avatar: String,
  company: String,
  email: String,
  id: Number,
  job: String,
  name: String,
  phone: String,
  skills: [String],
  university: String,
  username: String,
  passwordHash: String
});

module.exports = mongoose.model("User", userSchema, "profiles");
