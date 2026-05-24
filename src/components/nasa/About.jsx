import React from 'react';
import { motion } from 'framer-motion';

const IMG1 = "https://media.base44.com/images/public/6a10927969c05be8b03e7698/519637b96_generated_7aa98ed5.png";
const IMG2 = "https://media.base44.com/images/public/6a10927969c05be8b03e7698/7e67e6437_generated_139ba983.png";
const IMG3 = "https://media.base44.com/images/public/6a10927969c05be8b03e7698/0e7112693_generated_267e58eb.png";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Label */}
        <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-6" style={{ color: 'hsl(20, 60%, 55%)' }}>
          Tvorené s láskou
        </p>

        {/* Large heading */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight"
          >
            Silné chute,<br />lokálne suroviny,<br />robené s láskou
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col justify-end gap-5"
          >
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground font-medium">naša</strong> je miesto, kde sa stretáva kvalitná káva, poctivé jedlo a pokojná atmosféra. Ukrytí v srdci Kežmarku sme vytvorili priestor, ktorý sa cíti ako domov — len o niečo lepší.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Každé ráno začína čerstvo praženou špeciálnou kávou a naša kuchyňa podáva poctivé bistro jedlá z lokálnych surovín. Od kváskových štartérov až po sezónne hlavné jedlá — všetko je pripravené s láskou.
            </p>
            <a
              href="#contact"
              className="inline-flex w-fit px-6 py-3 rounded-full font-medium text-sm transition-all hover:opacity-80 mt-2"
              style={{ backgroundColor: 'hsl(20, 60%, 75%)', color: 'hsl(20, 10%, 12%)' }}
            >
              Náš príbeh
            </a>
          </motion.div>
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0 }}
            className="col-span-2 md:col-span-1 rounded-2xl overflow-hidden"
            style={{ height: '280px' }}
          >
            <div className="relative h-full">
              <p className="absolute top-3 left-3 z-10 text-xs font-semibold tracking-widest uppercase bg-card/80 backdrop-blur-sm rounded-full px-3 py-1 text-foreground/80">
                Čerstvé suroviny
              </p>
              <img src={IMG1} alt="Barista" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl overflow-hidden"
            style={{ height: '280px' }}
          >
            <div className="relative h-full">
              <p className="absolute top-3 left-3 z-10 text-xs font-semibold tracking-widest uppercase bg-card/80 backdrop-blur-sm rounded-full px-3 py-1 text-foreground/80">
                Náš tím
              </p>
              <img src={IMG2} alt="Interior" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden"
            style={{ height: '280px' }}
          >
            <div className="relative h-full">
              <p className="absolute top-3 left-3 z-10 text-xs font-semibold tracking-widest uppercase bg-card/80 backdrop-blur-sm rounded-full px-3 py-1 text-foreground/80">
                Špeciálna káva
              </p>
              <img src={IMG3} alt="Coffee" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}