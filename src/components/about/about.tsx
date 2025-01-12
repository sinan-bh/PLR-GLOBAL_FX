"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <div className="flex flex-col items-center justify-center  min-h-screen sm:h-[85vh] p-4">
      <div className="flex flex-col sm:flex-row w-full items-center justify-around">
        {/* Content Section with Animation triggered when in view */}
        <motion.div
          className="w-full sm:w-1/2 flex flex-col items-center sm:items-start text-center sm:text-left space-y-6"
          initial={{ opacity: 0, x: -100 }} // Start position off the screen (from the left)
          whileInView={{ opacity: 1, x: 0 }} // Animate to the original position when in view
          viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of the element is in the viewport
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
            About Us
          </h1>
          <p className="text-lg sm:text-xl text-gray-500 font-medium">
            We are a team of experienced traders and developers who are
            passionate about building a better trading experience.
          </p>
          <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
            Our goal is to provide a platform that is easy to use, transparent,
            and fair. We strive to deliver the best tools and resources for
            traders of all levels to succeed in their trading journey.
          </p>
        </motion.div>

        {/* Image Section with Animation triggered when in view */}
        <motion.div
          className="w-full sm:w-1/2 flex justify-center items-center mt-6 sm:mt-0"
          initial={{ opacity: 0, x: 100 }} // Start position off the screen (from the right)
          whileInView={{ opacity: 1, x: 0 }} // Animate to the original position when in view
          viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of the element is in the viewport
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
        >
          <Image
            src="/images/stockmarket.jpg"
            alt="About Us"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      </div>
    </div>
  );
};
