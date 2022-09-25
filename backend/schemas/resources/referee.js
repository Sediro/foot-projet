const refereeTypeDef = `
  type Referee {
    _id: ID!
    username: String!
    firstName: String!
    lastName: String!
    gender: String!
    nationality: String!
    matchPlayed: String!
    updatedAt: String!
    createdAt: String!
  }

  input MinReferee {
    username: String!
    firstName: String!
    lastName: String!
    gender: String!
    nationality: String!
    matchPlayed: String!
  }

  input EditReferee {
    username: String
    firstName: String
    lastName: String
    gender: String
    nationality: String
    matchPlayed: String
  }
`

const refereeQueries = `
  referees: [Referee]
  referee(username: String!): Referee
`;

const refereeMutations = `
  addReferee(newReferee: MinReferee!): Referee
  editReferee(username: String!, newInformations: EditReferee!): Referee
  deleteReferee(username: String!): Referee
`;

module.exports = { refereeTypeDef: refereeTypeDef, refereeQueries, refereeMutations };