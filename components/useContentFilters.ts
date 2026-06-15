import { useState, useEffect, useMemo } from 'react';
import { ContentItem } from '@/types/content';
import {
  FilterState,
  emptyFilters,
  filterContent,
  parseFiltersFromUrl,
  buildUrlFromFilters,
} from '@/lib/filters';

/**
 * Owns the filter state for a set of content: derives the available topics/tags,
 * computes the filtered list, and keeps the URL query in sync (via
 * history.replaceState, so it never triggers a router navigation/re-render).
 */
export function useContentFilters(allContent: ContentItem[]) {
  const [filters, setFilters] = useState<FilterState>(emptyFilters);

  // Hydrate from the URL after mount so deep-linked / shared filters apply.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setFilters(parseFiltersFromUrl(params));
  }, []);

  const handleChange = (next: FilterState) => {
    setFilters(next);
    const query = buildUrlFromFilters(next);
    window.history.replaceState(null, '', query || window.location.pathname);
  };

  const filtered = useMemo(
    () => filterContent(allContent, filters),
    [allContent, filters]
  );

  const topics = useMemo(
    () => Array.from(new Set(allContent.flatMap((item) => item.topics))).sort(),
    [allContent]
  );

  const tags = useMemo(
    () => Array.from(new Set(allContent.flatMap((item) => item.tags))).sort(),
    [allContent]
  );

  return { filters, handleChange, filtered, topics, tags };
}
