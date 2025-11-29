import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-12 mx-4 sm:mx-10 md:mx-20 lg:mx-24 px-4 sm:px-8 lg:px-12 rounded-3xl bg-zinc-100/70 mb-12"
    >
      <div className="flex flex-col items-start gap-8 max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-light uppercase text-[#1a1a1c]">
          About Us
        </h2>

        <p className="text-base sm:text-lg text-[#1a1a1c]/80 leading-relaxed">
          EliteDigital is dedicated to helping Algerian businesses build a
          strong online presence with modern, high-performing websites. Our
          focus is on clean design, fast performance, and websites that convert
          visitors into customers.
        </p>

        <p className="text-base sm:text-lg text-[#1a1a1c]/80 leading-relaxed">
          Whether you're a new business or looking to upgrade your digital
          identity, we make the process simple, fast, and tailored to your
          brand’s goals.
        </p>

        <button className="bg-[#003347] text-white px-6 py-3 rounded-xl text-lg w-fit hover:opacity-80 transition">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default About;
