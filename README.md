# GraphQL Client Package

This package provides a GraphQL client for the Hommi workspace, built with Apollo Client and optimized for React applications.

## Features

- **Type-safe GraphQL operations** with generated TypeScript types
- **React hooks** for easy data fetching and state management
- **Optimized caching** with Apollo Client
- **Authentication-aware queries** with separate public and private data handling
- **Pagination support** with infinite scroll capabilities

## Installation

```bash
yarn add @hommi/graphql
```

## Setup

Wrap your app with the GraphQL provider:

```tsx
import { GraphQLProvider } from '@hommi/graphql';

function App() {
  return (
    <GraphQLProvider>
      <YourApp />
    </GraphQLProvider>
  );
}
```

## Usage

### Properties Hooks

The package provides a simplified approach using `getPropertiesPublic` as the base query for all users, with optional private data enrichment for authenticated users.

#### useGetPropertiesPublic (Base Hook)

For public users or when you only need public data:

```typescript
import { useGetPropertiesPublic } from '@hommi/graphql';

function PublicPropertiesList() {
  const { 
    properties, 
    loading, 
    error, 
    loadMore, 
    hasNextPage 
  } = useGetPropertiesPublic({
    owner: "user123",
    company: "company456",
    limit: 20
  });

  return (
    <div>
      {properties.map(property => (
        <PropertyCard key={property._id} property={property} />
      ))}
      {hasNextPage && (
        <button onClick={loadMore}>Load More</button>
      )}
    </div>
  );
}
```

### Available Data

**For all users (PropertyPublic):**
- `_id`, `title`, `description`, `mainImage`, `images`
- `slug`, `urlPath`, `code`, `score`, `timesViewed`
- `privateCharacteristics` (bathrooms, areaTotal, bedrooms, coveredParkingLots)
- `address` (city, neighborhood, location)
- `publicCharacteristics`, `propertyType`, `company`, `owner`

**For authenticated users (additional private data):**
- `savedCount` - Number of times the property has been saved
- `publicationScore` - Internal publication score
- Future: `contactInfo`, `internalNotes` (when added to schema)

### Hook Return Values

**Data:**
- `properties` - Array of properties (PropertyPublic[] or enriched with private data)
- `dataProperties` - Raw Apollo query result

**Loading States:**
- `loading` - Boolean indicating if a request is in progress
- `baseLoading` - Loading state for the base query

**Error Handling:**
- `error` - Apollo error object if any error occurred
- `baseError` - Error from the base query

**Pagination Info:**
- `hasNextPage` - Boolean indicating if there are more pages
- `currentPage` - Current page number
- `totalPages` - Total number of pages
- `totalDocs` - Total number of properties

**Actions:**
- `loadMore()` - Load the next page (infinite scroll)
- `goToPage(page)` - Navigate to a specific page
- `refresh()` - Refresh the current data
- `refetch()` - Raw Apollo refetch function

#### React Native FlatList Usage

The `PropertyUnion` type works perfectly with React Native's `FlatList`:

```typescript
import { FlatList } from 'react-native';
import { usePropertiesPublic, PropertyUnion } from '@hommi/graphql';

function PropertiesList() {
  const { properties, loading, error, loadMore, hasNextPage } = usePropertiesPublic({
    owner: "user123",
    company: "company456"
  });

  const renderProperty = ({ item }: { item: PropertyUnion }) => (
    <View>
      <Text>{item.title}</Text>
      <Text>{item.description}</Text>
      {/* All properties have these fields */}
      <Text>Score: {item.score}</Text>
      <Text>Views: {item.timesViewed}</Text>
    </View>
  );

  return (
    <FlatList
      data={properties}
      renderItem={renderProperty}
      keyExtractor={(item) => item._id}
      onEndReached={loadMore}
      onEndReachedThreshold={0.5}
      ListFooterComponent={
        hasNextPage ? <ActivityIndicator size="large" /> : null
      }
    />
  );
}
```

### Viewer Hooks

For user authentication and profile management:

```typescript
import { useViewer } from '@hommi/graphql';

function UserProfile() {
  const { viewer, loading, error, refetch } = useViewer();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Welcome, {viewer?.displayName}</h1>
      <p>Email: {viewer?.email}</p>
    </div>
  );
}
```

## Architecture

### Simplified Approach

This implementation uses a simplified approach:

1. **Base Query**: `getPropertiesPublic` is used for all users
2. **Private Data**: Additional private fields are fetched separately when needed
3. **Type Safety**: Proper TypeScript types for both public and private data
4. **Performance**: Base data is shared, private data is fetched on-demand

### Benefits

- **Security**: Private data is never exposed to unauthenticated users
- **Performance**: Only fetch the data you need
- **Simplicity**: Single base query with optional enrichment
- **Maintainability**: Clear separation of concerns

## Development

### Code Generation

After modifying GraphQL queries, regenerate types:

```bash
yarn codegen
```

### Adding New Queries

1. Add your query to the appropriate `.graphql` file in `hooks/`
2. Run `yarn codegen` to generate TypeScript types
3. Create a new hook in the appropriate file
4. Export the hook from `index.ts`

## TypeScript Support

All hooks are fully typed with generated TypeScript definitions. The package exports:

- `PropertyUnion` - Union type for properties
- `PropertyPublic` - Public property type
- `Property` - Full property type (for authenticated users)
- Query and mutation types for all operations 