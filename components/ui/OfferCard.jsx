"use client";
import React from "react";
import { FiCheck, FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

const OfferCard = ({ offer, id }) => {
  // Highlight the middle card or a specific 'Popular' tag if you have one
  const isPopular = id === 1;

  return (
    <motion.div
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: 30, opacity: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: id * 0.1 }}
      className={`relative p-8 rounded-[2.5rem] border transition-all duration-500 group flex flex-col h-full ${
        isPopular
          ? "bg-[#1a3d63] border-[#1a3d63] shadow-2xl shadow-[#1a3d63]/20 text-white"
          : "bg-white border-zinc-100 hover:border-[#1a3d63]/30 shadow-sm hover:shadow-xl text-zinc-900"
      }`}
    >
      {isPopular && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-zinc-900 text-white text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full">
          Most Popular
        </span>
      )}

      {/* Header */}
      <div className="mb-8">
        <h3
          className={`text-xl font-bold mb-2 ${isPopular ? "text-white" : "text-zinc-900"}`}
        >
          {offer.title}
        </h3>
        <p
          className={`text-sm font-light leading-relaxed ${isPopular ? "text-zinc-300" : "text-zinc-500"}`}
        >
          {offer.whatfor}
        </p>
      </div>

      {/* Pricing */}
      <div className="mb-8">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl md:text-5xl font-black tracking-tight">
            {offer.price === "" ? "Custom" : offer.price}
          </span>
          {offer.price !== "" && (
            <span
              className={`text-xs font-bold uppercase tracking-widest ${isPopular ? "text-zinc-400" : "text-zinc-400"}`}
            >
              DZD
            </span>
          )}
        </div>
      </div>

      {/* Benefits List */}
      <div className="flex-grow mb-10">
        <p
          className={`text-[10px] font-black uppercase tracking-[0.2em] mb-6 ${isPopular ? "text-zinc-400" : "text-zinc-400"}`}
        >
          Included Features
        </p>
        <ul className="space-y-4">
          {offer.benefits.map((ben, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <div
                className={`mt-1 p-0.5 rounded-full ${isPopular ? "bg-white/20 text-white" : "bg-[#1a3d63]/10 text-[#1a3d63]"}`}
              >
                <FiCheck size={14} strokeWidth={3} />
              </div>
              <span
                className={`text-sm ${isPopular ? "text-zinc-200" : "text-zinc-600"}`}
              >
                {ben}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Button */}
      <a
        href="#contact"
        className={`w-full py-4 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2 group/btn ${
          isPopular
            ? "bg-white text-[#1a3d63] hover:gap-4"
            : "bg-[#1a3d63] text-white hover:bg-zinc-900 hover:gap-4"
        }`}
      >
        Get Started <FiArrowRight className="transition-all" />
      </a>
    </motion.div>
  );
};

export default OfferCard;
