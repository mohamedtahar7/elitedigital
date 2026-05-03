"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiCode, FiZap, FiTarget } from "react-icons/fi";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden"
      style={{ backgroundColor: "#fffefe", fontFamily: "'Lexend', sans-serif" }}
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#1a3d63]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-[#1a3d63]/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1a3d63]/5 border border-[#1a3d63]/10 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1a3d63] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1a3d63]"></span>
          </span>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1a3d63]">
            Elite Web Solutions 2026
          </span>
        </motion.div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-zinc-900 leading-[1.1] tracking-tight"
          >
            Building High-Performance <br />
            <span className="text-[#1a3d63] italic font-serif">
              Digital Authority
            </span>
          </motion.h1>
        </div>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-zinc-500 text-lg md:text-xl font-light text-center max-w-2xl leading-relaxed mb-12"
        >
          We engineer clean, modern, and ultra-fast websites designed to help
          Algerian businesses dominate their market and scale globally.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#offers"
            className="group relative px-8 py-5 bg-[#1a3d63] text-white rounded-2xl font-bold flex items-center justify-center gap-3 transition-all hover:bg-zinc-900 active:scale-95 shadow-xl w-full sm:w-auto"
          >
            Explore Our Offers
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="px-8 py-5 bg-white text-zinc-900 border border-zinc-200 rounded-2xl font-bold hover:bg-zinc-50 transition-all active:scale-95 w-full sm:w-auto text-center"
          >
            Start a Project
          </a>
        </motion.div>

        {/* Trust Badges / Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 border-t border-zinc-100 pt-12"
        >
          <div className="flex flex-col items-center md:items-start gap-1">
            <FiZap className="text-[#1a3d63] mb-2" size={24} />
            <span className="font-bold text-zinc-900">Ultra Fast</span>
            <span className="text-xs text-zinc-400 uppercase tracking-widest">
              Optimized Core Vitals
            </span>
          </div>
          <div className="flex flex-col items-center md:items-start gap-1">
            <FiCode className="text-[#1a3d63] mb-2" size={24} />
            <span className="font-bold text-zinc-900">Modern Stack</span>
            <span className="text-xs text-zinc-400 uppercase tracking-widest">
              Next.js & TypeScript
            </span>
          </div>
          <div className="flex flex-col items-center md:items-start gap-1 col-span-2 md:col-span-1">
            <FiTarget className="text-[#1a3d63] mb-2" size={24} />
            <span className="font-bold text-zinc-900">Growth Ready</span>
            <span className="text-xs text-zinc-400 uppercase tracking-widest">
              Built for Conversion
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
