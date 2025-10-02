// src/components/Header.tsx
type Props = {
  artists: string[];
  onSelectArtist: (name: string) => void;
  onHome: () => void;
};

export default function Header({ artists, onSelectArtist, onHome }: Props) {
  return (
    <header className="sticky top-0 z-10 bg-black/80 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-5xl px-4 py-3 flex items-center gap-6">
        <button
          onClick={onHome}
          className="font-bold tracking-wide text-yellow-400 text-lg"
        >
          ROKKO! Records
        </button>

        <nav className="ml-auto flex flex-wrap gap-3">
          {artists.map((name) => (
            <button
              key={name}
              onClick={() => onSelectArtist(name)}
              className="px-3 py-1 rounded-md border border-white/20 hover:bg-white/10 transition"
            >
              {name}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
