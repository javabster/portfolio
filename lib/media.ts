import { ContentItem } from '@/types/content';

/**
 * Resolve a YouTube video id for an item, preferring the explicit `embedId`
 * and otherwise parsing it out of common YouTube URL shapes. Returns null when
 * the item has no embeddable YouTube video (e.g. it links to slides).
 */
export function getYouTubeId(item: Pick<ContentItem, 'embedId' | 'url'>): string | null {
  if (item.embedId) return item.embedId;

  const url = item.url ?? '';
  const patterns = [
    /youtu\.be\/([A-Za-z0-9_-]{11})/,
    /youtube\.com\/watch\?(?:.*&)?v=([A-Za-z0-9_-]{11})/,
    /youtube\.com\/embed\/([A-Za-z0-9_-]{11})/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }
  return null;
}

/**
 * Pick a sensible call-to-action label for an external resource (used when
 * there is no embeddable video), based on where the URL points.
 */
export function getResourceCtaLabel(url: string): string {
  const u = (url ?? '').toLowerCase();

  if (u.includes('docs.google.com/presentation') || u.includes('slideshare')) {
    return 'See the slides';
  }
  if (u.includes('github.com') && u.includes('.ipynb')) {
    return 'Open the notebook';
  }
  if (u.includes('github.com')) {
    return 'View on GitHub';
  }
  if (u.includes('buzzsprout') || u.includes('podcast') || u.includes('spotify')) {
    return 'Listen to the episode';
  }
  if (u.includes('brightcove') || u.includes('vimeo')) {
    return 'Watch the talk';
  }
  return 'See the slides / notebook';
}
