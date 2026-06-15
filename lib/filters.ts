import { ContentItem } from '@/types/content';

export interface FilterState {
  type?: string;
  topics: string[];
  tags: string[];
  search: string;
}

export const emptyFilters: FilterState = {
  type: undefined,
  topics: [],
  tags: [],
  search: '',
};

export function hasActiveFilters(filters: FilterState): boolean {
  return (
    filters.type !== undefined ||
    filters.topics.length > 0 ||
    filters.tags.length > 0 ||
    filters.search !== ''
  );
}

export function filterContent(
  content: ContentItem[],
  filters: FilterState
): ContentItem[] {
  return content.filter(item => {
    // Filter by type (single select)
    if (filters.type && item.type !== filters.type) {
      return false;
    }

    // Filter by topics (OR logic - item matches if it has ANY selected topic)
    if (filters.topics.length > 0) {
      const hasTopic = filters.topics.some(topic =>
        item.topics.includes(topic as any)
      );
      if (!hasTopic) return false;
    }

    // Filter by tags (OR logic)
    if (filters.tags.length > 0) {
      const hasTag = filters.tags.some(tag =>
        item.tags.includes(tag as any)
      );
      if (!hasTag) return false;
    }

    // Search by title, description, organization (case-insensitive substring)
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      const searchableText = [
        item.title,
        item.description,
        item.organization || '',
      ].join(' ').toLowerCase();

      if (!searchableText.includes(searchLower)) {
        return false;
      }
    }

    return true;
  });
}

export function parseFiltersFromUrl(searchParams: URLSearchParams): FilterState {
  return {
    type: searchParams.get('type') || undefined,
    topics: searchParams.get('topics')?.split(',').filter(Boolean) || [],
    tags: searchParams.get('tags')?.split(',').filter(Boolean) || [],
    search: searchParams.get('search') || '',
  };
}

export function buildUrlFromFilters(filters: FilterState): string {
  const params = new URLSearchParams();

  if (filters.type) {
    params.set('type', filters.type);
  }

  if (filters.topics.length > 0) {
    params.set('topics', filters.topics.join(','));
  }

  if (filters.tags.length > 0) {
    params.set('tags', filters.tags.join(','));
  }

  if (filters.search) {
    params.set('search', filters.search);
  }

  const queryString = params.toString();
  return queryString ? `?${queryString}` : '';
}
