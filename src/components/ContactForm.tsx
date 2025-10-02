// src/components/ContactForm.tsx
import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  function submit() {
    if (!email || !msg) {
      alert("Bitte E-Mail und Nachricht eingeben.");
      return;
    }
    window.location.href = `mailto:${email}?subject=Kontakt ROKKO! Records&body=${encodeURIComponent(
      `Von: ${name}\nE-Mail: ${email}\n\n${msg}`
    )}`;
  }

  return (
    <section
      style={{
        maxWidth: 600,
        margin: "0 auto",
        padding: "24px 16px",
        background: "rgba(0,0,0,0.15)",
        borderRadius: 8,
      }}
    >
      <h2
        style={{
          fontSize: 20,
          fontWeight: 700,
          marginBottom: 12,
        }}
      >
        Kontakt
      </h2>

      <div style={{ display: "grid", gap: 12 }}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Dein Name"
          style={{
            width: "100%",
            padding: 8,
            borderRadius: 6,
            border: "1px solid rgba(255,255,255,0.3)",
          }}
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Deine E-Mail"
          style={{
            width: "100%",
            padding: 8,
            borderRadius: 6,
            border: "1px solid rgba(255,255,255,0.3)",
          }}
        />
        <textarea
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          rows={5}
          placeholder="Deine Nachricht"
          style={{
            width: "100%",
            padding: 8,
            borderRadius: 6,
            border: "1px solid rgba(255,255,255,0.3)",
          }}
        />
        <button
          onClick={submit}
          style={{
            padding: "8px 12px",
            borderRadius: 6,
            border: "1px solid rgba(255,255,255,0.3)",
            cursor: "pointer",
          }}
        >
          Senden
        </button>
      </div>
    </section>
  );
}
