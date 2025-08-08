import { useApolloClient, useMutation, useQuery } from "@apollo/client";
import { useFragment } from "../gql/fragment-masking";
import {
  GetViewerDocument,
  GetViewerQuery,
  GetViewerQueryVariables,
  UpdateViewerDocument,
  UpdateViewerMutation,
  UpdateViewerMutationVariables,
  Viewer_FragmentFragmentDoc,
} from "../gql/graphql";

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
    onCompleted: (data) => {
      console.log("👾 ~ useViewer ~ data:", data);
    },
  });

  const [
    updateViewer,
    { loading: loadingUpdatingViewer, error: errorUpdatingViewer },
  ] = useMutation<UpdateViewerMutation, UpdateViewerMutationVariables>(
    UPDATE_VIEWER_MUTATION
  );

  const viewer = useFragment(Viewer_FragmentFragmentDoc, dataViewer?.getViewer);

  return {
    refetchViewer,
    loadingViewer,
    viewer,
    updateViewer,
    loadingUpdatingViewer,
    errorUpdatingViewer,
  };
};
