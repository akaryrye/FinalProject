const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userModel = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now },
  wallet: Integer,
  bet: Integer,
  user_ref: String,
  event: String,
  chosenTeam: String
});

const User = mongoose.model("User", userModel);

module.exports = User;
