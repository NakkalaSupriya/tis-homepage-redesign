import { useEffect, useState } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ProgramsSection from "./components/sections/ProgramsSection";
import LifeSection from "./components/sections/LifeSection";
import AdmissionsSection from "./components/sections/AdmissionsSection";
import CustomCursor from "./components/animation/CustomCursor";
import ScrollProgress from "./components/animation/ScrollProgress";

export default function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  return (
    <div className="app">
      <ScrollProgress />
      <CustomCursor />
      <Navbar dark={dark} onThemeToggle={() => setDark((value) => !value)} />
      <main>
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <LifeSection />
        <AdmissionsSection />
      </main>
      <Footer />
    </div>
  );
}