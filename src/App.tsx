import { LenisProvider } from './context/LenisContext';
import { ScrollProgress } from './components/ui/ScrollProgress';
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
  return (
    <LenisProvider>
      <div className="relative w-full h-full min-h-screen">
        <ScrollProgress />
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
    </LenisProvider>
  );
}

export default App;
