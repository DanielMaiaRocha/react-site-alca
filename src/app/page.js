import AboutSection from "./components/AboutSection";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <link rel="icon" href="/images/logo.png" sizes="any" />
        <Navbar/>
        <Hero />
        <AboutSection />
    </main>
  );
}
