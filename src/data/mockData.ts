// src/data/mockData.ts

export interface Track {
  file: string;      // Pfad zu /public/...
  label: string;     // Anzeige-Name
}

export interface Release {
  id: string;        // slug
  title: string;     // Release-Titel
  cover: string;     // großes Cover
  coverMini?: string;// Miniatur
  audio: Track[];    // Tracks
}

export interface Artist {
  id: string;        // slug
  name: string;      // Anzeigename
  picture: string;   // /images/pictures/.../*.png
  releases: Release[];
}

export const mockArtists: Artist[] = [
  {
    id: "fleurbenuie",
    name: "Fleur Beunié",
    picture: "/images/pictures/fleurbenuie/fleurbenuie.png",
    releases: [
      {
        id: "feuleger",
        title: "Feu Léger",
        cover: "/images/cover/fleurbeuniecover/feu_leger_cover.png",
        coverMini: "/images/cover/fleurbeuniecover/leger_mini.png",
        audio: [
          { file: "/audio/fleurbenuie/feuleger/feuleger_main.m4a",          label: "Feu Léger (Main)" },
          { file: "/audio/fleurbenuie/feuleger/feuleger_house.m4a",         label: "Feu Léger (House Mix)" },
          { file: "/audio/fleurbenuie/feuleger/feuleger_frenchclassic.m4a", label: "Feu Léger (French Classic Mix)" },
          { file: "/audio/fleurbenuie/feuleger/feuleger_sundown.m4a",       label: "Feu Léger (Sundown Mix)" },
          { file: "/audio/fleurbenuie/feuleger/feuleger_electricclub1.m4a", label: "Feu Léger (Electric Club Mix)" }
        ]
      }
    ]
  },
  {
    id: "henribellieu",
    name: "Henri Bellieu",
    picture: "/images/pictures/henri/henri.png",
    releases: [
      {
        id: "lafemme",
        title: "La Femme",
        cover: "/images/cover/henribellieucouver/la_femme.png",
        coverMini: "/images/cover/henribellieucouver/femme_mini.png",
        audio: [
          { file: "/audio/henribellieu/lafemme/la_femme_main.m4a", label: "La Femme (Main)" },
          { file: "/audio/henribellieu/lafemme/la_femme_deux.m4a", label: "La Femme (Version Deux)" }
        ]
      },
      {
        id: "petitcolibri",
        title: "Petit Colibri",
        cover: "/images/cover/henribellieucouver/petite_colibri.png",
        coverMini: "/images/cover/henribellieucouver/petite_mini.png",
        audio: [
          { file: "/audio/henribellieu/petitecolibri/petite_colibri_main.m4a",           label: "Petit Colibri (Main)" },
          { file: "/audio/henribellieu/petitecolibri/petite_colibri_nocturne_mix.m4a",   label: "Petit Colibri (Nocturne Mix)" },
          { file: "/audio/henribellieu/petitecolibri/petite_colibri_ennio_mix.m4a",      label: "Petit Colibri (Ennio Mix)" }
        ]
      }
    ]
  },
  {
    id: "markuserling",
    name: "Markus Erling",
    picture: "/images/pictures/erling/erling.png",
    releases: [
      {
        id: "endlichschlafen",
        title: "Endlich Schlafen",
        cover: "/images/cover/markuserlingcover/schlafen_cover.png",
        coverMini: "/images/cover/markuserlingcover/schlafen_mini.png",
        audio: [
          { file: "/audio/markuserling/endlichschlafen/endlich_schlafen_main.m4a",    label: "Endlich Schlafen (Main)" },
          { file: "/audio/markuserling/endlichschlafen/endlich_schlafen_monotoni.m4a", label: "Endlich Schlafen (Monotoni Mix)" }
        ]
      },
      {
        id: "regnet",
        title: "Der Tag an dem es regnet",
        cover: "/images/cover/markuserlingcover/regen_cover.png",
        coverMini: "/images/cover/markuserlingcover/regen_mini.png",
        audio: [
          { file: "/audio/markuserling/regnet/regnet_main.m4a", label: "Der Tag an dem es regnet (Main)" },
          { file: "/audio/markuserling/regnet/regnet_rmx.m4a",  label: "Der Tag an dem es regnet (Remix)" }
        ]
      }
    ]
  },
  {
    id: "skankschablonski",
    name: "Skank Schablonski",
    picture: "/images/pictures/skank/skank.png",
    releases: [
      {
        id: "kohleraus",
        title: "Kohle raus",
        cover: "/images/cover/skankschablonskicover/kohle_raus_cover.png",
        coverMini: "/images/cover/skankschablonskicover/kohle_mini.png",
        audio: [
          { file: "/audio/skankschablonski/kohleraus/kohle_raus_main.m4a", label: "Kohle raus (Main)" },
          { file: "/audio/skankschablonski/kohleraus/kohle_raus_rmx.m4a",  label: "Kohle raus (Remix)" }
        ]
      }
    ]
  },
  {
    id: "skaramushvandango",
    name: "Skaramush Vandango",
    picture: "/images/pictures/vandango/skaramush.png",
    releases: [
      {
        id: "neurocentric",
        title: "Neurocentric",
        cover: "/images/cover/skaramushvandangocover/neurocentric.png",
        coverMini: "/images/cover/skaramushvandangocover/neurocentric_mini.png",
        audio: [
          { file: "/audio/skaramushvandango/neurocentric/amongthecrowd_perrymix.m4a",     label: "Among the Crowd (Perry Mix)" },
          { file: "/audio/skaramushvandango/neurocentric/amongthecrowd_sweetchillimix.m4a", label: "Among the Crowd (Sweet Chilli Mix)" },

          { file: "/audio/skaramushvandango/neurocentric/borrowedtime_og.m4a",    label: "Borrowed Time (Main)" },
          { file: "/audio/skaramushvandango/neurocentric/borrowedtime_l8tnite.m4a", label: "Borrowed Time (Late Nite Mix)" },

          { file: "/audio/skaramushvandango/neurocentric/itry_4her.m4a",     label: "I Try (4Her Mix)" },
          { file: "/audio/skaramushvandango/neurocentric/itry_ibizasun.m4a", label: "I Try (Ibiza Sun Mix)" },

          { file: "/audio/skaramushvandango/neurocentric/likewater_main.m4a",        label: "Like Water (Main)" },
          { file: "/audio/skaramushvandango/neurocentric/likewater_elwoodblues.m4a", label: "Like Water (Elwood Blues Mix)" },

          { file: "/audio/skaramushvandango/neurocentric/nightsgoesby_main.m4a", label: "Nights Go By (Main)" },
          { file: "/audio/skaramushvandango/neurocentric/nightgoesby_ogmix.m4a", label: "Nights Go By (RMX)" },

          { file: "/audio/skaramushvandango/neurocentric/notalovesong_grungemix.m4a", label: "Not a Love Song (Grunge Mix)" },
          { file: "/audio/skaramushvandango/neurocentric/notalovesong_lumpemix.m4a",  label: "Not a Love Song (Lumpe Mix)" },

          { file: "/audio/skaramushvandango/neurocentric/rausbistdu_main.m4a",       label: "Raus bist Du (Main)" },
          { file: "/audio/skaramushvandango/neurocentric/rausbistdu_menemistemix.m4a", label: "Raus bist Du (Menemiste Mix)" },

          { file: "/audio/skaramushvandango/neurocentric/systemfailure_main.m4a",     label: "System Failure (Main)" },
          { file: "/audio/skaramushvandango/neurocentric/systemfailure_inyafaze.m4a", label: "System Failure (InYaFaze Mix)" },
          { file: "/audio/skaramushvandango/neurocentric/systemfailure_kortanamix.m4a", label: "System Failure (Kortana Mix)" }
        ]
      }
    ]
  }
];

export const mockReleases: Release[] = mockArtists.flatMap(a => a.releases);
