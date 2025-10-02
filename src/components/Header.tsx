// src/components/Header.tsx
import { useState } from "react";

type NavItem = { name: string; slug: string };
type Props = {
  artists: NavItem[];
  onSelectArtist: (slug: string) => void;
  onHome: () => void;
};

export default function Header({ artists, onSelectArtist, onHome }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-[color:var(--bg)]/90 backdrop-blur">
      <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between text-[color:var(--text)]">
        <button onClick={onHome} className="font-bold tracking-wide">
          ROKKO! Records
        </button>

        {/* Desktop */}
        <nav className="hidden sm:flex gap-2 ml-auto">
          {artists.map((it) => (
            <button
              key={it.slug}
              onClick={() => onSelectArtist(it.slug)}
              className="px-3 py-1 rounded-md border border-white/15 hover:bg-white/10 transition"
            >
              {it.name}
            </button>
          ))}
        </nav>

        {/* Mobile burger */}
        <div className="sm:hidden ml-4">
          <button
            onClick={() => setOpen((s) => !s)}
            aria-label="Menu"
            className="p-2 rounded border border-white/15"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <div className={`sm:hidden ${open ? "block" : "hidden"} border-t border-white/10 bg-[color:var(--bg)]`}>
        <div className="px-4 py-3 space-y-1">
          {artists.map((it) => (
            <button
              key={it.slug}
              onClick={() => {
                setOpen(false);
                onSelectArtist(it.slug);
              }}
              className="block w-full text-left px-3 py-2 rounded hover:bg-white/10"
            >
              {it.name}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
