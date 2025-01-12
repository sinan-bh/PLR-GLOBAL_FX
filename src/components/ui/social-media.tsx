import React from "react";
import { AiOutlineDiscord } from "react-icons/ai";
import { SlSocialYoutube } from "react-icons/sl";
import { Instagram, WhatsApp } from "@mui/icons-material";
import { motion } from "framer-motion";
import Link from "next/link";

export const iconVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.2,
    transition: { type: "spring", stiffness: 300, damping: 10 },
  },
};

export default function SocialMedia({ className }: { className: string }) {
  return (
    <div className={className}>
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
  );
}
