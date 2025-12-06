"use client";
import React from "react";
import OfferCard from "./ui/OfferCard";
import { offers } from "@/lib/offers";
import { motion } from "framer-motion";
const Offers = () => {
  return (
    <section
      id="offers"
      className="py-12 mx-4 sm:mx-10 md:mx-20 lg:mx-24 mb-8 rounded-3xl"
    >
      <div className="flex flex-col gap-6 items-center">
        <motion.h1
          whileInView={{ y: 0, opacity: 100 }}
          initial={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl text-[#1a1a1a] sm:text-3xl font-light uppercase"
        >
          Our Offers
        </motion.h1>

        <motion.h6
          whileInView={{ y: 0, opacity: 100 }}
          initial={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-base sm:text-lg md:text-xl text-center font-medium text-[#1a1a1a]/80 max-w-2xl"
        >
          Choose the package that fits your goals and get a fast, modern website
          built for your business.
        </motion.h6>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
          {offers.map((offer, id) => (
            <OfferCard key={id} id={id} offer={offer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
