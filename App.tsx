import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#141414] text-white">
      <Navbar />
      <main className="relative">
        <Hero />
        <div className="relative z-30 space-y-6 md:space-y-12 pb-12">
          <Projects />
          <Experience />
          <Skills />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;