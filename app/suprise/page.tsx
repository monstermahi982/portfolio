"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ValentinePage() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });

  // Text progression for the No button
  const noButtonTexts = [
    "No 😐",
    "Are you sure? 🥺",
    "Think again 💕",
    "Please don't break my heart 💔",
    "You know you love me 😘",
    "Last chance 😭",
    "Really? 🥹",
    "Don't do this to me 💘",
    "I'm gonna cry 😢",
    "You're breaking my heart 💔",
    "Think about us 💑",
    "Give me a chance 🌹",
    "Pretty please? 🥺",
    "I'll be sad forever 😞",
    "You're making me sad 😔",
    "Just say yes already! 💖",
    "Why are you doing this? 😭",
    "My heart can't take this 💔",
    "One more click won't hurt 😅",
    "I believe in us 💕",
    "You're so stubborn! 😤",
    "Fine, keep clicking 🙄",
    "I'll wait forever for you ⏰",
    "This is your final warning! ⚠️",
    "Okay, I give up... Just kidding! ❤️",
  ];

  // Get current No button text based on count
  const getNoButtonText = () => {
    return noButtonTexts[Math.min(noCount, noButtonTexts.length - 1)];
  };

  // Handle No button click - move it to random position within card
  const handleNoButtonInteraction = () => {
    // Card dimensions (approximate max-w-lg = 512px, with padding)
    const cardWidth = 512;
    const cardHeight = 500; // Approximate card height
    const buttonWidth = 180;
    const buttonHeight = 60;
    const padding = 20;
    
    // Calculate safe boundaries within the card
    const maxX = cardWidth - buttonWidth - padding;
    const maxY = cardHeight - buttonHeight - padding;
    
    // Generate random position within card boundaries
    const randomX = padding + Math.random() * Math.max(0, maxX - padding);
    const randomY = padding + Math.random() * Math.max(0, maxY - padding);
    
    setNoButtonPosition({ x: randomX, y: randomY });
    setNoCount((prev) => prev + 1);
  };

  // Handle Yes button click
  const handleYesClick = () => {
    setYesPressed(true);
  };

  // Floating hearts animation
  const FloatingHeart = ({ delay }: { delay: number }) => {
    const [startX, setStartX] = useState(0);
    const [endX, setEndX] = useState(0);

    useEffect(() => {
      // Set random positions only on client side
      setStartX(Math.random() * window.innerWidth);
      setEndX(Math.random() * window.innerWidth);
    }, []);

    return (
      <motion.div
        className="absolute text-4xl opacity-20"
        initial={{ y: "100vh", x: startX }}
        animate={{
          y: "-100vh",
          x: endX,
        }}
        transition={{
          duration: 8 + Math.random() * 4,
          repeat: Infinity,
          delay: delay,
          ease: "linear",
        }}
      >
        ❤️
      </motion.div>
    );
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-400 via-rose-400 to-red-500 animate-gradient-slow">
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/30 via-transparent to-pink-500/30 animate-pulse" />
      {/* Floating hearts background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <FloatingHeart key={i} delay={i * 0.8} />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <AnimatePresence mode="wait">
          {!yesPressed ? (
            // Initial question card
            <motion.div
              key="question"
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 10 }}
              transition={{ type: "spring", duration: 0.6 }}
              className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-10 md:p-14 max-w-lg w-full text-center overflow-hidden"
            >
              {/* Decorative gradient orb */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full blur-3xl opacity-30" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-red-400 to-rose-500 rounded-full blur-3xl opacity-30" />

              {/* Heart decoration */}
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-8xl mb-8 drop-shadow-lg"
              >
                💖
              </motion.div>

              {/* Main heading */}
              <motion.h1
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 mb-6 leading-tight"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                Do you love me?
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-gray-700 text-xl mb-4 font-medium"
              >
                Choose wisely... 💕
              </motion.p>

              {/* Buttons container */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                {/* Yes Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleYesClick}
                  className="bg-gradient-to-r from-pink-500 via-red-500 to-rose-500 hover:from-pink-600 hover:via-red-600 hover:to-rose-600 text-white font-bold py-4 px-10 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-lg z-10"
                >
                  Yes ❤️
                </motion.button>

                {/* No Button - Moves around after first interaction */}
                <motion.button
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 25,
                  }}
                  onClick={handleNoButtonInteraction}
                  className="bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-500 hover:to-gray-600 text-white font-bold py-4 px-10 rounded-full shadow-xl hover:shadow-2xl cursor-pointer transition-all duration-300 text-lg"
                  style={
                    noCount > 0
                      ? {
                          position: "absolute",
                          left: noButtonPosition.x,
                          top: noButtonPosition.y,
                          zIndex: 20,
                        }
                      : {}
                  }
                >
                  {getNoButtonText()}
                </motion.button>
              </div>

              {/* Hint text after a few attempts */}
              {noCount > 2 && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-pink-600 mt-8 font-medium"
                >
                  Hint: The answer is Yes! 💝
                </motion.p>
              )}
            </motion.div>
          ) : (
            // Success message card
            <motion.div
              key="success"
              initial={{ scale: 0, rotate: -10 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", duration: 0.6 }}
              className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 max-w-md w-full text-center"
            >
              {/* Decorative gradient orbs */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full blur-3xl opacity-30" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-red-400 to-rose-500 rounded-full blur-3xl opacity-30" />

              {/* Heart burst animation */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ 
                  scale: [0, 1.5, 1],
                  rotate: [0, 360]
                }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-9xl mb-8 drop-shadow-2xl"
              >
                💖
              </motion.div>

              {/* Success message */}
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 mb-6 leading-tight"
                style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
              >
                You just made my world brighter 🌹💖
              </motion.h1>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-gray-800 text-2xl leading-relaxed font-medium"
              >
                I love you more than words can say.
              </motion.p>

              {/* Confetti hearts */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{
                      x: "50%",
                      y: "50%",
                      scale: 0,
                    }}
                    animate={{
                      x: `${Math.random() * 100}%`,
                      y: `${Math.random() * 100}%`,
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      delay: i * 0.05,
                      ease: "easeOut",
                    }}
                    className="absolute text-2xl"
                  >
                    {["❤️", "💕", "💖", "💗", "💝"][i % 5]}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
