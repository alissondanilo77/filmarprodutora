"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { diaryPosts } from "@/app/_data/siteData";

export default function DiaryPremium() {
  return (
    <section className="py-20 sm:py-28" aria-label="Diário">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <p className="text-[12px] tracking-[0.35em] text-[#697560]">DIÁRIO</p>
            <h2 className="mt-3 font-cormorant text-4xl leading-[1.05] text-[#394537] sm:text-5xl">
              Natureza em capítulos
            </h2>
          </div>
          <Link
            href="/diario"
            className="text-[13px] tracking-[0.12em] text-[#394537]/70 transition-opacity hover:opacity-70"
          >
            ler diário →
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {diaryPosts.map((post, idx) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, delay: idx * 0.05 }}
              className="group overflow-hidden rounded-3xl border border-[#9A7F63]/12 bg-[#FBF9F5]"
            >
              <div className="relative">
                <Image
                  src={post.imageSrc}
                  alt={post.title}
                  width={700}
                  height={800}
                  className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b221c]/35 via-transparent to-transparent" />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between gap-3 text-[12px] tracking-[0.2em] text-[#697560]">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="mt-4 font-cormorant text-2xl leading-[1.15] text-[#394537]">
                  {post.title}
                </h3>
                <p className="mt-3 text-[14px] leading-6 text-[#394537]/80">
                  {post.excerpt}
                </p>

                <Link
                  href="/diario"
                  className="mt-5 inline-flex items-center gap-2 text-[13px] tracking-[0.12em] text-[#394537]/70 transition-opacity hover:opacity-70"
                >
                  abrir
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

