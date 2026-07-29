import { getCollection, type CollectionEntry } from 'astro:content';

export interface CatalogItem {
  entry: CollectionEntry<'recipes'>;
  number: string;
}

let cached: CatalogItem[] | null = null;

export async function getCatalog(): Promise<CatalogItem[]> {
  if (cached) return cached;
  const entries = await getCollection('recipes', ({ data }) => !data.draft);
  entries.sort((a, b) => a.data.title.localeCompare(b.data.title, 'da'));
  cached = entries.map((entry, i) => ({
    entry,
    number: String(i + 1).padStart(3, '0'),
  }));
  return cached;
}

export function allTags(catalog: CatalogItem[]): string[] {
  const set = new Set<string>();
  for (const { entry } of catalog) {
    for (const tag of entry.data.tags) set.add(tag);
  }
  return [...set].sort((a, b) => a.localeCompare(b, 'da'));
}
