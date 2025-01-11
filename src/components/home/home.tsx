"use client";

import Image from "next/image";
import { About } from "../about/about";
import {WhatsApp, Instagram} from "@mui/icons-material";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col justify-center items-center  sm:flex-row h-[75vh]">
        <div>
          <div className="text-center sm:text-start max-w-2xl text-6xl font-bold">
            Welcome to PLR GLOBAL FX
          </div>
          <div className="text-center sm:text-start px-2 py-2 text-sm text-slate-400">
            Unlocking wealth through smart trading...
          </div>
          <div>
            <div className="py-3 px-2">Follow Us on </div>
            <div className="flex gap-5 px-2">
              <Link href={"https://wa.me/+918330083962"}>
                <WhatsApp />
              </Link>
              <Link href={"https://www.instagram.com/plrglobal.fx/profilecard/?igsh=djhwdGExdGh1YWh6"}>
                <Instagram />
              </Link>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/images/BullBear.jpg"
            objectFit="cover"
            alt="logo"
            width={500}
            height={500}
            className="border-none pt-4 w-[400] sm:pt-0 "
          />
        </div>
      </div>
      <div>
        <About />
      </div>
    </div>
  );
};
