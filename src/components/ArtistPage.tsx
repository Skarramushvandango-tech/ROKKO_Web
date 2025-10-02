import { useMemo, useRef, useState } from "react";
import artistsData from "../data/mockData";
import { asset } from "../utils/asset";

type Track = { file: string; title: string };
type Release = { cover: string; thumbnail: string; picture: string; tracks: Track[] };
type Artist = { name: string; image: string; releases: Record<string, Release> };

type Props = { artistKey: string };

function pauseAllExcept(current?: HTMLAudioElement | null) {
  const nodes = document.querySelectorAll<HTMLAudioElement>("audio");
  nodes.forEach(a => { if (a !== current && !a.paused) a.pause(); });
}

function slugify(name: string) {
  return name.toLowerCase().replace(/\s+/g, "").replace(/[^\w-]/g, "");
}

export default function ArtistPage({ artistKey }: Props) {
  const artists = artistsData as unknown as Artist[];
  const artist = useMemo(() => artists.find(a => slugify(a.name) === artistKey) || null, [artists, artistKey]);

  const [openRelease, setOpenRelease] = useState<string | null>(null);
  const playerRefs = useRef<Record<string, HTMLAudioElement | null>>({});

  if (!artist) return <div style={{ maxWidth: 1000, margin: "0 auto", padding: "40px 16px" }}>Artist nicht gefunden.</div>;

  const releases = Object.entries(artist.releases);

  return (
    <section style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 16px" }}>
      <header style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
        <img src={asset(artist.image)} alt={artist.name} style={{ width: 64, height: 64, borderRadius: 8, objectFit: "cover" }} />
        <h2 style={{ fontSize: 24, fontWeight: 700 }}>{artist.name}</h2>
      </header>

      <div style={{ display: "grid", gap: 24, gridTemplateColumns: "repeat(2,1fr)" }}>
        {releases.map(([name, rel]) => {
          const isOpen = openRelease === name;
          return (
            <div key={name}>
              <button
                type="button"
                onClick={() => setOpenRelease(isOpen ? null : name)}
                aria-expanded={isOpen}
                aria-controls={`rel-${name}`}
                title={`${artist.name} – ${name}`}
                style={{ display: "block", width: "100%", textAlign: "left", background: "transparent", border: "none", color: "inherit", cursor: "pointer" }}
              >
                <div style={{ aspectRatio: "1/1", width: "100%", overflow: "hidden", borderRadius: 8, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(0,0,0,0.2)" }}>
                  <img
                    src={asset(rel.thumbnail)}
                    alt={`${artist.name} – ${name} (Thumbnail)`}
                    loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div style={{ marginTop: 8 }}>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>{name}</div>
                </div>
              </button>

              {isOpen && (
                <div id={`rel-${name}`} style={{ marginTop: 12, border: "1px solid rgba(255,255,255,0.15)", background: "#1f1f1f", borderRadius: 8, padding: 12 }}>
                  <img src={asset(rel.cover)} alt={`${artist.name} – ${name} (Cover groß)`} style={{ width: "100%", height: "auto", borderRadius: 6 }} />
                  <div style={{ marginTop: 12 }}>
                    {rel.tracks.map((t, i) => {
                      const key = `${name}-${i}`;
                      const file = asset(t.file);
                      return (
                        <div key={key} style={{ background: "rgba(0,0,0,0.2)", padding: 8, borderRadius: 6, marginBottom: 8 }}>
                          <div style={{ fontSize: 14, marginBottom: 6 }}>{t.title}</div>
                          <audio
                            controls
                            preload="none"
                            ref={el => (playerRefs.current[key] = el)}
                            onPlay={() => pauseAllExcept(playerRefs.current[key])}
                            style={{ width: "100%" }}
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
