// src/components/CommentSection.tsx
import { useState } from "react";

type Comment = { id: string; email: string; text: string; approved: boolean };

export default function CommentSection() {
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);

  function submit() {
    if (!email || !text) {
      alert("E-Mail und Kommentar eingeben.");
      return;
    }
    const c: Comment = {
      id: String(Date.now()),
      email,
      text,
      approved: false,
    };
    setComments([c, ...comments]);
    setEmail("");
    setText("");
    alert("Kommentar eingereicht. Freigabe durch Admin erforderlich.");
  }

  return (
    <section
      style={{
        maxWidth: 800,
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
      <h3
        style={{
          fontSize: 16,
          fontWeight: 600,
          marginBottom: 16,
        }}
      >
        Kommentarfeld
      </h3>

      <div style={{ display: "grid", gap: 8 }}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-Mail"
          style={{
            padding: 8,
            borderRadius: 6,
            border: "1px solid rgba(255,255,255,0.3)",
          }}
        />
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={3}
          placeholder="Dein Kommentar"
          style={{
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
          Absenden (wartet auf Freigabe)
        </button>
      </div>

      <div style={{ marginTop: 16 }}>
        {comments
          .filter((c) => c.approved)
          .map((c) => (
            <div
              key={c.id}
              style={{
                padding: 8,
                borderRadius: 6,
                background: "rgba(0,0,0,0.25)",
                marginBottom: 8,
              }}
            >
              <div style={{ fontSize: 12, opacity: 0.7 }}>{c.email}</div>
              <div>{c.text}</div>
            </div>
          ))}
      </div>
    </section>
  );
}
