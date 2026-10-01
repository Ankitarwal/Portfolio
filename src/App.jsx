import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background3D from './components/Background3D';
import CursorGlow3D from './components/CursorGlow3D';
import SmoothScroll from './components/SmoothScroll';

function App() {
  return (
    <SmoothScroll>
      <div className="bg-[#050505] min-h-screen text-gray-200 selection:bg-purple-500/30 font-sans antialiased overflow-x-hidden relative">
        {/* 3D WebGL Background Star Universe */}
        <Background3D />

        {/* 3D Dynamic Cursor Glow Follower */}
        <CursorGlow3D />

        {/* Main Content */}
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Achievements />
            <Education />
            <Certifications />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </SmoothScroll>
  );
}

export default App;
