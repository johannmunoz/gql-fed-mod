import { ApolloServer } from 'apollo-server';
import { createApplication } from 'graphql-modules';
import { usersModule } from './modules/users.module';

const application = createApplication({
  modules: [usersModule],
});

const schema = application.createSchemaForApollo();

const server = new ApolloServer({ schema });

server.listen(4002).then(({ url }) => {
  console.log(`🚀  Internal Server ready at ${url}`);
});
