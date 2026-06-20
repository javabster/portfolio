import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { PersonalBlog, stripLeadingH1 } from '@/lib/blog';
import { formatEuropeanDate } from '@/lib/dates';
import { getTopicClass, topicLabel, tagLabel } from '@/lib/contentMeta';
import { mdxComponents } from './mdx-components';

export default function BlogPost({ post }: { post: PersonalBlog }) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 sm:px-10 lg:py-20">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-primary"
      >
        <span aria-hidden>←</span> Blog
      </Link>

      <header className="mt-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          Personal blog
        </p>

        <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
          {post.title}
        </h1>

        <div className="mt-3 text-sm text-muted">
          <time>{formatEuropeanDate(post.publishDate, { month: 'long', includeDay: true })}</time>
        </div>

        {(post.topics.length > 0 || post.tags.length > 0) && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {post.topics.map((topic) => (
              <span
                key={topic}
                className={`rounded-full border px-2 py-0.5 text-[11px] font-medium ${getTopicClass(topic)}`}
              >
                {topicLabel(topic)}
              </span>
            ))}
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-surface-2 px-2 py-0.5 text-[11px] font-medium text-muted"
              >
                {tagLabel(tag)}
              </span>
            ))}
          </div>
        )}
      </header>

      <article className="mt-8 border-t border-border pt-8">
        <MDXRemote source={stripLeadingH1(post.content)} components={mdxComponents} />
      </article>
    </div>
  );
}
