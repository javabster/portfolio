import { getContentByType } from '@/lib/content';
import FilterableList from '@/components/FilterableList';

export default function BlogPage() {
  const blogContent = getContentByType('blog');

  return (
    <div className="flex">
      <FilterableList
        allContent={blogContent}
        title="Blog"
        description="Blog posts and articles"
        dateOptions={{ year: 'numeric', month: 'long', day: 'numeric' }}
        emptyMessage="No posts match your filters."
      />
    </div>
  );
}
