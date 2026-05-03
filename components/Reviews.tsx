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
    if (!name || !content) return toast.error("Please fill all fields");
    setLoading(true);
    await createReview(name, content);
    toast.success("Review Added!");
    fetchReviews(); // Refresh list
    setLoading(false);
    setName("");
    setContent("");
  };

  return (
    <section
      id="reviews"
      className="py-32 bg-[#fefffe]"
      style={{ fontFamily: "'Lexend', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          {/* LEFT — Testimonials Display */}
          <div className="w-full lg:w-3/5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 tracking-tight mb-4">
                What our{" "}
                <span className="text-[#1a3d63] italic font-serif">
                  Partners
                </span>{" "}
                say.
              </h2>
              <div className="h-1.5 w-12 bg-[#1a3d63] rounded-full" />
            </motion.div>

            <ReviewSlider reviews={reviews} />
          </div>

          {/* RIGHT — The Action Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-2/5"
          >
            <div className="p-10 rounded-[3rem] bg-[#1a3d63] text-white shadow-2xl shadow-[#1a3d63]/20 relative overflow-hidden group">
              {/* Decorative Circle */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2">
                  Share your experience
                </h3>
                <p className="text-white/60 text-sm font-light mb-8">
                  Your feedback helps us engineer better solutions.
                </p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    addReview();
                  }}
                  className="space-y-4"
                >
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-2">
                      Your Name
                    </label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full h-14 bg-white/10 border border-white/10 rounded-2xl px-5 text-sm focus:outline-none focus:border-white/40 transition-all placeholder:text-white/20"
                      type="text"
                      placeholder="e.g. Salim Ahmed"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-2">
                      Message
                    </label>
                    <textarea
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      className="w-full h-32 bg-white/10 border border-white/10 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:border-white/40 transition-all placeholder:text-white/20 resize-none"
                      placeholder="How was your experience working with Elite Digital?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-white text-[#1a3d63] h-14 rounded-2xl font-bold text-sm hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-[#1a3d63]/30 border-t-[#1a3d63] animate-spin rounded-full" />
                    ) : (
                      "Submit Review"
                    )}
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Toaster richColors position="bottom-right" />
    </section>
  );
};

export default Reviews;
