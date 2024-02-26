import AboutSection from "./components/AboutSection";
import Carrousel from "./components/Carrousel";
import Clients from "./components/Clients";
import Hero from "./components/Hero";
import MidAboutSection from "./components/MidAboutSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <link rel="icon" href="/images/logo.png" sizes="any" />
        <Navbar/>
        <Hero />
        <AboutSection />
        <MidAboutSection />
        <Clients />
        <Carrousel />
    </main>
  );
}
