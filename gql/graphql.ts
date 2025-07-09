/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
};

export type Address = {
  __typename?: 'Address';
  city: Scalars['String']['output'];
  complement: Scalars['String']['output'];
  country: Scalars['String']['output'];
  customAddress: Scalars['String']['output'];
  location: GeoJson;
  neighborhood: Scalars['String']['output'];
  state: Scalars['String']['output'];
  street: Scalars['String']['output'];
  zipCode: Scalars['String']['output'];
};

export type AddressInput = {
  city?: InputMaybe<Scalars['String']['input']>;
  complement: Scalars['String']['input'];
  country?: InputMaybe<Scalars['String']['input']>;
  customAddress?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<GeoJsonInput>;
  neighborhood?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  street?: InputMaybe<Scalars['String']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type CityPropertyCount = {
  __typename?: 'CityPropertyCount';
  city?: Maybe<Scalars['String']['output']>;
  count?: Maybe<Scalars['Int']['output']>;
};

export type Company = {
  __typename?: 'Company';
  _id: Scalars['ID']['output'];
  address: Address;
  admins?: Maybe<Array<Viewer>>;
  backgroundPic?: Maybe<Scalars['String']['output']>;
  businessId: Scalars['String']['output'];
  businessVerified: Scalars['Boolean']['output'];
  mainAddress: Scalars['String']['output'];
  name: Scalars['String']['output'];
  owner?: Maybe<Viewer>;
  phones?: Maybe<Array<Scalars['String']['output']>>;
  realtors?: Maybe<Array<Viewer>>;
};

export type CompanyInput = {
  address?: InputMaybe<AddressInput>;
  admins?: InputMaybe<Array<Scalars['ID']['input']>>;
  backgroundPic?: InputMaybe<Scalars['String']['input']>;
  businessId?: InputMaybe<Scalars['String']['input']>;
  businessVerified?: InputMaybe<Scalars['Boolean']['input']>;
  mainAddress?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phones?: InputMaybe<Array<Scalars['String']['input']>>;
  realtors?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type CompanyResponse = {
  __typename?: 'CompanyResponse';
  data?: Maybe<Company>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type FeatureInput = {
  geometry: GeometryInput;
  properties?: InputMaybe<PropertyInput>;
  type: Scalars['String']['input'];
};

export type GeoJson = {
  __typename?: 'GeoJSON';
  coordinates: Array<Scalars['Float']['output']>;
  type: Scalars['String']['output'];
};

export type GeoJsonInput = {
  coordinates?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type GeometryInput = {
  coordinates: Array<InputMaybe<Array<Array<Scalars['Float']['input']>>>>;
  type: Scalars['String']['input'];
};

export type GetMinMaxResponse = {
  __typename?: 'GetMinMaxResponse';
  _id?: Maybe<Scalars['String']['output']>;
  maxAreaBuilt?: Maybe<Scalars['Float']['output']>;
  maxAreaLot?: Maybe<Scalars['Float']['output']>;
  maxAreaTerrace?: Maybe<Scalars['Float']['output']>;
  maxAreaTerrain?: Maybe<Scalars['Float']['output']>;
  maxAreaTotal?: Maybe<Scalars['Float']['output']>;
  maxBalconies?: Maybe<Scalars['Int']['output']>;
  maxBathrooms?: Maybe<Scalars['Int']['output']>;
  maxBedrooms?: Maybe<Scalars['Int']['output']>;
  maxCoveredParkingLots?: Maybe<Scalars['Int']['output']>;
  maxHalfBathrooms?: Maybe<Scalars['Int']['output']>;
  maxServiceRooms?: Maybe<Scalars['Int']['output']>;
  maxUncoveredParkingLots?: Maybe<Scalars['Int']['output']>;
  minAreaBuilt?: Maybe<Scalars['Float']['output']>;
  minAreaLot?: Maybe<Scalars['Float']['output']>;
  minAreaTerrace?: Maybe<Scalars['Float']['output']>;
  minAreaTerrain?: Maybe<Scalars['Float']['output']>;
  minAreaTotal?: Maybe<Scalars['Float']['output']>;
  minBalconies?: Maybe<Scalars['Int']['output']>;
  minBathrooms?: Maybe<Scalars['Int']['output']>;
  minBedrooms?: Maybe<Scalars['Int']['output']>;
  minCoveredParkingLots?: Maybe<Scalars['Int']['output']>;
  minHalfBathrooms?: Maybe<Scalars['Int']['output']>;
  minServiceRooms?: Maybe<Scalars['Int']['output']>;
  minUncoveredParkingLots?: Maybe<Scalars['Int']['output']>;
};

export type InputViewerCreate = {
  email: Scalars['String']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  uid?: InputMaybe<Scalars['String']['input']>;
};

export type InputViewerUpdate = {
  backgroundPic?: InputMaybe<Scalars['String']['input']>;
  displayName?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  fcm?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  mailingEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  mailingId?: InputMaybe<Scalars['String']['input']>;
  notificationTopics?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  profilePic?: InputMaybe<Scalars['String']['input']>;
  tyc?: InputMaybe<Scalars['Date']['input']>;
};

export type Message = {
  __typename?: 'Message';
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type MinMaxFloatInput = {
  max?: InputMaybe<Scalars['Float']['input']>;
  min?: InputMaybe<Scalars['Float']['input']>;
};

export type MinMaxIntInput = {
  max?: InputMaybe<Scalars['Int']['input']>;
  min?: InputMaybe<Scalars['Int']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCompany: ResponseDataCompany;
  createProperty: ResponseDataProperty;
  createViewer: ResponseDataViewer;
  deleteViewer: Message;
  migrateProperties?: Maybe<Scalars['String']['output']>;
  migrateRentProperties?: Maybe<Scalars['String']['output']>;
  updateCompany: ResponseDataCompany;
  updateProperty: ResponseDataProperty;
  updateViewer: ResponseDataViewer;
};


export type MutationCreateCompanyArgs = {
  address: AddressInput;
  businessId: Scalars['String']['input'];
  mainAddress: Scalars['String']['input'];
  name: Scalars['String']['input'];
  owner: Scalars['ID']['input'];
  phones: Array<Scalars['String']['input']>;
};


export type MutationCreatePropertyArgs = {
  propertyData: PropertyInput;
};


export type MutationCreateViewerArgs = {
  userData: InputViewerCreate;
};


export type MutationUpdateCompanyArgs = {
  companyData: CompanyInput;
  companyId: Scalars['ID']['input'];
};


export type MutationUpdatePropertyArgs = {
  propertyData: PropertyInput;
  propertyId: Scalars['ID']['input'];
};


export type MutationUpdateViewerArgs = {
  userData: InputViewerUpdate;
};

export enum OfferType {
  Rent = 'RENT',
  Sale = 'SALE',
  SaleAndRent = 'SALE_AND_RENT'
}

export enum OfferTypeInput {
  Rent = 'RENT',
  Sale = 'SALE',
  SaleAndRent = 'SALE_AND_RENT'
}

export type PointInput = {
  coordinates: Array<Scalars['Float']['input']>;
  type: Scalars['String']['input'];
};

export type PolygonInput = {
  features: Array<FeatureInput>;
  type: Scalars['String']['input'];
};

export type PrivateCharacteristics = {
  __typename?: 'PrivateCharacteristics';
  accessAccessibility?: Maybe<Scalars['Boolean']['output']>;
  airConditioning?: Maybe<Scalars['Boolean']['output']>;
  areaBuilt?: Maybe<Scalars['Float']['output']>;
  areaLot?: Maybe<Scalars['Float']['output']>;
  areaTerrace?: Maybe<Scalars['Float']['output']>;
  areaTerrain?: Maybe<Scalars['Float']['output']>;
  areaTotal?: Maybe<Scalars['Float']['output']>;
  balconies?: Maybe<Scalars['Int']['output']>;
  bathrooms?: Maybe<Scalars['Int']['output']>;
  bedrooms?: Maybe<Scalars['Int']['output']>;
  coveredParkingLots?: Maybe<Scalars['Int']['output']>;
  halfBathrooms?: Maybe<Scalars['Int']['output']>;
  serviceRooms?: Maybe<Scalars['Int']['output']>;
  uncoveredParkingLots?: Maybe<Scalars['Int']['output']>;
};

export type PrivateCharacteristicsFilter = {
  accessAccessibility?: InputMaybe<Scalars['Boolean']['input']>;
  airConditioning?: InputMaybe<Scalars['Boolean']['input']>;
  areaBuilt?: InputMaybe<MinMaxFloatInput>;
  areaLot?: InputMaybe<MinMaxFloatInput>;
  areaTerrace?: InputMaybe<MinMaxFloatInput>;
  areaTerrain?: InputMaybe<MinMaxFloatInput>;
  areaTotal?: InputMaybe<MinMaxFloatInput>;
  balconies?: InputMaybe<MinMaxIntInput>;
  bathrooms?: InputMaybe<MinMaxIntInput>;
  bedrooms?: InputMaybe<MinMaxIntInput>;
  coveredParkingLots?: InputMaybe<MinMaxIntInput>;
  halfBathrooms?: InputMaybe<MinMaxIntInput>;
  serviceRooms?: InputMaybe<MinMaxIntInput>;
  uncoveredParkingLots?: InputMaybe<MinMaxIntInput>;
};

export type PrivateCharacteristicsInput = {
  accessAccessibility?: InputMaybe<Scalars['Boolean']['input']>;
  airConditioning?: InputMaybe<Scalars['Boolean']['input']>;
  areaBuilt?: InputMaybe<Scalars['Float']['input']>;
  areaLot?: InputMaybe<Scalars['Float']['input']>;
  areaTerrace?: InputMaybe<Scalars['Float']['input']>;
  areaTerrain?: InputMaybe<Scalars['Float']['input']>;
  areaTotal?: InputMaybe<Scalars['Float']['input']>;
  balconies?: InputMaybe<Scalars['Int']['input']>;
  bathrooms?: InputMaybe<Scalars['Int']['input']>;
  bedrooms?: InputMaybe<Scalars['Int']['input']>;
  coveredParkingLots?: InputMaybe<Scalars['Int']['input']>;
  halfBathrooms?: InputMaybe<Scalars['Int']['input']>;
  serviceRooms?: InputMaybe<Scalars['Int']['input']>;
  uncoveredParkingLots?: InputMaybe<Scalars['Int']['input']>;
};

export type Property = {
  __typename?: 'Property';
  _id: Scalars['ID']['output'];
  address?: Maybe<Address>;
  antiquity?: Maybe<Scalars['Int']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Company>;
  description: Scalars['String']['output'];
  images?: Maybe<Array<Scalars['String']['output']>>;
  mainImage: Scalars['String']['output'];
  mainImageBlurhash: Scalars['String']['output'];
  offerType: OfferType;
  owner?: Maybe<Viewer>;
  privateCharacteristics?: Maybe<PrivateCharacteristics>;
  propertyType?: Maybe<PropertyType>;
  publicCharacteristics?: Maybe<PublicCharacteristics>;
  publicationScore?: Maybe<Scalars['Float']['output']>;
  rentPrice?: Maybe<Scalars['Float']['output']>;
  salePrice?: Maybe<Scalars['Float']['output']>;
  savedCount?: Maybe<Scalars['Int']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  stratum?: Maybe<Scalars['Int']['output']>;
  timesViewed?: Maybe<Scalars['Int']['output']>;
  title: Scalars['String']['output'];
  urlPath?: Maybe<Scalars['String']['output']>;
};

export type PropertyFilter = {
  antiquity?: InputMaybe<MinMaxIntInput>;
  city?: InputMaybe<Scalars['String']['input']>;
  neighborhood?: InputMaybe<Scalars['String']['input']>;
  offerType?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  point?: InputMaybe<PointInput>;
  polygon?: InputMaybe<PolygonInput>;
  privateCharacteristics?: InputMaybe<PrivateCharacteristicsFilter>;
  propertyType?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publicCharacteristics?: InputMaybe<PublicCharacteristicsFilter>;
  rentPrice?: InputMaybe<MinMaxIntInput>;
  salePrice?: InputMaybe<MinMaxIntInput>;
  search?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  stratum?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type PropertyInput = {
  address?: InputMaybe<AddressInput>;
  antiquity?: InputMaybe<Scalars['Int']['input']>;
  company?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  images?: InputMaybe<Array<Scalars['String']['input']>>;
  mainImage?: InputMaybe<Scalars['String']['input']>;
  offerType: OfferTypeInput;
  owner?: InputMaybe<Scalars['ID']['input']>;
  privateCharacteristics?: InputMaybe<PrivateCharacteristicsInput>;
  propertyType?: InputMaybe<PropertyTypeInput>;
  publicCharacteristics?: InputMaybe<PublicCharacteristicsInput>;
  rentPrice?: InputMaybe<Scalars['Int']['input']>;
  salePrice?: InputMaybe<Scalars['Int']['input']>;
  stratum?: InputMaybe<Scalars['Int']['input']>;
};

export type PropertyMapResult = {
  __typename?: 'PropertyMapResult';
  docs: Array<Property>;
  totalDocs: Scalars['Int']['output'];
};

export type PropertyPaginatedPublic = {
  __typename?: 'PropertyPaginatedPublic';
  docs?: Maybe<Array<PropertyPublic>>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PropertyPublic = {
  __typename?: 'PropertyPublic';
  _id: Scalars['ID']['output'];
  address?: Maybe<Address>;
  antiquity?: Maybe<Scalars['Int']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Company>;
  description: Scalars['String']['output'];
  images?: Maybe<Array<Scalars['String']['output']>>;
  mainImage: Scalars['String']['output'];
  mainImageBlurhash: Scalars['String']['output'];
  offerType: OfferType;
  owner?: Maybe<Viewer>;
  privateCharacteristics?: Maybe<PrivateCharacteristics>;
  propertyType?: Maybe<PropertyType>;
  publicCharacteristics?: Maybe<PublicCharacteristics>;
  publicationScore?: Maybe<Scalars['Float']['output']>;
  rentPrice?: Maybe<Scalars['Float']['output']>;
  salePrice?: Maybe<Scalars['Float']['output']>;
  savedCount?: Maybe<Scalars['Int']['output']>;
  score?: Maybe<Scalars['Float']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  stratum?: Maybe<Scalars['Int']['output']>;
  timesViewed?: Maybe<Scalars['Int']['output']>;
  title: Scalars['String']['output'];
  urlPath?: Maybe<Scalars['String']['output']>;
};

export type PropertyResponse = {
  __typename?: 'PropertyResponse';
  data?: Maybe<Property>;
  message?: Maybe<Scalars['String']['output']>;
  success?: Maybe<Scalars['Boolean']['output']>;
};

export enum PropertyType {
  Apartment = 'APARTMENT',
  ApartmentStudio = 'APARTMENT_STUDIO',
  Building = 'BUILDING',
  Cabin = 'CABIN',
  CommercialSpace = 'COMMERCIAL_SPACE',
  CountryHouse = 'COUNTRY_HOUSE',
  Farm = 'FARM',
  House = 'HOUSE',
  HouseLot = 'HOUSE_LOT',
  Lot = 'LOT',
  MedicalOffice = 'MEDICAL_OFFICE',
  Office = 'OFFICE',
  Parking = 'PARKING',
  Room = 'ROOM',
  Storage = 'STORAGE',
  Suite = 'SUITE',
  Warehouse = 'WAREHOUSE'
}

export enum PropertyTypeInput {
  Apartment = 'APARTMENT',
  ApartmentStudio = 'APARTMENT_STUDIO',
  Building = 'BUILDING',
  Cabin = 'CABIN',
  CommercialSpace = 'COMMERCIAL_SPACE',
  CountryHouse = 'COUNTRY_HOUSE',
  Farm = 'FARM',
  House = 'HOUSE',
  HouseLot = 'HOUSE_LOT',
  Lot = 'LOT',
  MedicalOffice = 'MEDICAL_OFFICE',
  Office = 'OFFICE',
  Parking = 'PARKING',
  Room = 'ROOM',
  Storage = 'STORAGE',
  Suite = 'SUITE',
  Warehouse = 'WAREHOUSE'
}

export type PublicCharacteristics = {
  __typename?: 'PublicCharacteristics';
  basketballCourt?: Maybe<Scalars['Boolean']['output']>;
  ccTv?: Maybe<Scalars['Boolean']['output']>;
  elevator?: Maybe<Scalars['Boolean']['output']>;
  garden?: Maybe<Scalars['Boolean']['output']>;
  golfCourse?: Maybe<Scalars['Boolean']['output']>;
  greenAreas?: Maybe<Scalars['Boolean']['output']>;
  grill?: Maybe<Scalars['Boolean']['output']>;
  gym?: Maybe<Scalars['Boolean']['output']>;
  jacuzzi?: Maybe<Scalars['Boolean']['output']>;
  lake?: Maybe<Scalars['Boolean']['output']>;
  oceanfront?: Maybe<Scalars['Boolean']['output']>;
  parking?: Maybe<Scalars['Boolean']['output']>;
  partyRoom?: Maybe<Scalars['Boolean']['output']>;
  playground?: Maybe<Scalars['Boolean']['output']>;
  river?: Maybe<Scalars['Boolean']['output']>;
  sauna?: Maybe<Scalars['Boolean']['output']>;
  security?: Maybe<Scalars['Boolean']['output']>;
  soccerField?: Maybe<Scalars['Boolean']['output']>;
  sportsCourt?: Maybe<Scalars['Boolean']['output']>;
  squashCourt?: Maybe<Scalars['Boolean']['output']>;
  steamRoom?: Maybe<Scalars['Boolean']['output']>;
  swimmingPool?: Maybe<Scalars['Boolean']['output']>;
  tenisCourt?: Maybe<Scalars['Boolean']['output']>;
  terrace?: Maybe<Scalars['Boolean']['output']>;
  volleyballCourt?: Maybe<Scalars['Boolean']['output']>;
};

export type PublicCharacteristicsFilter = {
  basketballCourt?: InputMaybe<Scalars['Boolean']['input']>;
  ccTv?: InputMaybe<Scalars['Boolean']['input']>;
  elevator?: InputMaybe<Scalars['Boolean']['input']>;
  garden?: InputMaybe<Scalars['Boolean']['input']>;
  golfCourse?: InputMaybe<Scalars['Boolean']['input']>;
  greenAreas?: InputMaybe<Scalars['Boolean']['input']>;
  grill?: InputMaybe<Scalars['Boolean']['input']>;
  gym?: InputMaybe<Scalars['Boolean']['input']>;
  jacuzzi?: InputMaybe<Scalars['Boolean']['input']>;
  lake?: InputMaybe<Scalars['Boolean']['input']>;
  oceanfront?: InputMaybe<Scalars['Boolean']['input']>;
  parking?: InputMaybe<Scalars['Boolean']['input']>;
  partyRoom?: InputMaybe<Scalars['Boolean']['input']>;
  playground?: InputMaybe<Scalars['Boolean']['input']>;
  river?: InputMaybe<Scalars['Boolean']['input']>;
  sauna?: InputMaybe<Scalars['Boolean']['input']>;
  security?: InputMaybe<Scalars['Boolean']['input']>;
  soccerField?: InputMaybe<Scalars['Boolean']['input']>;
  sportsCourt?: InputMaybe<Scalars['Boolean']['input']>;
  squashCourt?: InputMaybe<Scalars['Boolean']['input']>;
  steamRoom?: InputMaybe<Scalars['Boolean']['input']>;
  swimmingPool?: InputMaybe<Scalars['Boolean']['input']>;
  tenisCourt?: InputMaybe<Scalars['Boolean']['input']>;
  terrace?: InputMaybe<Scalars['Boolean']['input']>;
  volleyballCourt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PublicCharacteristicsInput = {
  basketballCourt?: InputMaybe<Scalars['Boolean']['input']>;
  ccTv?: InputMaybe<Scalars['Boolean']['input']>;
  elevator?: InputMaybe<Scalars['Boolean']['input']>;
  garden?: InputMaybe<Scalars['Boolean']['input']>;
  golfCourse?: InputMaybe<Scalars['Boolean']['input']>;
  greenAreas?: InputMaybe<Scalars['Boolean']['input']>;
  grill?: InputMaybe<Scalars['Boolean']['input']>;
  gym?: InputMaybe<Scalars['Boolean']['input']>;
  jacuzzi?: InputMaybe<Scalars['Boolean']['input']>;
  lake?: InputMaybe<Scalars['Boolean']['input']>;
  oceanfront?: InputMaybe<Scalars['Boolean']['input']>;
  parking?: InputMaybe<Scalars['Boolean']['input']>;
  partyRoom?: InputMaybe<Scalars['Boolean']['input']>;
  playground?: InputMaybe<Scalars['Boolean']['input']>;
  river?: InputMaybe<Scalars['Boolean']['input']>;
  sauna?: InputMaybe<Scalars['Boolean']['input']>;
  security?: InputMaybe<Scalars['Boolean']['input']>;
  soccerField?: InputMaybe<Scalars['Boolean']['input']>;
  sportsCourt?: InputMaybe<Scalars['Boolean']['input']>;
  squashCourt?: InputMaybe<Scalars['Boolean']['input']>;
  steamRoom?: InputMaybe<Scalars['Boolean']['input']>;
  swimmingPool?: InputMaybe<Scalars['Boolean']['input']>;
  tenisCourt?: InputMaybe<Scalars['Boolean']['input']>;
  terrace?: InputMaybe<Scalars['Boolean']['input']>;
  volleyballCourt?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Query = {
  __typename?: 'Query';
  companies: Array<Company>;
  company?: Maybe<Company>;
  companyByUser?: Maybe<Company>;
  getMinMaxValues?: Maybe<GetMinMaxResponse>;
  getPropertiesCountByCity: Array<CityPropertyCount>;
  getPropertiesPublic: PropertyPaginatedPublic;
  getProperty?: Maybe<Property>;
  getViewer?: Maybe<Viewer>;
  propertiesByOwner: Array<Property>;
};


export type QueryCompanyArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCompanyByUserArgs = {
  userId: Scalars['ID']['input'];
};


export type QueryGetPropertiesPublicArgs = {
  company: Scalars['ID']['input'];
  filter?: InputMaybe<PropertyFilter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  owner: Scalars['ID']['input'];
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPropertyArgs = {
  urlPath: Scalars['String']['input'];
};


export type QueryPropertiesByOwnerArgs = {
  userId: Scalars['ID']['input'];
};

export type ResponseDataCompany = {
  __typename?: 'ResponseDataCompany';
  getCompany?: Maybe<CompanyResponse>;
};

export type ResponseDataProperty = {
  __typename?: 'ResponseDataProperty';
  getProperty?: Maybe<PropertyResponse>;
};

export type ResponseDataViewer = {
  __typename?: 'ResponseDataViewer';
  getViewer?: Maybe<Viewer>;
};

export type Viewer = {
  __typename?: 'Viewer';
  _id: Scalars['ID']['output'];
  backgroundPic?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailVerified?: Maybe<Scalars['Boolean']['output']>;
  fcm?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use '_id' instead. */
  id: Scalars['ID']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  mailingEnabled?: Maybe<Scalars['Boolean']['output']>;
  mailingId?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  notificationTopics?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  profilePic?: Maybe<Scalars['String']['output']>;
  tyc?: Maybe<Scalars['Date']['output']>;
  uid: Scalars['String']['output'];
};

export type PropertiesPublic_FragmentFragment = { __typename?: 'PropertyPublic', _id: string, title: string, description: string, timesViewed?: number | null, mainImage: string, mainImageBlurhash: string, slug?: string | null, urlPath?: string | null, code?: string | null, images?: Array<string> | null, rentPrice?: number | null, salePrice?: number | null, score?: number | null, offerType: OfferType, privateCharacteristics?: { __typename?: 'PrivateCharacteristics', bathrooms?: number | null, areaTotal?: number | null, bedrooms?: number | null, coveredParkingLots?: number | null } | null, address?: { __typename?: 'Address', city: string, state: string, neighborhood: string, location: { __typename?: 'GeoJSON', type: string, coordinates: Array<number> } } | null } & { ' $fragmentName'?: 'PropertiesPublic_FragmentFragment' };

export type PropertyFragmentFragment = { __typename?: 'Property', _id: string, title: string, description: string, timesViewed?: number | null, mainImage: string, mainImageBlurhash: string, slug?: string | null, urlPath?: string | null, code?: string | null, images?: Array<string> | null, rentPrice?: number | null, salePrice?: number | null, score?: number | null, offerType: OfferType, privateCharacteristics?: { __typename?: 'PrivateCharacteristics', bathrooms?: number | null, areaTotal?: number | null, bedrooms?: number | null, coveredParkingLots?: number | null } | null, address?: { __typename?: 'Address', city: string, state: string, neighborhood: string, location: { __typename?: 'GeoJSON', type: string, coordinates: Array<number> } } | null } & { ' $fragmentName'?: 'PropertyFragmentFragment' };

export type PropertyContactInfo_FragmentFragment = { __typename?: 'Property', _id: string, savedCount?: number | null, publicationScore?: number | null } & { ' $fragmentName'?: 'PropertyContactInfo_FragmentFragment' };

export type PropertyInternalNotes_FragmentFragment = { __typename?: 'Property', _id: string } & { ' $fragmentName'?: 'PropertyInternalNotes_FragmentFragment' };

export type GetPropertiesPublicQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  filter?: InputMaybe<PropertyFilter>;
  owner: Scalars['ID']['input'];
  company: Scalars['ID']['input'];
}>;


export type GetPropertiesPublicQuery = { __typename?: 'Query', getPropertiesPublic: { __typename?: 'PropertyPaginatedPublic', hasNextPage: boolean, nextPage?: number | null, totalDocs: number, totalPages: number, page: number, docs?: Array<(
      { __typename?: 'PropertyPublic', _id: string }
      & { ' $fragmentRefs'?: { 'PropertiesPublic_FragmentFragment': PropertiesPublic_FragmentFragment } }
    )> | null } };

export type GetPropertyQueryVariables = Exact<{
  urlPath: Scalars['String']['input'];
}>;


export type GetPropertyQuery = { __typename?: 'Query', getProperty?: (
    { __typename?: 'Property', _id: string }
    & { ' $fragmentRefs'?: { 'PropertyFragmentFragment': PropertyFragmentFragment } }
  ) | null };

export type GetPropertyContactInfoQueryVariables = Exact<{
  urlPath: Scalars['String']['input'];
}>;


export type GetPropertyContactInfoQuery = { __typename?: 'Query', getProperty?: (
    { __typename?: 'Property', _id: string }
    & { ' $fragmentRefs'?: { 'PropertyContactInfo_FragmentFragment': PropertyContactInfo_FragmentFragment } }
  ) | null };

export type GetPropertyInternalNotesQueryVariables = Exact<{
  urlPath: Scalars['String']['input'];
}>;


export type GetPropertyInternalNotesQuery = { __typename?: 'Query', getProperty?: (
    { __typename?: 'Property', _id: string }
    & { ' $fragmentRefs'?: { 'PropertyInternalNotes_FragmentFragment': PropertyInternalNotes_FragmentFragment } }
  ) | null };

export type Viewer_FragmentFragment = { __typename?: 'Viewer', _id: string, uid: string, tyc?: any | null, email?: string | null, emailVerified?: boolean | null, firstName?: string | null, lastName?: string | null, displayName?: string | null, notificationTopics?: Array<string | null> | null, fcm?: string | null, profilePic?: string | null, backgroundPic?: string | null, mailingEnabled?: boolean | null, mailingId?: string | null } & { ' $fragmentName'?: 'Viewer_FragmentFragment' };

export type GetViewerQueryVariables = Exact<{ [key: string]: never; }>;


export type GetViewerQuery = { __typename?: 'Query', getViewer?: (
    { __typename?: 'Viewer', _id: string }
    & { ' $fragmentRefs'?: { 'Viewer_FragmentFragment': Viewer_FragmentFragment } }
  ) | null };

export type UpdateViewerMutationVariables = Exact<{
  userData: InputViewerUpdate;
}>;


export type UpdateViewerMutation = { __typename?: 'Mutation', updateViewer: { __typename?: 'ResponseDataViewer', getViewer?: (
      { __typename?: 'Viewer', _id: string }
      & { ' $fragmentRefs'?: { 'Viewer_FragmentFragment': Viewer_FragmentFragment } }
    ) | null } };

export const PropertiesPublic_FragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertiesPublic_fragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyPublic"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"timesViewed"}},{"kind":"Field","name":{"kind":"Name","value":"mainImage"}},{"kind":"Field","name":{"kind":"Name","value":"mainImageBlurhash"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"urlPath"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"rentPrice"}},{"kind":"Field","name":{"kind":"Name","value":"salePrice"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"offerType"}},{"kind":"Field","name":{"kind":"Name","value":"privateCharacteristics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bathrooms"}},{"kind":"Field","name":{"kind":"Name","value":"areaTotal"}},{"kind":"Field","name":{"kind":"Name","value":"bedrooms"}},{"kind":"Field","name":{"kind":"Name","value":"coveredParkingLots"}}]}},{"kind":"Field","name":{"kind":"Name","value":"address"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"neighborhood"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"coordinates"}}]}}]}}]}}]} as unknown as DocumentNode<PropertiesPublic_FragmentFragment, unknown>;
export const PropertyFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Property"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"timesViewed"}},{"kind":"Field","name":{"kind":"Name","value":"mainImage"}},{"kind":"Field","name":{"kind":"Name","value":"mainImageBlurhash"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"urlPath"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"rentPrice"}},{"kind":"Field","name":{"kind":"Name","value":"salePrice"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"offerType"}},{"kind":"Field","name":{"kind":"Name","value":"privateCharacteristics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bathrooms"}},{"kind":"Field","name":{"kind":"Name","value":"areaTotal"}},{"kind":"Field","name":{"kind":"Name","value":"bedrooms"}},{"kind":"Field","name":{"kind":"Name","value":"coveredParkingLots"}}]}},{"kind":"Field","name":{"kind":"Name","value":"address"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"neighborhood"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"coordinates"}}]}}]}}]}}]} as unknown as DocumentNode<PropertyFragmentFragment, unknown>;
export const PropertyContactInfo_FragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyContactInfo_fragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Property"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"savedCount"}},{"kind":"Field","name":{"kind":"Name","value":"publicationScore"}}]}}]} as unknown as DocumentNode<PropertyContactInfo_FragmentFragment, unknown>;
export const PropertyInternalNotes_FragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyInternalNotes_fragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Property"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}}]} as unknown as DocumentNode<PropertyInternalNotes_FragmentFragment, unknown>;
export const Viewer_FragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Viewer_fragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Viewer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"tyc"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"notificationTopics"}},{"kind":"Field","name":{"kind":"Name","value":"fcm"}},{"kind":"Field","name":{"kind":"Name","value":"profilePic"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundPic"}},{"kind":"Field","name":{"kind":"Name","value":"mailingEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"mailingId"}}]}}]} as unknown as DocumentNode<Viewer_FragmentFragment, unknown>;
export const GetPropertiesPublicDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPropertiesPublic"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyFilter"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"owner"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"company"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPropertiesPublic"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"owner"},"value":{"kind":"Variable","name":{"kind":"Name","value":"owner"}}},{"kind":"Argument","name":{"kind":"Name","value":"company"},"value":{"kind":"Variable","name":{"kind":"Name","value":"company"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertiesPublic_fragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"nextPage"}},{"kind":"Field","name":{"kind":"Name","value":"totalDocs"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"page"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertiesPublic_fragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PropertyPublic"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"timesViewed"}},{"kind":"Field","name":{"kind":"Name","value":"mainImage"}},{"kind":"Field","name":{"kind":"Name","value":"mainImageBlurhash"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"urlPath"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"rentPrice"}},{"kind":"Field","name":{"kind":"Name","value":"salePrice"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"offerType"}},{"kind":"Field","name":{"kind":"Name","value":"privateCharacteristics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bathrooms"}},{"kind":"Field","name":{"kind":"Name","value":"areaTotal"}},{"kind":"Field","name":{"kind":"Name","value":"bedrooms"}},{"kind":"Field","name":{"kind":"Name","value":"coveredParkingLots"}}]}},{"kind":"Field","name":{"kind":"Name","value":"address"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"neighborhood"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"coordinates"}}]}}]}}]}}]} as unknown as DocumentNode<GetPropertiesPublicQuery, GetPropertiesPublicQueryVariables>;
export const GetPropertyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProperty"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"urlPath"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProperty"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"urlPath"},"value":{"kind":"Variable","name":{"kind":"Name","value":"urlPath"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Property"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"timesViewed"}},{"kind":"Field","name":{"kind":"Name","value":"mainImage"}},{"kind":"Field","name":{"kind":"Name","value":"mainImageBlurhash"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"urlPath"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"rentPrice"}},{"kind":"Field","name":{"kind":"Name","value":"salePrice"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"offerType"}},{"kind":"Field","name":{"kind":"Name","value":"privateCharacteristics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"bathrooms"}},{"kind":"Field","name":{"kind":"Name","value":"areaTotal"}},{"kind":"Field","name":{"kind":"Name","value":"bedrooms"}},{"kind":"Field","name":{"kind":"Name","value":"coveredParkingLots"}}]}},{"kind":"Field","name":{"kind":"Name","value":"address"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"city"}},{"kind":"Field","name":{"kind":"Name","value":"state"}},{"kind":"Field","name":{"kind":"Name","value":"neighborhood"}},{"kind":"Field","name":{"kind":"Name","value":"location"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"coordinates"}}]}}]}}]}}]} as unknown as DocumentNode<GetPropertyQuery, GetPropertyQueryVariables>;
export const GetPropertyContactInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPropertyContactInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"urlPath"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProperty"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"urlPath"},"value":{"kind":"Variable","name":{"kind":"Name","value":"urlPath"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyContactInfo_fragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyContactInfo_fragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Property"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"savedCount"}},{"kind":"Field","name":{"kind":"Name","value":"publicationScore"}}]}}]} as unknown as DocumentNode<GetPropertyContactInfoQuery, GetPropertyContactInfoQueryVariables>;
export const GetPropertyInternalNotesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPropertyInternalNotes"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"urlPath"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProperty"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"urlPath"},"value":{"kind":"Variable","name":{"kind":"Name","value":"urlPath"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"PropertyInternalNotes_fragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"PropertyInternalNotes_fragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Property"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}}]} as unknown as DocumentNode<GetPropertyInternalNotesQuery, GetPropertyInternalNotesQueryVariables>;
export const GetViewerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetViewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getViewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Viewer_fragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Viewer_fragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Viewer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"tyc"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"notificationTopics"}},{"kind":"Field","name":{"kind":"Name","value":"fcm"}},{"kind":"Field","name":{"kind":"Name","value":"profilePic"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundPic"}},{"kind":"Field","name":{"kind":"Name","value":"mailingEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"mailingId"}}]}}]} as unknown as DocumentNode<GetViewerQuery, GetViewerQueryVariables>;
export const UpdateViewerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateViewer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userData"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"InputViewerUpdate"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateViewer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userData"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userData"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getViewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"Viewer_fragment"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"Viewer_fragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Viewer"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"}},{"kind":"Field","name":{"kind":"Name","value":"uid"}},{"kind":"Field","name":{"kind":"Name","value":"tyc"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"emailVerified"}},{"kind":"Field","name":{"kind":"Name","value":"firstName"}},{"kind":"Field","name":{"kind":"Name","value":"lastName"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"notificationTopics"}},{"kind":"Field","name":{"kind":"Name","value":"fcm"}},{"kind":"Field","name":{"kind":"Name","value":"profilePic"}},{"kind":"Field","name":{"kind":"Name","value":"backgroundPic"}},{"kind":"Field","name":{"kind":"Name","value":"mailingEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"mailingId"}}]}}]} as unknown as DocumentNode<UpdateViewerMutation, UpdateViewerMutationVariables>;