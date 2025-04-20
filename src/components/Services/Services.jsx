import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import {
  contentContainer,
  contentItem,
} from "../../utils/framermotion/variants";
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
    image: "/slider/ab1.webp",
    description:
      "Experience swift and dependable cargo delivery services within your city. We guarantee same-day pickups and drop-offs, making local logistics seamless and stress-free for businesses and individuals alike.",
    icon: <FaTruckMoving className="text-4xl text-[#02DB81]" />,
  },
  {
    id: 2,
    title: "Air Freight",
    image: "/slider/ab1.webp",
    description:
      "Our premium air freight solutions are tailored for time-sensitive shipments. With global coverage, real-time tracking, and priority handling, your cargo will reach its destination fast, secure, and intact.",
    icon: <FaPlane className="text-4xl text-[#02DB81]" />,
  },
  {
    id: 3,
    title: "Sea Freight",
    image: "/slider/ab1.webp",
    description:
      "Ideal for bulk and heavy shipments, our sea freight service offers cost-effective international shipping with full container or consolidated options. We ensure safe transit across major global sea routes.",
    icon: <FaShip className="text-4xl text-[#02DB81]" />,
  },
  {
    id: 4,
    title: "Warehousing",
    image: "/slider/ab1.webp",
    description:
      "Our warehousing facilities are designed for maximum security and flexibility. Whether short-term or long-term, we offer climate-controlled environments, inventory management, and easy access for your stored goods.",
    icon: <FaWarehouse className="text-4xl text-[#02DB81]" />,
  },
  {
    id: 5,
    title: "Cargo Packaging",
    image: "/slider/ab1.webp",
    description:
      "We provide professional packaging solutions tailored to the nature of your cargo. From fragile items to industrial equipment, our experts use the latest materials and techniques to protect your goods throughout the shipping process.",
    icon: <FaBoxes className="text-4xl text-[#02DB81]" />,
  },
  {
    id: 6,
    title: "Global Logistics",
    image: "/slider/ab1.webp",
    description:
      "Our global logistics services cover every step of the supply chain — from customs clearance and freight forwarding to last-mile delivery. We simplify international trade by providing a single point of contact for all your logistics needs.",
    icon: <FaGlobe className="text-4xl text-[#02DB81]" />,
  },
];

const Services = () => {
  return (
    <div className="py-24 bg-amber-50 dark:bg-gray-900 px-4 sm:px-6 lg:px-16">
      <motion.div
        variants={contentContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="text-center mb-16"
      >
        <motion.h2
          variants={contentItem}
          className="text-3xl md:text-2xl  font-bold text-primary dark:text-white"
        >
          Our Services
        </motion.h2>
        <motion.h2
          variants={contentItem}
          className="text-3xl md:text-4xl  font-bold text-black dark:text-white"
        >
          Explore Our Services
        </motion.h2>
      </motion.div>

      <div className=" max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 group shadow-md overflow-hidden rounded-2xl h-[500px] border border-gray-100 dark:border-gray-700 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="h-[200px] w-full rounded-lg overflow-hidden">
                <img
                  src={service.image}
                  alt="services image"
                  className="h-full w-full object-cover group-hover:scale-110 transition-all duration-300"
                />
              </div>

              <div className="flex items-center gap-4 py-3 mb-4">
                <div className="text-4xl text-blue-600 dark:text-blue-400">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {service.title}
                </h3>
              </div>

              <p className="text-base text-gray-600 text-justify dark:text-gray-300 leading-relaxed h-[96px] overflow-hidden">
                {service.description.slice(0, 120)}...
              </p>
            </div>

            <div className="mt-5 flex justify-center transition-all group">
              <button className="cursor-pointer relative bg-white/10 py-2 rounded-full min-w-[8.5rem] min-h-[2.92rem] group max-w-full flex items-center justify-start hover:bg-green-400 transition-all duration-[0.8s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] shadow-[inset_1px_2px_5px_#00000080]">
                <div className="absolute flex px-1 py-0.5 justify-start items-center inset-0">
                  <div className="w-[0%] group-hover:w-full transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)]"></div>
                  <div className="rounded-full shrink-0 flex justify-center items-center shadow-[inset_1px_-1px_3px_0_black] h-full aspect-square bg-green-400 transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] group-hover:bg-black">
                    <div className="size-[0.8rem] text-black group-hover:text-white group-hover:-rotate-45 transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 16 16"
                        height="100%"
                        width="100%"
                      >
                        <path
                          fill="currentColor"
                          d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="pl-[3.4rem] pr-[1.1rem] group-hover:pl-[1.1rem] group-hover:pr-[3.4rem] transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] group-hover:text-black text-black">
                  Read More
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
