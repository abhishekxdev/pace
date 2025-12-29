
import React from 'react';

const IntegrationLogo: React.FC<{ name: string; url: string }> = ({ name, url }) => (
  <div className="flex items-center justify-center h-24 bg-gray-50 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors px-6">
    <img src={url} alt={name} className="max-h-8 max-w-full grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" />
  </div>
);

const IntegrationsGrid: React.FC = () => {
  const logos = [
    { name: 'Salesforce', url: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg' },
    { name: 'Guidewire', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Guidewire_Software_Logo.svg/2560px-Guidewire_Software_Logo.svg.png' },
    { name: 'Microsoft Outlook', url: 'https://upload.wikimedia.org/wikipedia/commons/d/df/Microsoft_Office_Outlook_%282018%E2%80%93present%29.svg' },
    { name: 'Verisk', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Verisk_Analytics_logo.svg/2560px-Verisk_Analytics_logo.svg.png' },
    { name: 'Vertafore', url: 'https://www.vertafore.com/themes/custom/vertafore/logo.svg' },
    { name: 'Microsoft', url: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
    { name: 'Duck Creek', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Duck_Creek_Technologies_logo.svg/2560px-Duck_Creek_Technologies_logo.svg.png' },
    { name: 'Pega', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Pegasystems_logo.svg/2560px-Pegasystems_logo.svg.png' }
  ];

  return (
    <section className="py-24 px-6 md:px-24 bg-[#fcfbf7]">
      <div className="flex flex-col md:flex-row gap-16 items-start">
        <div className="w-full md:w-1/3">
          <span className="text-[10px] font-medium tracking-[0.2em] text-gray-400 block mb-2 uppercase">INTEGRATED WITH YOUR BACK OFFICE</span>
          <h2 className="text-3xl md:text-5xl font-serif-pace leading-tight font-light">
            Pace works with all the systems you use.
          </h2>
        </div>
        <div className="w-full md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-4">
          {logos.map((logo, idx) => (
            <IntegrationLogo key={idx} {...logo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationsGrid;
