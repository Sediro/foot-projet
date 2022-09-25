const playerTypeDef = `
  type Player {
    _id: ID!
    username: String!
    firstName: String!
    lastName: String!
    gender: String!
    playTime: Int!
    gamesPlayed: String!
    goalsTotal: Int!
    averagePlayTime: Float!
    teamID: String!
    playerRole: String!
    captain: Boolean!
    playerType: Boolean!
    playerNumber: Int!
    playerNationality: String!
    updatedAt: String!
    createdAt: String!
  }

  input MinPlayer {
    username: String!
    firstName: String!
    lastName: String!
    gender: String!
    playTime: Int!
    gamesPlayed: String!
    goalsTotal: Int!
    averagePlayTime: Float!
    teamID: String!
    playerRole: String!
    captain: Boolean!
    playerType: Boolean!
    playerNumber: Int!
    playerNationality: String!
  }

  input EditPlayer {
    username: String
    firstName: String
    lastName: String
    gender: String
    playTime: Int
    gamesPlayed: String
    goalsTotal: Int
    averagePlayTime: Float
    teamID: String
    playerRole: String
    captain: Boolean
    playerType: Boolean
    playerNumber: Int
    playerNationality: String
  }
`

const playerQueries = `
  players: [Player]
  player(username: String!): Player
`;

const playerMutations = `
  addPlayer(newPlayer: MinPlayer!): Player
  editPlayer(username: String!, newInformations: EditPlayer!): Player
  deletePlayer(username: String!): Player
`;

module.exports = { playerTypeDef: playerTypeDef, playerQueries, playerMutations };