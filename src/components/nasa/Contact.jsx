import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix leaflet marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const FOOD_IMG = "https://media.base44.com/images/public/6a10927969c05be8b03e7698/3b3c31aa3_generated_a2d11dfb.png";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 px-6 md:px-16 lg:px-24 bg-card">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: 'hsl(20, 60%, 55%)' }}>
            Príďte nás navštíviť
          </p>
          <h2 className="font-serif text-5xl md:text-7xl mb-4">Nájdite nás</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Jednoduché potešenia — dobré jedlo, teplý priestor a chvíle, pre ktoré stojí za to spomaliť.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mt-8">
            <a
              href="https://maps.google.com/?q=Hviezdoslavova+6+Kežmarok"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-all hover:opacity-80"
              style={{ backgroundColor: 'hsl(20, 60%, 75%)', color: 'hsl(20, 10%, 12%)' }}
            >
              <MapPin className="w-4 h-4" /> Google Maps
            </a>
            <a
              href="tel:+421911990869"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm border border-border bg-background hover:bg-muted transition-colors"
            >
              <Phone className="w-4 h-4" /> 0911 990 869
            </a>
          </div>
        </motion.div>

        {/* Food image + Map side by side */}
        <div className="grid md:grid-cols-2 gap-4 rounded-2xl overflow-hidden" style={{ height: '420px' }}>
          {/* Food photo with hours overlay */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden"
          >
            <img src={FOOD_IMG} alt="naša jedlo" className="w-full h-full object-cover" />
            <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm rounded-xl p-4 shadow-md">
              <p className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-2">Otváracie hodiny</p>
              <p className="text-sm font-medium">Po – Št: 07:00 – 20:00</p>
              <p className="text-sm font-medium">Pi – So: 07:00 – 21:00</p>
              <p className="text-sm font-medium">Víkendy a sviatky: od 08:00</p>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden relative"
          >
            <MapContainer
              center={[49.1356, 20.4284]}
              zoom={16}
              scrollWheelZoom={false}
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[49.1356, 20.4284]}>
                <Popup>
                  <strong>naša</strong><br />
                  Hviezdoslavova 6, Kežmarok
                </Popup>
              </Marker>
            </MapContainer>
            <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-md z-[999]">
              <p className="text-xs text-muted-foreground font-medium tracking-wider uppercase mb-0.5">Adresa</p>
              <p className="text-sm font-semibold">Hviezdoslavova 6, Kežmarok</p>
              <a
                href="https://maps.google.com/?q=Hviezdoslavova+6+Kežmarok"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs mt-1 inline-block font-medium transition-colors hover:opacity-70"
                style={{ color: 'hsl(20, 60%, 45%)' }}
              >
                Otvoriť v mapách →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}