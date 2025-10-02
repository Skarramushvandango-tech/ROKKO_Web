// src/components/WelcomeSection.tsx
import { useEffect, useState } from "react";
import { asset } from "../utils/asset";

export default function WelcomeSection() {
  const [html, setHtml] = useState<string>("");

  useEffect(() => {
    fetch(asset("/data/bios.html"))
      .then((r) => r.text())
      .then((txt) => {
        const doc = new DOMParser().parseFromString(txt, "text/html");
        const el = doc.getElementById("welcome") || doc.querySelector('[data-artist="welcome"]');
        setHtml(el?.innerHTML || "");
      })
      .catch(() => setHtml(""));
  }, []);

  return (
    <section className="mx-auto max-w-5xl px-4 py-6 text-center text-[color:var(--text)]">
      {html ? (
        <article
          className="mx-auto text-lg leading-relaxed"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-3">Willkommen bei ROKKO! Records</h1>
          <p>Musiklabel aus dem Ruhrpott – Releases, Artists, Stories.</p>
        </>
      )}
    </section>
  );
}
