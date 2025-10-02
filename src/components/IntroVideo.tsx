import { asset } from "../utils/asset";

export default function IntroVideo() {
  // Button unten rechts IM VIDEO
  return (
    <section style={{ position: "relative" }}>
      <video
        src={asset("/video/intro.mp4")}
        autoPlay
        loop
        muted
        playsInline
        style={{ width: "100%", height: "auto", display: "block" }}
        id="intro-video"
      />
      <button
        aria-label="Sound an/aus"
        onClick={() => {
          const v = document.getElementById("intro-video") as HTMLVideoElement | null;
          if (!v) return;
          v.muted = !v.muted;
        }}
        style={{
          position: "absolute", right: 12, bottom: 12,
          padding: "6px 10px", borderRadius: 6,
          background: "rgba(0,0,0,0.4)", color: "#F5F3BB", border: "1px solid rgba(255,255,255,0.2)"
        }}
        title="Sound an/aus"
      >
        Sound
      </button>
    </section>
  );
}
