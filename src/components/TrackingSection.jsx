import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

const TrackingSection = () => {
  const [trackingID, setTrackingID] = useState("");

  const handleTrack = () => {
    if (!trackingID.trim()) {
      alert("Please enter a valid Tracking ID.");
    } else {
      // Future integration point
      console.log("Tracking ID:", trackingID);
    }
  };

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-24 px-4 sm:px-6 lg:px-16">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6"
        >
          Track Your Shipment
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 dark:text-gray-300 mb-10"
        >
          Enter your tracking ID to get real-time updates on your shipment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4 justify-center"
        >
          <input
            type="text"
            value={trackingID}
            onChange={(e) => setTrackingID(e.target.value)}
            placeholder="Enter Tracking ID"
            className="w-full sm:w-[300px] px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#02DB81] focus:outline-none"
          />
          <button
            onClick={handleTrack}
            className="flex items-center gap-2 px-6 py-3 bg-[#02DB81] hover:bg-[#2d9469] text-white font-semibold rounded-xl shadow-md transition duration-200"
          >
            <FaSearch /> Track Shipment
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default TrackingSection;
