// src/components/ContactForm.tsx
import site from "../data/site.json";

export default function ContactForm() {
  const emailTo = site.contactEmail || "";
  function send() {
    if (!emailTo) {
      alert("Kontakt-E-Mail ist nicht gesetzt.");
      return;
    }
    const body = encodeURIComponent("Nachricht an ROKKO! Records");
    window.location.href = `mailto:${emailTo}?subject=Kontakt%20ROKKO!%20Records&body=${body}`;
  }
  return (
    <div className="rounded border border-white/10 bg-black/20 p-3">
      <button
        onClick={send}
        className="px-3 py-2 rounded border border-white/20 hover:bg-white/10"
      >
        E-Mail schreiben
      </button>
    </div>
  );
}
