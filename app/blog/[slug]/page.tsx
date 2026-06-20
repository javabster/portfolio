import { notFound } from 'next/navigation';
import { getAllPersonalBlogs, getPersonalBlogBySlug } from '@/lib/blog';
import BlogPost from '@/components/BlogPost';

// `output: export` requires a dynamic route to statically generate at least one
// page. Until the first real post lands, emit a single placeholder slug that the
// page below resolves to a 404 (it's not linked anywhere). This keeps the in-site
// blog infrastructure in place — publishing is just dropping an .mdx file into
// content/blogs, at which point real slugs replace the placeholder automatically.
const PLACEHOLDER_SLUG = 'coming-soon';

export function generateStaticParams() {
  const posts = getAllPersonalBlogs();
  if (posts.length === 0) return [{ slug: PLACEHOLDER_SLUG }];
  return posts.map((blog) => ({ slug: blog.slug }));
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
