'use client';

import { ContentItem } from '@/types/content';
import ContentFeed from './ContentFeed';
import FilterSidebar from './FilterSidebar';
import { useContentFilters } from './useContentFilters';

interface FilterableContentProps {
  allContent: ContentItem[];
}

export default function FilterableContent({ allContent }: FilterableContentProps) {
  const { filters, handleChange, filtered, topics, tags } = useContentFilters(allContent);

  return (
    <>
      <div className="flex-1 min-w-0">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 lg:py-20">
          <header className="mb-16">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
              Developer Advocate
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Hi, I&apos;m <span className="text-primary">Abby</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              I&apos;m a Developer Advocate at IBM Quantum, where I lead a team
              focused on Qiskit, IBM&apos;s open-source SDK for quantum computing.
              I write about quantum computing, open source, and web technologies.
            </p>
          </header>

          <section>
            <div className="mb-8 flex items-center gap-4">
              <h2 className="text-xs font-bold uppercase tracking-widest text-muted">
                Recent Content
              </h2>
              <div className="h-px flex-1 bg-border" />
            </div>
            <ContentFeed items={filtered.slice(0, 10)} />
          </section>
        </div>
      </div>
      <FilterSidebar
        filters={filters}
        onChange={handleChange}
        topics={topics}
        tags={tags}
        showType
      />
    </>
  );
}
