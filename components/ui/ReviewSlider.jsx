"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { RiDoubleQuotesL } from "react-icons/ri";
import { HiStar } from "react-icons/hi";

export default function ReviewSlider({ reviews }) {
  const [index, setIndex] = useState(0);
  const reviewsList = Array.isArray(reviews) ? reviews : [];

  const slides = [];
  for (let i = 0; i < reviewsList.length; i += 2) {
    slides.push(reviewsList.slice(i, i + 2));
  }

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    if (slides.length <= 1) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  if (slides.length === 0)
    return (
      <div className="py-20 border-2 border-dashed border-zinc-100 rounded-[3rem] flex items-center justify-center">
        <p className="text-zinc-400 italic font-light">
          Be the first to leave a review.
        </p>
      </div>
    );

  return (
    <div className="relative w-full">
      {/* Navigation */}
      <div className="flex justify-end gap-3 mb-8">
        <button
          onClick={prevSlide}
          className="p-4 rounded-2xl bg-zinc-50 text-[#1a3d63] hover:bg-[#1a3d63] hover:text-white transition-all"
        >
          <FiArrowLeft size={18} />
        </button>
        <button
          onClick={nextSlide}
          className="p-4 rounded-2xl bg-zinc-50 text-[#1a3d63] hover:bg-[#1a3d63] hover:text-white transition-all"
        >
          <FiArrowRight size={18} />
        </button>
      </div>

      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {slides[index]?.map((r, i) => (
              <div
                key={i}
                /* Added 'flex flex-col' to the card container */
                className="relative p-10 rounded-[2.5rem] bg-white border border-zinc-100 hover:border-[#1a3d63]/20 transition-all group flex flex-col min-h-[320px]"
              >
                <RiDoubleQuotesL className="text-[#1a3d63]/5 text-6xl absolute top-6 right-8 group-hover:text-[#1a3d63]/10 transition-colors" />

                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, starIdx) => (
                    <HiStar key={starIdx} className="text-[#1a3d63] text-sm" />
                  ))}
                </div>

                {/* The message container */}
                <p className="text-zinc-600 text-sm leading-[1.8] mb-10 font-light italic">
                  &ldquo;{r.content}&rdquo;
                </p>

                {/* 'mt-auto' forces this div to the bottom of the flex-col container */}
                <div className="flex items-center gap-4 border-t border-zinc-50 pt-6 mt-auto">
                  <div className="w-11 h-11 rounded-full bg-[#1a3d63] flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-[#1a3d63]/20">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 text-sm tracking-tight">
                      {r.name}
                    </h4>
                    <p className="text-[10px] text-zinc-400 uppercase tracking-[0.2em] font-black">
                      Verified Client
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress Dots */}
      <div className="flex justify-start gap-3 mt-12">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === i ? "w-12 bg-[#1a3d63]" : "w-3 bg-zinc-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
