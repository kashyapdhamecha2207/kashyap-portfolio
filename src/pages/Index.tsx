import { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Skills from '../components/Skills';
import LeetCodeStats from '../components/LeetCodeStats';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Toaster } from '../components/ui/toaster';

const Index = () => {
  const [hoveredSkillCategory, setHoveredSkillCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background dark:bg-zinc-950 text-neutral-900 dark:text-neutral-100">
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Portfolio hoveredSkillCategory={hoveredSkillCategory} />
        <Skills hoveredCategory={hoveredSkillCategory} setHoveredCategory={setHoveredSkillCategory} />
        <LeetCodeStats />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
