'use client';

import { ContentItem } from '@/types/content';
import ContentList from './ContentList';
import FilterSidebar from './FilterSidebar';
import { useContentFilters } from './useContentFilters';

interface FilterableListProps {
  allContent: ContentItem[];
  title: string;
  description: string;
  dateOptions?: Intl.DateTimeFormatOptions;
  emptyMessage?: string;
}

export default function FilterableList({
  allContent,
  title,
  description,
  dateOptions,
  emptyMessage,
}: FilterableListProps) {
  const { filters, handleChange, filtered, topics, tags } = useContentFilters(allContent);

  return (
    <>
      <div className="flex-1 min-w-0">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 lg:py-20">
          <header className="mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-foreground">{title}</h1>
            <p className="mt-3 text-lg text-muted">{description}</p>
          </header>

          <ContentList
            items={filtered}
            dateOptions={dateOptions}
            emptyMessage={emptyMessage}
          />
        </div>
      </div>
      {/* Single-type pages don't need the Type filter, just search/topics/tags. */}
      <FilterSidebar
        filters={filters}
        onChange={handleChange}
        topics={topics}
        tags={tags}
        showType={false}
      />
    </>
  );
}
