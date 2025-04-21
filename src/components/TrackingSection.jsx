import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import { fadeIn } from "../utils/framermotion/variants";
import trackingBg from "../../public/track.jpg"; // Adjust the path as necessary

const TrackingSection = () => {
  const [trackingID, setTrackingID] = useState("");

  const handleTrack = () => {
    if (!trackingID.trim()) {
      alert("Please enter a valid Tracking ID.");
    } else {
      console.log("Tracking ID:", trackingID);
    }
  };

  return (
    <div
      className="relative w-full h-80 my-5 bg-cover bg-center flex p-10 md:p-0 flex-col md:flex-row items-center justify-around"
      style={{
        backgroundImage: `url(${trackingBg})`,
      }}
    >
      {/* Left colored overlay */}
      <div className="absolute inset-0 bg-secondary clip-diagonal-left opacity-50"></div>
      {/* Right colored overlay */}
      <div className="absolute inset-0 clip-diagonal-right bg-black opacity-70"></div>

      {/* Text */}
      <motion.div
        variants={fadeIn("up")}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-center relative z-10"
      >
        <h3 className="text-white text-2xl font-bold">
          Track Your Shipment Instantly
        </h3>
      </motion.div>

      {/* Input + Button */}
      <motion.div
        variants={fadeIn("up")}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-center bg-white relative z-10 flex justify-end w-[300px] md:w-[450px] rounded-xl overflow-hidden"
      >
        <input
          type="text"
          value={trackingID}
          onChange={(e) => setTrackingID(e.target.value)}
          placeholder="Enter Tracking ID"
          className="p-3 w-full bg-white text-black placeholder:text-black focus:outline-none"
        />
        <button
          onClick={handleTrack}
          className="px-4 py-3 bg-primary text-white hover:bg-primary/90 flex cursor-pointer items-center gap-2"
        >
          <FaSearch /> Track
        </button>
      </motion.div>
    </div>
  );
};

export default TrackingSection;
