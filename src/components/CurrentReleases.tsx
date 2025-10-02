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
    const list: Array<{ artistIdx: number; artistName: string; artistImage: string; releaseName: string; release: Release; }> = [];
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
    <section style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 16px" }}>
      <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 16 }}>Aktuelle Releases</h2>

      <div style={{
        display: "grid", gap: 24,
        gridTemplateColumns: "repeat(2,1fr)"
      }}>
        {releaseList.map(({ artistIdx, artistName, releaseName, release }) => {
          const isOpen = open && open.artistIdx === artistIdx && open.releaseName === releaseName;

          return (
            <div key={`${artistIdx}-${releaseName}`} style={{ position: "relative" }}>
              <button
                type="button"
                onClick={() => toggleOpen({ artistIdx, releaseName })}
                aria-expanded={Boolean(isOpen)}
                aria-controls={`panel-${artistIdx}-${releaseName}`}
                title={`${artistName} – ${releaseName}`}
                style={{ display: "block", width: "100%", textAlign: "left", background: "transparent", border: "none", color: "inherit", cursor: "pointer" }}
              >
                <div style={{ aspectRatio: "1/1", width: "100%", overflow: "hidden", borderRadius: 8, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(0,0,0,0.2)" }}>
                  <img
                    src={asset(release.thumbnail)}
                    alt={`${artistName} – ${releaseName} (Thumbnail)`}
                    loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>
                <div style={{ marginTop: 8 }}>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>{artistName}</div>
                  <div style={{ fontSize: 12, opacity: 0.7 }}>{releaseName}</div>
                </div>
              </button>

              {isOpen && (
                <div id={`panel-${artistIdx}-${releaseName}`} style={{ marginTop: 12, border: "1px solid rgba(255,255,255,0.15)", background: "#1f1f1f", borderRadius: 8, padding: 12 }}>
                  <div style={{ width: "100%", overflow: "hidden", borderRadius: 6 }}>
                    <img
                      src={asset(release.cover)}
                      alt={`${artistName} – ${releaseName} (Cover groß)`}
                      style={{ width: "100%", height: "auto", display: "block" }}
                    />
                  </div>

                  <div style={{ marginTop: 12 }}>
                    {release.tracks.map((t, idx) => {
                      const key = `${artistIdx}-${releaseName}-${idx}`;
                      const file = asset(t.file);
                      return (
                        <div key={key} style={{ background: "rgba(0,0,0,0.2)", padding: 8, borderRadius: 6, marginBottom: 8 }}>
                          <div style={{ fontSize: 14, marginBottom: 6 }}>{t.title}</div>
                          <audio
                            controls
                            preload="none"
                            ref={el => (playerRefs.current[key] = el)}
                            onPlay={() => onPlay(key)}
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
