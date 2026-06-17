"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

const videos = [
  { src: "/video1.mp4" },
  { src: "/video2.mp4" },
  { src: "/video3.mp4" },
];

export default function FeaturedWorks() {
  const [playing, setPlaying] = useState<boolean[]>(() => videos.map((_, i) => i === 0));
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  const initialPlaying = useMemo(() => videos.map((_, i) => i === 0), []);

  useEffect(() => {
    const elements = videoRefs.current;

    elements.forEach((el, i) => {
      if (!el) return;
      const sync = () => {
        setPlaying((curr) => {
          const next = [...curr];
          next[i] = !el.paused;
          return next;
        });
      };

      el.addEventListener("play", sync);
      el.addEventListener("pause", sync);
      el.addEventListener("loadedmetadata", sync);

      // Se o primeiro vídeo for o autoplay, tenta retomar
      if (i === 0) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        el.play().catch(() => {
          // autoplay pode ser bloqueado; estado será ajustado pelos events
        });
      }

      return () => {
        el.removeEventListener("play", sync);
        el.removeEventListener("pause", sync);
        el.removeEventListener("loadedmetadata", sync);
      };
    });
  }, [initialPlaying]);

  const togglePlay = (idx: number) => {
    const el = videoRefs.current[idx];
    if (!el) return;

    if (el.paused) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      el.play().catch(() => {
        // ignore; estado será corrigido pelos events
      });
    } else {
      el.pause();
    }
  };

  return (
    <section className="py-20 sm:py-28" aria-label="Trabalhos em destaque">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="flex items-end justify-between gap-10">
          <div>
            <p className="text-[12px] tracking-[0.35em] text-neutral-muted/80">ESPAÇO CRIATIVO</p>
            <h2 className="mt-3 font-cormorant text-4xl leading-[1.05] text-[#FBF9F5] sm:text-5xl"></h2>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:gap-7 lg:grid-cols-2 xl:grid-cols-3">
          {videos.map((video, idx) => (
            <motion.div
              key={video.src}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, delay: idx * 0.04 }}
              className="group relative overflow-hidden rounded-[26px] border border-[#9A7F63]/12 bg-[#FBF9F5]"
            >
              <div className="relative">
                <video
                  ref={(node) => {
                    videoRefs.current[idx] = node;
                  }}
                  src={video.src}
                  className="h-[280px] w-full bg-black object-cover sm:h-[340px] xl:h-[320px]"
                  autoPlay={idx === 0}
                  muted
                  playsInline
                  loop
                  preload="metadata"
                  controls={false}
                  // caso o browser bloqueie autoplay, manter o comportamento consistente
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePlay(idx);
                  }}
                />

                {/* botão play/pause */}
                <button
                  type="button"
                  aria-label={playing[idx] ? "Pausar vídeo" : "Reproduzir vídeo"}
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePlay(idx);
                  }}
                  className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/40 px-4 py-3 backdrop-blur-sm transition hover:bg-black/55"
                >
                  {playing[idx] ? (
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-white"
                    >
                      <path d="M7 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M17 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  ) : (
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-white"
                    >
                      <path
                        d="M9 7.5V16.5L17 12L9 7.5Z"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>

                {/* overlays */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0" />
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-r from-white/10 via-white/0 to-white/0" />

                {/* brilho/edge */}
                <div className="pointer-events-none absolute -inset-px rounded-[26px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(1200px_400px_at_10%_10%,rgba(255,255,255,0.18),transparent_60%)]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



