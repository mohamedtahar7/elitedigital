"use client";
import { createReview, getReviews } from "@/actions/actions";
import React, { useEffect, useState } from "react";
import { Toaster, toast } from "sonner";
import ReviewSlider from "./ui/ReviewSlider";
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const fetchReviews = async () => {
    const revs = await getReviews();
    setReviews(revs);
  };
  useEffect(() => {
    fetchReviews();
  }, []);
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const addReview = async () => {
    setLoading(true);
    await createReview(name, content);
    toast.success("Review Added!");
    setLoading(false);
    setName("");
    setContent("");
  };
  return (
    <section id="reviews" className="py-12 sm:mx-20 px-12 md:mx-24 mx-10">
      <div className="flex flex-col md:flex-row gap-10">
        {/* LEFT — Reviews List */}
        <div className="md:w-1/2 w-full">
          <h2 className="text-3xl font-light uppercase mb-6">
            Our Clients Testimonials
          </h2>
          <ReviewSlider reviews={reviews} />
          {/* Reviews list container */}
          <div className="flex flex-col gap-4">
            {/* Example review (replace with mapped reviews) */}
            {/* {reviews.map((rev, id) => (
              <div key={id} className="p-4 rounded-xl border border-zinc-300">
                <h4 className="font-medium">{rev.name}</h4>
                <p className="text-zinc-600">{rev.content}</p>
              </div>
            ))} */}
            {/* <div className="p-4 rounded-xl border border-zinc-300">
              <h4 className="font-medium">John Doe</h4>
              <p className="text-zinc-600">
                Amazing service! Highly recommend.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-zinc-300">
              <h4 className="font-medium">Sara</h4>
              <p className="text-zinc-600">
                Great experience, will definitely come back.
              </p>
            </div> */}

            {/* You will later replace this with your dynamic reviews */}
          </div>
        </div>

        {/* RIGHT — Add Review Form */}
        <div className="md:w-1/2 w-full flex justify-center md:justify-end">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addReview();
            }}
            className="flex flex-col w-full md:w-[85%] gap-4 p-6 rounded-3xl bg-[#003347]"
          >
            <h4 className="text-xl font-light text-zinc-50">Add a Review</h4>

            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
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
              className="bg-zinc-100 py-3 rounded-lg hover:opacity-80 transition cursor-pointer"
            >
              {loading ? "...." : "Add Review"}
            </button>
          </form>
        </div>
      </div>
      <Toaster richColors />
    </section>
  );
};

export default Reviews;
