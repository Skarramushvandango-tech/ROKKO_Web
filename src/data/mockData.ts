// src/data/mockData.ts

export interface Track { file: string; title: string }
export interface Release { cover: string; thumbnail: string; picture: string; tracks: Track[] }
export interface Artist { name: string; image: string; releases: { [key: string]: Release } }

export const artists: Artist[] = [
  {
    name: "Fleur et Beunié",
    image: "/images/pictures/fleurbenuie_main.png",
    releases: {
      "Feu Léger": {
        cover: "/images/cover/feu_leger_cover.png",
        thumbnail: "/images/cover/feu_leger_cover.png",
        picture: "/images/pictures/fleurbenuie_main.png",
        tracks: [
          { file: "/audio/fleur_et_beunie/feu_leger/feu_leger_main.m4a", title: "Feu Léger (Main)" },
          { file: "/audio/fleur_et_beunie/feu_leger/feu_leger_house_mix.m4a", title: "Feu Léger (House Mix)" },
          { file: "/audio/fleur_et_beunie/feu_leger/feu_leger_french_classic_mix.m4a", title: "Feu Léger (French Classic Mix)" },
          { file: "/audio/fleur_et_beunie/feu_leger/feu_leger_sundown_mix.m4a", title: "Feu Léger (Sundown Mix)" },
          { file: "/audio/fleur_et_beunie/feu_leger/feu_leger_club_mix.m4a", title: "Feu Léger (Electric Club Mix)" }
        ]
      }
    }
  },
  {
    name: "Henri Bellieu",
    image: "/images/pictures/henri_main.png",
    releases: {
      "La Femme": {
        cover: "/images/cover/la_femme.png",
        thumbnail: "/images/cover/la_femme.png",
        picture: "/images/pictures/henri_main.png",
        tracks: [
          { file: "/audio/henri_bellieu/lafemme/la_femme_main.m4a", title: "La Femme (Main)" },
          { file: "/audio/henri_bellieu/lafemme/la_femme_deux.m4a", title: "La Femme (Version Deux)" }
        ]
      },
      "Petit Colibri": {
        cover: "/images/cover/petite_colibri.png",
        thumbnail: "/images/cover/petite_colibri.png",
        picture: "/images/pictures/henri_main.png",
        tracks: [
          { file: "/audio/henri_bellieu/petitecolibri/petite_colibri_main.m4a", title: "Petit Colibri (Main)" },
          { file: "/audio/henri_bellieu/petitecolibri/petite_colibri_nocturne_mix.m4a", title: "Petit Colibri (Nocturne Mix)" },
          { file: "/audio/henri_bellieu/petitecolibri/petite_colibri_ennio_mix.m4a", title: "Petit Colibri (Ennio Mix)" }
        ]
      }
    }
  },
  {
    name: "Markus Erling",
    image: "/images/pictures/erling_main.png",
    releases: {
      "Endlich Schlafen": {
        cover: "/images/cover/endlich_schlafen_cover.png",
        thumbnail: "/images/cover/endlich_schlafen_cover.png",
        picture: "/images/pictures/erling_main.png",
        tracks: [
          { file: "/audio/erling/schlafen/endlich_schlafen_main.m4a", title: "Endlich Schlafen (Main)" },
          { file: "/audio/erling/schlafen/endlich_schlafen_monotoni.m4a", title: "Endlich Schlafen (Monotoni Mix)" }
        ]
      },
      "Der Tag an dem es regnet": {
        cover: "/images/cover/regen_cover.png",
        thumbnail: "/images/cover/regen_cover.png",
        picture: "/images/pictures/erling_main.png",
        tracks: [
          { file: "/audio/erling/tagregnet/regnet_main.m4a", title: "Der Tag an dem es regnet (Main)" },
          { file: "/audio/erling/tagregnet/regnet_rmx.m4a", title: "Der Tag an dem es regnet (Remix)" }
        ]
      }
    }
  },
  {
    name: "Skank Schablonski",
    image: "/images/pictures/skank_main.png",
    releases: {
      "Kohle raus": {
        cover: "/images/cover/kohle_raus_cover.png",
        thumbnail: "/images/cover/kohle_raus_cover.png",
        picture: "/images/pictures/skank_main.png",
        tracks: [
          { file: "/audio/skank_schablonski/kohle_raus/kohle_raus_main.m4a", title: "Kohle raus (Main)" },
          { file: "/audio/skank_schablonski/kohle_raus/kohle_raus_rmx.m4a", title: "Kohle raus (Remix)" }
        ]
      }
    }
  },
  {
    name: "Skaramush Vandango",
    image: "/images/pictures/skaramush_main.png",
    releases: {
      "Set on Fire": {
        cover: "/images/cover/cover_fire.png",
        thumbnail: "/images/cover/cover_fire.png",
        picture: "/images/pictures/skaramush_main.png",
        tracks: [
          { file: "/audio/skaramush_vandango/set_fire/set_on_fire_original.m4a", title: "Set on Fire (Original)" },
          { file: "/audio/skaramush_vandango/set_fire/set_on_fire_rmx.m4a", title: "Set on Fire (Remix)" }
        ]
      }
    }
  }
];

export default artists;
