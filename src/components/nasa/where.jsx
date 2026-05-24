import React from "react";
import { Navigation, Clock } from "lucide-react";

export default function ContactStrip({
  address = "Hviezdoslavova 6",
  city = "060 01 Kežmarok, Slovensko",
  description = "Naša je miesto, kde sa stretáva pokojné ráno, výberová káva a chvíle, ktoré netreba uponáhľať. V historickom centre Kežmarku vytvárame priestor pre pomalé raňajky, poctivé chute a atmosféru, v ktorej sa budete cítiť prirodzene.",
  phone = "0911 990 869",
  instagram = "https://www.instagram.com/nasa.kaviaren/",
  maps = "https://maps.google.com/?q=Hviezdoslavova+6+Kežmarok",
  openingHours = [
    "Po – Št: 07:00 – 20:00",
    "Pi – So: 07:00 – 21:00",
    "Víkendy a sviatky: od 08:00",
  ],
}) {
  return (
    <section id="contact" className="py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground mb-2">
              Kontakt
            </p>
            <h2 className="font-serif text-4xl md:text-5xl">Kde nás nájdete</h2>
          </div>

          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-muted-foreground hover:text-foreground transition-colors hidden md:block"
          >
            Instagram →
          </a>
        </div>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-20 items-center">
          <div className="rounded-2xl overflow-hidden border border-border bg-muted h-[360px] lg:h-[420px]">
            <iframe
              title="Naša mapa"
              src="https://www.google.com/maps?q=Hviezdoslavova%206,%20Kežmarok&output=embed"
              className="w-full h-full grayscale-[20%]"
              loading="lazy"
            />
          </div>

          <div>
            {/* <p className="text-[11px] tracking-[0.32em] uppercase text-muted-foreground mb-5">
              Kde nás nájdete
            </p>

            <h3 className="font-serif text-3xl md:text-4xl leading-tight text-foreground mb-4">
              {address}
              <br />
              {city}
            </h3> */}

            <p className="text-[15px] leading-7 text-muted-foreground max-w-xl mb-8">
              {description}
            </p>

            <div className="grid sm:grid-cols-[1fr_auto] gap-8">
              <div className="flex gap-4 text-[14px] text-muted-foreground">
                {/* <Clock className="w-5 h-5 mt-1 shrink-0" /> */}
                <div className="space-y-2">
                  {openingHours.map((hour, i) => (
                    <p key={i}>{hour}</p>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 min-w-[150px]">
                <a href={maps} target="_blank" rel="noopener noreferrer"   className="text-[13px] text-muted-foreground hover:text-foreground transition-colors hidden md:block">
                  Google Maps →
                </a>
                <a href={`tel:${phone.replaceAll(" ", "")}`}   className="text-[13px] text-muted-foreground hover:text-foreground transition-colors hidden md:block">
                  {phone} →
                </a>
                <a href={instagram} target="_blank" rel="noopener noreferrer"  className="text-[13px] text-muted-foreground hover:text-foreground transition-colors hidden md:block">
                  Instagram →
                </a>
              </div>
            </div>

            <a
              href={maps}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center gap-3 px-8 py-4 rounded-full border border-border text-[14px] text-foreground hover:bg-muted transition-colors"
            >
              <Navigation className="w-4 h-4" />
              Zobraziť trasu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}