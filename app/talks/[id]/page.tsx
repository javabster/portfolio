import { notFound } from 'next/navigation';
import { getContentByType, getContentById } from '@/lib/content';
import ContentDetail from '@/components/ContentDetail';

export function generateStaticParams() {
  return getContentByType('talk').map((item) => ({ id: item.id }));
}

export default async function TalkDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = getContentById(id);

  if (!item || item.type !== 'talk') {
    notFound();
  }

  return <ContentDetail item={item} backHref="/talks" backLabel="Talks / Workshops" />;
}
