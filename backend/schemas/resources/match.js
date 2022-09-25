const matchTypeDef = `
  type Goal {
    team: String!
    player: String!
    time: Date!
  }

  type Card {
    team: String!
    player: String!
    time: Date!
    type: String!
  }

  type Change {
    team: String!
    playerIn: String!
    playerOut: String!
    time: Date!
  }

  type Match {
    _id: ID!
    matchId: String!
    place: String!
    teamA: String!
    teamB: String!
    refereeMain: String!
    refereeSupp1: String!
    refereeSupp2: String!
    startMatch: Date!
    endMatch: Date!
    hasStarted: Boolean!
    goals: [Goal]!
    cards: [Card]!
    changes: [Change]!
    updatedAt: String!
    createdAt: String!
  }

  input MinMatch {
    matchId: String!
    place: String!
    teamA: String!
    teamB: String!
    refereeMain: String!
    refereeSupp1: String!
    refereeSupp2: String!
    startMatch: Date!
  }

  input EditMatch {
    matchId: String
    place: String
    teamA: String
    teamB: String
    refereeMain: String
    refereeSupp1: String
    refereeSupp2: String
    hasStarted: Boolean
  }

  input AddGoal {
    team: String!
    player: String!
    time: Date!
  }

  input AddCard {
    team: String!
    player: String!
    time: Date!
    type: String!
  }

  input AddChange {
    team: String!
    playerIn: String!
    playerOut: String!
    time: Date!
  }

  input RemoveGoal {
    time: Date!
  }

  input RemoveCard {
    time: Date!
  }

  input RemoveChange {
    time: Date!
  }
`

const teamQueries = `
  matches: [Match]
  match(matchId: String!): Team
`;

const teamMutations = `
  addMatch(newMatch: MinMatch!): Match
  editMatch(matchId: String!, newInformations: EditMatch!): Match
  deleteMatch(matchId: String!): Match
  addGoal(matchId: String!, newGoal: AddGoal!): Match
  addCard(matchId: String!, newCard: AddCard!): Match
  addChange(matchId: String!, newChange: AddChange!): Match
  removeGoal(matchId: String!, goal: RemoveGoal!): Match
  removeCard(matchId: String!, card: RemoveCard!): Match
  removeChange(matchId: String!, change: RemoveChange!): Match
`;

module.exports = { teamTypeDef: matchTypeDef, teamQueries, teamMutations };