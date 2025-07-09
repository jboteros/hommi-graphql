import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: [
    {
      ['http://localhost:8080/graphql']: {
        headers: {
          Authorization: 'JnGlOceliNcLAdOYDrEng',
        },
      },
    },
  ],
  documents: [
    'packages/graphql/**/*.{ts,tsx,graphql}',
    '!**/node_modules/**',
  ],
  ignoreNoDocuments: true,
  generates: {
    'packages/graphql/gql/': {
      preset: 'client',
      plugins: [],
    },
  },
  watch: false,
};

export default config;
