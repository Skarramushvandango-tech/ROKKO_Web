// src/data/bios.ts

export type Links = {
  website?: string;
  instagram?: string;
  spotify?: string;
  youtube?: string;
  bandcamp?: string;
};

export type Bio = {
  slug: string;      // kurzer Ordner-/URL-Name
  name: string;      // Anzeigename
  image: string;     // Bild unter /public/images/pictures/.../*.png
  summary: string;   // Bio-Text
  links?: Links;
};

export const bios: Bio[] = [
  {
    slug: "henri",
    name: "Henri Bellieu",
    image: "/images/pictures/henri/henri.png",
    summary: `Henri Bellieu – schon sein Name klingt wie ein altes Chanson, gesungen in einer verrauchten Pariser Kneipe. Genau dort traf Markus Erling auf ihn: ziellos, die Straßen von Paris entlang wandernd, auf der Suche nach Schöngeist, Musik und einem Hauch französischem Chic. Am Piano saß Henri, mit rauchiger Stimme und Melodien, die den Raum zum Leuchten brachten. Eine Nacht voller Rotwein, Gespräche über Liebe, Leid und das Leben – und aus dieser Begegnung wuchs eine Freundschaft, die sie bis heute trägt.
Mit Petit Colibri singt Henri von einer Frau, die längst aus seinem Leben verschwunden ist und doch bis heute in seinem Herzen verweilt. Jeder seiner Songs trägt diese Ehrlichkeit: mal ist er der, dem das Herz gebrochen wurde, mal der, der selbst Narben hinterlassen hat.
Henris Chansons sind keine Pose – sie sind gelebte Geschichten. Mal zart, mal schmerzlich, immer voller Wahrheit.`,
  },
  {
    slug: "fleurbenuie",
    name: "Fleur & Beunié",
    image: "/images/pictures/fleurbenuie/fleurbenuie.png",
    summary: `Fleur & Beunié – Jet-Set-Liebespaar aus Marseille. Eine Geschichte, fast wie in einem Film.
Fleur, Mitte zwanzig, smart, talentiert und wunderschön, stammt aus einem kultivierten Elternhaus. Doch der Weg ins Familiengeschäft war für sie keine wirkliche Option. Es zog sie in die Club-Szene, wo sie an ihrer Gesangskarriere feilte und ihre ersten kleinen Erfolge als Sängerin erlebte.
Bernier, Anfang dreißig, gutaussehend, charismatisch und voller Talent, hatte genug vom goldenen Käfig. Bentley gegen Tonstudio, Glanz gegen Leidenschaft. Ein Schluck Whisky, ein rauchiger Gesang und ein Blick genügten – Boom. Er suchte eine Stimme und fand in Fleur die große Liebe.
Mit Feu Léger – inklusive der gefeierten FIVRA-Remixe – haben Fleur & Beunié ihren Sound geprägt: jung, sexy und voller Energie, getragen von französischem Esprit und verwurzelt in der europäischen Underground-Club-Szene.`,
  },
  {
    slug: "erling",
    name: "Markus Erling",
    image: "/images/pictures/erling/erling.png",
    summary: `Markus Erling zieht seine Songs direkt aus dem eigenen Leben: Verlust, Missverständnisse, Schmerz und Liebe, gesehen durch die Augen eines Menschen, der nie so recht in eine Welt passt, die auf Schein und leeren Versprechen ruht.
Seine neurodiverse Wahrnehmung brachte ihn irgendwann an einen Punkt der Stille. Ein Rückzug, fast wie ins Exil, weg von Rollen und Erwartungen, die nie zu ihm passten. Dort, zwischen Alleinsein und Neufindung, begann er, sich Schicht für Schicht freizulegen. Und aus diesem Prozess wuchsen die Worte, die schon lange in ihm lagen, hinein in Musik.
Heute ist er nicht nur Stimme seiner eigenen Songs, sondern auch Produzent der Artists bei ROKKO! records. Mit jedem Track öffnet er neue Räume – und es ist klar, dass aus seiner Schublade noch vieles ans Licht kommen wird.`,
  },
  {
    slug: "rokko",
    name: "ROKKO! Records",
    image: "/images/Logo/logo.png", // falls du ein eigenes Bild für „ROKKO!“ hast, anpassen
    summary: `Wir sind ROKKO! Records – und Du „noch“ nicht …
Tach, wir sind die Neuen in der Szene. Und wir sind ein bisschen anders, dass ist aber auch gut so. Wir jagen nicht den Fame und sonnen uns auch nicht im Applaus. Wir haben kein Genre, wir engen uns nicht ein. Die Songs und Artists sind jeglicher Couleur uns eines ist sicher!
* Es wird auf keinen Fall langweilig.
ROKKOS! Herz schlägt im Ruhrpott, doch die Musik reicht weiter. Rokko ist kein Genre, keine Sprache oder Farbe. ROKKO! ist geballte kreative Freiheit, die ins Ohr geht und von dort nicht mehr wegzubekommen ist.
Also kloppt Euch den Schmalz aus den Ohren, hier kommt der Honig …`,
  },
  {
    slug: "vandango",
    name: "SkaRamush Vandango",
    image: "/images/pictures/vandango/skaramush.png",
    summary: `SkaRamush Vandango ist kein gewöhnlicher Künstler – er ist das kreative Rückgrat von ROKKO! Records, Label-Chef und Mastermind hinter sämtlichen Produktionen. Alles, was hier entsteht, trägt seine Handschrift: geschrieben, programmiert, produziert. Denn seine Liebe zur Musik kennt keine Grenzen – weder Genre noch Persönlichkeit halten ihn auf.
Hochgewachsen im Ruhrpott, mit goldener Stimme, großer Klappe und einem Hang zu starken Texten, folgt er nur einer Maxime:
Musik muss den Poppes zum Wackeln bringen.
Und wenn er selbst bei seinen Tracks nicht grinst, gilt: Was er nicht gut findet, ist schlichtweg scheiße.
Im weisen Alter angekommen, wirkt SkaRamush gelassen und doch voller Energie. Seine neurodiverse Perspektive lässt ihn fern vom Rampenlicht bleiben – lieber zieht er im Schatten die Fäden. In seiner kreativen Garage warten Fleur et Beunié, Henri Bellieu, Skank Schablonski und viele mehr, die durch seine Ideen Gestalt annehmen.`,
  },
  {
    slug: "skank",
    name: "Skank Schablonski",
    image: "/images/pictures/skank/skank.png",
    summary: `Skank Schablonski – der Assi aus Iserlohn. Vatta kloppte Kohle unner Tage und Mudda Annegret schnitt inne Nachbarschaft die Haare. Er wuchs auf, als typisches Blach vonne Achtziger, mit Zwille, Zwetschgenbaum und Schrebergarten.
Denn Skank, dat is nich einfach nur’n Typ, ne. Skank, dat is ’ne Marke, Junge. Mit seine Ruhrpott-Kotterschnauze, kloppta dir seine lyrisch-satirischen Backpfeifen so heftig umme Ohren, datte denks der Aschermittwoch fällt auf nen Donnerstag
Seine aktuelle Singel „Kohle raus, jetzt kommt Merz“ bringt den Pöbel zum steppen und dat Establishment zum weinen. Skank weiß ganz genau, wo der Frosch die Locken hat…`,
  },
];

export default bios;
