// Hook-based client (for React components)
export {
  GET_PROPERTIES_PUBLIC_QUERY, propertiesPublicFragment, useGetPropertiesPublic,
  useGetProperty
} from "./hooks/useGetProperties";
export { GET_VIEWER_QUERY, useViewer, viewerFragment } from "./hooks/useViewer";

export { useFragment } from "./gql/fragment-masking";
export * from "./gql/graphql";

// Generated types and documents
export type {
  GetPropertiesPublicQuery,
  GetPropertiesPublicQueryVariables, GetViewerQuery,
  GetViewerQueryVariables, InputViewerCreate, InputViewerUpdate, Property,
  PropertyPublic, UpdateViewerMutation,
  UpdateViewerMutationVariables, Viewer,
  Viewer_FragmentFragment
} from "./gql/graphql";

// Export the union type for properties
export type { PropertyUnion } from "./hooks/useGetProperties";

// Direct client (for server-side or non-React usage)
export { default as apolloClient, client } from "../../apollo/client";

// Cache
export { cache } from "../../apollo/apolloCache";

// Provider component
export { GraphQLProvider } from "../../apollo/provider";
