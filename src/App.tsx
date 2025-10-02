// src/App.tsx
import { useState } from "react";
import artists from "./data/mockData"; // muss ein Array mit Artists sein

import Header from "./components/Header";
import IntroVideo from "./components/IntroVideo";
import WelcomeSection from "./components/WelcomeSection";
import CurrentReleases from "./components/CurrentReleases";
import ArtistPage from "./components/ArtistPage";
import ContactForm from "./components/ContactForm";
import CommentSection from "./components/CommentSection";
import Footer from "./components/Footer";

type Page = "home" | "releases" | "artist" | "contact" | "comments";

function slugify(name: string) {
  return name.toLowerCase().replace(/\s+/g, "").replace(/[^\w-]/g, "");
}

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [artistKey, setArtistKey] = useState<string | null>(null);

  const bg = "#262626";
  const fg = "#F5F3BB";

  return (
    <div style={{ minHeight: "100vh", background: bg, color: fg, display: "flex", flexDirection: "column" }}>
      <Header
        artists={artists.map(a => ({ name: a.name, slug: slugify(a.name) }))}
        onSelectArtist={(slug) => { setArtistKey(slug); setPage("artist"); }}
        onHome={() => { setPage("home"); setArtistKey(null); }}
      />

      <main style={{ flex: 1 }}>
        {page === "home" && (
          <>
            <IntroVideo />
            <WelcomeSection />
            <CurrentReleases />
          </>
        )}

        {page === "releases" && (
          <CurrentReleases />
        )}

        {page === "artist" && artistKey && (
          <ArtistPage artistSlug={artistKey} />
        )}

        {page === "contact" && <ContactForm />}
        {page === "comments" && <CommentSection />}
      </main>

      <Footer />
    </div>
  );
}
