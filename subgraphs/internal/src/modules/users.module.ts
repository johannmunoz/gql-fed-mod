import { createModule, gql } from 'graphql-modules';

interface User {
  id: string;
  email: string;
}

const users: User[] = [];

const typeDefs = gql`
  type Query {
    users: [User]
    user: User
  }

  type User {
    id: ID!
    email: String!
  }
`;

const resolvers = {
  Query: {
    users: () => {
      return users;
    },
    user: (_: any, { id }) => {
      const result = users.filter((c) => c.id === id);
      return result.length ? result[0] : null;
    },
  },
};

export const usersModule = createModule({
  id: 'users-module',
  dirname: __dirname,
  typeDefs,
  resolvers,
});
