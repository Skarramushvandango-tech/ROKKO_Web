// src/data/mockData.ts

export interface Track { file: string; title: string }
export interface Release { cover: string; thumbnail: string; picture: string; tracks: Track[] }
export interface Artist { name: string; image: string; releases: { [key: string]: Release } }

export const artists: Artist[] = [
  {
    name: "Fleur et Beunié",
    image: "/images/pictures/fleurbenuie/fleurbeunie.png",
    releases: {
      "Feu Léger": {
        cover: "/images/cover/fleurbeuniecover/feu_leger_cover.png",
        thumbnail: "/images/cover/fleurbeuniecover/leger_mini.png",
        picture: "/images/pictures/fleurbenuie/fleurbeunie.png",
        tracks: [
          { file: "/audio/fleurbenuie/feuleger/feuleger_main.m4a", title: "Feu Léger (Main)" },
          { file: "/audio/fleurbenuie/feuleger/feuleger_house.m4a", title: "Feu Léger (House Mix)" },
          { file: "/audio/fleurbenuie/feuleger/feuleger_frenchclassic.m4a", title: "Feu Léger (French Classic Mix)" },
          { file: "/audio/fleurbenuie/feuleger/feuleger_sundown.m4a", title: "Feu Léger (Sundown Mix)" },
          { file: "/audio/fleurbenuie/feuleger/feuleger_electricclub1.m4a", title: "Feu Léger (Electric Club Mix)" }
        ]
      }
    }
  },
  {
    name: "Henri Bellieu",
    image: "/images/pictures/henri/henri.png",
    releases: {
      "La Femme": {
        cover: "/images/cover/henribellieucover/la_femme.png",
        thumbnail: "/images/cover/henribellieucover/femme_mini.png",
        picture: "/images/pictures/henri/henri.png",
        tracks: [
          { file: "/audio/henribellieu/lafemme/la_femme_main.m4a", title: "La Femme (Main)" },
          { file: "/audio/henribellieu/lafemme/la_femme_deux.m4a", title: "La Femme (Version Deux)" }
        ]
      },
      "Petit Colibri": {
        cover: "/images/cover/henribellieucover/petite_colibri.png",
        thumbnail: "/images/cover/henribellieucover/petite_mini.png",
        picture: "/images/pictures/henri/henri.png",
        tracks: [
          { file: "/audio/henribellieu/petitecolibri/petite_colibri_main.m4a", title: "Petit Colibri (Main)" },
          { file: "/audio/henribellieu/petitecolibri/petite_colibri_nocturne_mix.m4a", title: "Petit Colibri (Nocturne Mix)" },
          { file: "/audio/henribellieu/petitecolibri/petite_colibri_ennio_mix.m4a", title: "Petit Colibri (Ennio Mix)" }
        ]
      }
    }
  },
  {
    name: "Markus Erling",
    image: "/images/pictures/erling/erling.png",
    releases: {
      "Endlich Schlafen": {
        cover: "/images/cover/markuserlingcover/schlafen_cover.png",
        thumbnail: "/images/cover/markuserlingcover/schlafen_mini.png",
        picture: "/images/pictures/erling/erling.png",
        tracks: [
          { file: "/audio/markuserling/endlichschlafen/endlich_schlafen_main.m4a", title: "Endlich Schlafen (Main)" },
          { file: "/audio/markuserling/endlichschlafen/endlich_ schlafen_monotoni.m4a", title: "Endlich Schlafen (Monotoni Mix)" }
        ]
      },
      "Der Tag an dem es regnet": {
        cover: "/images/cover/markuserlingcover/regen_cover.png",
        thumbnail: "/images/cover/markuserlingcover/regen_mini.png",
        picture: "/images/pictures/erling/erling.png",
        tracks: [
          { file: "/audio/markuserling/regnet/regnet_main.m4a", title: "Der Tag an dem es regnet (Main)" },
          { file: "/audio/markuserling/regnet/regnet_rmx.m4a", title: "Der Tag an dem es regnet (Remix)" }
        ]
      }
    }
  },
  {
    name: "Skank Schablonski",
    image: "/images/pictures/skank/skank.png",
    releases: {
      "Kohle raus": {
        cover: "/images/cover/skankschablonskicover/kohle_raus_cover.png",
        thumbnail: "/images/cover/skankschablonskicover/kohle_mini.png",
        picture: "/images/pictures/skank/skank.png",
        tracks: [
          { file: "/audio/skankschablonski/kohleraus/kohle_raus_main.m4a", title: "Kohle raus (Main)" },
          { file: "/audio/skankschablonski/kohleraus/kohle_raus_rmx.m4a", title: "Kohle raus (Remix)" }
        ]
      }
    }
  },
  {
    name: "Skaramush Vandango",
    image: "/images/pictures/vandango/skaramush.png",
    releases: {
      "Neurocentric": {
        cover: "/images/cover/skaramushvandangocover/neurocentric.png",
        thumbnail: "/images/cover/skaramushvandangocover/neurocentric_mini.png",
        picture: "/images/pictures/vandango/skaramush.png",
        tracks: [
          { file: "/audio/skaramushvandango/neurocentric/systemfailure_main.m4a", title: "System Failure (Main)" },
          { file: "/audio/skaramushvandango/neurocentric/systemfailure_kortanamix.m4a", title: "System Failure (Kortana Mix)" },
          { file: "/audio/skaramushvandango/neurocentric/systemfailure_inyafaze.m4a", title: "System Failure (Inyafaze)" },
          { file: "/audio/skaramushvandango/neurocentric/likewater_main.m4a", title: "Like Water (Main)" },
          { file: "/audio/skaramushvandango/neurocentric/likewater_elwoodblues.m4a", title: "Like Water (Elwood Blues)" },
          { file: "/audio/skaramushvandango/neurocentric/rausbistdu_main.m4a", title: "Raus bist du (Main)" },
          { file: "/audio/skaramushvandango/neurocentric/rausbistdu_menemistemix.m4a", title: "Raus bist du (Menemiste Mix)" },
          { file: "/audio/skaramushvandango/neurocentric/nightsgoesby_main.m4a", title: "Night Goes By (Main)" },
          { file: "/audio/skaramushvandango/neurocentric/nightgoesby_ogmix.m4a", title: "Night Goes By (OG Mix)" },
          { file: "/audio/skaramushvandango/neurocentric/borrowedtime_og.m4a", title: "Borrowed Time (OG)" },
          { file: "/audio/skaramushvandango/neurocentric/borrowedtime_l8tnite.m4a", title: "Borrowed Time (L8t Nite)" },
          { file: "/audio/skaramushvandango/neurocentric/itry_4her.m4a", title: "I Try (4 Her)" },
          { file: "/audio/skaramushvandango/neurocentric/itry_ibizasun.m4a", title: "I Try (Ibiza Sun)" },
          { file: "/audio/skaramushvandango/neurocentric/amongthecrowd_perrymix.m4a", title: "Among the Crowd (Perry Mix)" },
          { file: "/audio/skaramushvandango/neurocentric/amongthecrowd_sweetchillimix.m4a", title: "Among the Crowd (Sweet Chilli Mix)" },
          { file: "/audio/skaramushvandango/neurocentric/notalovesong_lumpemix.m4a", title: "Not a Love Song (Lumpe Mix)" },
          { file: "/audio/skaramushvandango/neurocentric/notalovesong_grungemix.m4a", title: "Not a Love Song (Grunge Mix)" }
        ]
      }
    }
  }
];

export default artists;
