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
  let open = false;

  function toggle() {
    open = !open;
    const nav = document.getElementById("rk-menu");
    if (!nav) return;
    nav.style.display = open ? "block" : "none";
  }

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 40,
      background: "rgba(38,38,38,0.9)", borderBottom: "1px solid rgba(255,255,255,0.1)",
      backdropFilter: "blur(6px)"
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo links */}
        <button onClick={onHome} style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <img src="/images/Logo/logo.png" alt="ROKKO! Records" style={{ height: 32, width: "auto", objectFit: "contain" }} />
          <span style={{ fontWeight: 600, letterSpacing: "0.02em" }}>ROKKO! Records</span>
        </button>

        {/* Burger rechts */}
        <div style={{ position: "relative" }}>
          <button onClick={toggle} title="Menü" style={{ padding: 8, border: "1px solid rgba(255,255,255,0.15)", borderRadius: 6 }}>
            <span style={{ display: "block", width: 20, height: 2, background: "currentColor", marginBottom: 5 }} />
            <span style={{ display: "block", width: 20, height: 2, background: "currentColor", marginBottom: 5 }} />
            <span style={{ display: "block", width: 20, height: 2, background: "currentColor" }} />
          </button>

          <nav id="rk-menu" style={{
            display: "none", position: "absolute", right: 0, marginTop: 12,
            width: 280, maxHeight: "70vh", overflow: "auto",
            background: "#1f1f1f", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 8, padding: 8
          }}>
            <MenuButton label="Aktuelle Releases" onClick={() => { onReleases(); toggle(); }} />

            <div style={{ padding: "6px 8px", fontSize: 11, opacity: 0.6, textTransform: "uppercase" }}>Artists</div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {artists.map((a: any, idx: number) => (
                <MenuButton
                  key={idx}
                  label={a.name}
                  onClick={() => { onArtist(slugify(a.name)); toggle(); }}
                />
              ))}
            </div>

            <div style={{ padding: "6px 8px", fontSize: 11, opacity: 0.6, textTransform: "uppercase", marginTop: 8 }}>Weitere</div>
            <MenuButton label="Kontakt" onClick={() => { onContact(); toggle(); }} />
            <MenuButton label="Kommentare" onClick={() => { onComments(); toggle(); }} />
          </nav>
        </div>
      </div>
    </header>
  );
}

function MenuButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      title={label}
      style={{
        width: "100%", textAlign: "left",
        padding: "8px 12px", borderRadius: 6, border: "none",
        background: "transparent", color: "inherit", cursor: "pointer"
      }}
      onMouseOver={e => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
      onMouseOut={e => (e.currentTarget.style.background = "transparent")}
    >
      {label}
    </button>
  );
}

function slugify(name: string) {
  return name.toLowerCase().replace(/\s+/g, "").replace(/[^\w-]/g, "");
}
