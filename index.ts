import { ApolloGateway, IntrospectAndCompose } from '@apollo/gateway';
import { ApolloServer } from 'apollo-server';

const gateway = new ApolloGateway({
  supergraphSdl: new IntrospectAndCompose({
    subgraphs: [
      { name: 'external', url: 'http://localhost:4001' },
      { name: 'internal', url: 'http://localhost:4002' },
    ],
  }),
});

const server = new ApolloServer({
  gateway,
});

server
  .listen(4444)
  .then(({ url }) => {
    console.log(`🚀 Gateway ready at ${url}`);
  })
  .catch((err) => {
    console.error(err);
  });
