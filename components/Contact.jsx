"use client";
import { createMessage } from "@/actions/actions";
import React, { useState } from "react";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const addMessage = async () => {
    setLoading(true);
    await createMessage(name, email, message);
    toast.success("Message Sent Successfully!");
    setLoading(false);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <motion.section
      whileInView={{ y: 0, opacity: 100 }}
      initial={{ y: -50, opacity: 0 }}
      transition={{ duration: 0.5 }}
      id="contact"
      className="py-12 mx-4 sm:mx-10 md:mx-20 lg:mx-28 mb-8 rounded-3xl shadow-2xl bg-[#1a3d63] px-6 sm:px-10 lg:px-12"
    >
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl sm:text-3xl font-light text-zinc-50">
          Let's Talk
        </h1>
        <p className="text-sm sm:text-base font-light text-zinc-100/70">
          Reach out to discuss your project today.
        </p>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          addMessage();
        }}
        className="flex flex-col gap-4 mt-6"
      >
        {/* Inputs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
          <input
            className="rounded-lg border h-12 w-full sm:w-1/2 bg-zinc-200 px-3 placeholder-zinc-400 border-zinc-100"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
          <input
            className="rounded-lg border h-12 w-full sm:w-1/2 bg-zinc-200 px-3 placeholder-zinc-400 border-zinc-100"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your Message"
          className="rounded-lg border h-40 sm:h-48 py-3 bg-zinc-200 px-3 placeholder-zinc-400 border-zinc-100"
        />

        <button
          type="submit"
          className="bg-zinc-100 py-3 text-[#1a1a1a] font-medium rounded-lg hover:opacity-80 transition cursor-pointer"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      <Toaster />
    </motion.section>
  );
};

export default Contact;
