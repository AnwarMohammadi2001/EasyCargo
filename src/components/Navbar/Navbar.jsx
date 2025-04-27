import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSun, FaMoon, FaGlobe, FaSearch, FaUser } from "react-icons/fa";
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
  const [trackingId, setTrackingId] = useState("");

  const handleSearch = () => {
    const trackingRegex = /^1Z[0-9A-Z]{16}$/i; // Start with 1Z and 16 alphanumeric characters

    if (trackingId.trim() === "") {
      alert("❌ Please enter a tracking number.");
    } else if (!trackingRegex.test(trackingId.trim())) {
      alert(
        "❌ Invalid Tracking Number! It must start with '1Z' and be 18 characters long."
      );
    } else {
      const upsUrl = `https://www.ups.com/track?loc=en_US&tracknum=${trackingId.trim()}`;
      window.open(upsUrl, "_blank");
      setTrackingId(""); // Clear after successful search
    }
  };

  return (
    <nav
      className={`bg-primary w-full z-50 transition-all duration-500 ${
        isScrolled ? "fixed top-0 left-0 shadow-md" : "relative"
      }`}
    >
      <div className="flex items-center  px-5 md:px-10 lg:px-24 justify-center md:justify-between py-2">
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

        {/* Icons + Search (Desktop) */}
        <div className="flex items-center gap-4">
          {/* Search Box */}
          <div className="flex items-center border border-amber-400 rounded-full overflow-hidden">
            <input
              type="text"
              placeholder="Track ID"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
              className="px-3 py-1.5 text-sm bg-transparent text-white placeholder:text-amber-100 focus:outline-none"
            />
            <button
              onClick={handleSearch}
              className="bg-amber-400 px-3 py-2 border border-amber-500 hover:bg-amber-500 text-black"
            >
              <FaSearch size={14} />
            </button>
          </div>

          {/* Dark Mode Toggle */}
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

          {/* Language Toggle */}
          <FaGlobe
            className={`w-6 h-6 cursor-pointer ${iconClass}`}
            onClick={() => dispatch(toggleLanguage())}
          />
          <FaUser
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
        <ul className="flex flex-col items-start px-6 py-4 space-y-2 font-semibold">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.id}>
                <Link
                  to={item.path}
                  onClick={toggleNav}
                  className={` text-lg  ${
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
