"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { navItems } from "@/app/_data/siteData";

export default function Navbar() {
  const [isHero, setIsHero] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("hero");
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      // Enquanto o topo do hero ainda estiver visível, navbar transparente.
      setIsHero(rect.top <= 0 && rect.bottom > window.innerHeight * 0.15);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const className = useMemo(() => {
    return isHero
      ? "bg-transparent text-[#FBF9F5]/95"
      : "bg-surface-2 backdrop-blur-[14px] text-[#0b0f1f] shadow-[0_14px_50px_rgba(0,0,0,0.18)]";

  }, [isHero]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-colors duration-500 ${className}`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="relative flex items-center"
          aria-label="Filmar"
        >
  
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Navegação principal">
          {navItems.map((item: { label: string; href: string }) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full text-[13px] font-normal tracking-[0.06em] transition-colors hover:bg-white/5 hover:text-[#000] focus-visible:bg-white/5 focus-visible:text-[#000]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contato"
            className="rounded-full border border-[#FBF9F5]/25 bg-transparent px-4 py-2 text-[13px] tracking-[0.08em] transition-colors hover:bg-black/5 hover:border-black/10 md:px-5"
          >
            Vamos Conversar
          </Link>
        </div>
      </div>
    </header>
  );
}

