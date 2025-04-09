import React from "react";
import { motion } from "framer-motion";
import {
  FaHeadset,
  FaMapMarkedAlt,
  FaMoneyBillWave,
  FaClock,
  FaUserTie,
} from "react-icons/fa";

const features = [
  {
    title: "24/7 Customer Support",
    icon: <FaHeadset className="text-4xl text-[#02DB81]" />,
    description: "We’re always here to assist you — day or night, 365 days.",
  },
  {
    title: "Live GPS Tracking",
    icon: <FaMapMarkedAlt className="text-4xl text-[#02DB81]" />,
    description: "Track your cargo in real-time with our GPS systems.",
  },
  {
    title: "Affordable Rates",
    icon: <FaMoneyBillWave className="text-4xl text-[#02DB81]" />,
    description: "Competitive pricing without compromising on service.",
  },
  {
    title: "On-Time Delivery",
    icon: <FaClock className="text-4xl text-[#02DB81]" />,
    description: "Your time matters — we ensure timely deliveries, always.",
  },
  {
    title: "Experienced Drivers",
    icon: <FaUserTie className="text-4xl text-[#02DB81]" />,
    description: "Highly trained and trusted drivers handle your cargo.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-24 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white"
        >
          Why Choose Easy Cargo?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl mx-auto"
        >
          Discover the reasons our customers trust us for their cargo needs.
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <div className="mb-4 flex items-center gap-4">
              {feature.icon}
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {feature.title}
              </h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Optional: Add some stats */}
      <div className="mt-20 grid sm:grid-cols-2 md:grid-cols-4 text-center gap-10">
        <div>
          <h3 className="text-3xl font-bold text-[#02DB81]">10K+</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
            Deliveries Completed
          </p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-[#02DB81]">99%</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
            On-Time Delivery Rate
          </p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-[#02DB81]">24/7</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
            Customer Support
          </p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-[#02DB81]">15+</h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm">
            Years of Experience
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
