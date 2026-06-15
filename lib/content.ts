import fs from 'fs';
import path from 'path';
import { ContentItem } from '@/types/content';
import { getPersonalBlogsAsContent } from './blog';

const contentDirectory = path.join(process.cwd(), 'content/data');

export function getAllContent(): ContentItem[] {
  const content: ContentItem[] = [];

  // Load JSON content files (external blogs, videos, talks, podcasts)
  if (fs.existsSync(contentDirectory)) {
    const files = fs.readdirSync(contentDirectory);
    files.forEach(file => {
      if (file.endsWith('.json')) {
        const filePath = path.join(contentDirectory, file);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const items = JSON.parse(fileContent);
        if (Array.isArray(items)) {
          content.push(...items);
        } else {
          content.push(items);
        }
      }
    });
  }

  // Load personal blog posts authored as markdown in content/blogs
  content.push(...getPersonalBlogsAsContent());

  // Sort by publish date (newest first)
  return content.sort((a, b) =>
    new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
  );
}

export function getContentByType(type: string): ContentItem[] {
  return getAllContent().filter(item => item.type === type);
}

export function getContentById(id: string): ContentItem | undefined {
  return getAllContent().find(item => item.id === id);
}

export function getAllTopics(): string[] {
  const content = getAllContent();
  const topics = new Set<string>();
  content.forEach(item => {
    item.topics.forEach(topic => topics.add(topic));
  });
  return Array.from(topics).sort();
}

export function getAllTags(): string[] {
  const content = getAllContent();
  const tags = new Set<string>();
  content.forEach(item => {
    item.tags.forEach(tag => tags.add(tag));
  });
  return Array.from(tags).sort();
}
