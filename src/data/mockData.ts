// Mock data for development - In production, this would come from the CMS/editor

export const mockReleases = [
  {
    id: '1',
    title: 'Industrial Beats Vol. 1',
    artist: 'Various Artists',
    cover: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400',
    type: 'album' as const,
    streamingLinks: [
      { platform: 'Spotify', url: 'https://spotify.com' },
      { platform: 'Apple Music', url: 'https://music.apple.com' },
      { platform: 'YouTube Music', url: 'https://music.youtube.com' },
      { platform: 'SoundCloud', url: 'https://soundcloud.com' }
    ],
    downloadLinks: [
      { platform: 'Juno Download', url: 'https://junodownload.com' },
      { platform: 'Beatport', url: 'https://beatport.com' },
      { platform: 'Bandcamp', url: 'https://bandcamp.com' }
    ]
  },
  {
    id: '2',
    title: 'Ruhrpott Thunder',
    artist: 'Steel Hammer',
    cover: 'https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=400',
    type: 'single' as const,
    streamingLinks: [
      { platform: 'Spotify', url: 'https://spotify.com' },
      { platform: 'Apple Music', url: 'https://music.apple.com' },
      { platform: 'Deezer', url: 'https://deezer.com' }
    ],
    downloadLinks: [
      { platform: 'Juno Download', url: 'https://junodownload.com' },
      { platform: 'Amazon Music', url: 'https://music.amazon.com' }
    ]
  },
  {
    id: '3',
    title: 'Underground Flow',
    artist: 'Dark Pulse',
    cover: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=400',
    type: 'album' as const,
    streamingLinks: [
      { platform: 'Spotify', url: 'https://spotify.com' },
      { platform: 'Apple Music', url: 'https://music.apple.com' },
      { platform: 'Tidal', url: 'https://tidal.com' }
    ],
    downloadLinks: [
      { platform: 'Beatport', url: 'https://beatport.com' },
      { platform: 'Traxsource', url: 'https://traxsource.com' }
    ]
  },
  {
    id: '4',
    title: 'Electric Nights',
    artist: 'Neon Dreams',
    cover: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400',
    type: 'single' as const,
    streamingLinks: [
      { platform: 'Spotify', url: 'https://spotify.com' },
      { platform: 'YouTube Music', url: 'https://music.youtube.com' }
    ],
    downloadLinks: [
      { platform: 'Juno Download', url: 'https://junodownload.com' }
    ]
  }
];

export const mockArtists = [
  {
    id: '1',
    name: 'Steel Hammer',
    photo: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=600',
    biography: 'Born in the heart of the Ruhrgebiet, Steel Hammer brings the raw industrial sound of the region to electronic music. With deep roots in techno and a passion for heavy, driving beats, Steel Hammer has been a cornerstone of the underground scene for over a decade. Their music reflects the gritty beauty of industrial landscapes, combining analog warmth with digital precision to create something truly unique.',
    currentRelease: {
      id: 'sh-1',
      title: 'Ruhrpott Thunder',
      cover: 'https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=400',
      songs: [
        { id: 'sh-1-1', title: 'Thunder Rising', duration: '6:42', audioUrl: '' },
        { id: 'sh-1-2', title: 'Steel Dreams', duration: '7:18', audioUrl: '' },
        { id: 'sh-1-3', title: 'Industrial Heart', duration: '5:33', audioUrl: '' },
        { id: 'sh-1-4', title: 'Ruhrpott Nights', duration: '8:07', audioUrl: '' }
      ]
    },
    youtube: [
      'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    ]
  },
  {
    id: '2',
    name: 'Dark Pulse',
    photo: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600',
    biography: 'Dark Pulse emerged from the underground club scene with a mission to push the boundaries of electronic music. Known for deep, hypnotic basslines and atmospheric soundscapes, Dark Pulse creates sonic journeys that transport listeners to otherworldly dimensions. Their innovative approach to sound design has earned recognition from critics and dancers alike.',
    currentRelease: {
      id: 'dp-1',
      title: 'Underground Flow',
      cover: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=400',
      songs: [
        { id: 'dp-1-1', title: 'Flow State', duration: '7:24', audioUrl: '' },
        { id: 'dp-1-2', title: 'Deep Current', duration: '6:51', audioUrl: '' },
        { id: 'dp-1-3', title: 'Underground', duration: '8:33', audioUrl: '' },
        { id: 'dp-1-4', title: 'Pulse Wave', duration: '5:47', audioUrl: '' },
        { id: 'dp-1-5', title: 'Dark Matter', duration: '9:12', audioUrl: '' }
      ]
    },
    youtube: [
      'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    ]
  },
  {
    id: '3',
    name: 'Neon Dreams',
    photo: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600',
    biography: 'Neon Dreams brings color and energy to the electronic music landscape with vibrant synth work and euphoric melodies. Influenced by classic synthwave and modern electronic production, Neon Dreams creates music that feels both nostalgic and futuristic. Their live performances are known for spectacular visual displays that perfectly complement their sonic palette.',
    currentRelease: {
      id: 'nd-1',
      title: 'Electric Nights',
      cover: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400',
      songs: [
        { id: 'nd-1-1', title: 'Electric Nights', duration: '4:32', audioUrl: '' },
        { id: 'nd-1-2', title: 'Neon Glow', duration: '5:18', audioUrl: '' },
        { id: 'nd-1-3', title: 'City Lights', duration: '6:07', audioUrl: '' }
      ]
    },
    youtube: [
      'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    ]
  }
];