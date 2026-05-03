"use client";

import { createMessage } from "@/actions/actions";
import React, { useState } from "react";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";
import { FiSend, FiUser, FiMail, FiMessageSquare } from "react-icons/fi";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const addMessage = async () => {
    if (!name || !email || !message) {
      toast.error("Please fill in all fields");
      return;
    }
    setLoading(true);
    try {
      await createMessage(name, email, message);
      toast.success("Message Sent Successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      toast.error("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-16 mx-4 sm:mx-10 md:mx-20 lg:mx-28 mb-12 rounded-[3rem] shadow-2xl bg-[#1a3d63] px-8 sm:px-12 lg:px-16 relative overflow-hidden"
      style={{ fontFamily: "'Lexend', sans-serif" }}
    >
      {/* Decorative background elements */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/5 blur-3xl rounded-full" />
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-black/20 blur-3xl rounded-full" />

      <div className="flex flex-col lg:flex-row lg:items-center gap-12 relative z-10">
        {/* Left Side: Header Content */}
        <div className="lg:w-1/3 flex flex-col gap-4 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Let&apos;s{" "}
            <span className="italic font-serif opacity-80">Talk</span>
          </h2>
          <p className="text-zinc-300 text-lg font-light leading-relaxed">
            Have a vision? Let’s turn it into a high-performance digital
            reality. Reach out today.
          </p>

          {/* Subtle branding detail */}
          <div className="hidden lg:flex items-center gap-2 mt-4 text-[#fffefe]/40 text-xs font-black uppercase tracking-[0.3em]">
            <div className="h-px w-8 bg-white/20" />
            Elite Digital DZ
          </div>
        </div>

        {/* Right Side: Modern Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addMessage();
          }}
          className="lg:w-2/3 flex flex-col gap-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Input */}
            <div className="relative group">
              <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-white transition-colors" />
              <input
                className="rounded-2xl w-full h-14 bg-white/10 border border-white/10 px-12 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 focus:bg-white/20 transition-all"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
              />
            </div>

            {/* Email Input */}
            <div className="relative group">
              <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-white transition-colors" />
              <input
                className="rounded-2xl w-full h-14 bg-white/10 border border-white/10 px-12 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 focus:bg-white/20 transition-all"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
              />
            </div>
          </div>

          {/* Message Textarea */}
          <div className="relative group">
            <FiMessageSquare className="absolute left-4 top-5 text-white/30 group-focus-within:text-white transition-colors" />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us about your project..."
              className="rounded-2xl w-full h-40 py-4 px-12 bg-white/10 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 focus:bg-white/20 transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="group bg-white py-5 text-[#1a3d63] font-bold rounded-2xl hover:bg-zinc-100 transition-all active:scale-[0.98] disabled:opacity-70 flex items-center justify-center gap-3 shadow-xl"
          >
            {loading ? (
              "Sending..."
            ) : (
              <>
                Send Message
                <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </>
            )}
          </button>
        </form>
      </div>

      <Toaster position="bottom-right" richColors />
    </motion.section>
  );
};

export default Contact;
