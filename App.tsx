
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AIChat from './components/AIChat';
import Appointment from './components/Appointment';
import Stats from './components/Stats';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      setActiveSection(hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        <section id="home">
          <Hero />
        </section>

        <section id="stats" className="py-12 bg-white">
          <Stats />
        </section>

        <section id="services" className="py-20 bg-gray-50">
          <Services />
        </section>

        <section id="appointment" className="py-20 bg-blue-50">
          <Appointment />
        </section>

        {/* Floating AI Assistant Trigger Button is handled inside AIChat component */}
        <AIChat />
      </main>

      <Footer />
    </div>
  );
};

export default App;
