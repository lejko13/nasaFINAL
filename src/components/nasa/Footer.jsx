import React from 'react';
import { useTheme } from './ThemeProvider';

const LOGO_URL = "https://media.base44.com/images/public/user_69dcd0ab7f89db2e942fbb31/475ed3edd_Snimkaobrazovky2026-05-22o192922.png";

export default function Footer() {

  const tmava = '/stmava.png'

const svetle = '/svetla.png'

  const { theme, toggleTheme } = useTheme();

  return (
    <footer className="border-t border-border/40 py-5 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-row md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div >
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

        </div>
  


       
        {/* Right info */}
        <div className="text-right text-[11px] text-muted-foreground leading-relaxed ">
          <p>Hviezdoslavova 6, Kežmarok</p>
          <p>060 01 Kežmarok, Slovensko</p>
          <p>0911 990 869</p>
         
        </div>
      </div>
    </footer>
  );
}