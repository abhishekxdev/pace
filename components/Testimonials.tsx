
import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-24 bg-[#fcfbf7]">
      <div className="flex flex-col md:flex-row items-start gap-12 md:gap-24">
        <h2 className="text-3xl md:text-5xl font-serif-pace leading-tight w-full md:w-1/4 font-light">
          What Customers Say
        </h2>
        
        <div className="w-full md:w-3/4 max-w-4xl">
           <div className="mb-12">
             <span className="text-gray-900 font-serif-pace text-2xl font-medium tracking-tighter block mb-10">Prudential</span>
             <blockquote className="text-2xl md:text-3xl font-serif-pace leading-relaxed text-gray-800 mb-12 italic font-light">
               "We've taken a step forward on our journey to modernize the customer acquisition process. With automated systems, our teams now have more time to focus on customer relationships, which supports Prudential's broader goal of delivering industry-leading experiences for both clients and c...
             </blockquote>
             
             <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <div>
                  <h4 className="font-medium text-gray-900">Sara Atkinson</h4>
                  <p className="text-sm text-gray-500 font-light">Vice President of Customer Acquisition</p>
                </div>
                <a href="#" className="text-xs font-medium border-b border-black pb-1 hover:opacity-70 transition-opacity">Read the release</a>
             </div>
           </div>
           
           <div className="flex items-center space-x-4 pt-12 border-t border-gray-100">
             <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
               <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
             </button>
             <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
               <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
             </button>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
