import { FiltersColumn } from './components/FiltersColumn';
import { InstantSearchProvider } from './components/InstantSearchProvider';
import { ProductList } from './components/ProductList';
import { SearchQuery } from './components/SearchQuery';

type Props = {
  searchParams: {
    q: string;
  };
  params: {
    slug: string[];
  };
};

export const dynamic = 'force-dynamic';

const instantSearchOptions = {
  appId: '',
  apiKey: '',
  indexName: '',
};

export default async function SearchResultsPage({ searchParams }: Props) {
  return (
    <InstantSearchProvider {...instantSearchOptions}>
      <SearchQuery />
      <FiltersColumn />
      <ProductList />
    </InstantSearchProvider>
  );
}
