'use client'

import { useEffect, useState } from "react";
import { GoPerson, GoRepo, GoQuote, GoGear, GoHome } from "react-icons/go";

function Navbar() {
  const [currentPage, setCurrentPage] = useState(" hover:bg-secondary"); // Initialize with an empty string

  useEffect(() => {
    // Check if we're on the client side before accessing window.location.pathname
    if (typeof window !== "undefined") {
      setCurrentPage(window.location.pathname);
    }
  }, []);

  const isActive = (link) => {
    // Check if the last part of the URL matches the link
    return currentPage.endsWith(link);
  };

  return (
    <nav className="flex items-center justify-center w-fit bg-primary rounded-full bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 fixed mt-4 self-center z-10">
      <ul className="flex justify-around items-center gap-6 text-text text-2xl font-semibold">
        <a
          href="/"
          className={`flex justify-center items-center p-4 rounded-full transition-colors duration-200 ${
            isActive("/") ? "bg-accent shadow-[0_6px_15px_rgba(100,100,197,0.1)]" : " hover:bg-secondary"
          }`}
        >
          <li>
            <GoHome />
          </li>
        </a>
        <a
          href="/about"
          className={`flex justify-center items-center p-4 rounded-full transition-colors duration-200 ${
            isActive("/about") ? "bg-accent shadow-[0_6px_15px_rgba(100,100,197,0.1)]" : " hover:bg-secondary"
          }`}
        >
          <li>
            <GoPerson />
          </li>
        </a>
        <a
          href="/work"
          className={`flex justify-center items-center p-4 rounded-full transition-colors duration-200 ${
            isActive("/work") ? "bg-accent shadow-[0_6px_15px_rgba(100,100,197,0.1)]" : " hover:bg-secondary"
          }`}
        >
          <li>
            <GoRepo />
          </li>
        </a>
        <a
          href="/blog"
          className={`flex justify-center items-center p-4 rounded-full transition-colors duration-200 ${
            isActive("/blog") ? "bg-accent shadow-[0_6px_15px_rgba(100,100,197,0.1)]" : " hover:bg-secondary"
          }`}
        >
          <li>
            <GoQuote />
          </li>
        </a>
        <a
          href="/setup"
          className={`flex justify-center items-center p-4 rounded-full transition-colors duration-200 ${
            isActive("/setup") ? "bg-accent shadow-[0_6px_15px_rgba(100,100,197,0.1)]" : " hover:bg-secondary"
          }`}
        >
          <li>
            <GoGear />
          </li>
        </a>
      </ul>
    </nav>
  );
}

export default Navbar;
