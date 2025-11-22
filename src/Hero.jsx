import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-pink-100 via-rose-200 to-pink-300 overflow-hidden">

      {/* Floating Hearts Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [0, 1, 1, 0], y: [-20, -200 - i * 10] }}
            transition={{ duration: 8 + i, repeat: Infinity, delay: i * 0.5 }}
            className="absolute text-red-400 text-3xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            ❤️
          </motion.div>
        ))}
      </div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-6xl md:text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-rose-700 to-red-500 drop-shadow-lg relative z-10"
      >
        Our Beautiful Journey
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="text-xl md:text-3xl max-w-2xl mt-4 font-light relative z-10"
      >
        A love story filled with magic, memories, and moments.  
        A story Of Kiran And Komal
      </motion.p>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-12 relative z-10"
      >
        <a
          href="#timeline"
          className="bg-gradient-to-r from-rose-600 to-red-500 text-white px-10 py-4 rounded-full text-xl shadow-2xl hover:scale-110 transition-transform duration-300"
        >
          Start Our Story
        </a>
      </motion.div>
    </section>
  );
}
