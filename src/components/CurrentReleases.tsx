import React, { useState } from 'react';
import { ExternalLink, Download, Headphones } from 'lucide-react';

interface Release {
  id: string;
  title: string;
  artist: string;
  cover: string;
  type: 'single' | 'album';
  streamingLinks: { platform: string; url: string }[];
  downloadLinks: { platform: string; url: string }[];
}

interface CurrentReleasesProps {
  releases: Release[];
}

const CurrentReleases: React.FC<CurrentReleasesProps> = ({ releases }) => {
  const [selectedRelease, setSelectedRelease] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState<'streaming' | 'download' | null>(null);

  const handleReleaseClick = (releaseId: string) => {
    if (selectedRelease === releaseId) {
      setSelectedRelease(null);
      setSelectedOption(null);
    } else {
      setSelectedRelease(releaseId);
      setSelectedOption(null);
    }
  };

  const handleOptionSelect = (option: 'streaming' | 'download') => {
    setSelectedOption(option);
  };

  const selectedReleaseData = releases.find(r => r.id === selectedRelease);

  return (
    <section className="py-16 md:py-24 bg-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#F5F3BB] text-center mb-12">
          Current Releases
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 mb-8">
          {releases.map((release) => (
            <div key={release.id} className="group cursor-pointer">
              <div 
                className="aspect-square overflow-hidden rounded-lg shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl"
                onClick={() => handleReleaseClick(release.id)}
              >
                <img
                  src={release.cover}
                  alt={`${release.title} by ${release.artist}`}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-semibold text-[#F5F3BB] text-sm md:text-base">
                  {release.title}
                </h3>
                <p className="text-[#96897B] text-xs md:text-sm mt-1">
                  {release.artist}
                </p>
                <span className="inline-block mt-2 px-2 py-1 bg-[#483D03] text-[#F5F3BB] text-xs rounded-full">
                  {release.type}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Selection Interface */}
        {selectedRelease && (
          <div className="bg-[#483D03]/20 rounded-lg p-6 md:p-8 border border-[#483D03]">
            <div className="text-center mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-[#F5F3BB] mb-2">
                {selectedReleaseData?.title}
              </h3>
              <p className="text-[#96897B]">by {selectedReleaseData?.artist}</p>
            </div>

            {!selectedOption ? (
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <button
                  onClick={() => handleOptionSelect('streaming')}
                  className="flex items-center justify-center gap-2 bg-[#483D03] hover:bg-[#483D03]/80 text-[#F5F3BB] px-6 py-3 rounded-lg transition-all duration-200 font-medium"
                >
                  <Headphones size={20} />
                  Streaming
                </button>
                <button
                  onClick={() => handleOptionSelect('download')}
                  className="flex items-center justify-center gap-2 bg-[#96897B] hover:bg-[#96897B]/80 text-[#262626] px-6 py-3 rounded-lg transition-all duration-200 font-medium"
                >
                  <Download size={20} />
                  Download
                </button>
              </div>
            ) : (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-[#F5F3BB] capitalize">
                    {selectedOption} Platforms
                  </h4>
                  <button
                    onClick={() => setSelectedOption(null)}
                    className="text-[#96897B] hover:text-[#F5F3BB] text-sm transition-colors"
                  >
                    ← Back
                  </button>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {(selectedOption === 'streaming' 
                    ? selectedReleaseData?.streamingLinks 
                    : selectedReleaseData?.downloadLinks
                  )?.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 bg-[#262626] hover:bg-[#483D03] rounded-lg transition-all duration-200 group"
                    >
                      <span className="text-[#F5F3BB] font-medium">
                        {link.platform}
                      </span>
                      <ExternalLink 
                        size={16} 
                        className="text-[#96897B] group-hover:text-[#F5F3BB] transition-colors" 
                      />
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default CurrentReleases;