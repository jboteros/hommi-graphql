import { ApolloClient, ApolloLink, HttpLink } from "@apollo/client";
import { connectApolloClientToVSCodeDevTools } from "@apollo/client-devtools-vscode";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { getAuth } from "@react-native-firebase/auth";
import { cache } from "./apolloCache";

// Environment configuration
const getGraphQLEndpoint = () => {
  // React Native environment
  console.log(
    "===> 🥶 PUBLIC_GRAPHQL_URL",
    process.env.NEXT_PUBLIC_GRAPHQL_URL || process.env.EXPO_PUBLIC_GRAPHQL_URL
  );

  console.log(
    "===> 🙈 PUBLIC_BASE_URL",
    process.env.EXPO_PUBLIC_AUTHORIZATION ||
      process.env.NEXT_PUBLIC_AUTHORIZATION
  );

  if (typeof window === "undefined" && typeof global !== "undefined") {
    // React Native environment
    return (
      process.env.NEXT_PUBLIC_GRAPHQL_URL || process.env.EXPO_PUBLIC_GRAPHQL_URL
    );
  }
  // Browser environment
  if (typeof window !== "undefined") {
    return (
      process.env.NEXT_PUBLIC_GRAPHQL_URL || process.env.EXPO_PUBLIC_GRAPHQL_URL
    );
  }
  // Server/Node environment
  return (
    process.env.NEXT_PUBLIC_GRAPHQL_URL || process.env.EXPO_PUBLIC_GRAPHQL_URL
  );
};

// Error Link
const errorLink = onError(
  ({ graphQLErrors, networkError, operation, response }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, locations, path }) => {
        console.log(
          `💥 [GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        );
      });
    }
    if (networkError) {
      console.log(`❌ [Network error]: ${networkError}`);
    }
    if (response) {
      console.log(`👾 [Response]:`, response);
    }
    console.log(`🤝 [Operation]:`, operation);
  }
);

// HTTP Link
const httpLink = new HttpLink({
  uri: __DEV__ ? "http://192.168.1.4:8080/graphql" : getGraphQLEndpoint(),
});

// Auth Link
const authLink = setContext(async (_, { headers }) => {
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  // For now, using a hardcoded token - in production, you'd get this from your auth system
  const token = (await getAuth().currentUser?.getIdToken()) ?? null;
  console.log("🤝 ~ authLink ~ token:", token);
  console.log("🤝 ~ authLink ~ token:", _);
  // "eyJhbGciOiJSUzI1NiIsImtpZCI6IjQ3YWU0OWM0YzlkM2ViODVhNTI1NDA3MmMzMGQyZThlNzY2MWVmZTEiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiSm9obmF0YW4gQm90ZXJvIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL2hvbW1pLTU3ZGY1IiwiYXVkIjoiaG9tbWktNTdkZjUiLCJhdXRoX3RpbWUiOjE3NTE4NDU4ODcsInVzZXJfaWQiOiJTWU1ibEZjUlRSTnQ0amdudUNwQjJWM0x4b2sxIiwic3ViIjoiU1lNYmxGY1JUUk50NGpnbnVDcEIyVjNMeG9rMSIsImlhdCI6MTc1MTg0NTg4NywiZXhwIjoxNzUxODQ5NDg3LCJlbWFpbCI6ImorMUBqYi5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiaisxQGpiLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.sU1VVvQxM_kQGcas9Bir_51tHCCrAS7ab-ID_l-l1ip08GkA6aiL_z2k5fr7X3AaFdrz25ripxpP4g0BP-NOOYuu9sktXGXdEYXKy0XHKzmd9sBSpHY-X0fkSpyG9WvBmVNG8ORiBeovT-qSWEZTaKt1cZJ96uS2ChzDuwACkqaqvSvl-75dF60-8if3--uanIPbCDLI72F0qxrJ6cmEa-vhzKe-hdLbTP6Td1p5mmd3up5asS3g7W3GGh6x1xK7-ozYdet-PdN5Wnl8OErr-V9-My_zc-aSnNWFCr_zKbepkx4SAwVgRFXwsdnMm8SA6FWkq8QtY-t3sxG3LDHoDA";

  // Detect platform for user agent
  let platform = "Unknown";
  let deviceType = "Unknown";

  if (typeof window !== "undefined") {
    platform = "Web";
    deviceType = "Browser";
  } else if (typeof global !== "undefined") {
    platform = "React Native";
    deviceType = "Mobile";
  } else {
    platform = "Server";
    deviceType = "Node";
  }

  const userAgent = `hommi v1.1.0 (${platform}; ${deviceType})`;

  return {
    headers: {
      ...headers,
      authorization:
        process.env.EXPO_PUBLIC_AUTHORIZATION ||
        process.env.NEXT_PUBLIC_AUTHORIZATION,
      ...(token !== null && { "x-token": `Bearer ${token}` }),
      timeZone,
      "user-agent": userAgent,
      "x-device-os": platform,
    },
  };
});

// Create the Apollo Client
const link = ApolloLink.from([errorLink, authLink, httpLink]);

export const client = new ApolloClient({
  connectToDevTools: true,
  link,
  cache,
});

if (client) connectApolloClientToVSCodeDevTools(client, "ws://localhost:7095");

export default client;
