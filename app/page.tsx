

import ContactMinimal from "./_components/site/ContactMinimal";
import DiaryPremium from "./_components/site/DiaryPremium";
import FeaturedWorks from "./_components/site/FeaturedWorks";
import Footer from "./_components/site/Footer";
import Hero from "./_components/site/Hero";
import Navbar from "./_components/site/Navbar";
import PhilosophyMotionSection from "./_components/site/PhilosophyMotionSection";
import HomeMotionSection from "./_components/site/HomeMotionSection";




export default function Home() {

  return (
    <div className="relative">
      <Navbar />
      <Hero />

      <HomeMotionSection />


      <FeaturedWorks />
      <PhilosophyMotionSection />

      <DiaryPremium />
      <ContactMinimal />
      <Footer />
    </div>
  );
}


