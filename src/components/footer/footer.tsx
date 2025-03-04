"use client";

import Link from "next/link";
import SocialMedia from "../ui/social-media";
import { EmailOutlined, Instagram } from "@mui/icons-material";

export const Footer = () => (
  <footer className="p-6 flex flex-col sm:flex-row  justify-evenly  items-center">
    {/* Personal Info Section */}
    <div className="mb-4 sm:mb-0">
      <div className="py-2 px-2 text-xl text-center bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent font-bold">
        Personal Info
      </div>
      <ul className="space-y-1 px-2 text-lg text-center sm:text-base text-gray-500">
        <li>
          <span className="font-medium">ARJUN PALENGARA</span>
        </li>
        <li>
          <span className="font-medium">9526083962</span>
        </li>
        <li className="flex gap-4 items-center">
          <div>connect with me</div>
          <div>
            <Link
              href="mailto:arjunpalengaraforex@gmail.com"
              className=" hover:underline"
            >
              <EmailOutlined className="text-gray-500" fontSize="small" />
            </Link>
          </div>
          <div>
            <Link
              href="https://www.instagram.com/__arjuun_._/"
              className=" hover:underline"
            >
              <Instagram className="text-gray-500" fontSize="small" />{" "}
            </Link>
          </div>
        </li>
      </ul>
    </div>

    <div className="mb-4 sm:mb-0">
      <div className="py-2 px-2 text-xl text-center bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent font-bold">
        Company
      </div>

      <ul className="space-y-1 px-2 text-lg text-center sm:text-base text-gray-500">
        <li>
          <Link href="/" className=" hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className=" hover:underline">
            About
          </Link>
        </li>
        <li>
          <Link href="/features" className=" hover:underline">
            Features
          </Link>
        </li>
      </ul>
    </div>

    {/* Social Media Section */}
    <div className="text-center sm:text-right">
      <div className="py-2 px-2 text-xl text-center bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent font-bold">
        Stay in Touch
      </div>
      <div>
        <SocialMedia className="flex items-center justify-center sm:justify-end space-x-4" />
      </div>
    </div>
  </footer>
);
