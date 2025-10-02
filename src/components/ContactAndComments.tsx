// src/components/ContactAndComments.tsx
import ContactForm from "./ContactForm";
import CommentSection from "./CommentSection";

export default function ContactAndComments() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-6 text-[color:var(--text)]">
      <div className="rounded-lg border border-white/10 bg-black/20 p-6">
        <h2 className="text-xl font-semibold mb-4">Kontakt & Kommentare</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <ContactForm />
          <CommentSection />
        </div>
      </div>
    </section>
  );
}
