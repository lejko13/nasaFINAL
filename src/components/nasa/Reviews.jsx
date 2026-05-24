import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const IMG1 = "https://media.base44.com/images/public/6a10927969c05be8b03e7698/519637b96_generated_7aa98ed5.png";
const IMG2 = "https://media.base44.com/images/public/6a10927969c05be8b03e7698/c891dcf2d_generated_58122f62.png";
const IMG3 = "https://media.base44.com/images/public/6a10927969c05be8b03e7698/d00f75a8f_generated_71613869.png";

const reviews = [
  { name: 'Katarína M.', date: '31. jan 2026', img: IMG1, text: 'Najlepšia káva v meste! Útulná atmosféra a tí najpríjemnejší zamestnanci. Moje obľúbené miesto na začiatok dňa.' },
  { name: 'Martin S.', date: '22. jan 2026', img: IMG2, text: 'Prišli sme na brunch a zostali kvôli atmosfére. Jelení guláš bol absolútne neuveriteľný. Určite sa vrátime!' },
  { name: 'Lucia H.', date: '19. dec 2025', img: IMG3, text: 'Krásny interiér, skvelá špeciálna káva a kváskový chlieb, pre ktorý by ste zomreli. Skutočný klenot v Kežmarku.' },
];

export default function Reviews() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-serif text-4xl md:text-6xl"
            >
              Najnovšie hodnotenia
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground text-sm max-w-xs"
          >
            <div className="flex items-center gap-1 mb-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />)}
              <span className="ml-1 font-semibold text-foreground">4,8 / 5</span>
            </div>
            Hodnotenie zákazníkov naša z 400+ recenzií. Skutočné zážitky, útulná atmosféra.
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <motion.article
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl overflow-hidden bg-card shadow-sm"
            >
              <div className="h-52 overflow-hidden">
                <img src={r.img} alt={r.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold tracking-wider uppercase mb-3" style={{ color: 'hsl(20, 60%, 55%)' }}>{r.date}</p>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />)}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed italic mb-4">"{r.text}"</p>
                <p className="font-semibold text-sm">{r.name}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}