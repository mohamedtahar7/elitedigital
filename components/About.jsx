// import React from "react";

// const About = () => {
//   return (
//     <section className="lg:mx-24 sm:mx-6 mx-5 py-8" id="about">
//       <div className="flex flex-col items-center justify-between gap-20 lg:flex-row">
//         <div>
//           <img
//             className="rounded-3xl"
//             src="https://i.postimg.cc/mrsJtnZ9/about-1.png"
//             alt="man coding"
//           />
//         </div>
//         <div className="flex lg:w-[100%] flex-col lg:items-start items-center">
//           <h4 className="uppercase opacity-60 text-[1rem] font-light mb-2">
//             A bit
//           </h4>
//           <h1 className="uppercase text-xl font-normal mb-8">About Us</h1>
//           <p className="text-xl  leading-[2rem] font-light">
//             We’re a modern web development agency based in Algeria, dedicated to
//             helping businesses succeed online. <br />
//             Our mission is simple — to help local brands reach more people
//             through professional, well-designed websites that perform flawlessly
//             on every device. Every project we take on is built with a focus on
//             clarity, performance, and user experience — because great design
//             should feel effortless.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
// import Image from "next/image";
export default function AboutSection() {
  return (
    <section className="w-full px-24 py-16 flex flex-col md:flex-row items-center lg:gap-0 gap-10">
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://i.postimg.cc/mrsJtnZ9/about-1.png"
            alt="About Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col gap-4 mr-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          About Me
        </h2>
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          I'm a full stack web developer who loves bringing ideas to life using
          modern technologies. I focus on building clean, fast, and scalable web
          applications that solve real problems and deliver great user
          experiences.
        </p>
      </div>
    </section>
  );
}
