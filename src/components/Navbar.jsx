import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#050505]/75 backdrop-blur-xl py-3.5 shadow-2xl shadow-black/80 border-b border-white/10'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-2xl font-extrabold tracking-tighter flex items-center gap-1.5 group">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 group-hover:scale-105 transition-transform">
              Ankit
            </span>
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-white/[0.04] border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs lg:text-sm font-medium text-gray-300 hover:text-white rounded-full hover:bg-white/10 transition-all duration-200 relative group"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Connect CTA Button */}
          <div className="hidden md:block">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="inline-flex items-center gap-1.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-xs lg:text-sm font-bold px-4 py-2 rounded-full shadow-lg shadow-blue-500/20 transition-all"
            >
              <Sparkles size={14} />
              <span>Let's Talk</span>
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-xl bg-white/5 border border-white/10"
              aria-label="Toggle Navigation"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
