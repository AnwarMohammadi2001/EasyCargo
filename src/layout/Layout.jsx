import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Navbar/Header";
import Footer from "../components/Footer";
import { IoMdArrowRoundUp } from "react-icons/io";

const Layout = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Add scroll event listener when the component is mounted
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleNav = () => setIsNavOpen((prev) => !prev);
  const closeNav = () => setIsNavOpen(false);
  return (
    <div className=" relative dark:bg-zinc-900 transition-colors duration-500">
      <header className="w-full transition-colors duration-500">
        <Header toggleNav={toggleNav} isNavOpen={isNavOpen} />
        <Navbar isNavOpen={isNavOpen} toggleNav={closeNav} />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
      {isScrolled && (
        <div className="fixed bottom-10 z-50 right-10 ">
          <button
            onClick={scrollToTop}
            className="bg-[#ED8D1D] text-black dark:bg-gray-100 dark:text-slate-900 p-2 rounded-lg shadow-lg hover:text-white transition duration-300 cursor-pointer"
          >
            <IoMdArrowRoundUp size={24} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Layout;
