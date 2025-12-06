"use client";
import { createReview, getReviews } from "@/actions/actions";
import React, { useEffect, useState } from "react";
import { Toaster, toast } from "sonner";
import ReviewSlider from "./ui/ReviewSlider";
import { motion } from "framer-motion";
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchReviews = async () => {
    const revs = await getReviews();
    setReviews(revs);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const addReview = async () => {
    setLoading(true);
    await createReview(name, content);
    toast.success("Review Added!");
    setLoading(false);
    setName("");
    setContent("");
  };

  return (
    <section
      id="reviews"
      className="py-12 mx-4 sm:mx-10 md:mx-20 lg:mx-24 px-4 sm:px-8 lg:px-12"
    >
      <div className="flex flex-col md:flex-row gap-10">
        {/* LEFT — Reviews */}
        <div className="md:w-1/2 w-full">
          <motion.h2
            whileInView={{ y: 0, opacity: 100 }}
            initial={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl text-[#1a1a1a] font-light uppercase mb-6"
          >
            Our Clients Testimonials
          </motion.h2>

          <ReviewSlider reviews={reviews} />

          {/* Later, if you want static list under slider */}
          <div className="flex flex-col gap-4 mt-4"></div>
        </div>

        {/* RIGHT — Add Review Form */}
        <motion.div
          whileInView={{ x: 0, opacity: 100 }}
          initial={{ x: 50, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 w-full flex md:justify-end justify-center"
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addReview();
            }}
            className="flex flex-col w-full md:w-[85%] gap-4 p-6 rounded-3xl bg-[#1a3d63]"
          >
            <h4 className="text-lg sm:text-xl font-light text-zinc-50">
              Add a Review
            </h4>

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-lg border w-full h-12 bg-zinc-200 px-3 placeholder-zinc-400 border-zinc-100"
              type="text"
              placeholder="Name"
            />

            <input
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="rounded-lg border w-full h-12 bg-zinc-200 px-3 placeholder-zinc-400 border-zinc-100"
              type="text"
              placeholder="Your Review"
            />

            <button
              type="submit"
              className="bg-zinc-100 py-3 text-[#1a1a1a] rounded-lg hover:opacity-80 transition cursor-pointer"
            >
              {loading ? "...." : "Add Review"}
            </button>
          </form>
        </motion.div>
      </div>

      <Toaster richColors />
    </section>
  );
};

export default Reviews;
