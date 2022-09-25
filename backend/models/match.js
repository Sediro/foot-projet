const mongoose = require("mongoose");

const matchSchema = mongoose.Schema(
  {
    matchId: {
      type: mongoose.Schema.Types.String,
      unique: true,
    },
    place: { type: mongoose.Schema.Types.String, required: true },
    teamA: { type: mongoose.Schema.Types.String, required: true },
    teamB: { type: mongoose.Schema.Types.String, required: true },
    refereeMain: { type: mongoose.Schema.Types.String, required: true },
    refereeSupp1: { type: mongoose.Schema.Types.String, required: true },
    refereeSupp2: { type: mongoose.Schema.Types.String, required: true },
    startMatch: { type: mongoose.Schema.Types.Date },
    endMatch: { type: mongoose.Schema.Types.Date },
    hasStarted: { type: mongoose.Schema.Types.Boolean, default: false },
    goals: [
      {
        team: { type: mongoose.Schema.Types.String, required: true },
        player: { type: mongoose.Schema.Types.String, required: true },
        time: { type: mongoose.Schema.Types.Date, required: true },
      },
    ],
    cards: [
      {
        team: { type: mongoose.Schema.Types.String, required: true },
        player: { type: mongoose.Schema.Types.String, required: true },
        time: { type: mongoose.Schema.Types.Date, required: true },
        type: { type: mongoose.Schema.Types.String, required: true },
      },
    ],
    changes: [
      {
        team: { type: mongoose.Schema.Types.String, required: true },
        playerIn: { type: mongoose.Schema.Types.String, required: true },
        playerOut: { type: mongoose.Schema.Types.String, required: true },
        time: { type: mongoose.Schema.Types.Date, required: true },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Matches", matchSchema);
