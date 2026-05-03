"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { RiDoubleQuotesL } from "react-icons/ri";
import { HiStar } from "react-icons/hi";

export default function ReviewSlider({ reviews }) {
  const [index, setIndex] = useState(0);

  // Group reviews into chunks of 2
  const slides = [];
  const reviewsList = Array.isArray(reviews) ? reviews : [];
  for (let i = 0; i < reviewsList.length; i += 2) {
    slides.push(reviewsList.slice(i, i + 2));
  }

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto slide every 5 seconds (2s is a bit fast for reading text)
  useEffect(() => {
    if (slides.length <= 1) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div
      className="relative w-full max-w-6xl mx-auto py-12"
      style={{ backgroundColor: "#fffefe", fontFamily: "'Lexend', sans-serif" }}
    >
      {/* Navigation Buttons - Positioned on sides for a modern feel */}
      {slides.length > 1 && (
        <div className="absolute top-1/2 -translate-y-1/2 -left-4 -right-4 flex justify-between z-10 pointer-events-none">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-white shadow-lg border border-zinc-100 text-zinc-900 pointer-events-auto hover:bg-zinc-900 hover:text-white transition-all active:scale-90"
          >
            <FiChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-white shadow-lg border border-zinc-100 text-zinc-900 pointer-events-auto hover:bg-zinc-900 hover:text-white transition-all active:scale-90"
          >
            <FiChevronRight size={20} />
          </button>
        </div>
      )}

      <div className="overflow-hidden relative px-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {slides[index]?.map((r, i) => (
              <div
                key={i}
                className="relative p-8 rounded-3xl border border-zinc-100 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Visual Flair: Quote Icon */}
                <RiDoubleQuotesL className="text-[#C19A6B]/20 text-5xl absolute top-6 right-8" />

                {/* Visual Flair: Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, starIdx) => (
                    <HiStar key={starIdx} className="text-[#C19A6B] text-lg" />
                  ))}
                </div>

                <p className="text-zinc-600 text-base leading-relaxed mb-6 italic relative z-10">
                  &quot;{r.content}&quot;
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-white font-bold text-xs">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900 text-sm tracking-tight">
                      {r.name}
                    </h4>
                    <p className="text-[10px] text-[#C19A6B] uppercase tracking-widest font-bold">
                      Verified Client
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {slides.length === 0 && (
          <div className="text-center py-20">
            <h4 className="font-light text-zinc-400 italic">
              No reviews shared yet.
            </h4>
          </div>
        )}
      </div>

      {/* Pagination Dots */}
      {slides.length > 1 && (
        <div className="flex justify-center gap-2 mt-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 transition-all duration-300 rounded-full ${
                index === i ? "w-8 bg-[#C19A6B]" : "w-2 bg-zinc-200"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
