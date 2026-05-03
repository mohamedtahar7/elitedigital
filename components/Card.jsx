"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiArrowRight } from "react-icons/fi";

const Card = ({ project }) => {
  const { name, link, img, description, category } = project;

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-zinc-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full">
      {/* Visual Header */}
      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-zinc-900 shadow-sm">
            {category}
          </span>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-8 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-2xl font-bold text-zinc-900 mb-3 flex items-center gap-2">
            {name}
          </h3>
          <p className="text-zinc-500 leading-relaxed mb-6 line-clamp-2 text-sm">
            {description}
          </p>
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-zinc-900 font-bold group/btn"
        >
          <span>View Project</span>
          <div className="w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center group-hover/btn:translate-x-1 transition-transform">
            <FiArrowRight size={14} />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Card;
