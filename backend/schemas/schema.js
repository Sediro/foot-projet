const { gql } = require("apollo-server-express");

const { playerTypeDef, playerQueries, playerMutations } = require("./resources/player")
const { refereeTypeDef, refereeQueries, refereeMutations } = require("./resources/referee");
const { teamTypeDef, teamQueries, teamMutations } = require("./resources/team");
const { matchTypeDef, matchQueries, matchMutations } = require("./resources/match");

const typeDefs = gql`
    ${playerTypeDef}
    ${refereeTypeDef}
    ${teamTypeDef}
    ${matchTypeDef}

    type Query {
      ${playerQueries}
      ${refereeQueries}
      ${teamQueries}
      ${matchQueries}
    }

    type Mutation {
      ${playerMutations}
      ${refereeMutations}
      ${teamMutations}
      ${matchMutations}
    }
`;

module.exports = typeDefs;