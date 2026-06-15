import React from 'react';
import Link from 'next/link';
import ExternalLinkIcon from './ExternalLinkIcon';

type ElProps<T extends HTMLElement> = React.HTMLAttributes<T>;

/**
 * Maps MDX/Markdown elements to components styled with the site's design
 * tokens. Passed to <MDXRemote components={mdxComponents} />. External links
 * open in a new tab with the external-link icon; internal links use next/link.
 */
export const mdxComponents = {
  h1: (props: ElProps<HTMLHeadingElement>) => (
    <h1 className="mt-10 mb-4 text-3xl font-bold tracking-tight text-foreground" {...props} />
  ),
  h2: (props: ElProps<HTMLHeadingElement>) => (
    <h2 className="mt-10 mb-3 text-2xl font-bold tracking-tight text-foreground" {...props} />
  ),
  h3: (props: ElProps<HTMLHeadingElement>) => (
    <h3 className="mt-8 mb-2 text-xl font-semibold text-foreground" {...props} />
  ),
  h4: (props: ElProps<HTMLHeadingElement>) => (
    <h4 className="mt-6 mb-2 text-lg font-semibold text-foreground" {...props} />
  ),
  p: (props: ElProps<HTMLParagraphElement>) => (
    <p className="my-4 leading-relaxed text-foreground/90" {...props} />
  ),
  ul: (props: ElProps<HTMLUListElement>) => (
    <ul className="my-5 list-disc space-y-1.5 pl-6 leading-relaxed text-foreground/90 marker:text-muted" {...props} />
  ),
  ol: (props: ElProps<HTMLOListElement>) => (
    <ol className="my-5 list-decimal space-y-1.5 pl-6 leading-relaxed text-foreground/90 marker:text-muted" {...props} />
  ),
  blockquote: (props: ElProps<HTMLQuoteElement>) => (
    <blockquote className="my-5 border-l-4 border-primary/40 pl-4 italic text-muted" {...props} />
  ),
  hr: (props: ElProps<HTMLHRElement>) => <hr className="my-8 border-border" {...props} />,
  strong: (props: ElProps<HTMLElement>) => (
    <strong className="font-semibold text-foreground" {...props} />
  ),
  code: (props: ElProps<HTMLElement>) => (
    <code className="rounded bg-surface-2 px-1.5 py-0.5 font-mono text-[0.9em] text-foreground" {...props} />
  ),
  // Code blocks: reset the inline <code> styling for the nested element.
  pre: (props: ElProps<HTMLPreElement>) => (
    <pre
      className="my-5 overflow-x-auto rounded-xl border border-border bg-surface-2 p-4 text-sm [&>code]:bg-transparent [&>code]:p-0 [&>code]:text-inherit"
      {...props}
    />
  ),
  a: ({ href = '', children, ...rest }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const external = /^https?:\/\//.test(href);
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-medium text-link underline underline-offset-2 transition-colors hover:text-primary"
          {...rest}
        >
          {children}
          <ExternalLinkIcon className="h-3.5 w-3.5" />
        </a>
      );
    }
    return (
      <Link
        href={href}
        className="font-medium text-link underline underline-offset-2 transition-colors hover:text-primary"
        {...rest}
      >
        {children}
      </Link>
    );
  },
  img: ({ src = '', alt = '' }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={typeof src === 'string' ? src : ''} alt={alt} className="my-6 rounded-xl border border-border" />
  ),
};
