import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const IntroVideo: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleSound = () => {
    if (videoRef.current) {
      const newMutedState = !isMuted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, []);

  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
      {/* Placeholder for video - in real implementation, this would be the actual video */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#483D03] to-[#96897B] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-[#F5F3BB] mb-4">
            ROKKO! Records
          </h2>
          <p className="text-lg md:text-xl text-[#F5F3BB]/80">
            Intro Video Placeholder
          </p>
        </div>
      </div>

      {/* Video element (hidden in demo, would contain actual video) */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover opacity-0"
        autoPlay
        loop
        muted={isMuted}
        playsInline
      >
        {/* Video source would go here */}
      </video>

      {/* Sound Toggle Button */}
      <button
        onClick={toggleSound}
        className="absolute bottom-4 right-4 md:bottom-6 md:right-6 w-10 h-10 md:w-12 md:h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
        aria-label={isMuted ? 'Unmute video' : 'Mute video'}
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5 md:w-6 md:h-6 text-white" />
        ) : (
          <Volume2 className="w-5 h-5 md:w-6 md:h-6 text-white" />
        )}
      </button>
    </section>
  );
};

export default IntroVideo;
