import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./navigator/RootNavigator";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://shimencun.stepzen.net/api/wobbly-elk/__graphql",
  headers: {
    Authorization:
      "apikey shimencun::stepzen.io+1000::23716fe69d2a6fdc0dee8912eeb8d5db77db2725554073c67e2eb0fac65533d5",
    // "shimencun::stepzen.net+1000::650042fb50f08103839530eaa2861e4ef62fad0774d29d5343082ba03dd3cdf4",
  },
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    // @ts-ignore - TailwindProvider is missing a type definition
    <TailwindProvider utilities={utilities}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ApolloProvider>
    </TailwindProvider>
  );
}
