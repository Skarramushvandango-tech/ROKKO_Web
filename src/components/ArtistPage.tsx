// src/components/ArtistPage.tsx
import React, { useMemo, useRef, useState } from "react";
import artistsData from "../data/mockData";

type Track = { file: string; title: string };
type Release = { cover: string; thumbnail: string; picture: string; tracks: Track[] };
type Artist = { name: string; image: string; releases: Record<string, Release> };

type Props = { artistKey: string };

function pauseAllExcept(current?: HTMLAudioElement | null) {
  const nodes = document.querySelectorAll<HTMLAudioElement>("audio");
  nodes.forEach(a => {
    if (a !== current && !a.paused) a.pause();
  });
}

export default function ArtistPage({ artistKey }: Props) {
  const artists = artistsData as unknown as Artist[];
  const artist = useMemo(() => {
    return artists.find(a => slugify(a.name) === artistKey) || null;
  }, [artists, artistKey]);

  const [openRelease, setOpenRelease] = useState<string | null>(null);
  const playerRefs = useRef<Record<string, HTMLAudioElement | null>>({});

  if (!artist) {
    return <div className="mx-auto max-w-4xl px-4 py-10">Artist nicht gefunden.</div>;
    }

  const releases = Object.entries(artist.releases);

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <header className="flex items-center gap-4 mb-6">
        <img
          src={artist.image}
          alt={artist.name}
          className="w-16 h-16 rounded object-cover"
        />
        <h2 className="text-2xl font-bold">{artist.name}</h2>
      </header>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {releases.map(([name, rel]) => {
          const isOpen = openRelease === name;
          return (
            <div key={name}>
              <button
                type="button"
                className="group block w-full text-left"
                onClick={() => setOpenRelease(isOpen ? null : name)}
                aria-expanded={isOpen}
                aria-controls={`rel-${name}`}
                title={`${artist.name} – ${name}`}
              >
                <div className="aspect-square w-full overflow-hidden rounded-md border border-white/10 bg-black/20">
                  <img
                    src={rel.thumbnail}
                    alt={`${artist.name} – ${name} (Thumbnail)`}
                    loading="lazy"
                    className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform"
                  />
                </div>
                <div className="mt-2">
                  <p className="text-sm font-semibold">{name}</p>
                </div>
              </button>

              {isOpen && (
                <div id={`rel-${name}`} className="mt-3 rounded-md border border-white/15 bg-[#1f1f1f] p-3">
                  <img
                    src={rel.cover}
                    alt={`${artist.name} – ${name} (Cover groß)`}
                    className="w-full h-auto rounded"
                  />
                  <div className="mt-3 space-y-3">
                    {rel.tracks.map((t, i) => {
                      const key = `${name}-${i}`;
                      return (
                        <div key={key} className="rounded bg-black/20 p-2">
                          <div className="text-sm mb-1">{t.title}</div>
                          <audio
                            controls
                            preload="none"
                            ref={el => (playerRefs.current[key] = el)}
                            onPlay={() => pauseAllExcept(playerRefs.current[key])}
                            className="w-full"
                          >
                            <source src={t.file} type="audio/mp4" />
                            <source src={t.file} type="audio/aac" />
                            Dein Browser unterstützt das Audioformat nicht.
                          </audio>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function slugify(name: string) {
  return name.toLowerCase().replace(/\s+/g, "").replace(/[^\w-]/g, "");
}
