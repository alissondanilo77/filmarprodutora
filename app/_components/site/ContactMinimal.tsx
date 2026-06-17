"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactMinimal() {
  return (
    <section className="py-20 sm:py-28" aria-label="Contato">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.75 }}
          className="rounded-3xl border border-[#9A7F63]/12 bg-[#FBF9F5] p-8 sm:p-12"
        >
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-[12px] tracking-[0.35em] text-[#697560]">CONTATO</p>
              <h2 className="mt-3 font-cormorant text-4xl leading-[1.08] text-[#394537] sm:text-5xl">
                Vamos criar algo significativo?
              </h2>
              <p className="mt-5 text-[15px] leading-7 text-[#394537]/80">
                Envie uma mensagem e conte sobre o que você quer preservar. Eu respondo com atenção e calma.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:items-end">
              <Link
                href="https://wa.me/47988546777?text=Oi%2C%20quero%20conversar%20sobre%20um%20ensaio%20contemplativo."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#394537] px-6 text-[13px] tracking-[0.1em] text-[#FBF9F5] transition-transform duration-300 hover:scale-[1.02]"
              >
                WhatsApp
              </Link>
              <div className="text-[12px] tracking-[0.2em] text-[#394537]/60">
                resposta em até 24h úteis
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

