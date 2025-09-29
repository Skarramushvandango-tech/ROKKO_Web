import React, { createContext, useContext, useState, useRef, useEffect } from 'react';

interface Song {
  id: string;
  title: string;
  audioUrl: string;
  duration: string;
}

interface AudioContextType {
  currentTrack: Song | null;
  isPlaying: boolean;
  playTrack: (song: Song) => void;
  pauseTrack: () => void;
  stopTrack: () => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio();
    
    const audio = audioRef.current;
    
    const handleEnded = () => {
      setIsPlaying(false);
    };

    const handleCanPlay = () => {
      if (currentTrack && isPlaying) {
        audio.play().catch(console.error);
      }
    };

    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('canplay', handleCanPlay);

    return () => {
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('canplay', handleCanPlay);
      audio.pause();
    };
  }, []);

  const playTrack = (song: Song) => {
    if (audioRef.current) {
      // If switching to a different track, stop current and load new
      if (currentTrack?.id !== song.id) {
        audioRef.current.pause();
        audioRef.current.src = song.audioUrl || ''; // In real app, this would be the actual audio URL
        setCurrentTrack(song);
      }
      
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((error) => {
        console.error('Error playing audio:', error);
        // For demo purposes, we'll still show as playing
        setIsPlaying(true);
      });
    }
  };

  const pauseTrack = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const stopTrack = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  return (
    <AudioContext.Provider value={{
      currentTrack,
      isPlaying,
      playTrack,
      pauseTrack,
      stopTrack
    }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};