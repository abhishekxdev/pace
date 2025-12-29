
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-white pt-40 overflow-hidden">
      {/* CTA Section */}
      <div className="relative z-10 text-center pb-40">
        <h2 className="text-5xl md:text-7xl font-serif-pace mb-12 font-light">Let's set the pace</h2>
        <button className="bg-black text-white px-10 py-5 rounded-full text-sm font-normal hover:scale-105 transition-transform flex items-center space-x-4 mx-auto group">
          <span>Request a demo</span>
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>

      {/* Background Graphic (The Paper-like bottom) */}
      <div className="relative w-full h-[500px] md:h-[700px]">
        <img 
          src="/hero1.png" 
          alt="Abstract Fabric" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 pb-12 flex flex-col md:flex-row items-end justify-between text-white">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-16 text-left w-full md:w-auto mb-12 md:mb-0">
            <div className="space-y-4">
              <h5 className="text-[10px] font-medium tracking-widest text-white/60">ABOUT</h5>
              <ul className="text-sm space-y-2 font-light">
                <li><a href="#" className="hover:opacity-60 transition-opacity">Careers</a></li>
                <li><a href="#" className="hover:opacity-60 transition-opacity">News</a></li>
                <li><a href="#" className="hover:opacity-60 transition-opacity">LinkedIn</a></li>
                <li><a href="#" className="hover:opacity-60 transition-opacity">X</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="text-[10px] font-medium tracking-widest text-white/60">RESOURCES</h5>
              <ul className="text-sm space-y-2 font-light">
                <li><a href="#" className="hover:opacity-60 transition-opacity">Security</a></li>
                <li><a href="#" className="hover:opacity-60 transition-opacity">Trust Center</a></li>
              </ul>
            </div>
            <div className="hidden md:block">
              <p className="text-[10px] text-white/60 font-medium tracking-widest">© 2025</p>
            </div>
          </div>
          
          <h1 className="text-[15vw] leading-none font-serif-pace tracking-tighter select-none font-bold opacity-90">PACE</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
