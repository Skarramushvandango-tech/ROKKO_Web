// src/App.tsx
import { useEffect, useMemo, useState } from "react";
import site from "./data/site.json";
import data from "./data/artists.json";

import Header from "./components/Header";
import IntroVideo from "./components/IntroVideo";
import WelcomeSection from "./components/WelcomeSection";
import CurrentReleases from "./components/CurrentReleases";
import ArtistPage from "./components/ArtistPage";
import ContactAndComments from "./components/ContactAndComments";
import Footer from "./components/Footer";

type Track = { file: string; title: string };
type Release = { name: string; cover: string; thumbnail?: string; picture?: string; tracks: Track[] };
type Artist = { name: string; image: string; releases: Release[] };

function slugify(s: string) {
  return s.toLowerCase().replace(/\s+/g, "").replace(/[^\w-]/g, "");
}

export default function App() {
  const artists: Artist[] = useMemo(() => ((data as any).items || []) as Artist[], []);
  const nav = useMemo(() => artists.map((a) => ({ name: a.name, slug: slugify(a.name) })), [artists]);
  const [selected, setSelected] = useState<string | null>(null);

  // Theme-Variablen aus site.json setzen
  useEffect(() => {
    const r = document.documentElement.style;
    r.setProperty("--bg", site.bg || "#000000");
    r.setProperty("--accent1", site.accent1 || "#483D03");
    r.setProperty("--text", site.text || "#F5F3BB");
    r.setProperty("--accent2", site.accent2 || "#96897B");
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        artists={nav}
        onSelectArtist={(slug) => setSelected(slug)}
        onHome={() => setSelected(null)}
      />

      <main className="flex-1">
        {!selected ? (
          <>
            <IntroVideo />
            <WelcomeSection />
            <CurrentReleases />
            <ContactAndComments />
          </>
        ) : (
          <ArtistPage artistSlug={selected} />
        )}
      </main>

      <Footer />
    </div>
  );
}
