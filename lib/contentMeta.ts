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
  // The light tint borders use a darker shade of each hue so they read against
  // the light page/cards and the periwinkle sidebar rail (the pale yellows and
  // lavenders are near-invisible at the brand hue). `dark:` restores the original
  // bright borders, which already pop on the dark background.
  'baltic-blue': {
    tint: 'border-baltic-blue bg-baltic-blue/15 text-midnight-violet dark:border-baltic-blue/50 dark:text-periwinkle',
    solid: 'border-baltic-blue bg-baltic-blue text-white',
  },
  'tangerine': {
    tint: 'border-[#c25e12] bg-tangerine/15 text-midnight-violet dark:border-tangerine/50 dark:text-periwinkle',
    solid: 'border-tangerine bg-tangerine text-midnight-violet',
  },
  'banana-cream': {
    tint: 'border-[#a87b00] bg-banana-cream/25 text-midnight-violet dark:border-banana-cream/70 dark:text-periwinkle',
    solid: 'border-banana-cream bg-banana-cream text-midnight-violet',
  },
  'periwinkle': {
    tint: 'border-[#6b5fc4] bg-periwinkle/30 text-midnight-violet dark:border-periwinkle/70 dark:text-periwinkle',
    solid: 'border-periwinkle bg-periwinkle text-midnight-violet',
  },
  'midnight-violet': {
    // In dark mode the brand violet is ~the page background, so it would be
    // invisible — switch to a lighter violet (Tailwind's violet scale) there.
    tint: 'border-midnight-violet/70 bg-midnight-violet/15 text-midnight-violet dark:border-violet-400/40 dark:bg-violet-400/20 dark:text-violet-200',
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
  'ml-ai': 'ML/AI',
};

/** Display label for a topic slug (e.g. "quantum-computing" → "quantum computing"). */
export function topicLabel(topic: string): string {
  return topicLabels[topic] ?? topic.replace(/-/g, ' ');
}

/**
 * Human-readable display names for tag slugs. Defaults to replacing hyphens with
 * spaces; override here for proper casing / special phrasing. Note first
 * authorship is the implicit default and intentionally has no tag.
 */
const tagLabels: Record<string, string> = {
  'personal': 'Personal',
  'ghostwriter-editor': 'Ghostwriter / Editor',
  'popular': '⭐️ Popular'
};

/** Display label for a tag slug (e.g. "ghostwriter-editor" → "Ghostwriter / Editor"). */
export function tagLabel(tag: string): string {
  return tagLabels[tag] ?? tag.replace(/-/g, ' ');
}

/**
 * Short explanations of what each tag means, surfaced on hover/focus in the
 * filter sidebar. Tags without an entry simply show no description.
 */
const tagDescriptions: Record<string, string> = {
  'personal': 'Personal projects and content I create outside of my day-to-day work, not affiliated with my employer.',
  'ghostwriter-editor':
    'Pieces I ghostwrote or edited for someone else, rather than authored under my own name.',
  'popular': 'Content with high views and engagement.',
};

/** One-line description of a tag, or undefined if none is defined. */
export function tagDescription(tag: string): string | undefined {
  return tagDescriptions[tag];
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
