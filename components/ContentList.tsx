import { ContentItem } from '@/types/content';
import { formatEuropeanDate } from '@/lib/dates';
import { getItemHref, getTopicClass, topicLabel, tagLabel } from '@/lib/contentMeta';
import ExternalLinkIcon from './ExternalLinkIcon';
import Link from 'next/link';

interface ContentListProps {
  items: ContentItem[];
  dateOptions?: Intl.DateTimeFormatOptions;
  emptyMessage?: string;
}

const defaultDateOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long',
};

/**
 * Compact bordered list of content rows — the layout used on the Talks /
 * Workshops page. Each row links out, showing the title with the date aligned right and
 * an optional description / organization line beneath.
 */
export default function ContentList({
  items,
  dateOptions = defaultDateOptions,
  emptyMessage = 'No content yet.',
}: ContentListProps) {
  const formatDate = (dateString: string) =>
    formatEuropeanDate(dateString, {
      month: dateOptions.month === 'short' || dateOptions.month === 'narrow' ? 'short' : 'long',
      includeDay: Boolean(dateOptions.day),
    });

  if (items.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-border bg-surface/50 px-6 py-16 text-center">
        <p className="text-muted">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-surface">
      {items.map((item) => {
        const { href, external } = getItemHref(item);
        const externalProps = external
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {};
        return (
        <article key={item.id} className="group border-b border-border last:border-0">
          <Link
            href={href}
            {...externalProps}
            className="block px-5 py-4 transition-colors hover:bg-surface-hover focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-ring"
          >
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="font-medium text-foreground transition-colors group-hover:text-primary">
                {item.title}
                {external && (
                  <ExternalLinkIcon className="ml-1.5 inline-block h-3.5 w-3.5 align-[-0.15em] text-muted" />
                )}
              </h2>
              <time className="whitespace-nowrap text-sm text-muted">
                {formatDate(item.publishDate)}
              </time>
            </div>
            {item.description && (
              <p className="mt-1 line-clamp-1 text-sm text-muted">{item.description}</p>
            )}
            {item.organization && (
              <p className="mt-1 text-sm text-muted">{item.organization}</p>
            )}
            {(item.topics.length > 0 || item.tags.length > 0) && (
              <div className="mt-2.5 flex flex-wrap gap-1.5">
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
          </Link>
        </article>
        );
      })}
    </div>
  );
}
