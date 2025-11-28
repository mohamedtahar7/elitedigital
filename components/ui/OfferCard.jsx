import Link from "next/link";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
const OfferCard = ({ offer }) => {
  return (
    <div className="mt-5 drop-shadow-xl bg-zinc-100/70 transition-all hover:-translate-y-5 p-4 rounded-xl">
      <div className="py-6 px-6 bg-zinc-200/70 flex flex-col items-center gap-4 rounded-xl">
        <h1 className="text-2xl font-medium">{offer.title}</h1>
        <h6 className="text-center text-[#1a1a1c]/80">{offer.whatfor}</h6>
        <h4 className="text-4xl font-medium">
          {offer.price === "" ? "Custom" : `${offer.price} DZD`}
        </h4>
        <Link
          className="bg-[#003347] py-2 w-full text-center text-white text-lg rounded-xl hover:opacity-80 transition"
          href="/"
        >
          Order Now
        </Link>
      </div>
      <div className="flex flex-col gap-4 py-4 ml-1">
        <h3 className="text-lg text-zinc-700 mb-3">Benefits</h3>
        {offer.benefits.map((ben, id) => (
          <div key={id} className="flex items-center gap-2">
            <FaCheckCircle className="h-5 w-5 text-cyan-900" />
            <h3 className="text-lg text-zinc-700">{ben}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferCard;
