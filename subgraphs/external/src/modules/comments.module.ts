import { createModule, gql } from 'graphql-modules';

interface Comment {
  id: string;
  author: string;
  body: string;
}

const comments: Comment[] = [];

const typeDefs = gql`
  type Query {
    comments: [Comment]
    comment: Comment
  }

  type Comment {
    id: ID!
    author: String!
    body: String!
  }
`;

const resolvers = {
  Query: {
    comments: () => {
      return comments;
    },
    comment: (_: any, { id }) => {
      const result = comments.filter((c) => c.id === id);
      return result.length ? result[0] : null;
    },
  },
};

export const commentsModule = createModule({
  id: 'comments-module',
  dirname: __dirname,
  typeDefs,
  resolvers,
});
