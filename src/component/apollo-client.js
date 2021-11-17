import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://adapted-sunbeam-23.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret":
      "XxHQ9OWvOfPexUbhV2pVQsXXJOK5wzaGAdGoMTTDQdrlg4ER7E1tjJc34QGel2uB",
  },
});

export default client;
