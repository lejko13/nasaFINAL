import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from "react-i18next";

import { useMediaQuery } from "react-responsive";

const LOGO_URL = "https://media.base44.com/images/public/user_69dcd0ab7f89db2e942fbb31/475ed3edd_Snimkaobrazovky2026-05-22o192922.png";


const tmava = '/stmava.png'

const svetle = '/svetla.png'
const navLinks = [
  { label: 'Menu', href: '#menu' },
  { label: 'Galéria', href: '#gallery' },
  { label: 'Kontakt', href: '#contact' },
];




export default function Navbar() {

const { i18n, t } = useTranslation();

 

  const isDesktop = useMediaQuery({
    query: "(min-width: 700px)",
  });


  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();


  const language = i18n.language;

const changeLanguage = (lang) => {
  i18n.changeLanguage(lang);
};

 

 

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);


  console.log(t("translation"));
  
  const navLinksRaw = t("navLinks", { returnObjects: true });

const navLinks = Array.isArray(navLinksRaw) ? navLinksRaw : [];



  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
        bg-background/95 backdrop-blur-md border-b border-border/50 px-4
      `}>

        <nav className="max-w-7xl mx-auto  flex items-center justify-between h-14">
          <div className='w-[180px]'>
             <a href="#hero">

  {theme === 'light' ? (
  <img
    src={tmava}
    alt="naša"
    className="h-9 object-contain"
  />
) : (
  <img
    src={svetle}
    alt="naša"
    className="h-9 object-contain"
  />
)}



          </a>

          </div>
         

          <div className="hidden md:flex items-center gap-8 ">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] tracking-wide text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex justify-center  px-6  w-[180px]">

            <div className="flex justify-center px-4">
  <div className="flex items-center  bg-muted rounded-full p-1 gap-0.5 ">
    
   <button
        onClick={() =>  changeLanguage("sk")}
        className={`px-3 py-1 rounded-full text-[11px] font-medium tracking-wide transition-all duration-300 ${
          language === "sk"
            ? "bg-foreground text-background"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        SK
      </button>

      <button
        onClick={() =>  changeLanguage("en")}
        className={`px-3 py-1 rounded-full text-[11px] font-medium tracking-wide transition-all duration-300 ${
          language === "en"
            ? "bg-foreground text-background"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        EN
      </button>

  </div>
</div>

      
           

     
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Prepnúť tému"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden p-2"
              aria-label="Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>
        
      </header>
{mobileOpen && (
  <div className="fixed inset-0 z-[60] bg-background flex flex-col">
    <div className="flex items-center justify-between px-4 h-14 border-b border-border/50">
            <a href="#hero">

  {theme === 'light' ? (
  <img
    src={tmava}
    alt="naša"
    className="h-9 object-contain"
  />
) : (
  <img
    src={svetle}
    alt="naša"
    className="h-9 object-contain"
  />
)}



          </a>

      <button onClick={() => setMobileOpen(false)}>
        <X className="w-5 h-5" />
      </button>
    </div>

    <div className="flex-1 flex flex-col px-4 py-12 gap-6">
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={() => setMobileOpen(false)}
          className="font-serif text-3xl border-b border-border/40 pb-5"
        >
          {link.label}
        </a>
      ))}
    </div>
  </div>
)}
    </>
  );
}


