import React, { useState } from 'react';
import { Menu, X, Music } from 'lucide-react';

interface Artist {
  id: string;
  name: string;
  photo: string;
  biography: string;
  currentRelease: any;
  youtube: string[];
}

interface HeaderProps {
  onNavigate: (page: string) => void;
  onArtistSelect: (artistId: string) => void;
  artists: Artist[];
  activePage: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, onArtistSelect, artists, activePage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  const handleArtistClick = (artistId: string) => {
    onArtistSelect(artistId);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#262626]/95 backdrop-blur-sm border-b border-[#483D03]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Brand */}
            <div 
              className="flex items-center space-x-3 cursor-pointer transition-all hover:opacity-80"
              onClick={() => handleNavClick('home')}
            >
              <div className="w-8 h-8 bg-[#483D03] rounded-full flex items-center justify-center">
                <Music className="w-5 h-5 text-[#F5F3BB]" alt="ROKKO! Records Logo" />
              </div>
              <span className="text-lg font-bold text-[#F5F3BB]">ROKKO! Records</span>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 text-[#F5F3BB] hover:text-[#96897B] transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => handleNavClick('releases')}
                className={`text-sm font-medium transition-colors hover:text-[#96897B] ${
                  activePage === 'releases' ? 'text-[#96897B]' : 'text-[#F5F3BB]'
                }`}
              >
                Current Releases
              </button>
              
              {/* Artists Dropdown */}
              <div className="relative group">
                <button className="text-sm font-medium text-[#F5F3BB] hover:text-[#96897B] transition-colors">
                  Artists
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-[#262626] border border-[#483D03] rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {artists.map((artist) => (
                    <button
                      key={artist.id}
                      onClick={() => handleArtistClick(artist.id)}
                      className="block w-full text-left px-4 py-2 text-sm text-[#F5F3BB] hover:bg-[#483D03] transition-colors first:rounded-t-lg last:rounded-b-lg"
                    >
                      {artist.name}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleNavClick('contact')}
                className={`text-sm font-medium transition-colors hover:text-[#96897B] ${
                  activePage === 'contact' ? 'text-[#96897B]' : 'text-[#F5F3BB]'
                }`}
              >
                Contact Form
              </button>
              
              <button
                onClick={() => handleNavClick('comments')}
                className={`text-sm font-medium transition-colors hover:text-[#96897B] ${
                  activePage === 'comments' ? 'text-[#96897B]' : 'text-[#F5F3BB]'
                }`}
              >
                Comment Field
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={toggleMenu} />
          <div className="fixed right-0 top-0 h-full w-64 bg-[#262626] shadow-xl">
            <div className="flex flex-col p-6 pt-20 space-y-4">
              <button
                onClick={() => handleNavClick('releases')}
                className="text-left text-lg font-medium text-[#F5F3BB] hover:text-[#96897B] transition-colors py-2"
              >
                Current Releases
              </button>
              
              <div className="border-t border-[#483D03] pt-4">
                <h3 className="text-sm font-semibold text-[#96897B] mb-2">Artists</h3>
                {artists.map((artist) => (
                  <button
                    key={artist.id}
                    onClick={() => handleArtistClick(artist.id)}
                    className="block w-full text-left text-[#F5F3BB] hover:text-[#96897B] transition-colors py-2 pl-4"
                  >
                    {artist.name}
                  </button>
                ))}
              </div>
              
              <button
                onClick={() => handleNavClick('contact')}
                className="text-left text-lg font-medium text-[#F5F3BB] hover:text-[#96897B] transition-colors py-2"
              >
                Contact Form
              </button>
              
              <button
                onClick={() => handleNavClick('comments')}
                className="text-left text-lg font-medium text-[#F5F3BB] hover:text-[#96897B] transition-colors py-2"
              >
                Comment Field
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;