import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  FaTruckMoving,
  FaPlane,
  FaShip,
  FaWarehouse,
  FaBoxes,
  FaGlobe,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Local Delivery",
    description:
      "Fast and efficient cargo delivery within your city, ensuring same-day service.",
    icon: <FaTruckMoving className="text-4xl text-[#02DB81]" />,
  },
  {
    id: 2,
    title: "Air Freight",
    description:
      "Fly your cargo across the globe with our premium air freight solutions.",
    icon: <FaPlane className="text-4xl text-[#02DB81]" />,
  },
  {
    id: 3,
    title: "Sea Freight",
    description:
      "Affordable and reliable cargo shipping through international sea routes.",
    icon: <FaShip className="text-4xl text-[#02DB81]" />,
  },
  {
    id: 4,
    title: "Warehousing",
    description:
      "Secure and scalable storage solutions for your goods and products.",
    icon: <FaWarehouse className="text-4xl text-[#02DB81]" />,
  },
  {
    id: 5,
    title: "Cargo Packaging",
    description:
      "Professional packaging for all types of cargo, ensuring safety and security.",
    icon: <FaBoxes className="text-4xl text-[#02DB81]" />,
  },
  {
    id: 6,
    title: "Global Logistics",
    description:
      "From customs to final delivery — we handle end-to-end logistics worldwide.",
    icon: <FaGlobe className="text-4xl text-[#02DB81]" />,
  },
];

const Services = () => {
  return (
    <div className="py-24 bg-gray-50 dark:bg-gray-900 px-4 sm:px-6 lg:px-16">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white"
        >
          Our Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl mx-auto"
        >
          Explore the wide range of cargo and logistics solutions we offer to
          make your delivery seamless and secure.
        </motion.p>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {services.map((service, index) => (
          <SwiperSlide key={service.id}>
            <div className="bg-white dark:bg-gray-800 p-8  hover:shadow-lg transition-all duration-300 h-full">
              <div className="flex items-center gap-4 mb-4">
                {service.icon}
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {service.title}
                </h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Services;
