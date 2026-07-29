import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const RECIPE_IMAGE_DIR = fileURLToPath(new URL('../../public/images/recipes/', import.meta.url));

export function hasImage(filename?: string): boolean {
  if (!filename) return false;
  return existsSync(RECIPE_IMAGE_DIR + filename);
}

const EMOJI_BY_TAG: Record<string, string> = {
  æg: '🍳',
  vegetar: '🥗',
  suppe: '🍲',
  dessert: '🍰',
  æbler: '🍎',
  aftensmad: '🍛',
  fisk: '🐟',
  kylling: '🍗',
  brød: '🍞',
  pasta: '🍝',
  hurtig: '⏱️',
  billig: '💸',
};

export function placeholderEmoji(tags: string[]): string {
  for (const tag of tags) {
    if (EMOJI_BY_TAG[tag]) return EMOJI_BY_TAG[tag];
  }
  return '🍽️';
}
