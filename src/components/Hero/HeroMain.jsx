import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import {
  contentContainer,
  contentItem,
  container,
  fadeeIn,
} from "../../utils/framermotion/variants"; // Update this path as needed
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroMain = () => {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  const sliders = [
    {
      id: 1,
      title: "Transport & Cargo Solution",
      desc: "Fast, safe, and efficient transportation for all your cargo needs around the globe.",
      image: "/slider/ab1.webp",
    },
    {
      id: 2,
      title: "Fast Delivery Service",
      desc: "Quick delivery services to ensure your packages arrive on time every time.",
      image: "/slider/ab1.webp",
    },
    {
      id: 3,
      title: "Trusted by Thousands",
      desc: "Our customers trust us with their valuable shipments and logistics every day.",
      image: "/slider/ab2.jpg",
    },
  ];

  return (
    <div className="w-full h-[300px] md:h-[400px] lg:h-[600px] relative group">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        slidesPerView={1}
        loop={true}
        spaceBetween={0}
        speed={1500}
        navigation={{
          prevEl,
          nextEl,
        }}
        grabCursor={true}
        className="overflow-visible shadow-lg cursor-pointer relative"
      >
        {sliders.map((slide, index) => (
          <SwiperSlide key={index}>
            <motion.div
              variants={contentContainer}
              initial="hidden"
              animate="show"
              className="w-full h-[300px] md:h-[400px] lg:h-[85vh] bg-cover bg-center relative flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/50"></div>
              <motion.div
                variants={contentContainer}
                initial="hidden"
                animate="show"
                className="relative z-10 px-6 md:px-16 text-white space-y-4 max-w-2xl"
              >
                <motion.h2
                  variants={contentItem}
                  className="text-2xl md:text-4xl mb-4 font-bold"
                >
                  {slide.title}
                </motion.h2>
                <motion.p
                  variants={contentItem}
                  className="text-sm md:text-base mb-4"
                >
                  {slide.desc}
                </motion.p>
                <motion.div variants={contentItem} className="space-x-4">
                  <button className="bg-primary hover:bg-blue-600 text-lg font-bold cursor-pointer text-white px-5 py-4 rounded-md transition duration-300 w-[220px]">
                    Track Your Cargo
                  </button>
                  <button className="bg-white text-primary cursor-pointer text-lg font-bold hover:bg-gray-100 px-5 py-4 rounded-md transition duration-300 w-[220px]">
                    Get a Quote
                  </button>
                </motion.div>
              </motion.div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation buttons */}
      <div className="absolute top-2/3 right-16  z-20 flex flex-col gap-10 group">
        <div
          ref={(node) => setNextEl(node)}
          onMouseDown={(e) => e.preventDefault()}
          className="w-[50px] h-[50px] items-center justify-center rounded-full border-white border text-white shadow-md cursor-pointer hidden hover:bg-primary group-hover:flex transition"
        >
          <MdArrowForwardIos size={24} />
        </div>
        <div
          ref={(node) => setPrevEl(node)}
          onMouseDown={(e) => e.preventDefault()}
          className="w-[50px] h-[50px] items-center justify-center rounded-full border-white border text-white shadow-md cursor-pointer hover:bg-primary hidden group-hover:flex transition"
        >
          <MdArrowBackIos size={24} />
        </div>
      </div>
    </div>
  );
};

export default HeroMain;
