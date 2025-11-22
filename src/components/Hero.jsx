import React from 'react';
import { motion } from 'framer-motion';


export default function Hero() {
  return (
    <section className="relative min-h-[92vh] pt-28 flex items-center justify-center bg-hero-grad">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-blackletter text-6xl sm:text-7xl md:text-9xl leading-none"
        >
          Peter Burke
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.15, duration: 0.6 }}}
          className="mt-4 font-display text-xl tracking-wide text-pb-purple"
        >
          Storytelling • Technology • Design
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.25, duration: 0.5 }}}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <a href="#projects" className="px-5 py-3 border border-pb-copper/70 rounded-md hover:shadow-copper transition-shadow">
            View My Work
          </a>
          <a href="about" className="px-5 py-3 border border-pb-copper/70 rounded-md hover:shadow-copper transition-shadow">
            About Me
          </a>
        </motion.div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-pb-copper/50 to-transparent" />
    </section>
  );
}
