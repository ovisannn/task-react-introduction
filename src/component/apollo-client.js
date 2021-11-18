import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://helped-warthog-70.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret":
      "HqdJen83H787isEbWhXT84gHpPzguluMXnf1kyPmPyPljWg6Tx8CbDzCV5vXiS6J",
  },
});

export default client;
