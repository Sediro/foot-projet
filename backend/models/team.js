const mongoose = require("mongoose");

const teamSchema = mongoose.Schema(
  {
    teamID: {
      type: mongoose.Schema.Types.String,
      unique: true,
    },
    teamName: { type: mongoose.Schema.Types.String, required: true },
    captain: { type: mongoose.Schema.Types.String, required: true },
    coach: { type: mongoose.Schema.Types.String, required: true },
    players: [
      {
        type: mongoose.Schema.Types.String,
        required: true,
      },
    ],
    shirts: { type: mongoose.Schema.Types.String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Teams", teamSchema);
