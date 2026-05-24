import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FoodMenu from "../components/nasa/FoodMenu";
import DrinksMenu from "../components/nasa/DrinksMenu";
import Special from "../components/nasa/Special";
import { useMediaQuery } from "react-responsive";
import { useTranslation } from "react-i18next";

export default function MenuPage() {
  const { t } = useTranslation();

  const [tab, setTab] = useState("food");

  const isDesktop = useMediaQuery({
    query: "(min-width: 700px)",
  });

  const buttonClass = (active) =>
    `px-7 py-2.5 rounded-full text-sm font-semibold ${
      isDesktop ? "transition-all duration-300" : ""
    }`;

  const buttonStyle = (active) =>
    active
      ? {
          backgroundColor: "hsl(var(--foreground))",
          color: "hsl(var(--background))",
        }
      : {
          backgroundColor: "transparent",
          color: "hsl(var(--muted-foreground))",
        };

  return (
    <section id="menu" className="py-20 md:py-28">
      <div className="text-center px-6 mb-12 md:mb-16 relative overflow-hidden">
        <p
  aria-hidden
  className="hidden md:flex absolute inset-0 items-center justify-center font-serif font-bold select-none pointer-events-none text-foreground/[0.04] leading-none whitespace-nowrap"
  style={{ fontSize: "clamp(100px, 22vw, 280px)" }}
>
  Menu
</p>

        <motion.h2
          initial={isDesktop ? { opacity: 0, y: 20 } : false}
          whileInView={isDesktop ? { opacity: 1, y: 0 } : undefined}
          viewport={isDesktop ? { once: true } : undefined}
          transition={isDesktop ? { duration: 0.5 } : undefined}
          className="font-serif relative z-10"
          style={{ fontSize: "clamp(64px, 14vw, 180px)", lineHeight: 1.0 }}
        >
          Menu
        </motion.h2>
      </div>

      <div className="flex justify-center mb-10 px-6">
        <div className="flex bg-muted rounded-full p-1 gap-1">
          <button
            onClick={() => setTab("food")}
            className={buttonClass(tab === "food")}
            style={buttonStyle(tab === "food")}
          >
            {t("textmenu.nameF")}
          </button>

          <button
            onClick={() => setTab("drinks")}
            className={buttonClass(tab === "drinks")}
            style={buttonStyle(tab === "drinks")}
          >
            {t("textmenu.nameD")}
          </button>

          <button
            onClick={() => setTab("special")}
            className={buttonClass(tab === "special")}
            style={buttonStyle(tab === "special")}
          >
            {t("textmenu.nameS")}
          </button>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 md:px-10 mb-10 flex flex-wrap justify-between gap-x-6 gap-y-2">
        <div className="w-fit h-fit flex gap-6">
          <div className="flex items-center gap-2 text-[13px] text-muted-foreground">
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500 inline-block" />
            {t("textmenu.our")}
          </div>

          {tab !== "drinks" && (
            <div className="flex items-center gap-2 text-[13px] text-muted-foreground">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block" />
              {t("textmenu.vegan")}
            </div>
          )}
        </div>


{isDesktop && tab === "special" && (
  <div className="flex items-center gap-2 text-[13px] text-muted-foreground">
    {t("special.aka")}
  </div>
)}
      </div>

      <div className="max-w-3xl mx-auto px-6 md:px-10">
        {isDesktop ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              {tab === "food" && <FoodMenu />}
              {tab === "drinks" && <DrinksMenu />}
              {tab === "special" && <Special />}
            </motion.div>
          </AnimatePresence>
        ) : (
          <div key={tab}>
            {tab === "food" && <FoodMenu />}
            {tab === "drinks" && <DrinksMenu />}
            {tab === "special" && <Special />}
          </div>
        )}
      </div>
    </section>
  );
}