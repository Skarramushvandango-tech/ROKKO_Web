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

export default function Header({ artists, onPickArtist, onGoHome, onGoReleases, onGoContact, onGoComments }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-[color:var(--bg)]/90 backdrop-blur">
      <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between text-[color:var(--text)]">
        <button onClick={onGoHome} className="font-bold tracking-wide">
          ROKKO! Records
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex gap-2 items-center ml-auto">
          <button onClick={onGoHome} className="px-3 py-1 rounded-md hover:bg-white/10 transition">
            Home
          </button>
          <button onClick={onGoReleases} className="px-3 py-1 rounded-md hover:bg-white/10 transition">
            Releases
          </button>
          <div className="relative group">
            <button className="px-3 py-1 rounded-md hover:bg-white/10 transition">
              Artists ▾
            </button>
            <div className="hidden group-hover:block absolute top-full right-0 mt-1 bg-[color:var(--bg)] border border-white/10 rounded-md shadow-lg min-w-[150px] z-30">
              {artists.map((name) => (
                <button
                  key={slugify(name)}
                  onClick={() => onPickArtist(slugify(name))}
                  className="block w-full text-left px-3 py-2 hover:bg-white/10"
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
          <button onClick={onGoContact} className="px-3 py-1 rounded-md hover:bg-white/10 transition">
            Kontakt
          </button>
          <button onClick={onGoComments} className="px-3 py-1 rounded-md hover:bg-white/10 transition">
            Kommentare
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
      {open && (
        <div className="sm:hidden border-t border-white/10 bg-[color:var(--bg)]">
          <div className="px-4 py-3 space-y-1">
            <button
              onClick={() => {
                setOpen(false);
                onGoHome();
              }}
              className="block w-full text-left px-3 py-2 rounded hover:bg-white/10"
            >
              Home
            </button>
            <button
              onClick={() => {
                setOpen(false);
                onGoReleases();
              }}
              className="block w-full text-left px-3 py-2 rounded hover:bg-white/10"
            >
              Releases
            </button>
            <div className="border-t border-white/10 my-1 pt-1">
              <div className="px-3 py-1 text-sm opacity-70">Artists:</div>
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
            </div>
            <button
              onClick={() => {
                setOpen(false);
                onGoContact();
              }}
              className="block w-full text-left px-3 py-2 rounded hover:bg-white/10"
            >
              Kontakt
            </button>
            <button
              onClick={() => {
                setOpen(false);
                onGoComments();
              }}
              className="block w-full text-left px-3 py-2 rounded hover:bg-white/10"
            >
              Kommentare
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
