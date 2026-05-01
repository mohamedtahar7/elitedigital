import { Link } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const Card = ({ project, initial }) => {
  const { name, link, img, description } = project;

  return (
    <motion.div
      whileInView={{ x: 0, opacity: 1 }}
      initial={{ x: initial, opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="relative flex shadow-lg lg:flex-row flex-col gap-10 items-center bg-white rounded-xl py-6 px-10"
    >
      {/* 1. Image Wrapper: Added flex-shrink-0 and a consistent width */}
      <a
        href={link}
        className="hover:opacity-80 w-full lg:w-1/2 flex-shrink-0 transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* 2. Aspect Ratio Container: Forces 16:9 and crops overflow */}
        <div className="aspect-video w-full overflow-hidden rounded-xl shadow-xl bg-gray-100">
          <img src={img} className="w-full h-full object-cover" alt={name} />
        </div>
      </a>

      {/* 3. Content Wrapper: Added flex-grow to take up remaining space */}
      <div className="text-center lg:text-left flex items-center flex-col gap-3 flex-grow">
        <h1 className="font-semibold text-xl">{name}</h1>
        <p className="text-gray-600 line-clamp-3">{description}</p>
        <a
          className="flex items-center justify-center lg:justify-start gap-1 hover:opacity-75 transition-all font-semibold"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Website <Link className="w-5 h-5" />
        </a>
      </div>
    </motion.div>
  );
};

export default Card;
