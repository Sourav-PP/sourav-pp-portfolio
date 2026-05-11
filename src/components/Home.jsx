import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Education from './Education';
import Contact from './Contact';
import Footer from './Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen text-gray-200 antialiased selection:bg-cyan-400/30 bg-[#0a0a0a]">
      {/* Global Background Grid Mesh */}
      {/* Global Background Gradient */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(0,255,255,0.08),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(139,92,246,0.06),transparent_45%)]" />
      </div>
      
      <div className="relative z-10 w-full overflow-hidden flex flex-col">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}