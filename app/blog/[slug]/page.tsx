import { notFound } from 'next/navigation';
import { getAllPersonalBlogs, getPersonalBlogBySlug } from '@/lib/blog';
import BlogPost from '@/components/BlogPost';

export function generateStaticParams() {
  return getAllPersonalBlogs().map((blog) => ({ slug: blog.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPersonalBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  return <BlogPost post={post} />;
}
