import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import About from "@/components/sections/About";
import HowItWorks from "@/components/sections/HowItWorks";
import Technology from "@/components/sections/Technology";
import Demo from "@/components/sections/Demo";
import Team from "@/components/sections/Team";
import IgCta from "@/components/sections/IgCta";
import Footer from "@/components/sections/Footer";
import FloatingButtons from "@/components/FloatingButtons";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <About />
        <HowItWorks />
        <Technology />
        <Demo />
        <Team />
        <IgCta />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}
