// Writing behind the projects. `full` = PDF posted; `excerpt` = excerpt only (protects first-publication rights);
// `coming` = placeholder until the manuscript is added.
export type Piece = {
  id: string;
  title: string;
  kind: string;
  project?: { slug: string; name: string };
  words?: number;
  status: 'full' | 'excerpt' | 'coming';
  pdf?: string;
  blurb: string;
  excerpt?: string;
};

export const writing: Piece[] = [
  {
    id: 'shattered',
    title: 'Shattered',
    kind: 'In-world history book',
    project: { slug: 'shattered-lands', name: 'The Shattered Lands' },
    words: 5700,
    status: 'full',
    pdf: '/writing/shattered-history.pdf',
    blurb: 'A history of Pangros after the Bloody War, written in the voice of Corenllious Nethermane, Master Historian of the Church of the Divine. Footnotes, dating systems and an unreliable narrator included.',
    excerpt: 'No event in the history of Pangros has defined the world more than the Shattering, and the hundred-year war that led to it. So much so that the histories of the world are dated by PS (Pre-Shattering) or SS (Since Shattering).',
  },
  {
    id: 'report-1047',
    title: 'Report File #1047',
    kind: 'In-world document',
    project: { slug: 'shattered-lands', name: 'The Shattered Lands' },
    words: 680,
    status: 'full',
    pdf: '/writing/artifact-report-1847.pdf',
    blurb: 'A research note on "The Emperor\'s Circle," a stone artifact carved with the last words of Aesar, the final emperor before the Shattering. His message contradicts the history book.',
    excerpt: 'I do not know who will be reading these words, I do not even know if these words will ever see the light of day. I doubt I will live to see the sun again. Yet I carve this message down still; so heed my words and listen closely. We were wrong.',
  },
  {
    id: 'sorellia',
    title: 'Sorellia',
    kind: 'Short story',
    project: { slug: 'shattered-lands', name: 'The Shattered Lands' },
    status: 'coming',
    blurb: 'A short story from the world of Pangros, following Sorellia.',
  },
  {
    id: 'awake',
    title: 'Awake',
    kind: 'Short story',
    project: { slug: 'arnold-exe', name: 'ARNOLD.EXE' },
    words: 4000,
    status: 'full',
    pdf: '/writing/awake.pdf',
    blurb: 'The story ARNOLD.EXE grew from. Timestamped journal entries from an android who escaped the lab where Teddy built him, and who can\'t sleep.',
    excerpt: 'I often wonder what it would be like to sleep, to let your conscious mind fade into black. Then dream, what a wonderful thing dreaming. … I guess he never really thought about happiness when he made me. He wanted me awake, well I\'m awake. So what do I do now?',
  },
  {
    id: 'cthulhu-novel',
    title: 'The Cthulhu Journals',
    kind: 'Novel',
    project: { slug: 'cthulhu-journals', name: 'The Cthulhu Journals' },
    status: 'coming',
    blurb: 'The novel behind the comic: hope in the face of a cosmic horror that does not care whether you understand it.',
  },
  {
    id: 'cries',
    title: 'Cries from Insanity',
    kind: 'Short story',
    project: { slug: 'cthulhu-journals', name: 'The Cthulhu Journals' },
    words: 1150,
    status: 'full',
    pdf: '/writing/cries-of-insanity.pdf',
    blurb: 'Letters to the editor of The Arkham Gazette from a man investigating his wife\'s death in 1923. There was black wood under her nails, and bark in her stomach.',
    excerpt: 'William, I am sad to say this will likely be the last thing you will ever receive from me. … I believe what I have uncovered to only be the beginning. I venture into the forest tonight to uncover the last piece of this mystery, may god help us all.',
  },
  {
    id: 'apocalypse-family',
    title: 'The Apocalypse Family',
    kind: 'Novel in progress',
    words: 2400,
    status: 'excerpt',
    blurb: 'A mother and her fourteen-year-old daughter cross the Colorado foothills after the world burns. The mother grieves what was lost while her daughter finds wonder in the ruins.',
    excerpt: 'I remember before when the world was bright. My memories faint, like a fantasy. Yet I know it was real... all of it. No one could dream of a world so beautiful, at least not now. Not since the world was swallowed by fire, not since that day.',
  },
];

export const byProject = (slug: string) => writing.filter((w) => w.project?.slug === slug);
export const byId = (ids: string[]) => ids.map((id) => writing.find((w) => w.id === id)!).filter(Boolean);
