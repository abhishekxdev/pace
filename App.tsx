
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import FeaturesGrid from './components/FeaturesGrid';
import AgentSection from './components/AgentSection';
import IntegrationsGrid from './components/IntegrationsGrid';
import ComparisonSection from './components/ComparisonSection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="grain-overlay" />
      <Navbar />
      <main>
        <Hero />
        <ProductSection />
        <FeaturesGrid />
        <AgentSection />
        <IntegrationsGrid />
        <ComparisonSection />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;
