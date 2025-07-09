import { useMemo } from "react";
import { useMutation, useQuery, useApolloClient } from "@apollo/client";
import {
  GetViewerQuery,
  GetViewerQueryVariables,
  UpdateViewerMutation,
  UpdateViewerMutationVariables,
  Viewer,
  GetViewerDocument,
  UpdateViewerDocument,
  Viewer_FragmentFragmentDoc,
} from "../gql/graphql";
import { useFragment } from "../gql/fragment-masking";

// Export the generated fragment and documents
export const viewerFragment = Viewer_FragmentFragmentDoc;
export const GET_VIEWER_QUERY = GetViewerDocument;
export const UPDATE_VIEWER_MUTATION = UpdateViewerDocument;

export const useViewer = (uid?: string | undefined) => {
  const client = useApolloClient();

  const {
    data: dataViewer,
    refetch: refetchViewer,
    loading: loadingViewer,
  } = useQuery<GetViewerQuery, GetViewerQueryVariables>(GET_VIEWER_QUERY, {
    skip: !client || typeof uid !== "string",
    fetchPolicy: "cache-and-network",
    errorPolicy: "all",
  });

  const [
    updateViewer,
    { loading: loadingUpdatingViewer, error: errorUpdatingViewer },
  ] = useMutation<UpdateViewerMutation, UpdateViewerMutationVariables>(
    UPDATE_VIEWER_MUTATION
  );

  const viewer = useMemo(() => {
    const viewerData = dataViewer?.getViewer;
    if (!viewerData) return null;

    // Use the useFragment function to properly unwrap the fragment data
    return useFragment(Viewer_FragmentFragmentDoc, viewerData);
  }, [dataViewer]);

  return {
    refetchViewer,
    loadingViewer,
    viewer,
    updateViewer,
    loadingUpdatingViewer,
    errorUpdatingViewer,
  };
};
