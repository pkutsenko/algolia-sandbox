'use client';

import { useRefinementList } from 'react-instantsearch';

export type CommonFilterProps = {
  attribute: string;
  onClick: (filter: string) => void;
  title: string;
  opened?: boolean;
};

type Props = CommonFilterProps & {
  dictionary?: Record<string, string>;
};

const LIMIT = 8;
const MAX_LIMIT = 16;

export const RefinementFilter = ({ attribute, dictionary }: Props) => {
  const { items } = useRefinementList({
    attribute,
    limit: LIMIT,
    showMore: true,
    showMoreLimit: MAX_LIMIT,
  });

  if (!items.length) return null;

  return (
    <div>
      <ul>
        {items.length === 0 ? (
          <span>No results</span>
        ) : (
          items.map((item) => (
            <li key={item.label}>
              <label>
                <span>{dictionary?.[item.label] || item.label}</span>
                <span>&nbsp;({item.count})</span>
              </label>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};
