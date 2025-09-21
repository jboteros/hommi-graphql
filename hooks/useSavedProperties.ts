import { useAuth } from "@/context/AuthProvider";
import { useMutation, useQuery } from "@apollo/client/react";
// import { Toast } from "toastify-react-native";
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

  const saveProperty = async (
    variables: SavePropertyMutationVariables,
    property: any
  ) => {
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
              _id: property._id,
              title: property.title || "",
              mainImage: property.mainImage || "",
              mainImageBlurhash: property.mainImageBlurhash || "",
              offerType: property.offerType || "",
              rentPrice: property.rentPrice || 0,
              salePrice: property.salePrice || 0,
              propertyType: property.propertyType || "",
              featureType: property.featureType || "",
              urlPath: property.urlPath || "",
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
                city: property.address?.city || "",
                country: property.address?.country || "",
                customAddress: property.address?.customAddress || "",
                location: {
                  __typename: "GeoJSON",
                  type: "Point",
                  coordinates: property.address?.location?.coordinates || [],
                },
                neighborhood: property.address?.neighborhood || "",
                state: property.address?.state || "",
                street: property.address?.street || "",
                zipCode: property.address?.zipCode || "",
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

          // Toast.show({
          //   type: "success",
          //   text1: "Propiedad guardada en tu lista",
          //   text2: property.title,
          //   position: "bottom",

          //   onPress: () => console.log("Toast pressed"),
          //   onShow: () => console.log("Toast shown"),
          //   onHide: () => console.log("Toast hidden"),
          //   // onPress() {
          //   //   console.log("Property saved, navigating to details");
          //   // },
          // });
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
        console.log("🚀 ~ useSavedProperties ~ existing:", existing);

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

          // const removedProperty =
          //   existing.getSavedProperties.savedProperties.find(
          //     (p: any) => p._id === variables.savedId
          //   );
          // const propertyData = removedProperty?.property;
          // Toast.show({
          //   type: "info",
          //   text1: "Propiedad eliminada de tus favoritos",
          //   text2: `Has quitado "${propertyData?.title}" de tu lista.`,
          //   position: "bottom",
          //   onPress: () => console.log("Toast pressed"),
          //   onShow: () => console.log("Toast shown"),
          //   onHide: () => console.log("Toast hidden"),
          //   // onPress: () => {
          //   //   const path = `/${propertyData?.featureType}/${propertyData?.offerType}/${propertyData?.propertyType}/${propertyData?.address.state}/${propertyData?.address.city}/${propertyData?.address.neighborhood}/${propertyData?.urlPath}`;

          //   //   console.log("🚀 ~ useSavedProperties ~ path:", path);
          //   //   router.push(path as any);
          //   // },
          // });
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
