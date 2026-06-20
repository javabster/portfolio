'use client';

import { useEffect, useState } from 'react';
import { FilterState, emptyFilters, hasActiveFilters } from '@/lib/filters';
import {
  getTopicClass,
  getTopicActiveClass,
  topicLabel,
  tagLabel,
  tagDescription,
} from '@/lib/contentMeta';

interface FilterSidebarProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  topics: string[];
  tags: string[];
  /** Whether to show the content-type filter (hidden on single-type pages). */
  showType?: boolean;
}

export default function FilterSidebar({
  filters,
  onChange,
  topics,
  tags,
  showType = true,
}: FilterSidebarProps) {
  // Which tag's description is currently shown (hovered or keyboard-focused).
  const [hoveredTag, setHoveredTag] = useState<string | null>(null);
  // Whether the mobile filter drawer is open (no effect at/above lg).
  const [open, setOpen] = useState(false);

  // Lock body scroll and allow Escape to dismiss while the drawer is open.
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const activeCount =
    filters.topics.length +
    filters.tags.length +
    (filters.type ? 1 : 0) +
    (filters.search ? 1 : 0);

  const handleTypeChange = (type: string | undefined) => {
    onChange({ ...filters, type });
  };

  const handleTopicToggle = (topic: string) => {
    const topics = filters.topics.includes(topic)
      ? filters.topics.filter((t) => t !== topic)
      : [...filters.topics, topic];
    onChange({ ...filters, topics });
  };

  const handleTagToggle = (tag: string) => {
    const tags = filters.tags.includes(tag)
      ? filters.tags.filter((t) => t !== tag)
      : [...filters.tags, tag];
    onChange({ ...filters, tags });
  };

  const handleSearchChange = (search: string) => {
    onChange({ ...filters, search });
  };

  const contentTypes = [
    { value: undefined, label: 'All' },
    { value: 'blog', label: 'Blog' },
    { value: 'talk', label: 'Talks / Workshops' },
    { value: 'video', label: 'Videos' },
    { value: 'podcast', label: 'Podcasts' },
  ];

  const chipBase =
    'rounded-full border px-3 py-1.5 text-xs font-medium transition-colors duration-150 cursor-pointer';
  const chipOn = 'border-primary bg-primary text-primary-contrast';
  const chipOff =
    'border-border bg-surface text-muted hover:border-primary/50 hover:text-foreground';

  const clearAll = hasActiveFilters(filters) ? (
    <button
      onClick={() => onChange(emptyFilters)}
      className="text-xs font-medium text-primary transition-opacity hover:opacity-80"
    >
      Clear all
    </button>
  ) : null;

  // The filter controls, shared by the desktop rail and the mobile drawer.
  const body = (
    <>
        <div className="mt-6">
          <input
            type="text"
            value={filters.search}
            onChange={(e) => handleSearchChange(e.target.value)}
            placeholder="Search…"
            className="w-full rounded-lg border border-border bg-surface px-4 py-2.5 text-sm text-foreground placeholder:text-muted/70 transition-shadow focus:outline-none focus:ring-1 focus:ring-ring dark:focus:ring-banana-cream"
          />
        </div>

        {showType && (
          <div className="mt-8">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted">
              Type
            </h3>
            <div className="flex flex-wrap gap-2">
              {contentTypes.map((type) => {
                const active = filters.type === type.value;
                return (
                  <button
                    key={type.label}
                    onClick={() => handleTypeChange(type.value)}
                    aria-pressed={active}
                    className={`${chipBase} ${active ? chipOn : chipOff}`}
                  >
                    {type.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {topics.length > 0 && (
          <div className="mt-8">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted">
              Topics
            </h3>
            <div className="flex flex-wrap gap-2">
              {topics.map((topic) => {
                const active = filters.topics.includes(topic);
                return (
                  <button
                    key={topic}
                    onClick={() => handleTopicToggle(topic)}
                    aria-pressed={active}
                    className={`${chipBase} ${
                      active
                        ? `${getTopicActiveClass(topic)} shadow-sm`
                        : `${getTopicClass(topic)} opacity-60 hover:opacity-100 dark:opacity-100`
                    }`}
                  >
                    {topicLabel(topic)}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {tags.length > 0 && (
          <div className="mt-8">
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted">
              Tags
            </h3>
            <div className="relative flex flex-wrap gap-2">
              {tags.map((tag) => {
                const active = filters.tags.includes(tag);
                const hasDescription = Boolean(tagDescription(tag));
                return (
                  <button
                    key={tag}
                    onClick={() => handleTagToggle(tag)}
                    onMouseEnter={() => setHoveredTag(tag)}
                    onMouseLeave={() =>
                      setHoveredTag((current) => (current === tag ? null : current))
                    }
                    onFocus={() => setHoveredTag(tag)}
                    onBlur={() =>
                      setHoveredTag((current) => (current === tag ? null : current))
                    }
                    aria-pressed={active}
                    aria-describedby={
                      hasDescription ? `tag-desc-${tag}` : undefined
                    }
                    className={`${chipBase} ${active ? chipOn : chipOff}`}
                  >
                    {tagLabel(tag)}
                  </button>
                );
              })}
              {/* One shared tooltip spanning the list width so it never overflows
                  the (horizontally-clipped) sidebar, wherever a chip wraps. */}
              {hoveredTag && tagDescription(hoveredTag) && (
                <div
                  id={`tag-desc-${hoveredTag}`}
                  role="tooltip"
                  className="absolute left-0 right-0 top-full z-10 mt-2 rounded-md border border-border bg-surface px-3 py-2 text-xs font-normal leading-snug text-muted shadow-md"
                >
                  {tagDescription(hoveredTag)}
                </div>
              )}
            </div>
          </div>
        )}
    </>
  );

  return (
    <>
      {/* Desktop filter rail. */}
      <aside className="hidden w-72 shrink-0 lg:block">
        {/* Share the left rail's brand tint so both sidebars read as a matched
            pair; the 70% alpha keeps it a touch lighter than the solid left rail. */}
        <div className="sticky top-0 h-screen overflow-y-auto border-l border-brand-border bg-brand/70 px-6 py-10">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-bold uppercase tracking-widest text-muted">
              Filter
            </h2>
            {clearAll}
          </div>
          {body}
        </div>
      </aside>

      {/* Mobile trigger — floats opposite the theme toggle so the two don't collide. */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        className="lg:hidden fixed bottom-5 left-5 z-40 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2.5 text-sm font-medium text-foreground shadow-lg shadow-black/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
      >
        <FilterIcon />
        Filters
        {activeCount > 0 && (
          <span className="ml-0.5 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1.5 text-[11px] font-semibold text-primary-contrast">
            {activeCount}
          </span>
        )}
      </button>

      {/* Mobile slide-in filter drawer. */}
      {open && (
        <div
          className="lg:hidden fixed inset-0 z-50"
          role="dialog"
          aria-modal="true"
          aria-label="Filters"
        >
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <div className="absolute inset-y-0 right-0 flex w-80 max-w-[85%] flex-col bg-brand shadow-xl">
            <div className="flex items-center justify-between border-b border-brand-border px-6 py-4">
              <h2 className="text-xs font-bold uppercase tracking-widest text-muted">
                Filter
              </h2>
              <div className="flex items-center gap-4">
                {clearAll}
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close filters"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-surface-hover focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  <CloseIcon />
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto px-6 pb-8">{body}</div>
          </div>
        </div>
      )}
    </>
  );
}

function FilterIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
      aria-hidden
    >
      <path d="M3 5h18M6 12h12M10 19h4" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}
