import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full mt-4 flex sm:flex-row flex-col items-center gap-3 justify-between sm:px-24 px-6 pb-8 -mb-12">
      <div className="flex items-center gap-4">
        <h1 className="transition cursor-pointer hover:opacity-60 text-[0.75rem] opacity-70 uppercase">
          &copy;{year} Elite Digital
        </h1>
        <h1 className="transition cursor-pointer hover:opacity-60 text-[0.75rem] opacity-70 uppercase">
          All Rights Reserved
        </h1>
      </div>
      <div className="flex items-center gap-4">
        <a
          href={"/"}
          className="transition hover:opacity-60 text-[0.75rem] opacity-70 uppercase"
        >
          Contact
        </a>
      </div>
    </footer>
  );
};

export default Footer;
