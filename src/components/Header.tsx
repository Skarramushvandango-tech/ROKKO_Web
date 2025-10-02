type Props = {
  artists: string[];
  onSelectArtist: (name: string) => void;
  onHome: () => void;
};

export default function Header({ artists, onSelectArtist, onHome }: Props) {
  return (
    <header className="sticky top-0 z-10 bg-zinc-900/90 backdrop-blur border-b border-zinc-800">
      <div className="mx-auto max-w-5xl px-4 py-3 flex items-center gap-4">
        <button
          onClick={onHome}
          className="font-bold tracking-wide text-yellow-400"
        >
          ROKKO! Records
        </button>

        <nav className="ml-auto flex flex-wrap gap-2">
          {artists.map((name) => (
            <button
              key={name}
              onClick={() => onSelectArtist(name)}
              className="px-2 py-1 rounded border border-zinc-700 hover:bg-zinc-800"
            >
              {name}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
