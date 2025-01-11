import Image from "next/image";
import { motion } from "framer-motion";

export const Aim = () => {
  return (
    <div className="flex flex-col sm:flex-row w-full items-center justify-around h-auto sm:h-[80vh] p-4">
      {/* Image Section with Animation triggered when in view */}
      <motion.div
        className="w-full sm:w-1/2 flex justify-center items-center mb-6 sm:mb-0"
        initial={{ opacity: 0, x: -100 }} // Start position off the screen (from the left)
        whileInView={{ opacity: 1, x: 0 }} // Animate to the original position when in view
        viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of the element is in the viewport
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
      >
        <Image
          src="/images/bullbeach.jpg"
          alt="PLR Global FX"
          width={500}
          height={500}
          className="rounded-lg shadow-lg"
          style={{ objectFit: "cover" }}
        />
      </motion.div>

      {/* Content Section with Animation triggered when in view */}
      <motion.div
        className="w-full sm:w-1/2 flex flex-col items-center sm:items-start text-center sm:text-left space-y-6"
        initial={{ opacity: 0, x: 100 }} // Start position off the screen (from the right)
        whileInView={{ opacity: 1, x: 0 }} // Animate to the original position when in view
        viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of the element is in the viewport
        transition={{ duration: 1, type: "spring", stiffness: 100 }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
          PLR GLOBAL FX:
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 font-medium">
          Empowering Disciplined Trading for Financial Growth
        </p>
        <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
          At PLR GLOBAL FX, we are committed to fostering disciplined trading
          practices, providing proven strategies, and emphasizing effective risk
          management to help our clients create lasting wealth. Through
          personalized mentorship and expert trading signals, we equip traders
          with the tools and knowledge to succeed in the dynamic forex market.
        </p>
      </motion.div>
    </div>
  );
};
