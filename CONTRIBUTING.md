# Contributing to the Portfolio

## Adding Content

Content can be added in two ways:

### 1. GitHub Issues

The easiest way to add content is via GitHub Issues:

1. Navigate to the [Issues tab](https://github.com/javabster/portfolio/issues)
2. Click "New Issue"
3. Select the "Add Content" template
4. Fill out the form with your content details:
   - **Title**: The title of your content
   - **Type**: blog, video, podcast, or talk
   - **URL**: Link to the external content
   - **Embed ID**: YouTube video ID (for videos only)
   - **Description**: Brief description
   - **Topics**: Select relevant topics
   - **Tags**: Select relevant tags
   - **Publish Date**: In YYYY-MM-DD format
   - **Organization**: Optional organizatio / event name
5. Submit the issue

A GitHub Action will automatically:
- Parse the issue
- Create a new content JSON file
- Commit and push the changes
- Close the issue with a confirmation comment
- Trigger a site rebuild and deployment

**Note**: Only issues opened by @javabster will trigger the automation.

### 2. Manual Pull Request

You can also submit content via pull request:

1. Fork the repository
2. Create a new branch
3. Add your content to `content/data/` as a JSON file following the `ContentItem` interface
4. Submit a pull request

## Content Format

### ContentItem Interface

```typescript
{
  "id": "unique-slug",           // URL-friendly slug
  "title": "Content Title",       // Display title
  "type": "blog",                 // blog | video | podcast | talk
  "url": "https://...",            // External URL
  "embedId": "youtube-id",        // Optional: YouTube video ID
  "description": "Description",   // Brief description
  "topics": ["topic1", "topic2"], // Array of topics
  "tags": ["tag1"],               // Array of tags
  "publishDate": "2024-01-15T00:00:00.000Z", // ISO date string
  "organization": "Org Name"      // Optional organization / event name
}
```

### Available Topics

- `open-source`
- `python`
- `quantum-computing`
- `scientific-computing`
- `pyrefly`
- `web-technologies`
- `women-in-tech`
- `ml-ai`

### Available Tags

- `personal`
- `ghostwriter-editor`
- `popular`

> **First authorship is the default** and is intentionally *not* tagged — tags
> only mark exceptions (e.g. a ghostwritten/edited piece). So a first-authored
> item simply has no authorship tag.

## Managing Topics & Tags

Topics and tags are **typed** — the allowed values are defined in
`types/content.ts`. Assigning them to a piece of content is separate from
defining a new one.

### Assigning topics/tags to content

In a JSON item (`content/data/content.json`) or in MDX frontmatter, list the
slugs:

```json
"topics": ["quantum-computing", "open-source"],
"tags": ["ghostwriter-editor"]
```

The Topics/Tags **filters update automatically** — they're derived from whatever
appears in your content, so you don't configure them anywhere.

### Adding a new topic

1. **Define it** — add the slug (kebab-case) to the `Topic` union in
   `types/content.ts`:

   ```ts
   export type Topic =
     | 'open-source'
     // ...
     | 'my-new-topic'; // ← add
   ```

2. **Give it a colour** — in `lib/contentMeta.ts`, add it to `topicColors`,
   mapping it to one of the brand colours (`baltic-blue`, `tangerine`,
   `banana-cream`, `periwinkle`, `midnight-violet`):

   ```ts
   const topicColors = {
     // ...
     'my-new-topic': 'tangerine',
   };
   ```

   Topics with no entry fall back to `DEFAULT_COLOR`. The chip tint, the inactive
   filter chip, and the solid active filter chip all derive from this one choice.

3. **(Optional) Set a display name** — by default the slug is shown with hyphens
   replaced by spaces (`my-new-topic` → "my new topic"). For proper nouns or
   custom casing, add an entry to `topicLabels` in the same file:

   ```ts
   const topicLabels = {
     // ...
     'my-new-topic': 'My New Topic',
   };
   ```

4. **(Issue form only)** If you add content via the GitHub Issue form, add a
   matching checkbox under `topics` in
   `.github/ISSUE_TEMPLATE/add_content.yml`.

### Adding a new tag

1. Add the slug to the `Tag` union in `types/content.ts`.
2. **(Issue form only)** add a matching checkbox under `tags` in
   `.github/ISSUE_TEMPLATE/add_content.yml`.
3. **(Optional) Set a display name** — by default the slug is shown with hyphens
   replaced by spaces (`my-new-tag` → "my new tag"). For proper nouns or
   custom casing, add an entry to `tagLabels` in `lib/contentMeta.ts`:

   ```ts
   const tagLabels: Record<string, string> = {
     // ...
     'my-new-tag': 'My New Tag',
   };
   ```

4. **(Optional) Add a hover description** — tags show a short tooltip on
   hover/focus in the filter sidebar. Add an entry to `tagDescriptions` in
   `lib/contentMeta.ts` (tags with no entry simply show no tooltip):

   ```ts
   const tagDescriptions: Record<string, string> = {
     // ...
     'my-new-tag': 'What this tag means, in one line.',
   };
   ```

Tags use a single neutral chip style (no per-tag colour), so there's no colour
to configure — only the optional label and description above.

### Changing a topic's colour or label

- **Colour:** change the topic's entry in `topicColors` (`lib/contentMeta.ts`).
- **Label:** change/add its entry in `topicLabels` (same file).
- **The chip styling itself** (the tint and solid-fill classes for each brand
  colour) lives in `colorStyles` in the same file. To introduce a brand-new
  colour, first add it to the palette in `app/globals.css` (`@theme`), then add a
  `colorStyles` entry for it.

### Renaming or removing a topic/tag

Update the slug in `types/content.ts`, `lib/contentMeta.ts`, the issue template,
**and** every content item that used the old slug (`content/data/*.json` and MDX
frontmatter). TypeScript will flag any content still referencing a removed value.

## MDX Blog Posts

For personal blog posts with rich formatting, create MDX files in `content/blogs/`:

```mdx
---
title: "My Blog Post"
publishDate: "2024-01-15"
description: "A brief description"
topics: ["web-technologies", "open-source"]
tags: ["personal"]
---

# My Blog Post

Your content here with full Markdown and JSX support!
```

## Development

This project uses **Yarn** (a single `yarn.lock` is the source of truth, and CI
installs with `yarn install --frozen-lockfile`). Use `yarn`, not `npm`, so a
conflicting `package-lock.json` isn't created.

### Setup

```bash
yarn install
yarn dev
```

### Building

```bash
yarn build
```

### Project Structure

- `app/` - Next.js pages and layouts
- `components/` - React components
- `content/` - Content files (JSON and MDX)
- `lib/` - Utility functions
- `types/` - TypeScript definitions
- `.github/` - GitHub Actions and templates

## Questions?

Feel free to open an issue for questions or suggestions!
