import React from "react";
import Button from "../utils/Button";
import { fadeIn } from "../utils/framermotion/variants";
import { motion } from "framer-motion";
import { FaHeadphones } from "react-icons/fa";

const Facts = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 z-0 bg-[url('/pattern.svg')] bg-no-repeat bg-cover opacity-10"
        aria-hidden="true"
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center mt-[150px] justify-between min-h-[70vh] backdrop-blur-md gap-8 px-4">
        {/* Text Section */}
        <motion.div
          variants={fadeIn("right", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-1/2 space-y-4"
        >
          <div className="flex items-center gap-4 mb-4">
            <img src="/title-icon-1.png" alt="" />
            <h2 className="text-4xl font-bold text-primary">Some Facts</h2>
          </div>
          <h3 className="text-xl font-semibold text-gray-700">
            Why people Want Us?
          </h3>
          <p className="text-gray-600 text-[14px] text-justify">
            Its representatives think of themselves as logistics and supply
            chain problem solvers. Manufacturers contact them with their
            shipping problem and they solve it. The service is extremely
            personal and tailored to the needs of the customer.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <div clas>
              <FaHeadphones size={40} className="" />
            </div>
            <div className="mt-2">
              <p>Call for any query!</p>
              <p>0772387935</p>
            </div>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          variants={fadeIn("left", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-1/2"
        >
          <img
            src="/about.jpg"
            alt="Who We Are"
            className="w-full h-auto object-cover mix-blend-multiply"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Facts;
