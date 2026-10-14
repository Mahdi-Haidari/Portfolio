import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ['Home', 'Projects', 'Skills', 'About', 'Contact'];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0b0f19]/80 backdrop-blur-md border-b border-slate-800/60 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-black tracking-tight text-white">
          MH<span className="text-cyan-400">.</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link 
              key={item} 
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
              className="text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors duration-200"
            >
              {item}
            </Link>
          ))}
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-slate-400 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0e1422] border-b border-slate-800 px-6 py-4 space-y-3 flex flex-col">
          {navItems.map((item) => (
            <Link 
              key={item} 
              to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
              onClick={() => setIsOpen(false)} 
              className="text-base font-medium text-slate-400 hover:text-cyan-400 transition-colors duration-200"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
