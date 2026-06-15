import { notFound } from 'next/navigation';
import { getContentByType, getContentById } from '@/lib/content';
import ContentDetail from '@/components/ContentDetail';

export function generateStaticParams() {
  return getContentByType('video').map((item) => ({ id: item.id }));
}

export default async function VideoDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = getContentById(id);

  if (!item || item.type !== 'video') {
    notFound();
  }

  return <ContentDetail item={item} backHref="/videos" backLabel="Videos" />;
}
