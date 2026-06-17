"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="relative h-dvh bg-black overflow-hidden">

      {/* BACKGROUND PRINCIPAL */}
      <div className="absolute inset-0">
        <img
          src="/hero2.jpg" 
          alt="Hero"
          className="absolute inset-0 h-full w-full object-cover object-center"
          draggable={false}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* CONTAINER */}
      <div className="relative mx-auto flex h-dvh max-w-6xl items-center px-6">
        {/* TEXTO */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 max-w-xl"
        >
          <h1 className="text-5xl font-bold leading-tight text-white md:text-6xl">
            Entre o mar,
            <br />
            a luz e os encontros.
          </h1>

          <p className="mt-5 text-base leading-relaxed text-white/80">
            Filmagens criadas para preservar aquilo que o tempo transforma.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/portfolio"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
            >
              Explorar portfólio
            </Link>

            <Link
              href="/contato"
              className="rounded-full border border-white/30 px-6 py-3 text-sm text-white transition hover:border-white"
            >
              Falar comigo
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}