import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Image from "next/image";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Offers from "@/components/Offers";
import Footer from "@/components/Footer";
import Reviews from "@/components/Reviews";
export default function Home() {
  return (
    <main className="overflow-x-hidden h-screen">
      <Navbar />
      <Hero />
      {/* <About /> */}
      <Projects />
      <Offers />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
}
