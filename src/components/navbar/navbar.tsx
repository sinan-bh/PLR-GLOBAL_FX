"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 shadow-md w-full fixed left-0 z-10 top-0">
      {/* Logo Section with Animation */}
      <Link href="/">
        <motion.div
          className="text-xl font-bold flex items-center cursor-pointer"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image src="/images/plr.png" alt="logo" width={120} height={50} />
        </motion.div>
      </Link>

      {/* Desktop Menu with Animation */}
      <ul className="hidden sm:flex items-center space-x-8 text-lg font-medium text-white">
        <motion.li
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link href="/">Home</Link>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href="/about">About</Link>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link href="/contact">Contact</Link>
        </motion.li>
      </ul>

      {/* Mobile Menu Icon */}
      <div
        className="sm:hidden cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="w-6 h-0.5 bg-white mb-1"></div>
        <div className="w-6 h-0.5 bg-white mb-1"></div>
        <div className="w-6 h-0.5 bg-white"></div>
      </div>

      {/* Mobile Menu Dropdown with Animation */}
      {menuOpen && (
        <motion.div
          className="absolute top-[64px] right-4 bg-gray-900 w-32 shadow-lg rounded-md p-4 sm:hidden"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col space-y-4 text-lg font-medium text-white">
            <motion.li
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <Link href="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Link href="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <Link href="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </motion.li>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};
