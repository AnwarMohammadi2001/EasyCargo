import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptop,
  FaTruckPickup,
  FaShippingFast,
  FaMapMarkedAlt,
} from "react-icons/fa";

const steps = [
  {
    id: 1,
    title: "Book Online",
    description: "Easily schedule your shipment from our website or mobile app.",
    icon: <FaLaptop className="text-3xl text-green-500" />,
  },
  {
    id: 2,
    title: "We Pick Up",
    description: "Our team picks up the cargo from your doorstep or warehouse.",
    icon: <FaTruckPickup className="text-3xl text-blue-500" />,
  },
  {
    id: 3,
    title: "We Deliver",
    description: "We safely deliver your cargo to the destination on time.",
    icon: <FaShippingFast className="text-3xl text-yellow-500" />,
  },
  {
    id: 4,
    title: "You Track It",
    description: "Track your shipment in real-time with our GPS-enabled system.",
    icon: <FaMapMarkedAlt className="text-3xl text-purple-500" />,
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-20 px-4 sm:px-8 lg:px-24">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-white"
        >
          How It Works
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl mx-auto"
        >
          A simple and seamless cargo delivery process designed with you in mind.
        </motion.p>
      </div>

      <div className="relative grid gap-10 md:grid-cols-2">
        {/* Vertical line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700" />

        {steps.map((step, idx) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * idx }}
            className={`relative md:col-span-1 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg p-6 md:w-[90%] ${
              idx % 2 === 0
                ? "md:ml-auto md:mr-8"
                : "md:mr-auto md:ml-8"
            }`}
          >
            <div className="flex items-center mb-4">
              <div className="bg-white dark:bg-gray-700 p-3 rounded-full shadow-md">
                {step.icon}
              </div>
              <h3 className="ml-4 text-lg font-bold text-gray-800 dark:text-white">
                {step.title}
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {step.description}
            </p>

            {/* Dot connector */}
            <div className="hidden md:block absolute top-5 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full border-4 border-white dark:border-gray-900 z-10" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
