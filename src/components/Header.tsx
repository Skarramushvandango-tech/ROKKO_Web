// src/components/Header.tsx
import React, { useState } from "react";

type ReleaseArtist = {
  name: string;
  image: string;
  releases: Record<string, unknown>;
};

type Props = {
  onHome: () => void;
  onReleases: () => void;
  onContact: () => void;
  onComments: () => void;
  onArtist: (key: string) => void;
  artists: ReleaseArtist[];
};

export default function Header({
  onHome, onReleases, onContact, onComments, onArtist, artists
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#262626]/90 backdrop-blur border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        {/* Logo links (klein, headerangepasst) */}
        <button
          onClick={onHome}
          className="flex items-center gap-2 focus:outline-none"
          title="ROKKO! Records – Home"
        >
          <img
            src="/images/Logo/logo.png"
            alt="ROKKO! Records"
            className="h-8 w-auto object-contain"
          />
          <span className="font-semibold tracking-wide">ROKKO! Records</span>
        </button>

        {/* Burger rechts */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="rk-menu"
            className="p-2 rounded border border-white/15 hover:bg-white/10 focus:outline-none"
            title="Menü"
          >
            {/* simple burger */}
            <span className="block w-5 h-[2px] bg-current mb-[5px]" />
            <span className="block w-5 h-[2px] bg-current mb-[5px]" />
            <span className="block w-5 h-[2px] bg-current" />
          </button>

          {open && (
            <nav
              id="rk-menu"
              className="absolute right-0 mt-3 w-72 max-h-[70vh] overflow-auto rounded-md border border-white/15 bg-[#1f1f1f] shadow-lg p-2"
              onMouseLeave={() => setOpen(false)}
            >
              <MenuButton label="Aktuelle Releases" onClick={() => { onReleases(); setOpen(false); }} />

              <div className="px-2 py-1 text-xs uppercase opacity-60">Artists</div>
              <div className="flex flex-col">
                {artists.map((a, idx) => (
                  <MenuButton
                    key={idx}
                    label={a.name}
                    onClick={() => { onArtist(slugify(a.name)); setOpen(false); }}
                  />
                ))}
              </div>

              <div className="px-2 py-1 text-xs uppercase opacity-60 mt-2">Weitere</div>
              <MenuButton label="Kontakt" onClick={() => { onContact(); setOpen(false); }} />
              <MenuButton label="Kommentare" onClick={() => { onComments(); setOpen(false); }} />
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}

function MenuButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left px-3 py-2 rounded hover:bg-white/10 focus:outline-none"
      title={label}
    >
      {label}
    </button>
  );
}

function slugify(name: string) {
  return name.toLowerCase().replace(/\s+/g, "").replace(/[^\w-]/g, "");
}
