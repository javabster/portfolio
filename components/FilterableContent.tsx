'use client';

import { ContentItem } from '@/types/content';
import ContentFeed from './ContentFeed';
import FilterSidebar from './FilterSidebar';
import { useContentFilters } from './useContentFilters';
import { useInfiniteScroll } from './useInfiniteScroll';

interface FilterableContentProps {
  allContent: ContentItem[];
}

export default function FilterableContent({ allContent }: FilterableContentProps) {
  const { filters, handleChange, filtered, topics, tags } = useContentFilters(allContent);
  const { visible, sentinelRef, hasMore } = useInfiniteScroll(filtered);

  return (
    <>
      <div className="flex-1 min-w-0">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 lg:py-20">
          <header className="mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              👋 Hi, I&apos;m <span className="text-primary">Abby</span>
            </h1>
            <div className="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-muted">
              <p>
                I work in tech and I make things that help people understand it better. Sometimes the topic is open-source Python tooling, sometimes AI, sometimes a deep dive into quantum computing. Mostly I&rsquo;m just trying to be the resource I wish I had when I was learning these things for the first time.
              </p>
              <p>
                In my day job I&apos;m currently a Developer Advocate at Meta supporting open-source Python initiatives, before that I was at IBM, helping make quantum computing accessible to developers and researchers.
              </p>
              <p>
                Whatever you want to call it (Developer Relations, Technical Enablement, Developer Education, &lt;insert latest made up title here&gt;), my job is the same: I help dev teams build things people love by understanding what their users actually need, then telling the project&apos;s story so the right audience finds it.
              </p>
            </div>
          </header>

          <section>
            <div className="mb-8 flex items-center gap-4">
              <h2 className="text-xs font-bold uppercase tracking-widest text-muted">
                All Content
              </h2>
              <div className="h-px flex-1 bg-border" />
            </div>
            <ContentFeed items={visible} />
            {hasMore && <div ref={sentinelRef} aria-hidden className="h-px" />}
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
