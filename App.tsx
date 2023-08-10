import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./navigator/RootNavigator";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://banolas.stepzen.net/api/quoting-quoll/__graphql",
  headers: {
    Authorization:
      "apikey banolas::stepzen.io+1000::02cc7b8621f503efe0940467d6db7a3aba3ea0d7d05cc0ee8c5d14d60e748070",
  },
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </ApolloProvider>
  );
}
