"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Personal Mentorship",
    description:
      "Get one-on-one guidance tailored to your trading journey. Learn strategy, improve your skills, and grow with expert advice.",
    icon: "👨‍🏫",
  },
  {
    title: "Trading Community",
    description:
      "Be part of a supportive group of traders. Share insights, exchange ideas, and grow together.",
    icon: "🌐",
  },
  {
    title: "Signal Groups",
    description:
      "Access accurate and timely trading signals to enhance your decision-making and boost your results.",
    icon: "📊",
  },
];

const FeaturesSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-12 px-4  text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-white bg-clip-text text-transparent ">
          Enhance Your Trading Journey
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-r from-blue-900 to-black  p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
            //   animate={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, delay: index * 0.5 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
