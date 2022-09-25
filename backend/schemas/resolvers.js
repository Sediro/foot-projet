const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
const jwt = require("jsonwebtoken");

const Player = require("../models/account");
const {
  AuthenticationError,
  ForbiddenError,
  UserInputError,
} = require("apollo-server-express");

const resolvers = {
  Query: {
    // Players
    async players(_, args, {  }) {
      return await Player.find();
    },

    async player(_, args, { }) {
      return await Player.findOne({ username: args.username });
    },
  },

  Mutation: {
    // Players
    async addPlayer(_, args, { }) {
      const player = await Player.create({
        ...args.newPlayer,
      });

      return {
        player: player,
      };
    },

    async editPlayer(_, args, { }) {
      await Player.updateOne(
        { username: args.username },
        {
          ...args.newInformations,
        }
      );

      return await Player.findOne({ username: args.username });
    },

    async deletePlayer(_, args, { }) {
      return await Player.findOneAndDelete({
        username: args.username,
      });
    },
  },
};

module.exports = resolvers;
