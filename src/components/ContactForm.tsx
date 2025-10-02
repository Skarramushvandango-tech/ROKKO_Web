import { useState } from "react";

export default function ContactForm() {
  const [emailTo, setEmailTo] = useState(""); // später über CMS setzen
  const [msg, setMsg] = useState("");

  return (
    <section style={{ maxWidth: 600, margin: "0 auto", padding: "24px 16px" }}>
      <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>Kontakt</h2>

      <label style={{ display: "block", marginBottom: 8 }}>
        Ziel-E-Mail (Admin)
        <input
          value={emailTo}
          onChange={(e) => setEmailTo(e.target.value)}
          placeholder="admin@example.com"
          style={{ width: "100%", marginTop: 6, padding: 8, borderRadius: 6 }}
        />
      </label>

      <label style={{ display: "block", marginBottom: 8 }}>
        Deine Nachricht
        <textarea
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          rows={5}
          style={{ width: "100%", marginTop: 6, padding: 8, borderRadius: 6 }}
        />
      </label>

      <button
        onClick={() => {
          if (!emailTo) { alert("Bitte Ziel-E-Mail eintragen (oben)."); return; }
          window.location.href = `mailto:${emailTo}?subject=Kontakt%20ROKKO!&body=${encodeURIComponent(msg)}`;
        }}
        style={{ padding: "8px 12px", borderRadius: 6, border: "1px solid rgba(255,255,255,0.3)" }}
      >
        Senden
      </button>
    </section>
  );
}
