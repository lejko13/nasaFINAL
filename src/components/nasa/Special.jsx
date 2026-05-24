import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";

function MenuRow({
  name,
  ingredients,
  weight,
  price,
  vegan,
  recommended,
  index,
}) {
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
        <div className="font-medium text-[15px] text-foreground leading-snug flex items-center gap-2 flex-wrap">
          {weight && <span className="font-normal mr-1">{weight}</span>}

          <span>{name}</span>

          {vegan && (
            <span
              title="Vegan"
              className="w-2 h-2 rounded-full bg-green-500 inline-block"
            />
          )}

          {recommended && (
            <span
              title="Recommended"
              className="w-2 h-2 rounded-full bg-yellow-500 inline-block"
            />
          )}
        </div>

        {ingredients && (
          <p className="text-[13px] text-muted-foreground mt-0.5">
            {ingredients}
          </p>
        )}
      </div>

      <p className="text-[15px] font-semibold text-foreground tabular-nums self-start pt-0.5">
        {price}
      </p>
    </motion.div>
  );
}

export default function Special() {
  const { t } = useTranslation();

  const isDesktop = useMediaQuery({
    query: "(min-width: 700px)",
  });

  const title = t("special.aka");
  const items = t("special.items", {
    returnObjects: true,
  });

  return (
    <div className="mb-12 md:mb-16">
      <motion.h3
        initial={isDesktop ? { opacity: 0, y: 10 } : false}
        whileInView={isDesktop ? { opacity: 1, y: 0 } : undefined}
        viewport={isDesktop ? { once: true } : undefined}
        transition={isDesktop ? { duration: 0.4 } : undefined}
        className="font-serif text-3xl md:text-4xl mb-2 text-foreground"
      >
        {title}
      </motion.h3>

      <div className="w-full h-px bg-border mb-1" />

      {Array.isArray(items) &&
        items.map((item, i) => (
          <MenuRow
            key={`${item.name}-${i}`}
            {...item}
            vegan={item.vegan}
            recommended={item.recommended}
            index={i}
          />
        ))}
    </div>
  );
}