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
    <div className="h-full flex items-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={titles[index]}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent"
        >
          {titles[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
