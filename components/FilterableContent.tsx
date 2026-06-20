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

  // Colour-only highlight for the key phrases in the bio, so they pop against
  // the muted body text without the heavier feel of bold.
  const highlight = 'text-primary';

  return (
    <>
      <div className="flex-1 min-w-0">
        <div className="mx-auto max-w-4xl px-6 py-16 sm:px-10 lg:py-20">
          <header className="mb-16">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
              Developer Advocate
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              👋 Hi, I&apos;m <span className="text-primary">Abby</span>
            </h1>
            <div className="mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-muted">
              <p>
                I work in tech and I make things that{' '}
                <span className={highlight}>help people understand it better</span>. Sometimes the topic is{' '}
                <span className={highlight}>open-source Python tooling</span>, sometimes{' '}
                <span className={highlight}>AI</span>, sometimes a deep dive into{' '}
                <span className={highlight}>quantum computing</span>. Mostly I&rsquo;m just trying to be{' '}
                <span className={highlight}>the resource I wish I had</span> when I was learning these things for the first time.
              </p>
              <p>
                In my day job I&apos;m currently a{' '}
                <span className={highlight}>Developer Advocate at Meta</span>{' '}
                supporting open-source Python initiatives, before that I was at{' '}
                <span className={highlight}>IBM</span>, helping make quantum computing accessible to developers and researchers.
              </p>
              <p>
                Whatever you want to call it (Developer Relations, Technical Enablement, Developer Education, &lt;insert latest made up title here&gt;), my job is the same: I help dev teams{' '}
                <span className={highlight}>build things people love</span> by understanding{' '}
                <span className={highlight}>what their users actually need</span>, then telling the{' '}
                <span className={highlight}>project&apos;s story</span> so the right audience finds it.
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
