import React, { useState } from "react";
import { products } from "../../data";
import ProjectLightbox from "../owerlap";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const { t } = useTranslation();

  const isDesktop = useMediaQuery({
    query: "(min-width: 700px)",
  });

  const imageClass = `
    w-full h-full object-cover
    ${isDesktop ? "group-hover:scale-105 transition-transform duration-700" : ""}
  `;

  const cardClass = (height) => `
    overflow-hidden rounded-2xl cursor-pointer ${height}
    ${isDesktop ? "group" : ""}
  `;

  const openLightbox = (id) => {
    setLightboxOpen(true);
    setActiveIndex(id);
  };

  return (
    <>
      <section id="gallery" className="py-20 md:py-28 px-6 md:px-16 lg:px-24">
        {lightboxOpen && (
          <ProjectLightbox
            projects={products}
            activeIndex={activeIndex}
            onClose={() => setLightboxOpen(false)}
            onNavigate={setActiveIndex}
          />
        )}

        <div className="max-w-7xl mx-auto gap-3 flex flex-col">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground mb-2">
                {t("gallery.maintext")}
              </p>

              <h2 className="font-serif text-4xl md:text-5xl">
                {t("gallery.bigtrxt")}
              </h2>
            </div>

            <a
              href="https://www.instagram.com/nasa.kaviaren/"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-[13px] text-muted-foreground hidden md:block ${
                isDesktop ? "hover:text-foreground transition-colors" : ""
              }`}
            >
              Instagram →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            {[
              {
                items: products.slice(4, 5),
                big: true,
              },
              {
                items: products.slice(6, 8),
              },
              {
                items: products.slice(8, 10),
              },
            ].map((column, colIndex) => (
              <div
                key={colIndex}
                className={column.big ? "" : "flex flex-col gap-3 md:gap-4"}
              >
                {column.items.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => openLightbox(item.id)}
                    className={cardClass(column.big ? "h-[520px]" : "h-[250px]")}
                  >
                    <img src={item.img} alt={item.alt} className={imageClass} />
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
            <div className="flex flex-col gap-3 md:gap-4">
              {products.slice(11, 13).map((item) => (
                <div
                  key={item.id}
                  onClick={() => openLightbox(item.id)}
                  className={cardClass("h-[250px]")}
                >
                  <img src={item.img} alt={item.alt} className={imageClass} />
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 md:gap-4">
              {products.slice(14, 16).map((item) => (
                <div
                  key={item.id}
                  onClick={() => openLightbox(item.id)}
                  className={cardClass("h-[250px]")}
                >
                  <img src={item.img} alt={item.alt} className={imageClass} />
                </div>
              ))}
            </div>

            {products.slice(16, 17).map((item) => (
              <div
                key={item.id}
                onClick={() => openLightbox(item.id)}
                className={cardClass("h-[520px]")}
              >
                <img src={item.img} alt={item.alt} className={imageClass} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}