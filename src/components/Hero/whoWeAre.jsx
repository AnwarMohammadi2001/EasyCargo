import React from "react";
import Button from "../../utils/Button";
import { fadeIn } from "../../utils/framermotion/variants";
import { motion } from "framer-motion";

const WhoWeAre = () => {
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
            <h2 className="text-4xl font-bold text-primary">Who We Are ?</h2>
          </div>
          <h3 className="text-xl font-semibold text-gray-700">
            The carrier of your goods around the world
          </h3>
          <p className="text-gray-600 text-[14px] text-justify">
            We have your commercial cargo needs covered. At Kabul Barko, we are
            committed to ensuring that we respect your business as it were our
            own. Let us help you succeed by making your supply chain and
            delivery processes a breeze from start to end. We operate in a
            number of challenging destinations where we recognize our clients’
            needs for reliable export services. No matter where the goods are
            travelling to, our goal is to provide complete customer satisfaction
            through consistent quality service.
          </p>
          <Button>Read More</Button>
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

export default WhoWeAre;
