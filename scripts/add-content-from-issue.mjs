// Parses a GitHub issue-form submission (from .github/ISSUE_TEMPLATE/add_content.yml)
// and appends a new ContentItem to content/data/content.json.
//
// Reads the issue body from the ISSUE_BODY env var. On success it writes the
// updated JSON file and prints `title=<title>` / `changed=true` to GITHUB_OUTPUT
// (if set) so the workflow can commit and dispatch a deploy.

import fs from 'fs';
import path from 'path';

const CONTENT_FILE = path.join(process.cwd(), 'content/data/content.json');

// GitHub issue-form checkbox label -> Topic slug (see types/content.ts).
const TOPIC_MAP = {
  'Open Source': 'open-source',
  Python: 'python',
  'Quantum Computing': 'quantum-computing',
  'Scientific Computing': 'scientific-computing',
  Pyrefly: 'pyrefly',
  'Web Technologies': 'web-technologies',
  'Women in Tech': 'women-in-tech',
  'ML / AI': 'ml-ai',
};

// GitHub issue-form checkbox label -> Tag slug (see types/content.ts).
const TAG_MAP = {
  Personal: 'personal',
  Popular: 'popular',
  'Ghostwriter/Editor': 'ghostwriter-editor',
};

const VALID_TYPES = ['blog', 'video', 'podcast', 'talk'];

// Publish Month dropdown label -> two-digit month number.
const MONTH_MAP = {
  January: '01',
  February: '02',
  March: '03',
  April: '04',
  May: '05',
  June: '06',
  July: '07',
  August: '08',
  September: '09',
  October: '10',
  November: '11',
  December: '12',
};

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

// GitHub issue forms render as `### <Label>\n\n<value>` sections. Split the body
// into a { label: rawValue } map.
function parseSections(body) {
  const sections = {};
  const normalized = body.replace(/\r\n/g, '\n');
  const parts = normalized.split(/^###\s+/m).slice(1);
  for (const part of parts) {
    const newline = part.indexOf('\n');
    const label = (newline === -1 ? part : part.slice(0, newline)).trim();
    const value = (newline === -1 ? '' : part.slice(newline + 1)).trim();
    sections[label] = value;
  }
  return sections;
}

// Empty optional fields render as `_No response_`.
function cleanValue(value) {
  if (!value || value === '_No response_') return '';
  return value.trim();
}

// Checkbox groups render as lines like `- [x] Label` (checked) / `- [ ] Label`.
function parseChecked(value, labelMap) {
  if (!value) return [];
  const result = [];
  for (const line of value.split('\n')) {
    const match = line.match(/^\s*-\s*\[[xX]\]\s*(.+?)\s*$/);
    if (match) {
      const slug = labelMap[match[1].trim()];
      if (slug) result.push(slug);
    }
  }
  return result;
}

// The form now collects the publish date via three dropdowns (Publish Year /
// Publish Month / Publish Day). Combine them into a YYYY-MM-DD string.
function buildDate(sections) {
  const year = cleanValue(sections['Publish Year']);
  const monthName = cleanValue(sections['Publish Month']);
  const day = cleanValue(sections['Publish Day']);
  const month = MONTH_MAP[monthName];
  if (!year || !month || !day) {
    throw new Error(
      `Missing/invalid publish date field(s): year="${year}", month="${monthName}", day="${day}"`
    );
  }
  return `${year}-${month}-${day}`;
}

function toISODate(dateStr) {
  const clean = cleanValue(dateStr);
  const match = clean.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) {
    throw new Error(`Invalid publish date: "${clean}" (expected YYYY-MM-DD)`);
  }
  const [, year, month, day] = match;
  // Match the noon-UTC convention used by existing entries in content.json.
  const parsed = new Date(`${clean}T12:00:00.000Z`);
  // Reject impossible dates (e.g. 2026-02-31): JS silently rolls these over,
  // so verify the parsed components round-trip back to the input.
  if (
    Number.isNaN(parsed.getTime()) ||
    parsed.getUTCFullYear() !== Number(year) ||
    parsed.getUTCMonth() + 1 !== Number(month) ||
    parsed.getUTCDate() !== Number(day)
  ) {
    throw new Error(`Invalid publish date: "${clean}" (expected YYYY-MM-DD)`);
  }
  return parsed.toISOString();
}

function main() {
  const body = process.env.ISSUE_BODY;
  if (!body) {
    throw new Error('ISSUE_BODY env var is empty; nothing to parse.');
  }

  const s = parseSections(body);

  const title = cleanValue(s['Title']);
  if (!title) throw new Error('Missing required field: Title');

  const type = cleanValue(s['Content Type']).toLowerCase();
  if (!VALID_TYPES.includes(type)) {
    throw new Error(
      `Invalid Content Type: "${type}" (expected one of ${VALID_TYPES.join(', ')})`
    );
  }

  const url = cleanValue(s['URL']);
  if (!url) throw new Error('Missing required field: URL');

  // Description is optional (blogs often have none); default to empty string.
  const description = cleanValue(s['Description']);

  const publishDate = toISODate(buildDate(s));
  const embedId = cleanValue(s['YouTube Embed ID']);
  const organization = cleanValue(s['Organization']);
  const topics = parseChecked(s['Topics'], TOPIC_MAP);
  const tags = parseChecked(s['Tags'], TAG_MAP);

  const existing = JSON.parse(fs.readFileSync(CONTENT_FILE, 'utf8'));
  if (!Array.isArray(existing)) {
    throw new Error(`${CONTENT_FILE} is not a JSON array`);
  }

  // Ensure a unique id (slug from title, suffixed on collision).
  const usedIds = new Set(existing.map(item => item.id));
  let id = slugify(title);
  if (usedIds.has(id)) {
    let n = 2;
    while (usedIds.has(`${id}-${n}`)) n += 1;
    id = `${id}-${n}`;
  }

  const item = {
    id,
    title,
    type,
    url,
    ...(embedId ? { embedId } : {}),
    description,
    topics,
    tags,
    publishDate,
    ...(organization ? { organization } : {}),
    category: type,
  };

  existing.push(item);
  fs.writeFileSync(CONTENT_FILE, `${JSON.stringify(existing, null, 2)}\n`);

  console.log(`Added content item "${title}" (id: ${id})`);

  if (process.env.GITHUB_OUTPUT) {
    fs.appendFileSync(
      process.env.GITHUB_OUTPUT,
      `title=${title}\nid=${id}\nchanged=true\n`
    );
  }
}

main();
