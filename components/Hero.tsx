
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-start justify-center px-6 md:px-24 pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero1.png" 
          alt="Hero Background" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-2xl">
        <h2 className="text-6xl md:text-8xl font-serif-pace text-white leading-tight mb-6 font-light">
          Outsource to AI
        </h2>
        <p className="text-lg md:text-xl text-white/90 font-light mb-10 max-w-md">
          The AI-native BPO for the world's leading insurers.
        </p>
        <button className="flex items-center space-x-3 bg-white text-black px-8 py-4 rounded-full font-normal hover:scale-105 transition-transform group">
          <span>Request a demo</span>
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>

      <div className="absolute bottom-12 right-6 md:right-24 z-20 group cursor-pointer">
        <div className="relative w-64 h-40 rounded-lg overflow-hidden border border-white/20 shadow-2xl">
           <img 
            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop" 
            alt="Intro Video"
            className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-500"
           />
           <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-white border-b-[8px] border-b-transparent ml-1" />
             </div>
           </div>
           <div className="absolute bottom-2 left-2 text-white text-[10px] font-normal px-2 py-1 bg-black/20 rounded">
             Introducing Pace
           </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-6 md:left-24 z-10">
        <p className="text-[10px] md:text-xs font-medium tracking-[0.2em] text-white/60 mb-6">TRUSTED BY INDUSTRY LEADERS</p>
        <div className="flex flex-wrap items-center gap-8 opacity-70">
           <span className="text-white font-serif-pace text-xl font-medium tracking-tighter">Prudential</span>
           <span className="text-white font-serif-pace text-xl font-medium italic tracking-tighter">The Mutual Group</span>
           <span className="text-white font-serif-pace text-xl font-medium tracking-tighter">NEWFRONT</span>
           <span className="text-white font-serif-pace text-xl font-medium tracking-tighter">RYZE</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
