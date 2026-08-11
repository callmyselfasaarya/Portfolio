import {useEffect} from 'react';
import Lenis from '@studio-freight/lenis';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { TechStack } from './components/sections/TechStack';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { GithubSection } from './components/sections/Github';
import { Contact } from './components/sections/Contact';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CustomCursor } from './components/layout/CustomCursor';

function App() {
  const isLoading = false;  

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {!isLoading && (
        <div className="relative w-full h-full min-h-screen">
          <CustomCursor />
          <Navbar />
          
          <main>
            <Hero />
            <About />
            <Experience />
            <TechStack />
            <Projects />
            <GithubSection />
            <Contact />
          </main>
          
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
