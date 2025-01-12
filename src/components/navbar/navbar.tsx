"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Features", href: "/features" },
  ];

  return (
    <nav className="flex items-center justify-between p-4 shadow-md w-screen fixed left-0 z-10 top-0">
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

      {/* Desktop Menu */}
      <ul className="hidden sm:flex items-center space-x-8 text-lg font-medium text-white">
        {menuItems.map((item, index) => (
          <motion.li
            key={item.name}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="hover:text-gray-400 transition-colors duration-300"
          >
            <Link href={item.href}>{item.name}</Link>
          </motion.li>
        ))}
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

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <motion.div
          className="absolute top-[64px] right-4 bg-gray-900 w-32 shadow-lg rounded-md p-4 sm:hidden"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col space-y-4 text-lg font-medium text-white">
            {menuItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="hover:text-red-300 transition-colors duration-300"
              >
                <Link href={item.href} onClick={() => setMenuOpen(false)}>
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
};
