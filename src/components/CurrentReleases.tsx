// Wir erwarten dieselben Typen wie in src/data/mockData.ts
type Track = { file: string; title: string };
type Release = { cover: string; picture: string; tracks: Track[] };
type Artist = { name: string; image: string; releases: Record<string, Release> };

type Props = {
  artists: Artist[];
  onSelect: (artistName: string) => void;
};

const toMini = (p: string) =>
  p.endsWith(".png") ? p.replace(".png", "_mini.png") : p;

export default function CurrentReleases({ artists, onSelect }: Props) {
  // flache Liste aus allen Releases bilden
  const items = artists.flatMap((artist) =>
    Object.entries(artist.releases || {}).map(([key, rel]) => ({
      key: `${artist.name}-${key}`,
      artist: artist.name,
      cover: rel.cover,
      mini: toMini(rel.cover),
      title: key,
    }))
  );

  return (
    <section className="mx-auto max-w-5xl px-4 py-6">
      <h2 className="text-xl font
