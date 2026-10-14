import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="bg-[#0b0f19] min-h-screen text-slate-100 font-sans selection:bg-purple-500 selection:text-white antialiased flex flex-col justify-between">
      <Navbar />

      <main className="pt-20 flex-grow">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer className="bg-[#070a12] border-t border-slate-800 py-8 text-center mt-auto">
        <p className="text-sm text-slate-500 font-mono">
          &copy; {new Date().getFullYear()} Mahdi Haidari. Multi-Page React Architecture.
        </p>
      </footer>
    </div>
  );
}
