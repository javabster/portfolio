import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { ContentItem, Tag, Topic } from '@/types/content';

const blogsDirectory = path.join(process.cwd(), 'content/blogs');

export interface PersonalBlog {
  slug: string;
  title: string;
  description: string;
  publishDate: string; // ISO 8601
  topics: Topic[];
  tags: Tag[];
  content: string; // raw MDX body (frontmatter stripped)
}

function toStringArray(value: unknown): string[] {
  return Array.isArray(value) ? value.filter((v): v is string => typeof v === 'string') : [];
}

function toIsoDate(value: unknown): string {
  if (value instanceof Date && !isNaN(value.getTime())) return value.toISOString();
  if (typeof value === 'string' && value) {
    const parsed = new Date(value);
    if (!isNaN(parsed.getTime())) return parsed.toISOString();
  }
  return new Date(0).toISOString();
}

function readBlogFile(filename: string): PersonalBlog {
  const raw = fs.readFileSync(path.join(blogsDirectory, filename), 'utf8');
  const { data, content } = matter(raw);
  const slug = filename.replace(/\.mdx?$/, '');

  const tags = toStringArray(data.tags);
  if (!tags.includes('personal')) tags.push('personal');

  return {
    slug,
    title: typeof data.title === 'string' ? data.title : slug,
    description: typeof data.description === 'string' ? data.description : '',
    publishDate: toIsoDate(data.publishDate),
    topics: toStringArray(data.topics) as Topic[],
    tags: tags as Tag[],
    content: content.trim(),
  };
}

export function getAllPersonalBlogs(): PersonalBlog[] {
  if (!fs.existsSync(blogsDirectory)) return [];
  return fs
    .readdirSync(blogsDirectory)
    .filter((file) => file.endsWith('.md') || file.endsWith('.mdx'))
    .map(readBlogFile);
}

export function getPersonalBlogBySlug(slug: string): PersonalBlog | null {
  return getAllPersonalBlogs().find((blog) => blog.slug === slug) ?? null;
}

/** Personal blogs as ContentItems (metadata only) for the listings/feed. */
export function getPersonalBlogsAsContent(): ContentItem[] {
  return getAllPersonalBlogs().map((blog) => ({
    id: blog.slug,
    title: blog.title,
    type: 'blog' as const,
    url: `/blog/${blog.slug}`,
    description: blog.description,
    topics: blog.topics,
    tags: blog.tags,
    publishDate: blog.publishDate,
    isLocal: true,
  }));
}

/** Remove a leading H1 from the body (the post page renders the title separately). */
export function stripLeadingH1(markdown: string): string {
  return markdown.replace(/^\s*#\s+.*(?:\n|$)/, '');
}
