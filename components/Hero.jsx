import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <section className="lg:mx-24 sm:mx-6 xl:mt-48 sm:mt-28 mt-24 mb-16 mx-5 bg-zinc-100/70 py-8 px-16 rounded-3xl">
      <div className="flex flex-col items-center justify-center gap-7">
        <div>
          <h1 className="text-xl text-center text-[#1a1a1c] ">
            Welcome To EliteDigital
          </h1>
        </div>

        <div className="md:w-3/4 flex flex-col gap-5">
          <h1 className="lg:text-5xl text-2xl text-center text-[#1a1a1c] lg:leading-[4rem] font-light">
            Building Modern Websites for Algerian Businesses
          </h1>
          <h6 className="text-center xl:px-42 text-xl text-[#1a1a1c]/80">
            We design and develop clean, high-performing websites that help your
            business stand out, attract customers, and grow online.
          </h6>
        </div>
        {/* CTA */}
        <div className="flex sm:flex-row flex-col items-center gap-5">
          <button className="transition hover:opacity-80 cursor-pointer py-3 text-xl rounded-xl px-4 bg-[#1a1a1c] text-[#f9fafb] ">
            Browse Offers
          </button>
          <button className="transition hover:opacity-80 cursor-pointer py-3 text-xl rounded-xl px-4 bg-[#e5e7eb] text-[#1a1a1c] ">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
