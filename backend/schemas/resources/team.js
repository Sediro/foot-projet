const teamTypeDef = `
  type Team {
    _id: ID!
    teamID: String!
    teamName: String!
    captain: String!
    coach: String!
    players: [String]!
    shirts: String!
    updatedAt: String!
    createdAt: String!
  }

  input MinTeam {
    teamID: String!
    teamName: String!
    captain: String!
    coach: String!
    players: [String]!
    shirts: String!
  }

  input EditTeam {
    teamID: String
    teamName: String
    captain: String
    coach: String
    shirts: String
  }

  input AddPlayerToTeam {
    teamID: String!
    playerID: String!
  }

  input RemovePlayerFromTeam {
    teamID: String!
    playerID: String!
  }
`

const teamQueries = `
  teams: [Team]
  team(teamID: String!): Team
`;

const teamMutations = `
  addTeam(newTeam: MinTeam!): Team
  editTeam(teamID: String!, newInformations: EditTeam!): Team
  deleteTeam(teamID: String!): Team
  addPlayerToTeam(teamID: String!, playerID: String!): Team
  removePlayerFromTeam(teamID: String!, playerID: String!): Team
`;

module.exports = { teamTypeDef: teamTypeDef, teamQueries, teamMutations };