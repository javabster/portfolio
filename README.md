# Portfolio Website

A modern portfolio website built with Next.js 16, TypeScript, and Tailwind CSS. Features automated content management via GitHub Issues and deploys to GitHub Pages (custom domain: [www.abbymitchell.dev](https://www.abbymitchell.dev)).

## Features

- **Modern Stack**: Next.js 16 with App Router, TypeScript, and Tailwind CSS v4
- **Static Site Generation**: Static export (`output: 'export'`) for GitHub Pages
- **Content Management**: Automated via GitHub Issues (for @javabster)
- **Three-Column Layout**: Sidebar navigation, main content feed, and filter sidebar
- **Infinite Scroll**: The homepage feed pages in all content as you scroll
- **Advanced Filtering**: By content type, topics, tags, and search (synced to the URL)
- **Light & Dark Mode**: Theme toggle with system-preference default
- **MDX Support**: For personal blog posts with rich formatting
- **Responsive Design**: Works on mobile, tablet, and desktop

## Getting Started

### Prerequisites

- Node.js 20+
- Yarn (this project uses Yarn — see [CONTRIBUTING.md](CONTRIBUTING.md#development); don't use npm)

### Installation

```bash
yarn install
```

### Development

```bash
yarn dev
```

Open [http://localhost:3100](http://localhost:3100) to view the site. (The dev server runs on port 3100 — set via `next dev -p 3100` — to avoid colliding with other local apps such as Docusaurus, which defaults to 3000.)

### Build

```bash
yarn build
```

The static site will be generated in the `out/` directory.

## Project Structure

```
portfolio/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with sidebar
│   ├── page.tsx           # Homepage (About Me + content feed)
│   ├── globals.css        # Tailwind v4 theme tokens (light/dark)
│   ├── icon.svg           # Favicon source (AM monogram + gradient)
│   ├── blog/              # Blog listing and in-site MDX posts
│   ├── videos/            # Videos listing + detail pages
│   ├── podcasts/          # Podcasts listing
│   └── talks/             # Talks/Workshops listing + detail pages
├── components/            # React components
│   ├── Sidebar.tsx        # Left navigation sidebar
│   ├── FilterSidebar.tsx  # Right filter sidebar
│   ├── FilterableContent.tsx # Homepage feed + filters
│   ├── ContentFeed.tsx    # Card grid
│   ├── ContentCard.tsx    # Individual content item
│   ├── ContentList.tsx    # Compact list rows (type pages)
│   ├── useInfiniteScroll.ts  # Infinite-scroll hook
│   └── useContentFilters.ts  # Filter state + URL sync
├── content/               # Content files
│   ├── archive/           # Archived legacy JSON files
│   ├── data/              # Unified content JSON (content.json)
│   └── blogs/             # MDX blog posts (in-site)
├── lib/                   # Utilities
│   ├── content.ts         # Content loading functions
│   ├── blog.ts            # MDX blog loading
│   ├── contentMeta.ts     # Type/topic/tag colours, labels, descriptions
│   ├── filters.ts         # Filter logic
│   ├── media.ts           # YouTube embed / CTA helpers
│   └── dates.ts           # Date formatting
├── types/                 # TypeScript types
│   └── content.ts         # Content type definitions
├── .github/               # GitHub Actions and templates
│   ├── workflows/
│   │   ├── deploy.yml     # GitHub Pages deployment
│   │   └── add-content.yml # Automated content addition
│   └── ISSUE_TEMPLATE/
│       └── add_content.yml # Content addition form
└── scripts/               # Utility scripts
    ├── migrate-content.ts # Migration from legacy format
    └── generate-favicon.mjs # Regenerate favicon.ico/apple-icon.png from icon.svg
```

## Content Management

### Adding Content via GitHub Issues

1. Go to the repository's Issues tab
2. Click "New Issue" and select "Add Content"
3. Fill out the form with content details
4. Submit the issue (only @javabster can trigger automation)
5. GitHub Action will automatically create the content file and deploy

### Manual Content Addition

Add JSON files to `content/data/` following the `ContentItem` interface:

```typescript
{
  "id": "my-content-slug",
  "title": "My Content Title",
  "type": "blog", // blog | video | podcast | talk
  "url": "https://example.com",
  "embedId": "youtube-id", // optional, for videos
  "description": "Content description",
  "topics": ["open-source", "python"],
  "tags": ["personal"], // first authorship is the default and carries no tag
  "publishDate": "2024-01-15T00:00:00.000Z",
  "organization": "IBM Quantum" // optional
}
```

### Topics & Tags

Topics and tags are typed values (defined in `types/content.ts`). You assign them
to content via the `topics` / `tags` arrays above, and the filters pick them up
automatically. **Adding a new topic** also involves giving it a colour/label in
`lib/contentMeta.ts` — see [Managing Topics & Tags](CONTRIBUTING.md#managing-topics--tags)
in the contributing guide for the full steps.

### MDX Blog Posts

Create `.mdx` files in `content/blogs/` with frontmatter:

```mdx
---
title: "My Blog Post"
publishDate: "2024-01-15"
description: "Post description"
topics: ["web-technologies"]
tags: ["personal"]
---

# My Blog Post

Content goes here...
```

## Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch.

### Manual Deployment

1. Build the site: `yarn build`
2. The `out/` directory contains the static site
3. Deploy the contents of `out/` to your hosting provider

### GitHub Pages Configuration

The site is served from a custom domain and configured with:
- Static export (`output: 'export'`) in `next.config.ts` (no `basePath` — it's served from the domain root)
- `images: { unoptimized: true }` (required for static export)
- Custom domain via `public/CNAME` (`www.abbymitchell.dev`)
- `.nojekyll` file in `public/` directory

## Color Scheme

The brand palette (defined in `app/globals.css`) is consistent across themes; the
semantic surface/text tokens re-map per theme (light vs. dark):

- **Midnight Violet** (#310A31) — dark-mode backgrounds / light-mode ink
- **Periwinkle** (#D4CDF4) — light-mode sidebar rails & accents
- **Banana Cream** (#FFE873) — active-highlight accent
- **Baltic Blue** (#306998) — primary / links
- **Tangerine** (#EE8434) — accent

## License

MIT
