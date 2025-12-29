
import React from 'react';

const Step: React.FC<{ num: number; title: string; desc: string }> = ({ num, title, desc }) => (
  <div className="flex items-start space-x-6 py-8 border-b border-gray-100 last:border-0">
    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-xs font-medium">
      {num}
    </div>
    <div>
      <h4 className="text-lg font-medium mb-2">{title}</h4>
      <p className="text-gray-500 text-sm font-light leading-relaxed">{desc}</p>
    </div>
  </div>
);

const AgentSection: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-24 bg-white">
      <div className="mb-16">
        <span className="text-[10px] font-medium tracking-[0.2em] text-gray-400 block mb-2 uppercase">INTEGRATED WITH YOUR BACK OFFICE</span>
        <h2 className="text-3xl md:text-5xl font-serif-pace leading-tight font-light">
          Pace agents can do anything a BPO rep can.
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-3/5 bg-gray-50 rounded-[2rem] p-8 md:p-12 border border-gray-100 shadow-inner">
           <img 
             src="/table.png" 
             className="w-full rounded-xl shadow-2xl" 
             alt="Agent Interface" 
           />
        </div>
        <div className="w-full md:w-2/5">
          <Step 
            num={1} 
            title="Intake" 
            desc="Read emails and documents across thousands of pages at once." 
          />
          <Step 
            num={2} 
            title="Reason" 
            desc="Apply the rules specific to your business." 
          />
          <Step 
            num={3} 
            title="Act" 
            desc="Take actions in the same way your team does via web or APIs." 
          />
        </div>
      </div>
    </section>
  );
};

export default AgentSection;
