import { getContentByType } from '@/lib/content';
import FilterableList from '@/components/FilterableList';

export default function TalksPage() {
  const talkContent = getContentByType('talk');

  return (
    <div className="flex">
      <FilterableList
        allContent={talkContent}
        title="📣 Talks / Workshops"
        description="Conference talks, workshops, and presentations"
        dateOptions={{ year: 'numeric', month: 'long', day: 'numeric' }}
        emptyMessage="No talks match your filters."
      />
    </div>
  );
}
