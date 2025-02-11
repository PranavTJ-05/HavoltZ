"use client";
//finalised left  
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

type Testimonial = {
  id: number;
  description: string;
  title: string;
  image: string;
};

export const AnimatedTestimonialsLeft = ({
  testimonials,
  selectedId,
  autoplay = true,
}: {
  testimonials: Testimonial[];
  selectedId: number;
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  // Filter testimonials based on the selected ID
  const filteredTestimonials = testimonials.filter((t) => t.id === selectedId);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 4000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <div className="max-w-sm md:max-w-4xl mx-auto px-4 md:px-8 lg:px-12 py-20">
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center">
        {/* Image on top for mobile, left for larger screens */}
        <div className="relative h-80 w-full md:order-1 order-0 -z-50">
          <AnimatePresence>
            {filteredTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.image}
                initial={{ opacity: 0, scale: 0.9, z: -100, rotate: randomRotateY() }}
                animate={{
                  opacity: isActive(index) ? 1 : 0.7,
                  scale: isActive(index) ? 1 : 0.95,
                  z: isActive(index) ? 0 : -100,
                  rotate: isActive(index) ? 0 : randomRotateY(),
                  zIndex: isActive(index) ? 999 : filteredTestimonials.length + 2 - index,
                  y: isActive(index) ? [0, -80, 0] : 0,
                }}
                exit={{ opacity: 0, scale: 0.9, z: 100, rotate: randomRotateY() }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 origin-bottom"
              >
                <Image
                  src={testimonial.image}
                  alt={testimonial.title}
                  width={720}
                  height={720}
                  draggable={false}
                  className="h-full w-full rounded-3xl object-cover object-center"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        
        {/* Title and description */}
        <div className="flex justify-between flex-col py-4">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <h3 className="text-2xl font-bold dark:text-white text-black">
              {filteredTestimonials[active]?.title}
            </h3>
            
            <motion.p className="text-lg text-gray-500 mt-8 dark:text-neutral-300">
              {filteredTestimonials[active]?.description.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                  animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut", delay: 0.02 * index }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          
          {/* Buttons */}
          <div className="flex gap-4 justify-center lg:justify-start lg:mt-12 pt-6 md:pt-0">
            <button
              onClick={handlePrev}
              className="h-12 w-20 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
            >
              <IconArrowLeft className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="h-12 w-20 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center group/button"
            >
              <IconArrowRight className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
