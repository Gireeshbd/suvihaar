import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Fleet', href: '#fleet' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-dark-900/80 backdrop-blur-lg border-b border-white/5 py-4 shadow-xl' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <img src={COMPANY_INFO.logo} alt="Suvihaar Logo" className="h-10 w-auto" />
            <span className={`font-serif text-xl font-bold tracking-wide ${isScrolled ? 'text-white' : 'text-white'}`}>
              SUVIHAAR
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-gold-400 transition-colors uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            <a
              href={COMPANY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 bg-gold-500 hover:bg-gold-600 text-black font-semibold rounded-full transition-all transform hover:scale-105"
            >
              <Phone size={16} />
              <span>Book Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-gold-400 transition-colors"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-dark-900/95 backdrop-blur-lg border-b border-white/10 p-4 flex flex-col space-y-4 shadow-2xl animate-in slide-in-from-top-5 duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-gray-300 hover:text-gold-400 transition-colors block px-2 py-1"
            >
              {link.name}
            </a>
          ))}
          <a
            href={COMPANY_INFO.whatsappLink}
            className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-gold-500 text-black font-bold rounded-lg"
          >
            <Phone size={18} />
            Book a Car
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;