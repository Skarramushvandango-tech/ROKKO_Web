import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Play, Pause } from 'lucide-react';
import { useAudio } from '../contexts/AudioContext';

interface Song {
  id: string;
  title: string;
  duration: string;
  audioUrl: string;
}

interface Release {
  id: string;
  title: string;
  cover: string;
  songs: Song[];
}

interface Artist {
  id: string;
  name: string;
  photo: string;
  biography: string;
  currentRelease: Release;
  youtube: string[];
}

interface ArtistPageProps {
  artist: Artist;
}

const ArtistPage: React.FC<ArtistPageProps> = ({ artist }) => {
  const [isReleaseExpanded, setIsReleaseExpanded] = useState(false);
  const { currentTrack, isPlaying, playTrack, pauseTrack } = useAudio();

  const handlePlayPause = (song: Song) => {
    if (currentTrack?.id === song.id) {
      if (isPlaying) {
        pauseTrack();
      } else {
        playTrack(song);
      }
    } else {
      playTrack(song);
    }
  };

  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.split('v=')[1]?.split('&')[0] || url.split('/').pop();
    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Artist Header */}
        <div className="text-center mb-12">
          <div className="w-48 h-48 md:w-64 md:h-64 mx-auto mb-8 rounded-full overflow-hidden shadow-2xl">
            <img
              src={artist.photo}
              alt={artist.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#F5F3BB] mb-4">
            {artist.name}
          </h1>
        </div>

        {/* Biography */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#F5F3BB] mb-6">Biography</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-[#F5F3BB] leading-relaxed text-lg">
              {artist.biography}
            </p>
          </div>
        </div>

        {/* Current Release */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#F5F3BB] mb-6">Current Release</h2>
          
          <div className="bg-[#483D03]/20 rounded-lg p-6 border border-[#483D03]">
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
              <div className="w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden shadow-lg">
                <img
                  src={artist.currentRelease.cover}
                  alt={artist.currentRelease.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center sm:text-left flex-1">
                <h3 className="text-xl font-bold text-[#F5F3BB] mb-2">
                  {artist.currentRelease.title}
                </h3>
                <button
                  onClick={() => setIsReleaseExpanded(!isReleaseExpanded)}
                  className="flex items-center gap-2 text-[#96897B] hover:text-[#F5F3BB] transition-colors mx-auto sm:mx-0"
                >
                  {isReleaseExpanded ? 'Hide songs' : 'Show songs'}
                  {isReleaseExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
              </div>
            </div>

            {/* Songs List */}
            {isReleaseExpanded && (
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-[#F5F3BB] mb-4">Tracklist</h4>
                {artist.currentRelease.songs.map((song, index) => (
                  <div
                    key={song.id}
                    className="flex items-center justify-between p-3 bg-[#262626] rounded-lg hover:bg-[#483D03]/30 transition-all duration-200"
                  >
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => handlePlayPause(song)}
                        className="w-10 h-10 bg-[#483D03] hover:bg-[#96897B] rounded-full flex items-center justify-center transition-all duration-200 group"
                      >
                        {currentTrack?.id === song.id && isPlaying ? (
                          <Pause className="w-5 h-5 text-[#F5F3BB] group-hover:text-[#262626]" />
                        ) : (
                          <Play className="w-5 h-5 text-[#F5F3BB] group-hover:text-[#262626] ml-0.5" />
                        )}
                      </button>
                      <div>
                        <p className="text-[#F5F3BB] font-medium">{song.title}</p>
                        <p className="text-[#96897B] text-sm">Track {index + 1}</p>
                      </div>
                    </div>
                    <span className="text-[#96897B] text-sm">{song.duration}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* YouTube Videos */}
        {artist.youtube && artist.youtube.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#F5F3BB] mb-6">Videos</h2>
            <div className="grid gap-6">
              {artist.youtube.map((videoUrl, index) => (
                <div key={index} className="aspect-video rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src={getYouTubeEmbedUrl(videoUrl)}
                    title={`${artist.name} Video ${index + 1}`}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArtistPage;