const mongoose = require("mongoose");

const playerSchema = mongoose.Schema(
  {
    username: {
      type: mongoose.Schema.Types.String,
      unique: true,
    },
    firstName: { type: mongoose.Schema.Types.String, required: true },
    lastName: { type: mongoose.Schema.Types.String, required: true },
    gender: { type: mongoose.Schema.Types.String, required: true },
    playTime: { type: mongoose.Schema.Types.Decimal128, required: true },
    gamesPlayed: { type: mongoose.Schema.Types.Number, required: true },
    goalsTotal: { type: mongoose.Schema.Types.Number, required: true },
    averagePlayTime: { type: mongoose.Schema.Types.Decimal128, required: true },
    teamID: { type: mongoose.Schema.Types.String, required: true },
    playerRole: { type: mongoose.Schema.Types.String, required: true },
    captain: { type: mongoose.Schema.Types.Boolean, required: true },
    playerType: { type: mongoose.Schema.Types.Boolean, required: true },
    playerNumber: { type: mongoose.Schema.Types.Number, required: true },
    playerNationality: { type: mongoose.Schema.Types.String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Players", playerSchema);
