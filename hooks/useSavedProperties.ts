import { useAuth } from "@/context/AuthProvider";
import { useMutation, useQuery } from "@apollo/client";
import {
  GetSavedPropertiesDocument,
  GetSavedPropertiesQuery,
  GetSavedPropertiesQueryVariables,
  RemoveSavePropertyDocument,
  RemoveSavePropertyMutation,
  RemoveSavePropertyMutationVariables,
  SavePropertyDocument,
  SavePropertyMutation,
  SavePropertyMutationVariables,
} from "../gql/graphql";

export const GET_SAVED_PROPERTIES = GetSavedPropertiesDocument;
export const SAVE_PROPERTY_MUTATION = SavePropertyDocument;
export const REMOVE_SAVE_PROPERTY_MUTATION = RemoveSavePropertyDocument;

export const useSavedProperties = () => {
  const { viewer } = useAuth();
  const [savePropertyMutation] = useMutation<
    SavePropertyMutation,
    SavePropertyMutationVariables
  >(SAVE_PROPERTY_MUTATION);

  const [removeSavePropertyMutation] = useMutation<
    RemoveSavePropertyMutation,
    RemoveSavePropertyMutationVariables
  >(REMOVE_SAVE_PROPERTY_MUTATION);

  const { data, loading, refetch } = useQuery<
    GetSavedPropertiesQuery,
    GetSavedPropertiesQueryVariables
  >(GET_SAVED_PROPERTIES, {
    variables: { userId: viewer?._id as string },
    skip: typeof viewer?._id !== "string",
  });

  const savedProperties = data?.getSavedProperties?.savedProperties || [];

  const saveProperty = async (variables: SavePropertyMutationVariables) => {
    await savePropertyMutation({
      variables,
      optimisticResponse: {
        __typename: "Mutation",
        saveProperty: {
          __typename: "SavedPropertyResponse",
          success: true,
          message: "Property saved optimistically",
          codeMessage: null,
        },
      },
      update: (cache) => {
        const existing: any = cache.readQuery({
          query: GET_SAVED_PROPERTIES,
          variables: { userId: viewer?._id as string },
        });
        if (existing) {
          const optimisticSaved = {
            __typename: "SavedProperties",
            _id: Math.random().toString(), // Temporary ID
            property: {
              __typename: "Property",
              _id: variables.propertyId,
              title: "",
              mainImage: "",
              mainImageBlurhash: "",
              offerType: "",
              rentPrice: 0,
              salePrice: 0,
              propertyType: "",
              featureType: "",
              urlPath: "",
              privateCharacteristics: {
                __typename: "PrivateCharacteristics",
                areaTotal: null,
                bathrooms: null,
                bedrooms: null,
                coveredParkingLots: null,
                uncoveredParkingLots: null,
              },
              address: {
                __typename: "Address",
                city: "",
                country: "",
                customAddress: "",
                location: {
                  __typename: "GeoJSON",
                  type: "Point",
                  coordinates: [],
                },
                neighborhood: "",
                state: "",
                street: "",
                zipCode: "",
              },
            },
            user: {
              __typename: "Viewer",
              _id: variables.userId,
            },
          };
          cache.writeQuery({
            query: GET_SAVED_PROPERTIES,
            variables: { userId: viewer?._id as string },
            data: {
              getSavedProperties: {
                ...existing.getSavedProperties,
                savedProperties: [
                  optimisticSaved,
                  ...(existing.getSavedProperties.savedProperties || []),
                ],
              },
            },
          });
        }
      },
    });
  };

  const removeSaveProperty = async (
    variables: RemoveSavePropertyMutationVariables
  ) => {
    await removeSavePropertyMutation({
      variables,
      optimisticResponse: {
        __typename: "Mutation",
        removeSaveProperty: {
          __typename: "RemoveSavedPropertyResponse",
          success: true,
          message: "Property removed optimistically",
          codeMessage: null,
        },
      },
      update: (cache) => {
        const existing: any = cache.readQuery({
          query: GET_SAVED_PROPERTIES,
          variables: { userId: viewer?._id as string },
        });
        if (existing) {
          cache.writeQuery({
            query: GET_SAVED_PROPERTIES,
            variables: { userId: viewer?._id as string },
            data: {
              getSavedProperties: {
                ...existing.getSavedProperties,
                savedProperties: (
                  existing.getSavedProperties.savedProperties || []
                ).filter((p: any) => p._id !== variables.savedId),
              },
            },
          });
        }
      },
    });
  };

  return {
    saveProperty,
    removeSaveProperty,
    savedProperties,
    loading,
    refetch,
  };
};
