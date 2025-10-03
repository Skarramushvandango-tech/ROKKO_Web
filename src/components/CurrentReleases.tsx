// src/components/CurrentReleases.tsx
import React, { useRef, useState } from "react";
import { asset } from "../utils/asset";

type Track = { file: string; title: string };
type Release = { name: string; cover: string; thumbnail?: string; tracks: Track[] };
type ArtistFromMockData = { name: string; image: string; releases: { [key: string]: Release } };
type ArtistFromJSON = { name: string; image: string; releases: Release[] };
type Artist = ArtistFromMockData | ArtistFromJSON;

function pauseAllExcept(current?: HTMLAudioElement | null) {
  const nodes = document.querySelectorAll<HTMLAudioElement>("audio");
  nodes.forEach((a) => { if (a !== current && !a.paused) a.pause(); });
}

// Helper to normalize releases to array format with names
function normalizeReleases(artist: Artist): Array<{ name: string; release: Release }> {
  if (Array.isArray(artist.releases)) {
    return artist.releases.map(r => ({ name: r.name, release: r }));
  }
  return Object.entries(artist.releases).map(([name, rel]) => ({ 
    name, 
    release: { ...rel, name } 
  }));
}

export default function CurrentReleases({ allArtists, onOpenArtist }: { allArtists: Artist[]; onOpenArtist: (name: string) => void }) {
  const playerRefs = useRef<Record<string, HTMLAudioElement | null>>({});
  const [openKey, setOpenKey] = useState<string | null>(null);

  const cards = allArtists.flatMap((a) =>
    normalizeReleases(a).map(({ name, release }) => ({ artist: a.name, release }))
  );

  return (
    <section className="mx-auto max-w-5xl px-4 py-6 text-[color:var(--text)]">
      <h2 className="text-2xl font-bold mb-4">Aktuelle Releases</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map(({ artist, release }, i) => {
          const key = `${artist}-${release.name}-${i}`;
          const isOpen = openKey === key;
          return (
            <article key={key} className="rounded-lg border border-white/10 bg-black/20 p-3">
              <button
                onClick={() => setOpenKey(isOpen ? null : key)}
                className="w-full text-left"
                aria-expanded={isOpen}
                title={`${artist} – ${release.name}`}
              >
                <div className="aspect-square overflow-hidden rounded-md border border-white/10 bg-black/20">
                  <img
                    src={asset(release.thumbnail || release.cover)}
                    alt={`${artist} – ${release.name} (Thumbnail)`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <header className="mt-3">
                  <div className="opacity-80 text-sm">{artist}</div>
                  <h3 className="text-base font-semibold">{release.name}</h3>
                </header>
              </button>

              {isOpen && (
                <div className="mt-3 rounded-md border border-white/10 bg-black/30 p-3">
                  <img
                    src={asset(release.cover)}
                    alt={`${artist} – ${release.name} (Cover)`}
                    className="w-full h-auto rounded"
                  />
                  <ul className="mt-3 space-y-2">
                    {release.tracks.map((t, ti) => {
                      const k = `${key}-t${ti}`;
                      const file = asset(t.file);
                      return (
                        <li key={k} className="rounded bg-black/30 p-2">
                          <div className="mb-1 text-sm">{t.title}</div>
                          <audio
                            controls
                            preload="none"
                            ref={(el) => (playerRefs.current[k] = el)}
                            onPlay={() => pauseAllExcept(playerRefs.current[k])}
                            className="w-full"
                          >
                            <source src={file} type="audio/mp4" />
                            <source src={file} type="audio/aac" />
                            Dein Browser unterstützt das Audioformat nicht.
                          </audio>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
