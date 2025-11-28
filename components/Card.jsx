import { Link } from "lucide-react";
import React from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { motion } from "framer-motion";
const Card = ({ project, initial }) => {
  const { name, link, img, description } = project;
  return (
    <motion.div
      whileInView={{ x: 0, opacity: 100 }}
      initial={{ x: initial, opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="realtive flex shadow-lg lg:flex-row flex-col gap-10 items-center bg-white rounded-xl py-6 px-10"
    >
      <a
        href={link}
        className="hover:opacity-80 md:w-[60%] transition"
        target="_blank"
      >
        <img src={img} className="rounded-xl shadow-xl" alt="website image" />
      </a>
      <div className="text-center flex flex-col gap-3">
        <h1 className="font-semibold text-xl">{name}</h1>
        <p>{description}</p>
        <a
          className="flex items-center justify-center gap-1 hover:opacity-75 transition-all font-semibold"
          href={link}
          target="_blank"
        >
          Live Demo <Link className="w-5 h-5" />
        </a>
      </div>
    </motion.div>
  );
};

export default Card;
