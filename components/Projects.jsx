"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/projects";
import Card from "./Card";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const scrollRef = useRef(null);

  const categories = [
    "All",
    "Full-stack Web Apps",
    "Ecommerce Websites",
    "Landing Pages",
  ];
  const projectsList = Array.isArray(projects) ? projects : [];

  const filteredProjects = projectsList.filter((p) => {
    if (activeCategory === "All") return true;
    return p.category === activeCategory;
  });

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      const scrollTo =
        direction === "left"
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount;

      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section
      id="projects"
      className="py-24 overflow-hidden"
      style={{ backgroundColor: "#fffefe", fontFamily: "'Lexend', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Area */}
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight mb-4"
          >
            Selected{" "}
            <span className="text-[#1a3d63] italic font-serif">Works</span>
          </motion.h2>
          <p className="text-zinc-500 text-lg font-light max-w-xl">
            A collection of high-performance digital products built for speed
            and conversion.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all border ${
                activeCategory === cat
                  ? "bg-zinc-900 text-white border-zinc-900 shadow-md"
                  : "bg-white text-zinc-500 border-zinc-100 hover:border-zinc-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Slider Wrapper with Floating Buttons */}
        <div className="relative group">
          {/* Navigation Controls - Positioned Absolute over the Slider */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 z-20 pointer-events-none">
            <button
              onClick={() => scroll("left")}
              className="p-4 rounded-full bg-white/80 backdrop-blur-md border border-zinc-100 text-zinc-900 shadow-xl pointer-events-auto hover:bg-zinc-900 hover:text-white transition-all active:scale-90"
              aria-label="Previous Project"
            >
              <FiChevronLeft size={24} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-4 rounded-full bg-white/80 backdrop-blur-md border border-zinc-100 text-zinc-900 shadow-xl pointer-events-auto hover:bg-zinc-900 hover:text-white transition-all active:scale-90"
              aria-label="Next Project"
            >
              <FiChevronRight size={24} />
            </button>
          </div>

          {/* The Slider Container */}
          <motion.div
            ref={scrollRef}
            className="flex gap-10 overflow-x-auto no-scrollbar snap-x snap-mandatory cursor-grab active:cursor-grabbing pb-10"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.name}
                  layout
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="min-w-[90vw] md:min-w-[600px] snap-center"
                >
                  <Card project={project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
