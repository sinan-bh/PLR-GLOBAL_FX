"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { About } from "../about/about";
import { Aim } from "../aim/aim";
import FeaturesSection from "../features/features";
import SocialMedia from "../ui/social-media";

// Animation Variants for Heading
const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

// Animation Variants for Tagline
const taglineVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 2,
      duration: 0.8,
    },
  },
};

// Animation Variants for Social Icons
export const iconVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.2,
    transition: { type: "spring", stiffness: 300, damping: 10 },
  },
};

// Animation Variants for Image and Text Sections
const sectionVariants = {
  hidden: { opacity: 0, x: -200 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100, damping: 20, delay: 0 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 200 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100, damping: 20, delay: 0 },
  },
};

export const Hero: React.FC = () => {
  const headingText = "PLR GLOBAL FX";
  const taglineText = "Empowering Disciplined Trading for Financial Growth...";

  return (
    <div className="flex flex-col items-center justify-center w-screen">
      {/* Hero Section */}
      <div className="flex flex-col-reverse sm:flex-row justify-center items-center w-full min-h-screen px-4 sm:px-10 py-10">
        {/* Text and Social Links */}
        <motion.div
          className="flex flex-col justify-center items-center sm:items-start text-center sm:text-left w-full sm:w-1/2 space-y-6"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Title Section */}
          <div className="flex flex-col sm:flex-row items-center mb-6 sm:mb-0">
            <Image src="/images/p.png" alt="logo" width={80} height={80} />
            <div className="sm:ml-4">
              {/* Animated Heading */}
              <div className="max-w-2xl text-3xl sm:text-5xl font-bold flex flex-wrap justify-center sm:justify-start">
                {headingText.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    custom={index}
                    variants={headingVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </div>
              {/* Animated Tagline */}
              <motion.div
                className="px-1 py-2 text-sm sm:text-md text-gray-600"
                variants={taglineVariants}
                initial="hidden"
                animate="visible"
              >
                {taglineText}
              </motion.div>
            </div>
          </div>

          {/* Social Media Links */}
          <div>
            <div className="py-2 px-2 text-md text-gray-700 font-semibold">
              Stay in Touch
            </div>
            <SocialMedia className="flex gap-4 justify-center sm:justify-start" />
          </div>
        </motion.div>

        {/* Image Section */}
        <div className="hidden sm:block">
          <motion.div
            className="flex justify-center items-center  mb-6 sm:mb-0"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <Image
              src="/images/BullBear.jpg"
              alt="logo"
              width={500}
              height={400}
              className="rounded-lg shadow-lg w-full max-w-[500px] h-auto"
              style={{ objectFit: "cover" }}
            />
          </motion.div>
        </div>
      </div>

      {/* Aim and About Sections */}
      <div className="w-full px-4">
        <Aim />
      </div>
      <div className="w-full px-4">
        <FeaturesSection />
      </div>
      <div className="w-full px-4">
        <About />
      </div>
    </div>
  );
};
