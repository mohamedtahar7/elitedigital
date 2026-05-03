"use client";

import React from "react";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="py-6 border-t border-zinc-100 bg-[#fefffe] text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Line 1: Branding & Copyright */}
        <div className="flex items-center gap-2">
          <span className="text-zinc-900 uppercase font-bold tracking-tight lowercase text-sm">
            elite<span className="text-[#1a3d63]">digital</span>
          </span>
          <span className="opacity-40">/</span>
          <span>© {new Date().getFullYear()}</span>
        </div>

        {/* Line 2: Social & Location */}
        <div className="flex items-center gap-6">
          <a
            href="https://www.instagram.com/elitedigital.dz/"
            target="_blank"
            className="flex items-center gap-1.5 hover:text-[#1a3d63] transition-colors"
          >
            <FiInstagram size={14} /> instagram
          </a>
          <span className="hidden sm:block opacity-20">|</span>
          <span className="opacity-60">Biskra, DZ</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
