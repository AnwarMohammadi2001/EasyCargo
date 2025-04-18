import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSun, FaMoon, FaGlobe } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../../redux/darkModeSlice";
import { toggleLanguage } from "../../redux/languageSlice";

const navItems = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About Us", path: "/about" },
  { id: 3, name: "Services", path: "/services" },
  { id: 4, name: "Quote", path: "/quote" },
  { id: 5, name: "Image Gallery", path: "/gallery" },
  { id: 6, name: "Contact Us", path: "/contact" },
];

const Navbar = ({ isNavOpen, toggleNav }) => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const iconClass = darkMode ? "text-amber-500" : "text-amber-50";
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`bg-primary w-full z-50 transition-all duration-500 ${
        isScrolled ? "fixed top-0 left-0 shadow-md" : "relative"
      }`}
    >
      <div className="flex items-center px-5 md:px-10 lg:px-24 justify-between py-2">
        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-10 py-1.5 font-medium">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li
                key={item.id}
                className={`relative group cursor-pointer text-[16px] ${
                  isActive ? "text-amber-400" : "text-amber-50"
                } dark:text-amber-500`}
              >
                <Link
                  to={item.path}
                  className={`${
                    isActive ? "font-semibold" : ""
                  } hover:text-amber-400`}
                >
                  {item.name}
                </Link>
                <span
                  className={`absolute h-[2px] left-0 w-full -bottom-1 transition-transform duration-500 bg-amber-500 dark:bg-amber-500 ${
                    isActive
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100 group-hover:origin-left origin-right"
                  }`}
                ></span>
              </li>
            );
          })}
        </ul>

        {/* Icons */}
        <div className="flex space-x-4">
          {darkMode ? (
            <FaSun
              className={`w-6 h-6 cursor-pointer ${iconClass}`}
              onClick={() => dispatch(toggleDarkMode())}
            />
          ) : (
            <FaMoon
              className={`w-6 h-6 cursor-pointer ${iconClass}`}
              onClick={() => dispatch(toggleDarkMode())}
            />
          )}
          <FaGlobe
            className={`w-6 h-6 cursor-pointer ${iconClass}`}
            onClick={() => dispatch(toggleLanguage())}
          />
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isNavOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-start px-6 py-4 space-y-4 font-semibold">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.id}>
                <Link
                  to={item.path}
                  onClick={toggleNav}
                  className={`${
                    isActive ? "text-amber-400" : "text-white"
                  } hover:text-amber-400`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
