import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";

function MenuRow({ name, sub, price, index, recommended }) {
  const isDesktop = useMediaQuery({
    query: "(min-width: 700px)",
  });

  return (
    <motion.div
      initial={isDesktop ? { opacity: 0, y: 8 } : false}
      whileInView={isDesktop ? { opacity: 1, y: 0 } : undefined}
      viewport={isDesktop ? { once: true } : undefined}
      transition={
        isDesktop ? { duration: 0.35, delay: index * 0.04 } : undefined
      }
      className="grid grid-cols-[1fr_auto] gap-x-6 py-5 border-b border-border/50 last:border-b-0"
    >
      <div>
        <div className="font-medium text-[15px] text-foreground leading-snug flex gap-2 items-center">
          <span>{name}</span>

          {recommended && (
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 inline-block" />
          )}
        </div>

        {sub && (
          <p className="text-[13px] text-muted-foreground mt-0.5">{sub}</p>
        )}
      </div>

      <p className="text-[15px] font-semibold text-foreground tabular-nums self-start pt-0.5">
        {price || "—"}
      </p>
    </motion.div>
  );
}

export default function DrinksMenu() {
  const { t } = useTranslation();

  const isDesktop = useMediaQuery({
    query: "(min-width: 700px)",
  });

  const cafe = t("cafe", {
    returnObjects: true,
  });

  return (
    <div>
      {cafe.map((section) => (
        <div key={section.title} className="mb-12 md:mb-16">
          <motion.h3
            initial={isDesktop ? { opacity: 0, y: 10 } : false}
            whileInView={isDesktop ? { opacity: 1, y: 0 } : undefined}
            viewport={isDesktop ? { once: true } : undefined}
            transition={isDesktop ? { duration: 0.4 } : undefined}
            className="font-serif text-3xl md:text-4xl mb-2 text-foreground"
          >
            {section.title}
          </motion.h3>

          <div className="w-full h-px bg-border mb-1" />

          {section.items.map((item, i) => (
            <MenuRow
              key={`${item.name}-${i}`}
              {...item}
              index={i}
              recommended={item.recommended}
            />
          ))}
        </div>
      ))}
    </div>
  );
}