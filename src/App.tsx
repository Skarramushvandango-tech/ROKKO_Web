// src/App.tsx
import React, { useState } from "react";
import artistsData from "./data/mockData";

import Header from "./components/Header";
import IntroVideo from "./components/IntroVideo";
import WelcomeSection from "./components/WelcomeSection";
import CurrentReleases from "./components/CurrentReleases";
import ArtistPage from "./components/ArtistPage";
import ContactForm from "./components/ContactForm";
import CommentSection from "./components/CommentSection";
import Footer from "./components/Footer";

type Page = "home" | "releases" | "artist" | "contact" | "comments";
type ArtistKey = string | null;

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [artistKey, setArtistKey] = useState<ArtistKey>(null);

  function goHome() { setPage("home"); setArtistKey(null); }
  function goReleases() { setPage("releases"); setArtistKey(null); }
  function goContact() { setPage("contact"); setArtistKey(null); }
  function goComments() { setPage("comments"); setArtistKey(null); }
  function goArtist(key: string) { setArtistKey(key); setPage("artist"); }

  return (
    <div className="min-h-screen bg-[#262626] text-[#F5F3BB]">
      <Header
        onHome={goHome}
        onReleases={goReleases}
        onContact={goContact}
        onComments={goComments}
        onArtist={goArtist}
        artists={artistsData}
      />

      <main className="relative">
        {page === "home" && (
          <>
            <IntroVideo />
            <WelcomeSection />
            <CurrentReleases />
          </>
        )}

        {page === "releases" && <CurrentReleases />}

        {page === "artist" && artistKey && (
          <ArtistPage artistKey={artistKey} />
        )}

        {page === "contact" && <ContactForm />}

        {page === "comments" && <CommentSection />}
      </main>

      <Footer />
    </div>
  );
}
