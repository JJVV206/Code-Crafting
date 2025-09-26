
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-400" style={{ fontFamily: '"Rubik", sans-serif' }}>
              &lt;TheCodingForge/&gt;
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8" style={{ fontFamily: '"JetBrains Mono", monospace' }}>
            <a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer font-mono">Home</a>
            <a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer font-mono">Services</a>
            <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer font-mono">About</a>
            <a href="#team" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer font-mono">Team</a>
            <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors cursor-pointer font-mono">Contact</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <a href="#contact" className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-400 transition-colors whitespace-nowrap cursor-pointer font-mono font-semibold">
              <i className="ri-terminal-box-line mr-2"></i>
              Start Project
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-blue-400 cursor-pointer"
            >
              <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black border-t border-gray-800">
              <a href="#home" className="block px-3 py-2 text-gray-300 hover:text-blue-400 cursor-pointer font-mono">Home</a>
              <a href="#services" className="block px-3 py-2 text-gray-300 hover:text-blue-400 cursor-pointer font-mono">Services</a>
              <a href="#about" className="block px-3 py-2 text-gray-300 hover:text-blue-400 cursor-pointer font-mono">About</a>
              <a href="#team" className="block px-3 py-2 text-gray-300 hover:text-blue-400 cursor-pointer font-mono">Team</a>
              <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-blue-400 cursor-pointer font-mono">Contact</a>
              <div className="flex items-center justify-center" >
              <a href="#contact" className="w-full mt-4 bg-blue-500 text-white px-10 py-2 rounded-lg hover:bg-blue-400 transition-colors whitespace-nowrap cursor-pointer font-mono font-semibold text-center">
                <i className="ri-terminal-box-line mr-2"></i>
                Start Project
              </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}