import React, { useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

import { useMediaQuery } from "react-responsive";

export default function ProjectLightbox({ projects, activeIndex, onClose, onNavigate }) {
  const project = projects[activeIndex];
  const total = projects.length;

  const prev = useCallback(() => onNavigate((activeIndex - 1 + total) % total), [activeIndex, total, onNavigate]);
  const next = useCallback(() => onNavigate((activeIndex + 1) % total), [activeIndex, total, onNavigate]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [prev, next, onClose]);


   const isDesktop = useMediaQuery({
  query: "(min-width: 700px)",
});

  return (
    <motion.div
  initial={isDesktop ? { opacity: 0 } : false}
  animate={isDesktop ? { opacity: 1 } : {}}
  exit={isDesktop ? { opacity: 0 } : undefined}
  transition={isDesktop ? { duration: 0.25 } : undefined}
  className="fixed inset-0 z-50 flex items-center justify-center"
  style={{
    background: 'var(--background)',
    backdropFilter: 'blur(12px)',
  }}
  onClick={onClose}
>
  {/* Close */}
  <button
  onClick={onClose}
  className="
    absolute top-5 right-5 z-10
    w-10 h-10 rounded-full
    flex items-center justify-center

    bg-muted
    text-muted-foreground


    shadow-sm

    hover:opacity-90
    transition-all
  "
>
  <X className="w-4 h-4" />
</button>
      {/* Counter */}
     <div className="absolute top-5 left-1/2 -translate-x-1/2 text-xs font-mono px-4 py-1.5 rounded-full bg-muted text-muted-foreground ">
  {activeIndex + 1} / {total}
</div>

      {/* Image */}
      <motion.div
  key={activeIndex}
  initial={isDesktop ? { opacity: 0, scale: 0.96 } : false}
  animate={isDesktop ? { opacity: 1, scale: 1 } : {}}
  exit={
    isDesktop
      ? { opacity: 0, scale: 0.96 }
      : undefined
  }
  transition={isDesktop ? { duration: 0.3 } : undefined}
  className="relative max-w-2xl w-full mx-16 rounded-2xl overflow-hidden"
  style={{
    border: isDesktop
      ? '1px solid rgba(255,255,255,0.06)'
      : '1px solid rgba(204,1,0,0.25)',

    boxShadow: !isDesktop
      ? '0 0 30px rgba(204,1,0,0.08)'
      : 'none',
  }}
  onClick={e => e.stopPropagation()}
>
   <img
  src={project.heroImage || project.src || project.img}
  alt={project.title || project.alt}
  className="w-full object-cover max-h-[75vh]"
/>
        {/* Caption */}
        {/* <div className="absolute bottom-0 left-0 right-0 p-5"
          style={{ background: 'linear-gradient(to top, rgba(26,27,30,0.95) 0%, transparent 100%)' }}>
          <span className="text-xs font-mono tracking-widest uppercase" style={{ color: '#CC0100' }}>{project.category}</span>
          <h3 className="text-lg font-space font-bold text-white mt-0.5">{project.title}</h3>
          <p className="text-xs font-mono mt-1" style={{ color: 'rgba(255,255,255,0.4)' }}>{project.specs}</p>
        </div> */}
      </motion.div>

      {/* Prev */}
      {/* Prev */}
<button
  onClick={e => {
    e.stopPropagation();
    prev();
  }}
  className="
    absolute left-4 top-1/2 -translate-y-1/2 z-10
    w-11 h-11 rounded-full
    flex items-center justify-center

    bg-muted
    text-muted-foreground
    shadow-sm

    hover:opacity-90
    transition-all
  "
>
  <ChevronLeft className="w-5 h-5" />
</button>

{/* Next */}
<button
  onClick={e => {
    e.stopPropagation();
    next();
  }}
  className="
    absolute right-4 top-1/2 -translate-y-1/2 z-10
    w-11 h-11 rounded-full
    flex items-center justify-center

       bg-muted
    text-muted-foreground
    shadow-sm

    hover:opacity-90
    transition-all
  "
>
  <ChevronRight className="w-5 h-5" />
</button>

      {/* Dot indicators */}
     <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5">
  {projects.map((_, i) => (
    <button
      key={i}
      onClick={(e) => {
        e.stopPropagation();
        onNavigate(i);
      }}
      className={`
        h-1.5 rounded-full 
        transition-all duration-300

        ${
          i === activeIndex
            ? "w-5 bg-muted-foreground"
            : "w-1.5 bg-muted hover:bg-muted-foreground/40"
        }
      `}
    />
  ))}
</div>
    </motion.div>
  );
}