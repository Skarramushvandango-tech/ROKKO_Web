// src/components/CurrentReleases.tsx
import { useMemo, useState, useEffect, useRef } from "react";
import artistsData from "../data/mockData";
import { asset } from "../utils/asset";

type Track = { file: string; title: string };
type Release = { cover: string; thumbnail: string; picture: string; tracks: Track[] };
type Artist = { name: string; image: string; releases: Record<string, Release> };
type OpenKey = null | { artistIdx: number; releaseName: string };

function pauseAllOthers(current?: HTMLAudioElement | null) {
  const nodes = document.querySelectorAll<HTMLAudioElement>("audio");
  nodes.forEach(a => { if (a !== current && !a.paused) a.pause(); });
}

export default function CurrentReleases() {
  const artists = artistsData as unknown as Artist[];

  const releaseList = useMemo(() => {
    const list: Array<{
      artistIdx: number;
      artistName: string;
      artistImage: string;
      releaseName: string;
      release: Release;
    }> = [];
    artists.forEach((artist, artistIdx) => {
      Object.entries(artist.releases).forEach(([releaseName, release]) => {
        list.push({ artistIdx, artistName: artist.name, artistImage: artist.image, releaseName, release });
      });
    });
    return list;
  }, [artists]);

  const [open, setOpen] = useState<OpenKey>(null);
  const playerRefs = useRef<Record<string, HTMLAudioElement | null>>({});

  useEffect(() => { pauseAllOthers(null); }, [open]);

  function onPlay(key: string) {
    const current = playerRefs.current[key] ?? null;
    pauseAllOthers(current);
  }

  function toggleOpen(next: OpenKey) {
    setOpen(prev =>
      prev && next && prev.artistIdx === next.artistIdx && prev.releaseName === next.releaseName ? null : next
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">Aktuelle Releases</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {releaseList.map(({ artistIdx, artistName, releaseName, release }) => {
          const isOpen = open && open.artistIdx === artistIdx && open.releaseName === releaseName;

          return (
            <div key={`${artistIdx}-${releaseName}`} className="relative">
              <button
                type="button"
                className="group block w-full text-left focus:outline-none"
                onClick={() => toggleOpen({ artistIdx, releaseName })}
                aria-expanded={Boolean(isOpen)}
                aria-controls={`panel-${artistIdx}-${releaseName}`}
                title={`${artistName} – ${releaseName}`}
              >
                <div className="aspect-square w-full overflow-hidden rounded-md border border-white/10 bg-black/20">
                  <img
                    src={asset(release.thumbnail)}
                    alt={`${artistName} – ${releaseName} (Thumbnail)`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform group-hover:scale-[1.02]"
                  />
                </div>
                <div className="mt-2">
                  <p className="text-sm font-semibold">{artistName}</p>
                  <p className="text-xs opacity-70">{releaseName}</p>
                </div>
              </button>

              {isOpen && (
                <div id={`panel-${artistIdx}-${releaseName}`} className="mt-3 rounded-md border border-white/15 bg-[#1f1f1f] p-3">
                  <div className="w-full overflow-hidden rounded">
                    <img
                      src={asset(release.cover)}
                      alt={`${artistName} – ${releaseName} (Cover groß)`}
                      className="w-full h-auto rounded-md"
                    />
                  </div>

                  <div className="mt-3 space-y-3">
                    {release.tracks.map((t, idx) => {
                      const key = `${artistIdx}-${releaseName}-${idx}`;
                      const file = asset(t.file);
                      return (
                        <div key={key} className="rounded bg-black/20 p-2">
                          <div className="text-sm mb-1">{t.title}</div>
                          <audio
                            controls
                            preload="none"
                            ref={el => (playerRefs.current[key] = el)}
                            onPlay={() => onPlay(key)}
                            className="w-full"
                          >
                            <source src={file} type="audio/mp4" />
                            <source src={file} type="audio/aac" />
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
