import React from 'react';
import { ThemeProvider } from '../components/nasa/ThemeProvider';
import Navbar from '../components/nasa/Navbar';
import Hero from '../components/nasa/Hero';
import MenuPage from './MenuPage';
import Gallery from '../components/nasa/Gallery';
import Footer from '../components/nasa/Footer';
import FAQ from '../components/nasa/FAQ'
import ContactStrip from '../components/nasa/where'

// Minimal contact strip

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
        <Navbar />
        <main>
          <Hero />
          <MenuPage />
          <Gallery />
          <ContactStrip />
          {/* <FAQ></FAQ> */}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}