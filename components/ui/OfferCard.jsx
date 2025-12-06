"use client";
import Link from "next/link";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const OfferCard = ({ offer, id }) => {
  return (
    <motion.div
      whileInView={{ x: 0, opacity: 1 }}
      initial={{ x: 50, opacity: 0 }}
      transition={{ duration: 0.5, delay: id / 6 }}
      className="mt-5 p-4 text-[#1a1a1a] rounded-xl bg-zinc-100/80 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all"
    >
      <div className="flex flex-col items-center gap-4 py-4">
        <h1 className="text-xl sm:text-2xl font-medium">{offer.title}</h1>
        <h6 className="text-center text-sm sm:text-base text-[#1a1a1a] px-2">
          {offer.whatfor}
        </h6>
        <h4 className="text-3xl sm:text-4xl font-semibold">
          {offer.price === "" ? "Custom" : `${offer.price} DZD`}
        </h4>
        <a
          href="#contact"
          className="w-full text-center py-3 text-white bg-[#1a3d63] rounded-xl hover:opacity-90 transition"
        >
          Order Now
        </a>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <h3 className="text-lg sm:text-xl text-[#1a1a1a] mb-1">Benefits</h3>
        {offer.benefits.map((ben, idx) => (
          <div key={idx} className="flex items-start gap-2">
            <FaCheckCircle className="text-[#1a3d63] h-5 w-5 shrink-0" />
            <h3 className="text-sm sm:text-lg text-zinc-700">{ben}</h3>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default OfferCard;
