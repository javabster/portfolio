import { useState, useEffect, useRef } from 'react';

const DEFAULT_PAGE_SIZE = 10;

/**
 * Progressively reveals a long list as the user scrolls. Returns the visible
 * slice plus a sentinel ref to render at the end of the list — when the sentinel
 * scrolls into view, the next page is appended. The count resets to one page
 * whenever `items` changes (e.g. filters are applied), so a freshly filtered
 * list always starts from the top.
 */
export function useInfiniteScroll<T>(items: T[], pageSize = DEFAULT_PAGE_SIZE) {
  const [visibleCount, setVisibleCount] = useState(pageSize);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  // Reset to one page when the underlying list changes (e.g. filters applied).
  // Adjusting state during render is React's recommended alternative to doing
  // this in an effect — it avoids a flash of the stale slice.
  const [prevItems, setPrevItems] = useState(items);
  if (items !== prevItems) {
    setPrevItems(items);
    setVisibleCount(pageSize);
  }

  const hasMore = visibleCount < items.length;

  useEffect(() => {
    if (!hasMore) return;
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleCount((count) => Math.min(count + pageSize, items.length));
        }
      },
      // Start loading a little before the sentinel is actually on screen.
      { rootMargin: '200px' }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [hasMore, items.length, pageSize]);

  return { visible: items.slice(0, visibleCount), sentinelRef, hasMore };
}
