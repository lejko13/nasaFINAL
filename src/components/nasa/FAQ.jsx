import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { q: 'Prijímate rezervácie?', a: 'Momentálne neprijímame rezervácie. Vitajte kedykoľvek počas otváracích hodín.' },
  { q: 'Môžem prísť bez rezervácie?', a: 'Áno, samozrejme! Každý je u nás vítaný bez nutnosti rezervácie.' },
  { q: 'Aké sú vaše otváracie hodiny?', a: 'Pondelok – štvrtok: 07:00 – 20:00 | Piatok – sobota: 07:00 – 21:00 | Víkendy a sviatky: od 08:00' },
  { q: 'Ponúkate jedlo so sebou?', a: 'Áno, väčšinu nápojov a niektoré jedlá ponúkame aj na odnesenie.' },
  { q: 'Máte vegetariánske alebo vegánske možnosti?', a: 'Áno! Máme niekoľko vegetariánskych jedál a vieme prispôsobiť mnohé pokrmy. Spýtajte sa nášho personálu.' },
  { q: 'Podávate špeciálnu kávu celý deň?', a: 'Áno, naša špeciálna káva je dostupná počas celých otváracích hodín.' },
  { q: 'Kde vás nájdeme?', a: 'Sme na adrese Hviezdoslavova 6, 060 01 Kežmarok, Slovensko. Môžete nás ľahko nájsť na Google Maps.' },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border/60 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 hover:bg-muted/40 transition-colors px-2 rounded-lg"
      >
        <span className="font-medium text-sm md:text-base">{q}</span>
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors"
          style={{ backgroundColor: 'hsl(20, 60%, 75%)' }}
        >
          {open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="text-sm text-muted-foreground pb-5 px-2 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: 'hsl(20, 60%, 55%)' }}>
            Máte otázky
          </p>
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Časté otázky</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Ak máte ďalšie otázky, neváhajte nás kontaktovať. Radi vám pomôžeme.
          </p>
          <a
            href="#contact"
            className="inline-flex px-6 py-3 rounded-full font-medium text-sm transition-all hover:opacity-80"
            style={{ backgroundColor: 'hsl(20, 60%, 75%)', color: 'hsl(20, 10%, 12%)' }}
          >
            Kontaktujte nás
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-card rounded-2xl p-6 md:p-8 shadow-sm"
        >
          {faqs.map(item => <FaqItem key={item.q} {...item} />)}
        </motion.div>
      </div>
    </section>
  );
}