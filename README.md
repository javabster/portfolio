# Portfolio Website

A modern portfolio website built with Next.js 14+, TypeScript, and Tailwind CSS. Features automated content management via GitHub Issues and deploys to GitHub Pages.

## Features

- **Modern Stack**: Next.js 14+ with App Router, TypeScript, and Tailwind CSS
- **Static Site Generation**: Optimized for GitHub Pages deployment
- **Content Management**: Automated via GitHub Issues (for @javabster)
- **Three-Column Layout**: Sidebar navigation, main content feed, and filter sidebar
- **Advanced Filtering**: By content type, topics, tags, and search
- **MDX Support**: For personal blog posts with rich formatting
- **Responsive Design**: Works on mobile, tablet, and desktop

## Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
```

The static site will be generated in the `out/` directory.

## Project Structure

```
portfolio/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with sidebar
│   ├── page.tsx           # Homepage (About Me)
│   ├── blog/              # Blog listing and posts
│   ├── videos/            # Videos listing
│   ├── podcasts/          # Podcasts listing
│   └── talks/             # Talks/Workshops listing
├── components/            # React components
│   ├── Sidebar.tsx        # Left navigation sidebar
│   ├── FilterSidebar.tsx  # Right filter sidebar
│   ├── ContentFeed.tsx    # Main content feed
│   └── ContentCard.tsx    # Individual content item
├── content/               # Content files
│   ├── archive/           # Archived legacy JSON files
│   ├── data/              # New unified content JSON
│   └── blogs/             # MDX blog posts
├── lib/                   # Utilities
│   ├── content.ts         # Content loading functions
│   └── filters.ts         # Filter logic
├── types/                 # TypeScript types
│   └── content.ts         # Content type definitions
├── .github/               # GitHub Actions and templates
│   ├── workflows/
│   │   ├── deploy.yml     # GitHub Pages deployment
│   │   └── add-content.yml # Automated content addition
│   └── ISSUE_TEMPLATE/
│       └── add_content.yml # Content addition form
└── scripts/               # Utility scripts
    └── migrate-content.ts # Migration from legacy format
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
  "tags": ["personal", "first-author"],
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

1. Build the site: `npm run build`
2. The `out/` directory contains the static site
3. Deploy the contents of `out/` to your hosting provider

### GitHub Pages Configuration

The site is configured for GitHub Pages with:
- `basePath: '/portfolio'` in `next.config.ts`
- Static export enabled
- `.nojekyll` file in `public/` directory

## Color Scheme

- **Midnight Violet** (#310A31) - Primary background
- **Periwinkle** (#D4CDF4) - Light accent
- **Banana Cream** (#FFE873) - Primary highlight
- **Baltic Blue** (#306998) - Secondary
- **Tangerine** (#EE8434) - Accent

## License

MIT
