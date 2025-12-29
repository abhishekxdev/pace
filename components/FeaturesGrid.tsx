
import React from 'react';

const FeatureCard: React.FC<{ title: string; desc: string; image: string }> = ({ title, desc, image }) => (
  <div className="flex flex-col bg-[#f4f4f2] p-8 md:p-10 rounded-2xl border border-gray-200/50 hover:shadow-xl transition-shadow group">
    <h3 className="text-xl md:text-2xl font-serif-pace mb-8 font-light">{title}</h3>
    <div className="flex-grow flex items-center justify-center mb-8">
      <div className="w-full aspect-[4/3] bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>
    </div>
    <p className="text-sm text-gray-600 leading-relaxed font-light">{desc}</p>
  </div>
);

const FeaturesGrid: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-24 bg-[#fcfbf7]">
      <div className="mb-16">
        <span className="text-[10px] font-medium tracking-[0.2em] text-gray-400 block mb-2">INTEGRATED WITH YOUR BACK OFFICE</span>
        <h2 className="text-3xl md:text-5xl font-serif-pace leading-tight max-w-2xl font-light">
          Combine the super-human speed of AI with best-in-class human expertise
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard 
          title="Submission intake"
          desc="Win business faster by instantly collecting the data your team needs across thousands of pages."
          image="/doc2.png"
        />
        <FeatureCard 
          title="Policy servicing"
          desc="Handle even the most complex tasks from endorsements to audits to renewals."
          image="/doc3.png"
        />
        <FeatureCard 
          title="First Notice of Loss"
          desc="Prepare your full claims file and control quality across adjusting guidelines."
          image="/doc1.png"
        />
      </div>
    </section>
  );
};

export default FeaturesGrid;
