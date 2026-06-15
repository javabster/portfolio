import { getContentByType } from '@/lib/content';
import FilterableList from '@/components/FilterableList';

export default function PodcastsPage() {
  const podcastContent = getContentByType('podcast');

  return (
    <div className="flex">
      <FilterableList
        allContent={podcastContent}
        title="Podcasts"
        description="Conversations and guest appearances"
        dateOptions={{ year: 'numeric', month: 'long', day: 'numeric' }}
        emptyMessage="No podcasts yet."
      />
    </div>
  );
}
