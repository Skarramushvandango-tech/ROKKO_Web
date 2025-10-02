// src/components/WelcomeSection.tsx
export default function WelcomeSection() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-6 text-center">
      <h1 className="text-3xl font-bold mb-3 text-yellow-400">
        Willkommen bei ROKKO! Records
      </h1>
      <p className="text-zinc-300 text-lg">
        Musiklabel aus dem Ruhrpott – Releases, Artists, Stories.  
        Starte mit den aktuellen Veröffentlichungen oder wähle oben einen Artist.
      </p>
    </section>
  );
}
