"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function CTA() {
return ( <section className="relative overflow-hidden bg-[#e4ebe6] px-6 py-20 sm:px-8 sm:py-24 md:py-28">
<motion.div
animate={{
x: [0, 35, 0],
y: [0, -20, 0],
scale: [1, 1.06, 1],
}}
transition={{
duration: 15,
repeat: Infinity,
ease: "easeInOut",
}}
className="pointer-events-none absolute -right-32 -top-24 h-72 w-72 rounded-full bg-white/30 blur-3xl"
/>

  <motion.div
    animate={{
      x: [0, -30, 0],
      y: [0, 20, 0],
      scale: [1, 0.95, 1],
    }}
    transition={{
      duration: 18,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#f6f4ee]/50 blur-3xl"
  />

  <div className="relative mx-auto max-w-4xl text-center">
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: false,
        amount: 0.3,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      <motion.p
        animate={{
          y: [0, -2, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="text-xs font-medium tracking-[0.22em] text-[#626b65] sm:text-sm sm:tracking-[0.25em]"
      >
        YOUR BOOK STARTS HERE
      </motion.p>

      <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-[#183c32] sm:text-4xl md:text-6xl">
        Ready to bring your story to life?
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#626b65] sm:mt-6 sm:text-lg sm:leading-8">
        Whether you have a finished manuscript or are just beginning your
        publishing journey, we're here to help you take the next step.
      </p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: false,
        amount: 0.4,
      }}
      transition={{
        duration: 0.8,
        delay: 0.15,
        ease: "easeOut",
      }}
      className="mt-8 flex flex-col justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4"
    >
      <motion.div
        whileHover={{
          y: -4,
          scale: 1.02,
        }}
        whileTap={{
          scale: 0.97,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 20,
        }}
      >
        <Link
          href="/contact#contact-form"
          className="block bg-[#183c32] px-7 py-3.5 text-center text-sm font-medium text-white transition-colors duration-300 hover:bg-[#102d26]"
        >
          Get Started
        </Link>
      </motion.div>

      <motion.div
        whileHover={{
          y: -4,
          scale: 1.02,
        }}
        whileTap={{
          scale: 0.97,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 20,
        }}
      >
        <Link
          href="/contact"
          className="block border border-[#aebdb5] px-7 py-3.5 text-center text-sm font-medium text-[#183c32] transition-colors duration-300 hover:bg-[#f6f4ee]"
        >
          Contact Us
        </Link>
      </motion.div>
    </motion.div>
  </div>
</section>


);
}
