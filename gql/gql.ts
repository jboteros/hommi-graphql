/* eslint-disable */
import * as types from "./graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
  "fragment PropertiesPublic_fragment on PropertyPublic {\n  _id\n  title\n  description\n  timesViewed\n  mainImage\n  ogImage\n  mainImageBlurhash\n  propertyType\n  slug\n  urlPath\n  code\n  images\n  rentPrice\n  salePrice\n  score\n  offerType\n  privateCharacteristics {\n    bathrooms\n    areaTotal\n    bedrooms\n    coveredParkingLots\n  }\n  address {\n    city\n    state\n    neighborhood\n    location {\n      type\n      coordinates\n    }\n  }\n}\n\nfragment PropertyFragment on Property {\n  _id\n  title\n  description\n  timesViewed\n  mainImage\n  ogImage\n  mainImageBlurhash\n  slug\n  urlPath\n  code\n  images\n  rentPrice\n  salePrice\n  score\n  offerType\n  privateCharacteristics {\n    bathrooms\n    areaTotal\n    bedrooms\n    coveredParkingLots\n  }\n  address {\n    city\n    state\n    neighborhood\n    location {\n      type\n      coordinates\n    }\n  }\n}\n\nfragment PropertyContactInfo_fragment on Property {\n  _id\n  savedCount\n  publicationScore\n}\n\nfragment PropertyInternalNotes_fragment on Property {\n  _id\n}\n\nquery GetPropertiesPublic($limit: Int, $page: Int, $filter: PropertyFilter, $owner: ID!, $company: ID!) {\n  getPropertiesPublic(\n    owner: $owner\n    company: $company\n    limit: $limit\n    page: $page\n    filter: $filter\n  ) {\n    docs {\n      _id\n      ...PropertiesPublic_fragment\n    }\n    hasNextPage\n    nextPage\n    totalDocs\n    totalPages\n    page\n  }\n}\n\nquery GetProperty($urlPath: String!) {\n  getProperty(urlPath: $urlPath) {\n    _id\n    ...PropertyFragment\n  }\n}\n\nquery GetPropertyContactInfo($urlPath: String!) {\n  getProperty(urlPath: $urlPath) {\n    _id\n    ...PropertyContactInfo_fragment\n  }\n}\n\nquery GetPropertyInternalNotes($urlPath: String!) {\n  getProperty(urlPath: $urlPath) {\n    _id\n    ...PropertyInternalNotes_fragment\n  }\n}\n\nquery GetPropertiesCountByCity {\n  getPropertiesCountByCity {\n    count\n    city\n  }\n}": typeof types.PropertiesPublic_FragmentFragmentDoc;
  "fragment Viewer_fragment on Viewer {\n  _id\n  uid\n  tyc\n  email\n  emailVerified\n  firstName\n  lastName\n  displayName\n  notificationTopics\n  fcm\n  profilePic\n  backgroundPic\n  mailingEnabled\n  mailingId\n}\n\nquery GetViewer {\n  getViewer {\n    _id\n    ...Viewer_fragment\n  }\n}\n\nmutation UpdateViewer($userData: InputViewerUpdate!) {\n  updateViewer(userData: $userData) {\n    getViewer {\n      _id\n      ...Viewer_fragment\n    }\n  }\n}": typeof types.Viewer_FragmentFragmentDoc;
};
const documents: Documents = {
  "fragment PropertiesPublic_fragment on PropertyPublic {\n  _id\n  title\n  description\n  timesViewed\n  mainImage\n  ogImage\n  mainImageBlurhash\n  propertyType\n  slug\n  urlPath\n  code\n  images\n  rentPrice\n  salePrice\n  score\n  offerType\n  privateCharacteristics {\n    bathrooms\n    areaTotal\n    bedrooms\n    coveredParkingLots\n  }\n  address {\n    city\n    state\n    neighborhood\n    location {\n      type\n      coordinates\n    }\n  }\n}\n\nfragment PropertyFragment on Property {\n  _id\n  title\n  description\n  timesViewed\n  mainImage\n  ogImage\n  mainImageBlurhash\n  slug\n  urlPath\n  code\n  images\n  rentPrice\n  salePrice\n  score\n  offerType\n  privateCharacteristics {\n    bathrooms\n    areaTotal\n    bedrooms\n    coveredParkingLots\n  }\n  address {\n    city\n    state\n    neighborhood\n    location {\n      type\n      coordinates\n    }\n  }\n}\n\nfragment PropertyContactInfo_fragment on Property {\n  _id\n  savedCount\n  publicationScore\n}\n\nfragment PropertyInternalNotes_fragment on Property {\n  _id\n}\n\nquery GetPropertiesPublic($limit: Int, $page: Int, $filter: PropertyFilter, $owner: ID!, $company: ID!) {\n  getPropertiesPublic(\n    owner: $owner\n    company: $company\n    limit: $limit\n    page: $page\n    filter: $filter\n  ) {\n    docs {\n      _id\n      ...PropertiesPublic_fragment\n    }\n    hasNextPage\n    nextPage\n    totalDocs\n    totalPages\n    page\n  }\n}\n\nquery GetProperty($urlPath: String!) {\n  getProperty(urlPath: $urlPath) {\n    _id\n    ...PropertyFragment\n  }\n}\n\nquery GetPropertyContactInfo($urlPath: String!) {\n  getProperty(urlPath: $urlPath) {\n    _id\n    ...PropertyContactInfo_fragment\n  }\n}\n\nquery GetPropertyInternalNotes($urlPath: String!) {\n  getProperty(urlPath: $urlPath) {\n    _id\n    ...PropertyInternalNotes_fragment\n  }\n}\n\nquery GetPropertiesCountByCity {\n  getPropertiesCountByCity {\n    count\n    city\n  }\n}":
    types.PropertiesPublic_FragmentFragmentDoc,
  "fragment Viewer_fragment on Viewer {\n  _id\n  uid\n  tyc\n  email\n  emailVerified\n  firstName\n  lastName\n  displayName\n  notificationTopics\n  fcm\n  profilePic\n  backgroundPic\n  mailingEnabled\n  mailingId\n}\n\nquery GetViewer {\n  getViewer {\n    _id\n    ...Viewer_fragment\n  }\n}\n\nmutation UpdateViewer($userData: InputViewerUpdate!) {\n  updateViewer(userData: $userData) {\n    getViewer {\n      _id\n      ...Viewer_fragment\n    }\n  }\n}":
    types.Viewer_FragmentFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment PropertiesPublic_fragment on PropertyPublic {\n  _id\n  title\n  description\n  timesViewed\n  mainImage\n  ogImage\n  mainImageBlurhash\n  propertyType\n  slug\n  urlPath\n  code\n  images\n  rentPrice\n  salePrice\n  score\n  offerType\n  privateCharacteristics {\n    bathrooms\n    areaTotal\n    bedrooms\n    coveredParkingLots\n  }\n  address {\n    city\n    state\n    neighborhood\n    location {\n      type\n      coordinates\n    }\n  }\n}\n\nfragment PropertyFragment on Property {\n  _id\n  title\n  description\n  timesViewed\n  mainImage\n  ogImage\n  mainImageBlurhash\n  slug\n  urlPath\n  code\n  images\n  rentPrice\n  salePrice\n  score\n  offerType\n  privateCharacteristics {\n    bathrooms\n    areaTotal\n    bedrooms\n    coveredParkingLots\n  }\n  address {\n    city\n    state\n    neighborhood\n    location {\n      type\n      coordinates\n    }\n  }\n}\n\nfragment PropertyContactInfo_fragment on Property {\n  _id\n  savedCount\n  publicationScore\n}\n\nfragment PropertyInternalNotes_fragment on Property {\n  _id\n}\n\nquery GetPropertiesPublic($limit: Int, $page: Int, $filter: PropertyFilter, $owner: ID!, $company: ID!) {\n  getPropertiesPublic(\n    owner: $owner\n    company: $company\n    limit: $limit\n    page: $page\n    filter: $filter\n  ) {\n    docs {\n      _id\n      ...PropertiesPublic_fragment\n    }\n    hasNextPage\n    nextPage\n    totalDocs\n    totalPages\n    page\n  }\n}\n\nquery GetProperty($urlPath: String!) {\n  getProperty(urlPath: $urlPath) {\n    _id\n    ...PropertyFragment\n  }\n}\n\nquery GetPropertyContactInfo($urlPath: String!) {\n  getProperty(urlPath: $urlPath) {\n    _id\n    ...PropertyContactInfo_fragment\n  }\n}\n\nquery GetPropertyInternalNotes($urlPath: String!) {\n  getProperty(urlPath: $urlPath) {\n    _id\n    ...PropertyInternalNotes_fragment\n  }\n}\n\nquery GetPropertiesCountByCity {\n  getPropertiesCountByCity {\n    count\n    city\n  }\n}",
): (typeof documents)["fragment PropertiesPublic_fragment on PropertyPublic {\n  _id\n  title\n  description\n  timesViewed\n  mainImage\n  ogImage\n  mainImageBlurhash\n  propertyType\n  slug\n  urlPath\n  code\n  images\n  rentPrice\n  salePrice\n  score\n  offerType\n  privateCharacteristics {\n    bathrooms\n    areaTotal\n    bedrooms\n    coveredParkingLots\n  }\n  address {\n    city\n    state\n    neighborhood\n    location {\n      type\n      coordinates\n    }\n  }\n}\n\nfragment PropertyFragment on Property {\n  _id\n  title\n  description\n  timesViewed\n  mainImage\n  ogImage\n  mainImageBlurhash\n  slug\n  urlPath\n  code\n  images\n  rentPrice\n  salePrice\n  score\n  offerType\n  privateCharacteristics {\n    bathrooms\n    areaTotal\n    bedrooms\n    coveredParkingLots\n  }\n  address {\n    city\n    state\n    neighborhood\n    location {\n      type\n      coordinates\n    }\n  }\n}\n\nfragment PropertyContactInfo_fragment on Property {\n  _id\n  savedCount\n  publicationScore\n}\n\nfragment PropertyInternalNotes_fragment on Property {\n  _id\n}\n\nquery GetPropertiesPublic($limit: Int, $page: Int, $filter: PropertyFilter, $owner: ID!, $company: ID!) {\n  getPropertiesPublic(\n    owner: $owner\n    company: $company\n    limit: $limit\n    page: $page\n    filter: $filter\n  ) {\n    docs {\n      _id\n      ...PropertiesPublic_fragment\n    }\n    hasNextPage\n    nextPage\n    totalDocs\n    totalPages\n    page\n  }\n}\n\nquery GetProperty($urlPath: String!) {\n  getProperty(urlPath: $urlPath) {\n    _id\n    ...PropertyFragment\n  }\n}\n\nquery GetPropertyContactInfo($urlPath: String!) {\n  getProperty(urlPath: $urlPath) {\n    _id\n    ...PropertyContactInfo_fragment\n  }\n}\n\nquery GetPropertyInternalNotes($urlPath: String!) {\n  getProperty(urlPath: $urlPath) {\n    _id\n    ...PropertyInternalNotes_fragment\n  }\n}\n\nquery GetPropertiesCountByCity {\n  getPropertiesCountByCity {\n    count\n    city\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "fragment Viewer_fragment on Viewer {\n  _id\n  uid\n  tyc\n  email\n  emailVerified\n  firstName\n  lastName\n  displayName\n  notificationTopics\n  fcm\n  profilePic\n  backgroundPic\n  mailingEnabled\n  mailingId\n}\n\nquery GetViewer {\n  getViewer {\n    _id\n    ...Viewer_fragment\n  }\n}\n\nmutation UpdateViewer($userData: InputViewerUpdate!) {\n  updateViewer(userData: $userData) {\n    getViewer {\n      _id\n      ...Viewer_fragment\n    }\n  }\n}",
): (typeof documents)["fragment Viewer_fragment on Viewer {\n  _id\n  uid\n  tyc\n  email\n  emailVerified\n  firstName\n  lastName\n  displayName\n  notificationTopics\n  fcm\n  profilePic\n  backgroundPic\n  mailingEnabled\n  mailingId\n}\n\nquery GetViewer {\n  getViewer {\n    _id\n    ...Viewer_fragment\n  }\n}\n\nmutation UpdateViewer($userData: InputViewerUpdate!) {\n  updateViewer(userData: $userData) {\n    getViewer {\n      _id\n      ...Viewer_fragment\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
