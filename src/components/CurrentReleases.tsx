// src/components/CurrentReleases.tsx
import React, { useRef } from "react";
import artistsData from "../data/mockData";
import { asset } from "../utils/asset";

type Track = { file: string; title: string };
type Release = { cover: string; thumbnail?: string; picture?: string; tracks: Track[] };
type Artist = { name: string; image: string; releases: Record<string, Release> };

function pauseAllExcept(current?: HTMLAudioElement | null) {
  const nodes = document.querySelectorAll<HTMLAudioElement>("audio");
  nodes.forEach((a) => {
    if (a !== current && !a.paused) a.pause();
  });
}

const CurrentReleases: React.FC = () => {
  const playerRefs = useRef<Record<string, HTMLAudioElement | null>>({});

  const artists = artistsData as unknown as Artist[];

  // Flatten: neueste Releases oben (Reihenfolge wie in mockData beibehalten)
  const releases = artists.flatMap((artist) =>
    Object.entries(artist.releases).map(([releaseName, rel]) => ({
      artistName: artist.name,
      releaseName,
      rel,
    }))
  );

  return (
    <section className="mx-auto max-w-5xl px-4 py-6">
      <h2 className="text-xl font-bold mb-4">Aktuelle Releases</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {releases.map(({ artistName, releaseName, rel }, idx) => {
          const cardKey = `${artistName}-${releaseName}-${idx}`;
          return (
            <article key={cardKey} className="rounded-lg border border-white/10 bg-black/20 p-3">
              <div className="aspect-square overflow-hidden rounded-md border border-white/10 bg-black/20">
                <img
                  src={asset(rel.cover)}
                  alt={`${artistName} – ${releaseName} (Cover)`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <header className="mt-3">
                <div className="text-sm opacity-80">{artistName}</div>
                <h3 className="text-base font-semibold">{releaseName}</h3>
              </header>

              <ul className="mt-3 space-y-2">
                {rel.tracks.map((t, i) => {
                  const k = `${cardKey}-t${i}`;
                  const file = asset(t.file);
                  return (
                    <li key={k} className="rounded-md bg-black/25 p-2">
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
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default CurrentReleases;
