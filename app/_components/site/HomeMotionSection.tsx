"use client";

import { motion } from "framer-motion";

import SectionHeading from "./SectionHeading";

export default function HomeMotionSection() {
  return (
    <section className="py-20 sm:py-28" aria-label="Sobre">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 relative">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <SectionHeading
              eyebrow="SOBRE"
              title="Uma filmaker movida por histórias reais."
              description={
                <>
                  Entre o mar e a mata, Ana busca imagens que carregam afeto, tempo e presença.
                  Cada fotografia nasce de um encontro — e se recusa a apressar a beleza.
                </>
              }
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.06 }}
            className="order-1 lg:order-2"
          >
            <div className="relative overflow-hidden rounded-3xl border border-[#9A7F63]/12 bg-[#FBF9F5] aspect-[4/5] h-auto sm:aspect-[4/5] lg:aspect-[4/5]">
              {/* HERO.JPEG EM BACKGROUND (sem corte) */}
              <div
                className="absolute inset-0 bg-center bg-no-repeat"
style={{ backgroundImage: "url('/andressa4.jpg')", backgroundSize: 'contain' }}
              />



              <div className="absolute inset-0 bg-gradient-to-t from-[#1b221c]/25 via-transparent to-transparent" />
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-black/25" />
              </div>

              <div className="pointer-events-none absolute inset-0 ring-1 ring-white/5 transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

