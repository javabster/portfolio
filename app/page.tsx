import { getAllContent } from '@/lib/content';
import FilterableContent from '@/components/FilterableContent';

export default function Home() {
  const allContent = getAllContent();

  return (
    <div className="flex">
      <FilterableContent allContent={allContent} />
    </div>
  );
}
