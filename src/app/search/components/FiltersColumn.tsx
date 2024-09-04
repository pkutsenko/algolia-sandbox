'use client';

import { useDynamicWidgets } from 'react-instantsearch';
import { RefinementFilter } from './RefinementFilter';

export const FiltersColumn = () => {
  const { attributesToRender } = useDynamicWidgets({
    facets: ['*'],
  });
  return (
    <div>
      <div>Filters</div>
      <div>
        {attributesToRender.map((attribute, index) => {
          return (
            <RefinementFilter
              attribute={attribute}
              title={attribute}
              onClick={() => {}}
              key={attribute}
              opened
            />
          );
        })}
      </div>
    </div>
  );
};
