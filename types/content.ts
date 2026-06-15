export type ContentType = 'blog' | 'video' | 'podcast' | 'talk';

export type Tag = 'personal' | 'first-author' | 'ghostwriter-editor';

export type Topic =
  | 'open-source'
  | 'python'
  | 'quantum-computing'
  | 'scientific-computing'
  | 'pyrefly'
  | 'web-technologies'
  | 'women-in-tech';

export interface ContentItem {
  id: string;
  title: string;
  type: ContentType;
  url: string;
  embedId?: string;
  description: string;
  topics: Topic[];
  tags: Tag[];
  publishDate: string; // ISO 8601 string
  organization?: string;
  category?: string;
  /** True for personal blog posts authored in content/blogs and rendered in-site. */
  isLocal?: boolean;
}

export interface AboutData {
  name: string;
  title: string;
  bio: string;
  profileImage?: string;
  links?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}
