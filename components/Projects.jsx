"use client";
import React from "react";
import Card from "./Card";
import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/lib/projects";
const Projects = () => {
  const [category, setCategory] = useState("All");
  return (
    <section id="projects" className="py-12 sm:px-20 md:px-28 px-10">
      <motion.h1
        whileInView={{ y: 0, opacity: 100 }}
        initial={{ y: -50, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="text-zinc-900 font-light uppercase text-center text-3xl"
      >
        Our Projects
      </motion.h1>
      <motion.div
        whileInView={{ x: 0, opacity: 100 }}
        initial={{ x: -50, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="flex md:flex-row flex-col items-center justify-center gap-6 mt-6"
      ></motion.div>
      <div className="mt-8 flex flex-col gap-4">
        {projects.map((project, id) => (
          <Card key={id} initial={id % 2 === 0 ? -50 : 50} project={project} />
        ))}
      </div>

      {/* {category === "All" && (
        <div className="mt-8 flex flex-col gap-4">
          {projects.map((project, id) => (
            <Card initial={id % 2 === 0 ? -50 : 50} project={project} />
          ))}
        </div>
      )}
      {category === "Websites" && (
        <CategoryFeed projects={projects} category={category} />
      )}
      {category === "Landing Pages" && (
        <CategoryFeed projects={projects} category={category} />
      )}
      {category === "Ecommerce Websites" && (
        <CategoryFeed projects={projects} category={category} />
      )} */}
    </section>
  );
};

export default Projects;
