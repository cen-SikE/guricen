
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Services from './components/Services.tsx';
import AIChat from './components/AIChat.tsx';
import Appointment from './components/Appointment.tsx';
import Stats from './components/Stats.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
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

        <AIChat />
      </main>

      <Footer />
    </div>
  );
};

export default App;
