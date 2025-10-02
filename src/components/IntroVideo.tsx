// src/components/IntroVideo.tsx
import { asset } from "../utils/asset";

export default function IntroVideo() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-8">
      <div className="aspect-video w-full overflow-hidden rounded-md border border-white/10 bg-black/20">
        <video
          src={asset("/movies/intro_movie.mp4")}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
