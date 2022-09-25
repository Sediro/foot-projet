const Player = require("../models/player");
const Match = require("../models/match");
const Referee = require("../models/referee");
const Team = require("../models/team");

const mockData = require("../helpers/mock-data.json");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

exports.mocking = async () => {
  console.log("Mocking data...");
  mongoose.connection.collections["Players"].drop();
  mockData.players.forEach(async (player) => {
    Player.create({
      ...player,
    });
  });

  mongoose.connection.collections["Matches"].drop();
  mockData.matches.forEach(async (match) => {
    Match.create({
      ...match,
    });
  });

  mongoose.connection.collections["Referees"].drop();
  mockData.referees.forEach(async (referee) => {
    Referee.create({
      ...referee,
    });
  });

  mongoose.connection.collections["Teams"].drop();
  mockData.teams.forEach(async (team) => {
    Team.create({
      ...team,
    });
  });
};
