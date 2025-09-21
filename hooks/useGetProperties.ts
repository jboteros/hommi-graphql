import { useQuery } from "@apollo/client/react";
import {
  GetBreadcrumbPropertiesDocument,
  GetPropertiesPublicDocument,
  GetPropertiesPublicQuery,
  GetPropertiesPublicQueryVariables,
  GetPropertyDocument,
  GetPropertyQuery,
  GetPropertyQueryVariables,
  PropertiesPublic_FragmentFragmentDoc,
  PropertyPublic,
  QueryGetPropertiesPublicArgs,
} from "../gql/graphql";

// Type for properties (currently only public data)
export type PropertyUnion = PropertyPublic;

// Export the generated fragments and documents
export const GET_PROPERTIES_PUBLIC_QUERY = GetPropertiesPublicDocument;
export const GET_PROPERTIES_BREADCRUMB_QUERY = GetBreadcrumbPropertiesDocument;

export const propertiesPublicFragment = PropertiesPublic_FragmentFragmentDoc;

// Utility function to deduplicate documents by _id
const deduplicateDocs = <T extends { _id: string }>(
  existingDocs: T[],
  newDocs: T[]
): T[] => {
  const existingDocsMap = new Map();
  existingDocs.forEach((doc) => {
    existingDocsMap.set(doc._id, doc);
  });

  newDocs.forEach((doc) => {
    if (!existingDocsMap.has(doc._id)) {
      existingDocsMap.set(doc._id, doc);
    }
  });

  return Array.from(existingDocsMap.values());
};

// Base hook for public properties only
export const useGetPropertiesPublic = ({
  limit = 24,
  page = 1,
  filter,
}: QueryGetPropertiesPublicArgs) => {
  console.log("🔗 ~ useGetPropertiesPublic:", filter);

  const {
    data: dataProperties,
    loading,
    error,
    fetchMore,
    refetch,
  } = useQuery<GetPropertiesPublicQuery, GetPropertiesPublicQueryVariables>(
    GET_PROPERTIES_PUBLIC_QUERY,
    {
      variables: {
        limit,
        page,
        filter,
      },
      notifyOnNetworkStatusChange: true,
    }
  );

  const loadMore = async () => {
    if (!dataProperties?.getPropertiesPublic?.hasNextPage) return;
    await fetchMore({
      variables: {
        page: dataProperties.getPropertiesPublic.nextPage,
        limit: 24,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;

        const existingDocs = prev.getPropertiesPublic?.docs || [];
        const newDocs = fetchMoreResult.getPropertiesPublic?.docs || [];
        const deduplicatedDocs = deduplicateDocs(existingDocs, newDocs);

        return {
          ...fetchMoreResult,
          getPropertiesPublic: {
            ...fetchMoreResult.getPropertiesPublic,
            docs: deduplicatedDocs,
          },
        };
      },
    });
  };

  // Get properties directly - Apollo handles the data management
  const docs = dataProperties?.getPropertiesPublic?.docs || [];
  const properties = docs as PropertyPublic[];

  return {
    dataProperties,
    properties,
    loading,
    error,
    loadMore,
    hasNextPage: dataProperties?.getPropertiesPublic?.hasNextPage,
    refetch,
  };
};

// Hook to fetch a single property by urlPath
export const useGetProperty = (urlPath: string) => {
  const { data, loading, error, refetch } = useQuery<
    GetPropertyQuery,
    GetPropertyQueryVariables
  >(GetPropertyDocument, {
    variables: { urlPath },
    skip: !urlPath,
  });

  // The property is under data?.getProperty
  const property = data?.getProperty || null;

  return {
    property,
    loading,
    error,
    refetch,
  };
};
