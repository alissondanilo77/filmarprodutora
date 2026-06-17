import Footer from "@/app/_components/site/Footer";
import Navbar from "@/app/_components/site/Navbar";

export default function DiarioPage() {
  return (
    <div className="relative">
      <Navbar />

      <main className="pt-24 pb-16">
        <section className="mx-auto w-full max-w-6xl px-5 sm:px-8" aria-label="Diário">
          <div className="rounded-3xl border border-[#9A7F63]/12 bg-[#FBF9F5] p-8 sm:p-10">
            <p className="text-[12px] tracking-[0.35em] text-[#697560]">DIÁRIO</p>
            <h1 className="mt-3 font-cormorant text-4xl leading-[1.05] text-[#394537] sm:text-5xl">
              Capítulo 1
            </h1>
            <p className="mt-5 text-[15px] leading-7 text-[#394537]/80 max-w-2xl">
              Em breve.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

