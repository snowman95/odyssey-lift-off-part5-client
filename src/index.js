import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "./styles";
import Pages from "./pages";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";

const SERVER_URL = "https://graphql-server.up.railway.app/";

const client = new ApolloClient({
  uri: SERVER_URL, // change to YOUR own production server
  cache: new InMemoryCache(),
  name: "web",
  version: "1.0",
  link: new HttpLink({
    uri: SERVER_URL,
    credentials: "include",
  }),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <Pages />
  </ApolloProvider>,
  document.getElementById("root")
);
