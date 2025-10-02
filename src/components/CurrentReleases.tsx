// src/components/CurrentReleases.tsx
import React from "react";
import artistsData from "../data/mockData";

const CurrentReleases: React.FC = () => {
  return (
    <section className="mx-auto max-w-5xl px-4 py-6">
      <h2 className="text-xl font-bold mb-4">Current Releases</h2>

      {Object.values(artistsData).map((artist) => (
        <div key={artist.name} className="mb-8">
          <h3 className="text-lg font-semibold">{artist.name}</h3>
          {Object.values(artist.releases).map((release) => (
            <div key={release.cover} className="mt-2">
              <img
                src={release.cover}
                alt={`${artist.name} - ${release.cover}`}
                className="w-40 h-40 object-cover"
              />
              <ul className="mt-2">
                {release.tracks.map((track) => (
                  <li key={track.file} className="text-sm">
                    {track.title}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};

export default CurrentReleases;
