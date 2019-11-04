const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userModel = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    date: { type: Date, default: Date.now },
    eventDate: { type: Date },
    wallet: Number,
    bet: Integer,
    event: { type: String },
    selection: { type: String },
    result: { type: String, default: "Pending" },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User"
    }
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("User", userModel);

module.exports = User;
