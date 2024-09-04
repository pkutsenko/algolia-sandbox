'use client';

import { useSearchBox } from 'react-instantsearch';

export const SearchQuery = () => {
  const { query } = useSearchBox();

  return (
    <div>
      Search result for
      <h1>“{query}”</h1>
    </div>
  );
};
