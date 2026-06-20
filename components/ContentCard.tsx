import { ContentItem } from '@/types/content';
import { typeMeta, getItemHref, getTopicClass, topicLabel, tagLabel } from '@/lib/contentMeta';
import { formatEuropeanDate } from '@/lib/dates';
import ExternalLinkIcon from './ExternalLinkIcon';
import Link from 'next/link';

interface ContentCardProps {
  item: ContentItem;
}

export default function ContentCard({ item }: ContentCardProps) {
  const formatDate = (dateString: string) =>
    formatEuropeanDate(dateString, { month: 'short', includeDay: true });

  const meta = typeMeta[item.type];
  const { href, external } = getItemHref(item);

  return (
    <article className="group relative rounded-xl border border-border bg-surface p-5 transition-all duration-200 hover:border-primary/40 hover:bg-surface-hover hover:shadow-lg hover:shadow-black/5 hover:-translate-y-0.5">
      <Link
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className="absolute inset-0 rounded-xl focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        aria-label={item.title}
      />

      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted">
        <span className={`h-2 w-2 rounded-full ${meta?.dot ?? 'bg-primary'}`} />
        {meta?.label ?? item.type}
      </div>

      <h3 className="mt-3 text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
        {item.title}
        {external && (
          <ExternalLinkIcon className="ml-1.5 inline-block h-3.5 w-3.5 align-[-0.15em] text-muted" />
        )}
      </h3>

      {item.description && (
        <p className="mt-2 line-clamp-2 leading-relaxed text-muted">
          {item.description}
        </p>
      )}

      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-muted">
        <time>{formatDate(item.publishDate)}</time>
        {item.organization && (
          <>
            <span className="text-border">•</span>
            <span>{item.organization}</span>
          </>
        )}
      </div>

      {(item.topics.length > 0 || item.tags.length > 0) && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {item.topics.map((topic) => (
            <span
              key={topic}
              className={`rounded-full border px-2 py-0.5 text-[11px] font-medium ${getTopicClass(topic)}`}
            >
              {topicLabel(topic)}
            </span>
          ))}
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-surface-2 px-2 py-0.5 text-[11px] font-medium text-muted"
            >
              {tagLabel(tag)}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
