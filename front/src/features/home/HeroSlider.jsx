import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { heroSlides } from "./heroSlide";

const textContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const textItem = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const HeroSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      loop
      className="w-full h-125"
    >
      {heroSlides.map((slide) => (
        <SwiperSlide key={slide.id}>
          {({ isActive }) => (
            <div className="relative w-full h-125 bg-[#f8f8f8]">
              
              {/* IMAGE */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-96 h-96 object-contain absolute top-1/2 right-0 -translate-y-1/2"
              />

              {/* CONTENT */}
              <motion.div
                className="absolute top-1/2 left-20 -translate-y-1/2 text-white"
                variants={textContainer}
                initial="hidden"
                animate={isActive ? "visible" : "hidden"}
              >
                <motion.h2
                  variants={textItem}
                  className="text-5xl font-bold mb-4 text-[#242424]"
                >
                  {slide.title}
                </motion.h2>

                <motion.p
                  variants={textItem}
                  className="text-lg mb-6 max-w-md text-[#555555]"
                >
                  {slide.text}
                </motion.p>

                <motion.button
                  variants={textItem}
                  className="bg-[#83B735] px-6 py-3 font-semibold hover:bg-[#6ea42c] transition cursor-pointer"
                >
                  {slide.button}
                </motion.button>
              </motion.div>
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
