import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PLR GLOBAL FX",
  description:
    "PLR GLOBAL FX is dedicated to fostering disciplined trading practices, offering proven strategies and effective risk management solutions.",
  keywords:
    "PLR GLOBAL FX, trading, disciplined trading, financial growth, forex",
  openGraph: {
    title: "PLR GLOBAL FX | Empowering Disciplined Trading",
    description:
      "Join PLR GLOBAL FX to learn disciplined trading and create lasting financial growth.",
    url: "https://plr-global-fx.vercel.app/",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex justify-center items-center `}
      >
        <div>
          <div className="">
            <Navbar />
          </div>
          <div>{children}</div>
          <div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
