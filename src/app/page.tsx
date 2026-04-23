import Hero from '@/components/Hero';
import CoreServices from '@/components/CoreServices';
import FeaturedProjects from '@/components/FeaturedProjects';
import TechStack from '@/components/TechStack';
import About from '@/components/About';
import FooterContact from '@/components/FooterContact';

export default function Home() {
  return (
    <main className="min-h-screen bg-obsidian text-slate-gray selection:bg-amber/30 selection:text-white">
      <Hero />
      <CoreServices />
      <FeaturedProjects />
      <TechStack />
      <About />
      <FooterContact />
    </main>
  );
}
