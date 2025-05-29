"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const titles = [
  "Frontend Developer",
  "Javascript Developer",
  "Full Stack Developer",
  "Tech Enthusiast",
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
    <div className="w-fit py-3 px-5 bg-white shadow-2xl rounded-2xl text-center overflow-hidden">
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
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-xl text-neutral-400 font-semibold"
        >
          {titles[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
