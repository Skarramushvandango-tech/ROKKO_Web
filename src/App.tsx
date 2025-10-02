import { useMemo, useState } from "react";
import artistsData from "./data/mockData";

import Header from "./components/Header";
import IntroVideo from "./components/IntroVideo";
import WelcomeSection from "./components/WelcomeSection";
import CurrentReleases from "./components/CurrentReleases";
import ArtistPage from "./components/ArtistPage";
import Footer from "./components/Footer";

/** Falls du später filtern willst – jetzt erst mal alles weiterreichen */
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
            <CurrentReleases artists={artists} onSelect={setSelectedArtist} />
          </>
        ) : (
          <ArtistPage artist={sel} onBack={() => setSelectedArtist(null)} />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
