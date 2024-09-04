'use client';

import { createNullCache } from '@algolia/cache-common';
import algoliasearch, { SearchClient } from 'algoliasearch/lite';
import type { ComponentProps } from 'react';
import { InstantSearchNext } from 'react-instantsearch-nextjs';

export type InstantSearchProps = Omit<ComponentProps<typeof InstantSearchNext>, 'searchClient'> & {
  appId: string;
  apiKey: string;
  indexName: string;
};

export type AlgoliaSearchClientProps = {
  appId: string;
  apiKey: string;
};

export const getAlgoliaSearchClient = ({
  appId,
  apiKey,
}: AlgoliaSearchClientProps): SearchClient => {
  return algoliasearch(appId, apiKey, {
    responsesCache: createNullCache(),
    requestsCache: createNullCache(),
  });
};

export const InstantSearch = ({ appId, apiKey, indexName, ...props }: InstantSearchProps) => {
  const searchClient = getAlgoliaSearchClient({
    appId,
    apiKey,
  });

  return (
    <InstantSearchNext
      searchClient={searchClient}
      indexName={indexName}
      future={{
        preserveSharedStateOnUnmount: false,
      }}
      {...props}
    />
  );
};
