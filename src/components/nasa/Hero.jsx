import React, { useState } from "react";
import { motion } from "framer-motion";
import { products, nahladhore } from "../../data";
import { useTranslation } from "react-i18next";
import ProjectLightbox from "../owerlap";
import { useMediaQuery } from "react-responsive";

export default function Hero() {
  const { t } = useTranslation();

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const isDesktop = useMediaQuery({
    query: "(min-width: 700px)",
  });

  return (
    <section id="hero" className="min-h-screen flex flex-col pt-20">
      {lightboxOpen && (
        <ProjectLightbox
          projects={products}
          activeIndex={activeIndex}
          onClose={() => setLightboxOpen(false)}
          onNavigate={setActiveIndex}
        />
      )}

      <div className="flex flex-col justify-center px-6 text-center mb-12 md:mb-16 pt-16 md:pt-20 relative overflow-hidden">
        <p
  aria-hidden
  className="hidden md:flex absolute inset-0 items-center justify-center font-serif font-bold select-none pointer-events-none text-foreground/[0.04] leading-none whitespace-nowrap px-4 md:text-[clamp(140px,18vw,280px)]"
>
  {t("hero.title")}
  <br />
  {t("hero.subtitle")}
</p>

        <motion.p
          initial={isDesktop ? { opacity: 0 } : false}
          animate={isDesktop ? { opacity: 1 } : false}
          transition={isDesktop ? { duration: 0.6, delay: 0.1 } : undefined}
          className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground mb-5 relative z-10"
        >
          {t("hero.top")}
        </motion.p>

        <motion.h1
          initial={isDesktop ? { opacity: 0, y: 16 } : false}
          animate={isDesktop ? { opacity: 1, y: 0 } : false}
          transition={isDesktop ? { duration: 0.7, delay: 0.2 } : undefined}
          className="font-serif leading-[1.0] tracking-tight mb-8 relative z-10"
          style={{ fontSize: "clamp(64px, 14vw, 150px)" }}
        >
          {t("hero.title")}
          <br />
          {t("hero.subtitle")}
        </motion.h1>

        <motion.p
          initial={isDesktop ? { opacity: 0 } : false}
          animate={isDesktop ? { opacity: 1 } : false}
          transition={isDesktop ? { duration: 0.6, delay: 0.1 } : undefined}
          className="text-[11px] leading-[2.2] tracking-[0.2em] uppercase text-muted-foreground relative z-10"
        >
          {t("hero.description1")}
          <br />
          {t("hero.description2")}
        </motion.p>
      </div>

      <div className="w-full h-fit pb-20">
        <motion.div
          initial={isDesktop ? { opacity: 0 } : false}
          animate={isDesktop ? { opacity: 1 } : false}
          transition={isDesktop ? { duration: 0.5, delay: 0.45 } : undefined}
          className="flex justify-center relative z-10"
        >
          <div className="flex bg-muted rounded-full p-1 gap-1">
            <a
              href="#menu"
              className={`px-7 py-2.5 rounded-full text-sm font-semibold bg-foreground text-background ${
                isDesktop ? "transition-all duration-300 hover:opacity-90" : ""
              }`}
            >
              {t("hero.primaryButton")}
            </a>

            <a
              href="#gallery"
              className={`px-7 py-2.5 rounded-full text-sm font-semibold text-muted-foreground ${
                isDesktop
                  ? "transition-all duration-300 hover:text-foreground"
                  : ""
              }`}
            >
              {t("hero.secondaryButton")}
            </a>
          </div>
        </motion.div>
      </div>

      <div className="w-full h-fit px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
          {[
            {
              items: products.slice(0, 1),
              big: true,
              customImage: false,
            },
            {
              items: products.slice(1, 3),
              big: false,
              customImage: false,
            },
            {
              items: products.slice(2, 3),
              big: true,
              customImage: true,
            },
          ].map((column, colIndex) => (
            <div
              key={colIndex}
              className={column.big ? "" : "flex flex-col gap-3 md:gap-4"}
            >
              {column.items.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    setLightboxOpen(true);
                    setActiveIndex(item.id);
                  }}
                  className={`
                    overflow-hidden rounded-2xl cursor-pointer
                    ${isDesktop ? "group" : ""}
                    ${column.big ? "h-[520px]" : "h-[250px]"}
                  `}
                >
                  <img
                    src={column.customImage ? nahladhore[3].img : item.img}
                    alt={column.customImage ? nahladhore[3].alt : item.alt}
                    className={`
                      w-full h-full object-cover
                      ${
                        isDesktop
                          ? "group-hover:scale-105 transition-transform duration-700"
                          : ""
                      }
                    `}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="h-8" />
    </section>
  );
}