"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const titles = [
  "Software Engineer",
  "Full Stack Developer",
  "Tech Enthusiast",
  "Problem Solver",
];

export default function AnimatedTitleCard() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-36 mx-auto">
      <div className="absolute -inset-1 rounded-2xl blur-lg opacity-50 z-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"></div>

      <div className="relative z-10 py-2 px-0 bg-white rounded-2xl text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={titles[index]}
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              x: [0, -5, 5, -4, 4, -2, 2, 0],
            }}
            exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-xs font-semibold text-neutral-400"
          >
            {titles[index]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
