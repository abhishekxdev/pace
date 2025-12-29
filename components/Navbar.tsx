
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger when scrolling past the hero section (approx 1 viewport height)
      // Using window.innerHeight * 0.9 to start transition slightly before leaving the hero
      setIsScrolled(window.scrollY > window.innerHeight * 0.9);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-6 text-black transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3 md:py-4' : ''
    }`}>
      <div className="flex items-center space-x-8 text-[10px] md:text-xs font-medium tracking-widest">
        <a href="#" className="hover:opacity-70 transition-opacity">PRODUCT</a>
        <a href="#" className="hover:opacity-70 transition-opacity">SECURITY</a>
        <a href="#" className="hover:opacity-70 transition-opacity">NEWS</a>
        <a href="#" className="hover:opacity-70 transition-opacity">COMPANY</a>
      </div>
      
      <div className="absolute left-1/2 -translate-x-1/2">
        <h1 className="text-2xl md:text-3xl font-serif-pace tracking-tighter">PACE</h1>
      </div>

      <div className="flex items-center space-x-6 text-[10px] md:text-xs font-medium tracking-widest">
        <a href="#" className="hover:opacity-70 transition-opacity">SIGN IN</a>
        <a href="#" className="border border-black/30 px-4 py-2 hover:bg-black hover:text-white transition-all">REQUEST A DEMO</a>
      </div>
    </nav>
  );
};

export default Navbar;
