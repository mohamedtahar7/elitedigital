"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Review from "@/models/Review";
export default function ReviewSlider({ reviews }: { reviews: any[] }) {
  const [index, setIndex] = useState(0);

  // Group reviews into chunks of 2
  const slides = [];
  for (let i = 0; i < reviews.length; i += 2) {
    slides.push(reviews.slice(i, i + 2));
  }

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // 🚀 Auto slide every 2 seconds
  useEffect(() => {
    if (slides.length <= 1) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full">
      {/* Slide container */}
      <div className="overflow-hidden w-full h-full relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {slides[index]?.map((r, i) => (
              <div
                key={i}
                className="p-4 rounded-xl border border-zinc-300 bg-white"
              >
                <h4 className="font-medium">{r.name}</h4>
                <p className="text-zinc-600">{r.content}</p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation controls (still optional) */}
      {slides.length > 1 && (
        <div className="flex justify-between mt-4">
          <button
            onClick={prevSlide}
            className="px-3 py-1 rounded-lg border hover:bg-zinc-100"
          >
            Prev
          </button>
          <button
            onClick={nextSlide}
            className="px-3 py-1 rounded-lg border hover:bg-zinc-100"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
