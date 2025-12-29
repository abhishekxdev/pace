
import React from 'react';

const ProductSection: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-24 bg-white text-center">
      <span className="text-xs font-medium tracking-widest text-gray-400 block mb-4">OUR PRODUCT</span>
      <h2 className="text-3xl md:text-5xl font-serif-pace max-w-3xl mx-auto leading-tight mb-20 font-light">
        Pace brings together the speed of AI with the accuracy of insurance experts
      </h2>
      
      <div className="relative max-w-5xl mx-auto bg-gray-50 p-8 md:p-12 rounded-[2rem] shadow-sm border border-gray-100">
        <div className="aspect-video bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
          <img 
            src="/desktop.png" 
            alt="Dashboard View"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Mocking the monitor stand */}
        <div className="w-1 h-16 bg-gray-200 mx-auto mt-[-1px]" />
        <div className="w-48 h-2 bg-gray-200 mx-auto rounded-full" />
      </div>
    </section>
  );
};

export default ProductSection;
