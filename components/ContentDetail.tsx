import Link from 'next/link';
import { ContentItem } from '@/types/content';
import { typeMeta } from '@/lib/contentMeta';
import { getYouTubeId, getResourceCtaLabel } from '@/lib/media';
import { formatEuropeanDate } from '@/lib/dates';
import ExternalLinkIcon from './ExternalLinkIcon';

interface ContentDetailProps {
  item: ContentItem;
  backHref: string;
  backLabel: string;
}

export default function ContentDetail({ item, backHref, backLabel }: ContentDetailProps) {
  const youTubeId = getYouTubeId(item);
  const meta = typeMeta[item.type];
  const formattedDate = formatEuropeanDate(item.publishDate, {
    month: 'long',
    includeDay: true,
  });

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:px-10 lg:py-20">
      <Link
        href={backHref}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-primary"
      >
        <span aria-hidden>←</span> {backLabel}
      </Link>

      <header className="mt-8">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted">
          <span className={`h-2 w-2 rounded-full ${meta?.dot ?? 'bg-primary'}`} />
          {meta?.label ?? item.type}
        </div>

        <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
          {item.title}
        </h1>

        <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-muted">
          <time>{formattedDate}</time>
          {item.organization && (
            <>
              <span className="text-border">•</span>
              <span>{item.organization}</span>
            </>
          )}
        </div>
      </header>

      {item.description && (
        <p className="mt-6 text-lg leading-relaxed text-muted">{item.description}</p>
      )}

      <div className="mt-8">
        {youTubeId ? (
          <>
            <div className="relative aspect-video overflow-hidden rounded-xl border border-border bg-surface">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube.com/embed/${youTubeId}`}
                title={item.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-primary"
            >
              Watch on YouTube <ExternalLinkIcon />
            </a>
          </>
        ) : (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-contrast shadow-sm transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {getResourceCtaLabel(item.url)} <ExternalLinkIcon className="h-4 w-4" />
          </a>
        )}
      </div>
    </div>
  );
}
