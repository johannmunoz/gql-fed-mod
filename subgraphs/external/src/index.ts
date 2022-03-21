import { ApolloServer } from 'apollo-server';
import { createApplication } from 'graphql-modules';
import { commentsModule } from './modules/comments.module';
import { postsModule } from './modules/posts.module';

const application = createApplication({
  modules: [commentsModule, postsModule],
});

const schema = application.createSchemaForApollo();

const server = new ApolloServer({ schema });

server.listen().then(({ url }) => {
  console.log(`🚀  External Server ready at ${url}`);
});
