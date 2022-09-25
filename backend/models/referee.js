const mongoose = require("mongoose");

const refereeSchema = mongoose.Schema(
  {
    username: {
      type: mongoose.Schema.Types.String,
      unique: true,
    },
    firstName: { type: mongoose.Schema.Types.String, required: true },
    lastName: { type: mongoose.Schema.Types.String, required: true },
    gender: { type: mongoose.Schema.Types.String, required: true },
    nationality: { type: mongoose.Schema.Types.String, required: true },
    matchPlayed: { type: mongoose.Schema.Types.String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Referees", refereeSchema);
