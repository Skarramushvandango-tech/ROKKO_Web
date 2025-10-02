// src/App.tsx
import { useMemo, useState } from "react";
import artistsData from "./data/mockData";

import Header from "./components/Header";
import IntroVideo from "./components/IntroVideo";
import WelcomeSection from "./components/WelcomeSection";
import CurrentReleases from "./components/CurrentReleases";
import ArtistPage from "./components/ArtistPage";
import ContactForm from "./components/ContactForm";
import CommentSection from "./components/CommentSection";
import Footer from "./components/Footer";

function App() {
  const [selectedArtist, setSelectedArtist] = useState<string | null>(null);
  const artists = useMemo(() => artistsData, []);

  const sel =
    selectedArtist &&
    artists.find((a) => a.name.toLowerCase() === selectedArtist.toLowerCase());

  return (
    <div className="min-h-screen flex flex-col text-white bg-black">
      <Header
        artists={artists.map((a) => a.name)}
        onSelectArtist={(name) => setSelectedArtist(name)}
        onHome={() => setSelectedArtist(null)}
      />

      <main className="flex-1">
        {!sel ? (
          <>
            <IntroVideo />
            <WelcomeSection />
            <CurrentReleases />
            <ContactForm />
            <CommentSection />
          </>
        ) : (
          <ArtistPage artistKey={sel.name.toLowerCase().replace(/\s+/g, "")} />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
