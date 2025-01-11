"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { About } from "../about/about";
import { WhatsApp, Instagram } from "@mui/icons-material";
import { AiOutlineDiscord } from "react-icons/ai";
import { SlSocialYoutube } from "react-icons/sl";
import Link from "next/link";
import { Aim } from "../aim/aim";

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
const iconVariants = {
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
    <div className="flex flex-col items-center justify-center">
      {/* Hero Section */}
      <div className="sm:flex sm:flex-row flex-col justify-around py-36 sm:py-10 items-center w-full h-[100vh] sm:h-[95vh] px-4">
        {/* Text and Social Links */}
        <motion.div
          className="flex flex-col justify-around h-auto sm:h-[50vh] text-center sm:text-left items-center sm:items-start"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Title Section */}
          <div className="flex flex-col sm:flex-row items-center mb-6 sm:mb-0">
            <Image src="/images/p.png" alt="logo" width={100} height={100} />
            <div className="sm:ml-4">
              {/* Animated Heading */}
              <div className="max-w-2xl text-4xl sm:text-5xl font-bold flex">
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
                className="px-1 py-2 text-[12px] sm:text-[14px] text-slate-400"
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
            <div className="py-3 px-2 text-lg text-gray-700 font-semibold z-20 shadow-white text-shadow-lg">
              Stay in Touch
            </div>
            <div className="flex gap-5 justify-center sm:justify-start px-2">
              <Link href={"https://wa.me/+919526083962"} passHref>
                <motion.div
                  className="cursor-pointer"
                  variants={iconVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap={{ scale: 0.9 }}
                >
                  <WhatsApp className="text-green-500" fontSize="large" />
                </motion.div>
              </Link>
              <Link
                href={
                  "https://www.instagram.com/plrglobal.fx/profilecard/?igsh=djhwdGExdGh1YWh6"
                }
                passHref
              >
                <motion.div
                  className="cursor-pointer"
                  variants={iconVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap={{ scale: 0.9 }}
                >
                  <Instagram className="text-pink-500" fontSize="large" />
                </motion.div>
              </Link>
              <Link href={""} passHref>
                <motion.div
                  className="cursor-pointer"
                  variants={iconVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap={{ scale: 0.9 }}
                >
                  <SlSocialYoutube size={40} className="text-red-500" />
                </motion.div>
              </Link>
              <Link href={""} passHref>
                <motion.div
                  className="cursor-pointer"
                  variants={iconVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap={{ scale: 0.9 }}
                >
                  <AiOutlineDiscord size={40} className="text-blue-500" />
                </motion.div>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex justify-center items-center mt-6 sm:mt-0"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <Image
            src="/images/BullBear.jpg"
            alt="logo"
            width={500}
            height={500}
            className="rounded-lg shadow-lg w-full sm:w-[400px]"
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      </div>

      {/* Aim and About Sections */}
      <div className="w-full px-4">
        <Aim />
      </div>
      <div className="w-full px-4">
        <About />
      </div>
    </div>
  );
};
