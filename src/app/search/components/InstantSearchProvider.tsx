'use client';

import { InstantSearch, InstantSearchProps } from './InstantSearch';

type Props = Pick<InstantSearchProps, 'appId' | 'apiKey' | 'indexName' | 'children'>;

const routing = (indexName: string) => ({
  router: {
    cleanUrlOnDispose: false,
    windowTitle(routeState: any) {
      // @ts-ignore
      const query = routeState[indexName]?.query;
      return query ? `Results for: ${query}` : 'Results page';
    },
    createURL({ qsModule, routeState, location }: any) {
      // @ts-ignore
      const { query, ...params } = routeState[indexName];
      const queryParameters = { q: query, ...params };

      const queryString = qsModule.stringify(queryParameters, {
        addQueryPrefix: true,
        arrayFormat: 'brackets',
      });

      return `${location.origin}${location.pathname}${queryString}`;
    },
    parseURL({ location, qsModule }: any) {
      const { q: query, ...params } = qsModule.parse(location.search.slice(1));
      return {
        [indexName]: {
          query,
          ...params,
        },
      };
    },
  },
});

export const InstantSearchProvider = ({ indexName, ...props }: Props) => {
  return <InstantSearch routing={routing(indexName)} indexName={indexName} {...props} />;
};
