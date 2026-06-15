import { ContentItem, Tag, Topic } from '@/types/content';

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function mapVideoCategoryToTopics(category: string): Topic[] {
  const topicMap: Record<string, Topic[]> = {
    'qiskit': ['quantum-computing', 'open-source'],
    'python': ['python'],
    'tutorial': ['web-technologies'],
  };
  return topicMap[category.toLowerCase()] || [];
}

function mapVideoTypeToTags(type: string): Tag[] {
  const tagMap: Record<string, Tag[]> = {
    'tutorial': ['personal'],
    'talk': ['first-author'],
    'demo': ['personal'],
  };
  return tagMap[type.toLowerCase()] || ['personal'];
}

function convertTimestampToISO(timestamp: number): string {
  return new Date(timestamp).toISOString();
}

// Migration script - run this to convert old JSON files to new format
async function migrateContent() {
  const fs = require('fs');
  const path = require('path');

  const archiveDir = path.join(process.cwd(), 'content/archive');
  const outputDir = path.join(process.cwd(), 'content/data');

  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const allContent: ContentItem[] = [];

  // Migrate videos.json
  const videosPath = path.join(archiveDir, 'videos.json');
  if (fs.existsSync(videosPath)) {
    const videos = JSON.parse(fs.readFileSync(videosPath, 'utf8'));
    videos.forEach((video: any) => {
      allContent.push({
        id: slugify(video.title),
        title: video.title,
        type: 'video',
        url: video.link,
        embedId: video.embedId,
        description: video.description || '',
        topics: mapVideoCategoryToTopics(video.category || ''),
        tags: mapVideoTypeToTags(video.type || ''),
        publishDate: convertTimestampToISO(video.published),
        organization: video.org,
        category: video.category,
      });
    });
  }

  // Migrate talks.json
  const talksPath = path.join(archiveDir, 'talks.json');
  if (fs.existsSync(talksPath)) {
    const talks = JSON.parse(fs.readFileSync(talksPath, 'utf8'));
    talks.forEach((talk: any) => {
      const topics: Topic[] = [];
      if (Array.isArray(talk.category)) {
        talk.category.forEach((cat: any) => {
          if (typeof cat === 'string') {
            topics.push(cat.toLowerCase().replace(/\s+/g, '-') as Topic);
          }
        });
      } else if (typeof talk.category === 'string') {
        topics.push(talk.category.toLowerCase().replace(/\s+/g, '-') as Topic);
      }

      // Add quantum-computing topic for quantum talks
      if (talk.type === 'quantum' && !topics.includes('quantum-computing')) {
        topics.push('quantum-computing');
      }
      // Add web-technologies for web-dev talks
      if (talk.type === 'web-dev' && !topics.includes('web-technologies')) {
        topics.push('web-technologies');
      }

      allContent.push({
        id: slugify(talk.title),
        title: talk.title,
        type: 'talk',
        url: talk.link,
        description: talk.description || '',
        topics: topics,
        tags: ['first-author'],
        publishDate: convertTimestampToISO(talk.published),
        organization: talk.org,
      });
    });
  }

  // Migrate extraBlogs.json
  const blogsPath = path.join(archiveDir, 'extraBlogs.json');
  if (fs.existsSync(blogsPath)) {
    const blogs = JSON.parse(fs.readFileSync(blogsPath, 'utf8'));
    blogs.forEach((blog: any) => {
      const tags: Tag[] = [];
      if (blog.type === 'author') tags.push('first-author');
      else if (blog.type === 'editor') tags.push('ghostwriter-editor');
      else if (blog.type === 'co-author') tags.push('first-author');

      allContent.push({
        id: slugify(blog.title),
        title: blog.title,
        type: 'blog',
        url: blog.link,
        description: blog.description || '',
        topics: ['quantum-computing', 'open-source'],
        tags: tags.length > 0 ? tags : ['personal'],
        publishDate: convertTimestampToISO(blog.published),
        organization: blog.org,
      });
    });
  }

  // Write combined content file
  const outputPath = path.join(outputDir, 'content.json');
  fs.writeFileSync(outputPath, JSON.stringify(allContent, null, 2));

  console.log(`Migrated ${allContent.length} content items to ${outputPath}`);
}

// Run migration if this script is executed directly
if (require.main === module) {
  migrateContent();
}

export { migrateContent };
