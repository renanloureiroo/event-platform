import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-us-west-2.graphcms.com/v2/cl4q80x423ju401w72w9x5ulp/master",
  cache: new InMemoryCache(),
});
