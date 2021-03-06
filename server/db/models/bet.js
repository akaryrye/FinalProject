//betModel
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const betModel = new Schema(
  {
    userId: String,
    amount: Number,
    event: String,
    eventDate: { type: Date },
    betFor: String
  },
  {
    timestamps: true
  }
);

const Bet = mongoose.model("Bet", betModel);

module.exports = Bet;
