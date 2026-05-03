"use client";

import React, { useState, useEffect } from "react";
import { navLinks } from "@/lib/links";
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "py-4 bg-[#fefffe]/80 backdrop-blur-md border-b border-zinc-100 shadow-sm"
          : "py-8 bg-transparent"
      }`}
      style={{ fontFamily: "'Lexend', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/#hero" className="flex items-center gap-2 z-[60]">
          <img
            className="w-8 md:w-10"
            src="https://i.postimg.cc/B6Hr1WGp/social-logo-removebg-preview.png"
            alt="Logo"
          />
          <span className="text-xl font-bold text-zinc-900 tracking-tight">
            Elite<span className="text-[#1a3d63]">Digital</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-50/50 p-1.5 rounded-2xl border border-zinc-100">
          {navLinks.map((link, id) => (
            <a
              key={id}
              href={link.href}
              className="px-5 py-2 text-sm font-medium text-zinc-600 hover:text-[#1a3d63] rounded-xl hover:bg-white hover:shadow-sm transition-all"
            >
              {link.text}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="px-6 py-3 bg-[#1a3d63] text-white text-sm font-bold rounded-xl hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-[#1a3d63]/20"
          >
            Start a Project
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[#1a3d63] z-[60] bg-zinc-50 rounded-xl border border-zinc-100"
        >
          {isOpen ? <RiCloseLine size={24} /> : <RiMenu3Fill size={24} />}
        </button>

        {/* Simplified Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Dark Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-zinc-900/20 backdrop-blur-sm z-40 md:hidden"
              />

              {/* Menu Panel */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed right-0 top-0 h-full w-[280px] bg-[#fefffe] z-50 shadow-2xl p-8 flex flex-col md:hidden"
              >
                <div className="mt-20 flex flex-col gap-6">
                  <p className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em]">
                    Navigation
                  </p>
                  {navLinks.map((link, id) => (
                    <a
                      key={id}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-2xl font-bold text-zinc-900 hover:text-[#1a3d63] transition-colors"
                    >
                      {link.text}
                    </a>
                  ))}

                  <div className="h-px bg-zinc-100 w-full my-4" />

                  <a
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="w-full py-4 bg-[#1a3d63] text-white text-center font-bold rounded-2xl shadow-lg shadow-[#1a3d63]/20"
                  >
                    Contact Us
                  </a>
                </div>

                <div className="mt-auto text-[10px] text-zinc-400 font-medium">
                  © 2026 Elite Digital DZ. <br /> Built for Algerian Businesses.
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
