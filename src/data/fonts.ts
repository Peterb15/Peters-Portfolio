// Per-project display type. Each headliner/feature gets a face from its own world;
// archive projects fall back to the site display face.
export type FontKey = 'echo' | 'sl' | 'hole66' | 'robot' | 'us' | 'arnold';

const fonts: Record<FontKey, { family: string; scale: number; weight: number; transform: 'uppercase' | 'none' }> = {
  echo: { family: "'Rubik Wet Paint', var(--font-display)", scale: 0.92, weight: 400, transform: 'uppercase' }, // spray paint, like her tag
  sl: { family: "'Pirata One', Georgia, serif", scale: 1.08, weight: 400, transform: 'none' }, // old-world pirate blackletter
  hole66: { family: "'Overpass', 'Arial Narrow', sans-serif", scale: 0.86, weight: 900, transform: 'uppercase' }, // highway-sign gothic
  robot: { family: "'Alfa Slab One', Georgia, serif", scale: 0.8, weight: 400, transform: 'none' }, // the title card's slab serif
  us: { family: "'Silkscreen', ui-monospace, monospace", scale: 0.72, weight: 400, transform: 'uppercase' }, // pixel game
  arnold: { family: "'VT323', ui-monospace, monospace", scale: 1.12, weight: 400, transform: 'uppercase' }, // terminal
};

/** CSS custom properties to set on an element; consumers read var(--pf) etc. */
export const fontVars = (key?: FontKey) => {
  if (!key) return '';
  const f = fonts[key];
  return `--pf:${f.family};--pf-scale:${f.scale};--pf-w:${f.weight};--pf-tt:${f.transform};`;
};
