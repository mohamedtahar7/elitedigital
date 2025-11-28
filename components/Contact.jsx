"use client";
import { createMessage } from "@/actions/actions";
import React, { useState } from "react";
import { Toaster, toast } from "sonner";
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
    <section
      id="contact"
      className="py-12 shadow-2xl sm:mx-20 px-12 md:mx-28 mx-10 rounded-3xl mb-8 bg-[#003347]"
    >
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-light text-zinc-50">Let's Talk</h1>
        <p className="text-[1rem] font-light text-zinc-100/70">
          Reach out to discuss your project Today
        </p>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addMessage();
        }}
        className="flex flex-col gap-4 mt-4"
      >
        <div className="flex items-center gap-3 w-full">
          <input
            className="rounded-lg border h-12 w-1/2 bg-zinc-200 px-3 placeholder-zinc-400 border-zinc-100"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-lg border h-12 w-1/2 bg-zinc-200 px-3 placeholder-zinc-400 border-zinc-100"
            type="email"
            placeholder="Email"
          />
        </div>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your Message"
          className="rounded-lg border h-48 py-3 bg-zinc-200 px-3 placeholder-zinc-400 border-zinc-100"
        />
        <button
          type="submit"
          className="bg-zinc-100 py-3 rounded-lg hover:opacity-80 transition cursor-pointer"
        >
          {loading ? "...." : "Send Message"}
        </button>
      </form>
      <Toaster />
    </section>
  );
};

export default Contact;
