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
    description:
      "Easily schedule your shipment from our website or mobile app.",
    icon: <FaLaptop className="text-4xl text-green-600" />,
  },
  {
    id: 2,
    title: "We Pick Up",
    description: "Our team picks up the cargo from your doorstep or warehouse.",
    icon: <FaTruckPickup className="text-4xl text-blue-600" />,
  },
  {
    id: 3,
    title: "We Deliver",
    description: "We safely deliver your cargo to the destination on time.",
    icon: <FaShippingFast className="text-4xl text-yellow-600" />,
  },
  {
    id: 4,
    title: "You Track It",
    description:
      "Track your shipment in real-time with our GPS-enabled system.",
    icon: <FaMapMarkedAlt className="text-4xl text-purple-600" />,
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-24 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-6"
        >
          How It Works
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          A simple and seamless cargo delivery process designed with you in
          mind.
        </motion.p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * idx }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow hover:shadow-xl transition duration-300"
            >
              <div className="mb-4 flex justify-center">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
