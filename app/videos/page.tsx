import { getContentByType } from '@/lib/content';
import FilterableList from '@/components/FilterableList';

export default function VideosPage() {
  const videoContent = getContentByType('video');

  return (
    <div className="flex">
      <FilterableList
        allContent={videoContent}
        title="🎬 Videos"
        description="Talks, tutorials, and explainers"
        dateOptions={{ year: 'numeric', month: 'long', day: 'numeric' }}
        emptyMessage="No videos match your filters."
      />
    </div>
  );
}
