'use client';

import { useHits } from 'react-instantsearch';

export type ProductHit = {
  url: string;
};

export const ProductList = () => {
  const { items } = useHits<ProductHit>();

  return (
    <div>
      <div>
        {items.map((hit, i) => (
          <div key={i}>{hit.url}</div>
        ))}
      </div>
    </div>
  );
};
