import { createModule, gql } from 'graphql-modules';

interface Post {
  id: string;
  author: string;
  body: string;
}

const posts: Post[] = [];

const typeDefs = gql`
  type Post {
    id: ID!
    author: String!
    body: String!
  }
`;

const resolvers = {
  Query: {
    posts: () => {
      return posts;
    },
    post: (_: any, { id }) => {
      const result = posts.filter((c) => c.id === id);
      return result.length ? result[0] : null;
    },
  },
};

export const postsModule = createModule({
  id: 'posts-module',
  dirname: __dirname,
  typeDefs,
  resolvers,
});
