"use client";

import { motion } from "framer-motion";

export default function PhilosophyMotionSection() {
  return (
    <section className="relative py-20 sm:py-28" aria-label="Filosofia">
      <div className="absolute inset-0 -z-10 bg-[#DDD0BC]" />
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl border border-[#9A7F63]/15 bg-[#FBF9F5]/40 p-8 sm:p-12"
        >
          <p className="text-[12px] tracking-[0.35em] text-[#697560]">FILOSOFIA</p>
          <div className="mt-5 font-cormorant text-4xl leading-[1.08] text-[#394537] sm:text-5xl">
            &ldquo;Acredito que filmar é a forma de preservar aquilo que o tempo transforma.&rdquo; 
          </div>

          <div className="mt-6 max-w-2xl text-[15px] leading-7 text-[#394537]/80">
            Não busco performance — busco presença. A imagem nasce quando a natureza dita o ritmo.
          </div>
        </motion.div>
      </div>
    </section>
  );
}

