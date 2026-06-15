import { ContentItem, ContentType } from '@/types/content';

/**
 * Display metadata for each content type. The `dot` colour is a vibrant brand
 * accent that reads well on both light and dark surfaces, so it carries the
 * colour while text stays in the neutral foreground/muted tokens.
 */
export const typeMeta: Record<ContentType, { label: string; dot: string }> = {
  blog: { label: 'Blog', dot: 'bg-baltic-blue' },
  video: { label: 'Video', dot: 'bg-banana-cream' },
  talk: { label: 'Talk / Workshop', dot: 'bg-periwinkle' },
  podcast: { label: 'Podcast', dot: 'bg-tangerine' },
};

/**
 * Topic chip colours, built from the brand palette. Two layers:
 *  - `topicColors` assigns each topic a brand colour (edit here to recolour).
 *  - `colorStyles` defines, per brand colour, the `tint` style (used on content
 *    items and inactive filters) and the `solid` filled style (used for an
 *    active/selected filter chip).
 *
 * The tint text uses dark violet in light mode and periwinkle in dark mode so
 * it stays legible on the pale tint; the solid styles pair each fixed brand
 * background with a contrasting text colour (no theme switch needed).
 *
 * NOTE: every class is a literal string so Tailwind detects it. With only five
 * brand hues, a couple of topics share a colour. Unknown topics use DEFAULT_COLOR.
 */
type BrandColor =
  | 'baltic-blue'
  | 'tangerine'
  | 'banana-cream'
  | 'periwinkle'
  | 'midnight-violet';

const topicColors: Record<string, BrandColor> = {
  'open-source': 'banana-cream',
  'python': 'baltic-blue',
  'scientific-computing': 'midnight-violet',
  'pyrefly': 'tangerine',
  'quantum-computing': 'midnight-violet',
  'women-in-tech': 'periwinkle',
  'web-technologies': 'periwinkle',
};

const DEFAULT_COLOR: BrandColor = 'baltic-blue';

const colorStyles: Record<BrandColor, { tint: string; solid: string }> = {
  'baltic-blue': {
    tint: 'border-baltic-blue/50 bg-baltic-blue/15 text-midnight-violet dark:text-periwinkle',
    solid: 'border-baltic-blue bg-baltic-blue text-white',
  },
  'tangerine': {
    tint: 'border-tangerine/50 bg-tangerine/15 text-midnight-violet dark:text-periwinkle',
    solid: 'border-tangerine bg-tangerine text-midnight-violet',
  },
  'banana-cream': {
    tint: 'border-banana-cream/70 bg-banana-cream/25 text-midnight-violet dark:text-periwinkle',
    solid: 'border-banana-cream bg-banana-cream text-midnight-violet',
  },
  'periwinkle': {
    tint: 'border-periwinkle/70 bg-periwinkle/30 text-midnight-violet dark:text-periwinkle',
    solid: 'border-periwinkle bg-periwinkle text-midnight-violet',
  },
  'midnight-violet': {
    // In dark mode the brand violet is ~the page background, so it would be
    // invisible — switch to a lighter violet (Tailwind's violet scale) there.
    tint: 'border-midnight-violet/40 bg-midnight-violet/15 text-midnight-violet dark:border-violet-400/40 dark:bg-violet-400/20 dark:text-violet-200',
    solid: 'border-midnight-violet bg-midnight-violet text-periwinkle dark:border-violet-500 dark:bg-violet-500 dark:text-white',
  },
};

/**
 * Human-readable display names for topic slugs. Defaults to replacing hyphens
 * with spaces; override here for proper nouns / special casing.
 */
const topicLabels: Record<string, string> = {
  'quantum-computing': 'quantum computing',
  'open-source': 'open source',
  'scientific-computing': 'scientific computing',
  'web-technologies': 'web technologies',
  'women-in-tech': 'women in tech',
  'python': 'Python',
  'pyrefly': 'Pyrefly',
};

/** Display label for a topic slug (e.g. "quantum-computing" → "quantum computing"). */
export function topicLabel(topic: string): string {
  return topicLabels[topic] ?? topic.replace(/-/g, ' ');
}

function colorFor(topic: string): BrandColor {
  return topicColors[topic] ?? DEFAULT_COLOR;
}

/** Tinted chip classes for a topic (content items + inactive filter chips). */
export function getTopicClass(topic: string): string {
  return colorStyles[colorFor(topic)].tint;
}

/** Solid filled chip classes for a topic (active/selected filter chip). */
export function getTopicActiveClass(topic: string): string {
  return colorStyles[colorFor(topic)].solid;
}

/**
 * Where an item should link to. Videos and talks have dedicated in-site detail
 * pages; everything else links out to its external `url`.
 */
export function getItemHref(
  item: Pick<ContentItem, 'type' | 'id' | 'url' | 'isLocal'>
): { href: string; external: boolean } {
  if (item.type === 'video') return { href: `/videos/${item.id}`, external: false };
  if (item.type === 'talk') return { href: `/talks/${item.id}`, external: false };
  // Personal blogs render in-site; external blogs link out to their platform.
  if (item.type === 'blog' && item.isLocal) return { href: `/blog/${item.id}`, external: false };
  return { href: item.url, external: true };
}
