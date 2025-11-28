import React from "react";
import OfferCard from "./ui/OfferCard";
import { offers } from "@/lib/offers";

const Offers = () => {
  return (
    <section
      id="offers"
      className="py-12 sm:mx-20 px-12 md:mx-24 mx-10 rounded-3xl mb-8"
    >
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-3xl font-light uppercase">Our Offers</h1>
        <h6 className="text-xl text-center font-medium text-[#1a1a1c]/80">
          Choose the package that fits your goals and get a fast, modern website
          built for your business.
        </h6>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
          {offers.map((offer, id) => (
            <OfferCard key={id} offer={offer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
