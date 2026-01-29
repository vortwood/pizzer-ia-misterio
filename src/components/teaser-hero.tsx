"use client";

import { motion } from "framer-motion";

const QUESTION_MARK_SIZE = "clamp(16rem, 55vw, 22rem)";

export function TeaserHero() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
      {/* Question mark with glitch effect */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative"
      >
        {/* Deep glow layer */}
        <div
          className="absolute inset-0 blur-[100px] opacity-15"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.6) 0%, transparent 60%)",
          }}
        />

        {/* Glitch container */}
        <div className="relative">
          {/* Chromatic aberration - Red layer */}
          <motion.span
            animate={{
              x: [0, -3, 0, 3, 0, -2, 0],
              opacity: [0, 0.8, 0, 0.7, 0, 0.6, 0],
            }}
            transition={{
              duration: 0.25,
              repeat: Infinity,
              repeatDelay: 1.5,
              ease: "easeInOut",
            }}
            className="absolute inset-0 select-none pointer-events-none"
            style={{
              fontSize: QUESTION_MARK_SIZE,
              fontWeight: 800,
              lineHeight: 1,
              color: "rgba(255,0,0,0.5)",
              mixBlendMode: "screen",
            }}
            aria-hidden="true"
          >
            ?
          </motion.span>

          {/* Chromatic aberration - Cyan layer */}
          <motion.span
            animate={{
              x: [0, 3, 0, -3, 0, 2, 0],
              opacity: [0, 0.8, 0, 0.7, 0, 0.6, 0],
            }}
            transition={{
              duration: 0.25,
              repeat: Infinity,
              repeatDelay: 1.5,
              ease: "easeInOut",
            }}
            className="absolute inset-0 select-none pointer-events-none"
            style={{
              fontSize: QUESTION_MARK_SIZE,
              fontWeight: 800,
              lineHeight: 1,
              color: "rgba(0,255,255,0.5)",
              mixBlendMode: "screen",
            }}
            aria-hidden="true"
          >
            ?
          </motion.span>

          {/* Secondary glitch burst */}
          <motion.span
            animate={{
              x: [0, -5, 5, 0],
              y: [0, 2, -2, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 0.1,
              repeat: Infinity,
              repeatDelay: 2.5,
              ease: "easeInOut",
            }}
            className="absolute inset-0 select-none pointer-events-none"
            style={{
              fontSize: QUESTION_MARK_SIZE,
              fontWeight: 800,
              lineHeight: 1,
              color: "rgba(255,255,255,0.3)",
            }}
            aria-hidden="true"
          >
            ?
          </motion.span>

          {/* Main question mark */}
          <motion.h1
            animate={{
              opacity: [1, 0.92, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="question-mark relative select-none"
            style={{
              fontSize: QUESTION_MARK_SIZE,
              fontWeight: 800,
              lineHeight: 1,
              color: "#fff",
              textShadow: `
                0 0 20px rgba(255,255,255,0.3),
                0 0 40px rgba(255,255,255,0.15),
                0 0 80px rgba(255,255,255,0.1),
                0 2px 4px rgba(0,0,0,0.5)
              `,
            }}
          >
            ?
          </motion.h1>

          {/* Glitch slice effect - top */}
          <motion.div
            animate={{
              scaleY: [0, 1, 0],
              x: [0, 4, -4, 0],
            }}
            transition={{
              duration: 0.12,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
            }}
            className="absolute inset-0 overflow-hidden pointer-events-none"
            style={{
              clipPath: "inset(0 0 70% 0)",
            }}
          >
            <span
              className="block select-none"
              style={{
                fontSize: QUESTION_MARK_SIZE,
                fontWeight: 800,
                lineHeight: 1,
                color: "#fff",
              }}
              aria-hidden="true"
            >
              ?
            </span>
          </motion.div>

          {/* Glitch slice effect - middle */}
          <motion.div
            animate={{
              scaleY: [0, 1, 0],
              x: [0, -6, 6, 0],
            }}
            transition={{
              duration: 0.15,
              repeat: Infinity,
              repeatDelay: 1.8,
              ease: "easeInOut",
            }}
            className="absolute inset-0 overflow-hidden pointer-events-none"
            style={{
              clipPath: "inset(40% 0 40% 0)",
            }}
          >
            <span
              className="block select-none"
              style={{
                fontSize: QUESTION_MARK_SIZE,
                fontWeight: 800,
                lineHeight: 1,
                color: "#fff",
              }}
              aria-hidden="true"
            >
              ?
            </span>
          </motion.div>

          {/* Glitch slice effect - bottom */}
          <motion.div
            animate={{
              scaleY: [0, 1, 0],
              x: [0, 5, -3, 0],
            }}
            transition={{
              duration: 0.1,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut",
            }}
            className="absolute inset-0 overflow-hidden pointer-events-none"
            style={{
              clipPath: "inset(75% 0 0 0)",
            }}
          >
            <span
              className="block select-none"
              style={{
                fontSize: QUESTION_MARK_SIZE,
                fontWeight: 800,
                lineHeight: 1,
                color: "#fff",
              }}
              aria-hidden="true"
            >
              ?
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* Tagline with refined styling */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        className="mt-8 md:mt-12 uppercase select-none text-center px-6"
        style={{
          fontSize: "clamp(0.65rem, 2vw, 0.85rem)",
          fontWeight: 500,
          letterSpacing: "0.3em",
          color: "rgba(255,255,255,0.5)",
          textShadow: "0 2px 10px rgba(0,0,0,0.5)",
        }}
      >
        vamos a resolver este antojo
      </motion.p>

      {/* Subtle decorative line */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
        className="mt-6 h-px w-16 bg-gradient-to-r from-transparent via-white/30 to-transparent"
      />
    </div>
  );
}
