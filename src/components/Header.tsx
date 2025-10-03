// src/components/Header.tsx
import { useState } from "react";

type Props = {
  artists: string[];
  onGoHome: () => void;
  onGoReleases: () => void;
  onGoContact: () => void;
  onGoComments: () => void;
  onPickArtist: (slug: string) => void;
};

function slugify(name: string) {
  return name.toLowerCase().replace(/\s+/g, "").replace(/[^\w-]/g, "");
}

export default function Header({ artists, onGoHome, onGoReleases, onGoContact, onGoComments, onPickArtist }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-[color:var(--bg)]/90 backdrop-blur">
      <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between text-[color:var(--text)]">
        <button onClick={onGoHome} className="font-bold tracking-wide">
          ROKKO! Records
        </button>

        {/* Desktop */}
        <nav className="hidden sm:flex gap-2 ml-auto">
          <button
            onClick={onGoReleases}
            className="px-3 py-1 rounded-md border border-white/15 hover:bg-white/10 transition"
          >
            Releases
          </button>
          {artists.map((name) => (
            <button
              key={slugify(name)}
              onClick={() => onPickArtist(slugify(name))}
              className="px-3 py-1 rounded-md border border-white/15 hover:bg-white/10 transition"
            >
              {name}
            </button>
          ))}
          <button
            onClick={onGoContact}
            className="px-3 py-1 rounded-md border border-white/15 hover:bg-white/10 transition"
          >
            Contact
          </button>
          <button
            onClick={onGoComments}
            className="px-3 py-1 rounded-md border border-white/15 hover:bg-white/10 transition"
          >
            Comments
          </button>
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
          <button
            onClick={() => {
              setOpen(false);
              onGoReleases();
            }}
            className="block w-full text-left px-3 py-2 rounded hover:bg-white/10"
          >
            Releases
          </button>
          {artists.map((name) => (
            <button
              key={slugify(name)}
              onClick={() => {
                setOpen(false);
                onPickArtist(slugify(name));
              }}
              className="block w-full text-left px-3 py-2 rounded hover:bg-white/10"
            >
              {name}
            </button>
          ))}
          <button
            onClick={() => {
              setOpen(false);
              onGoContact();
            }}
            className="block w-full text-left px-3 py-2 rounded hover:bg-white/10"
          >
            Contact
          </button>
          <button
            onClick={() => {
              setOpen(false);
              onGoComments();
            }}
            className="block w-full text-left px-3 py-2 rounded hover:bg-white/10"
          >
            Comments
          </button>
        </div>
      </div>
    </header>
  );
}
