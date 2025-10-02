// src/App.tsx
import React, { useState } from 'react';
import Header from './components/Header';
import Bios from "./components/Bios";
import IntroVideo from './components/IntroVideo';
import WelcomeSection from './components/WelcomeSection';
import CurrentReleases from './components/CurrentReleases';
import ArtistPage from './components/ArtistPage';
import ContactForm from './components/ContactForm';
import CommentSection from './components/CommentSection';
import Footer from './components/Footer';
import { AudioProvider } from './contexts/AudioContext';
import { mockArtists, mockReleases } from './data/mockData';

type ActivePage = 'home' | 'releases' | 'contact' | 'comments' | 'artist' | 'bios';

function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [selectedArtist, setSelectedArtist] = useState<string | null>(null);

  const handleArtistSelect = (artistId: string) => {
    setSelectedArtist(artistId);
    setActivePage('artist');
  };

  const renderContent = () => {
    switch (activePage) {
      case 'releases':
        return <CurrentReleases releases={mockReleases} />;
      case 'contact':
        return <ContactForm />;
      case 'comments':
        return <CommentSection />;
      case 'artist':
        const artist = mockArtists.find(a => a.id === selectedArtist);
        return artist ? <ArtistPage artist={artist} /> : <div>Artist not found</div>;
      case 'bios':
        return <Bios />;
      default:
        return (
          <>
            <IntroVideo />
            <WelcomeSection />
            <CurrentReleases releases={mockReleases} />
          </>
        );
    }
  };

  return (
    <AudioProvider>
      <div className="min-h-screen bg-[#262626] text-[#F5F3BB]">
        <Header
          onNavigate={setActivePage}
          onArtistSelect={handleArtistSelect}
          artists={mockArtists}
          activePage={activePage}
        />
        <main className="relative">
          {renderContent()}
        </main>
        <Footer />
      </div>
    </AudioProvider>
  );
}

export default App;
