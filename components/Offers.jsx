"use client";

import React from "react";
import OfferCard from "./ui/OfferCard";
import { offers } from "@/lib/offers";
import { motion } from "framer-motion";

const Offers = () => {
  return (
    <section
      id="offers"
      className="py-24"
      style={{ backgroundColor: "#fffefe", fontFamily: "'Lexend', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h2
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 20, opacity: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-zinc-900 mb-4 tracking-tight"
          >
            Our{" "}
            <span className="text-[#1a3d63] italic font-serif text-5xl md:text-6xl">
              Offers
            </span>
          </motion.h2>

          <motion.p
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 20, opacity: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-zinc-500 text-lg md:text-xl font-light max-w-2xl leading-relaxed"
          >
            Choose the package that fits your goals and get a fast, modern
            website built to scale your business.
          </motion.p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full">
          {offers.map((offer, id) => (
            <OfferCard key={id} id={id} offer={offer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
