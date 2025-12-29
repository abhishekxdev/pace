
import React from 'react';

const ComparisonSection: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-24 bg-white">
      <div className="flex flex-col md:flex-row gap-20">
        <div className="w-full md:w-1/3">
          <span className="text-xs font-medium tracking-[0.2em] text-gray-400 block mb-2">OLD vs NEW</span>
          <h2 className="text-3xl md:text-5xl font-serif-pace leading-tight font-light">
            Infinite scale, expert validation, instant impact.
          </h2>
        </div>
        
        <div className="w-full md:w-2/3">
          <div className="grid grid-cols-2 gap-8 mb-12 border-b border-gray-100 pb-8">
            <div className="text-sm font-medium text-gray-400">Traditional BPO</div>
            <div className="text-sm font-medium">Pace APO: Agentic Process Outsourcing</div>
          </div>

          {[
            {
              title: "Weeks to workforce",
              old: ["Manual training cycles", "Slow change management"],
              newTitle: "Minutes to live",
              new: ["Bring your existing SOPs", "Instant process changes with natural language"]
            },
            {
              title: "Black box errors",
              old: ["Quality control gaps", "Limited data insight to improve processes"],
              newTitle: "Expert accuracy",
              new: ["AI + human verification loop", "Every decision audited with sources"]
            },
            {
              title: "Capacity-constrained delays",
              old: ["Slow turnarounds", "Seasonal backlogs"],
              newTitle: "Instant speed at infinite scale",
              new: ["Operate 24/7", "Handle unlimited complex tasks in parallel"]
            },
            {
              title: "Fixed labor overhead",
              old: ["Expensive idle capacity", "Inflexible cost structure"],
              newTitle: "Performance pricing",
              new: ["Pay only for results delivered", "Scale without adding headcount"]
            }
          ].map((item, idx) => (
            <div key={idx} className="grid grid-cols-2 gap-8 py-8 border-b border-gray-50 last:border-0">
              <div className="space-y-4">
                <h4 className="font-medium text-gray-800">{item.title}</h4>
                {item.old.map((text, i) => (
                  <p key={i} className="text-xs text-gray-400">— {text}</p>
                ))}
              </div>
              <div className="space-y-4">
                <h4 className="font-medium text-gray-900 flex items-center">
                  <span className="w-4 h-4 rounded-full border border-black flex items-center justify-center mr-2 text-[8px]">✓</span>
                  {item.newTitle}
                </h4>
                {item.new.map((text, i) => (
                  <p key={i} className="text-xs text-gray-600">— {text}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
