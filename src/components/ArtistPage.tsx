// src/components/ArtistPage.tsx
import { useEffect, useMemo, useRef, useState } from "react";
import data from "../data/artists.json";
import { asset } from "../utils/asset";

type Track = { file: string; title: string };
type Release = { name: string; cover: string; thumbnail?: string; picture?: string; tracks: Track[] };
type Artist = { name: string; image: string; releases: Release[] };

function pauseAllExcept(current?: HTMLAudioElement | null) {
  const nodes = document.querySelectorAll<HTMLAudioElement>("audio");
  nodes.forEach((a) => { if (a !== current && !a.paused) a.pause(); });
}
const slugify = (s: string) => s.toLowerCase().replace(/\s+/g, "").replace(/[^\w-]/g, "");

export default function ArtistPage({ artistSlug }: { artistSlug: string }) {
  const artists: Artist[] = ((data as any).items || []) as Artist[];
  const artist = useMemo(
    () => artists.find((a) => slugify(a.name) === artistSlug) || null,
    [artists, artistSlug]
  );

  const [open, setOpen] = useState<string | null>(null);
  const playerRefs = useRef<Record<string, HTMLAudioElement | null>>({});
  const [bioHTML, setBioHTML] = useState<string>("");

  useEffect(() => {
    if (!artist) return;
    const slug = slugify(artist.name);
    fetch(asset("/data/bios.html"))
      .then((r) => r.text())
      .then((html) => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        const byId = doc.getElementById(slug);
        const byData = doc.querySelector(`[data-artist="${slug}"]`);
        const el = byId || byData;
        setBioHTML(el?.innerHTML || "");
      })
      .catch(() => setBioHTML(""));
  }, [artist]);

  if (!artist)
    return (
      <section className="mx-auto max-w-5xl px-4 py-6 text-[color:var(--text)]">
        Artist nicht gefunden.
      </section>
    );

  return (
    <section className="mx-auto max-w-5xl px-4 py-6 text-[color:var(--text)]">
      <header className="flex items-center gap-4 mb-4">
        <img
          src={asset(artist.image)}
          alt={artist.name}
          className="w-16 h-16 rounded object-cover"
        />
        <h2 className="text-2xl font-bold">{artist.name}</h2>
      </header>

      {bioHTML && (
        <article
          className="mb-6 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: bioHTML }}
        />
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        {(artist.releases || []).map((rel) => {
          const isOpen = open === rel.name;
          return (
            <article key={rel.name} className="rounded border border-white/10 bg-black/20 p-3">
              <button
                onClick={() => setOpen(isOpen ? null : rel.name)}
                className="w-full text-left"
                aria-expanded={isOpen}
                title={`${artist.name} – ${rel.name}`}
              >
                <div className="aspect-square overflow-hidden rounded-md border border-white/10 bg-black/20">
                  <img
                    src={asset(rel.thumbnail || rel.cover)}
                    alt={`${artist.name} – ${rel.name} (Thumbnail)`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="mt-2 text-sm font-semibold">{rel.name}</div>
              </button>

              {isOpen && (
                <div className="mt-3 rounded-md border border-white/10 bg-black/30 p-3">
                  <img
                    src={asset(rel.cover)}
                    alt={`${artist.name} – ${rel.name} (Cover)`}
                    className="w-full h-auto rounded"
                  />
                  <ul className="mt-3 space-y-2">
                    {rel.tracks.map((t, i) => {
                      const k = `${rel.name}-t${i}`;
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
