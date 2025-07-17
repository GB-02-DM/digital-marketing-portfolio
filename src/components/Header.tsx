import React, { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black/30 backdrop-blur-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-white">Gopika Babu</a>
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300">About</a>
          <a href="#skills" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300">Skills</a>
          <a href="#work" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300">Work</a>
          <a href="#contact" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300">Contact</a>
        </nav>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-900">
          <a href="#about" onClick={() => setIsOpen(false)} className="block py-2 px-6 text-sm text-gray-300 hover:bg-gray-700">About</a>
          <a href="#skills" onClick={() => setIsOpen(false)} className="block py-2 px-6 text-sm text-gray-300 hover:bg-gray-700">Skills</a>
          <a href="#work" onClick={() => setIsOpen(false)} className="block py-2 px-6 text-sm text-gray-300 hover:bg-gray-700">Work</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block py-2 px-6 text-sm text-gray-300 hover:bg-gray-700">Contact</a>
        </div>
      )}
    </header>
  );
}