"use client";
import React from "react";
import Image from "next/image";
import { easeIn, motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="mx-4 sm:mx-6 lg:mx-24 mt-20 sm:mt-28 xl:mt-48 mb-16 bg-zinc-100/60 py-8 px-6 sm:px-10 lg:px-16 rounded-3xl">
      <div className="flex flex-col items-center justify-center gap-7">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 100, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-lg sm:text-xl text-center text-[#1a1a1a]"
        >
          Welcome To EliteDigital
        </motion.h1>

        <div className="w-full md:w-3/4 flex flex-col gap-5">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 100, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-2xl sm:text-3xl lg:text-5xl text-center text-[#1a1a1a] lg:leading-[4rem] font-light"
          >
            Building Modern Websites for Algerian Businesses
          </motion.h1>

          <motion.h6
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 100, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center text-base sm:text-lg xl:text-xl text-[#1a1a1a]/80 px-2 sm:px-6"
          >
            We design and develop clean, high-performing websites that help your
            business stand out, attract customers, and grow online.
          </motion.h6>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto">
          <motion.a
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ ease: "easeIn" }}
            href="#offers"
            className="transition hover:opacity-80 cursor-pointer py-3 text-lg sm:text-xl rounded-xl px-6 bg-[#1a3d63] text-[#f9fafb] w-full sm:w-auto"
          >
            Browse Offers
          </motion.a>
          <motion.a
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ ease: "easeIn", delay: 0.1 }}
            href="#contact"
            className="transition hover:opacity-80 cursor-pointer py-3 text-lg sm:text-xl rounded-xl px-6 bg-[#e5e7eb] text-[#1a1a1c] w-full sm:w-auto"
          >
            Contact Us
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
