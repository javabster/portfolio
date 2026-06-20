'use client';

import { useState } from 'react';
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

  return (
    <aside className="hidden w-72 shrink-0 lg:block">
      {/* Share the left rail's brand tint so both sidebars read as a matched
          pair; the 70% alpha keeps it a touch lighter than the solid left rail. */}
      <div className="sticky top-0 h-screen overflow-y-auto border-l border-brand-border bg-brand/70 px-6 py-10">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-bold uppercase tracking-widest text-muted">
            Filter
          </h2>
          {hasActiveFilters(filters) && (
            <button
              onClick={() => onChange(emptyFilters)}
              className="text-xs font-medium text-primary transition-opacity hover:opacity-80"
            >
              Clear all
            </button>
          )}
        </div>

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
      </div>
    </aside>
  );
}
