"use client";

import Link from "next/link";
import {
motion,
useScroll,
useTransform,
useSpring,
} from "motion/react";

export default function Hero() {
const { scrollY } = useScroll();

const smoothScrollY = useSpring(scrollY, {
stiffness: 80,
damping: 25,
mass: 0.6,
});

const backgroundY = useTransform(smoothScrollY, [0, 1200], [0, 280]);
const contentY = useTransform(smoothScrollY, [0, 1200], [0, -120]);
const contentScale = useTransform(
smoothScrollY,
[0, 700],
[1, 0.96]
);

return ( <section className="relative isolate overflow-hidden">
{/* Moving background elements */}
<motion.div
style={{ y: backgroundY }}
className="pointer-events-none absolute -right-24 top-16 -z-10 h-72 w-72 rounded-full bg-[#e4ebe6] opacity-70 blur-3xl"
animate={{
x: [0, 25, -15, 0],
scale: [1, 1.08, 0.96, 1],
}}
transition={{
duration: 12,
repeat: Infinity,
ease: "easeInOut",
}}
/>

```
  <motion.div
    style={{ y: backgroundY }}
    className="pointer-events-none absolute -left-32 bottom-0 -z-10 h-64 w-64 rounded-full bg-[#f0eadf] opacity-80 blur-3xl"
    animate={{
      x: [0, -20, 15, 0],
      y: [0, 20, -10, 0],
    }}
    transition={{
      duration: 14,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  {/* Subtle floating editorial line */}
  <motion.div
    animate={{
      y: [0, -12, 0, 10, 0],
      rotate: [0, 1.5, 0, -1.5, 0],
    }}
    transition={{
      duration: 9,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="pointer-events-none absolute right-[12%] top-[24%] hidden h-32 w-px bg-[#183c32]/15 md:block"
  />

  <motion.div
    animate={{
      y: [0, 10, 0, -10, 0],
      rotate: [0, -1, 0, 1, 0],
    }}
    transition={{
      duration: 11,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="pointer-events-none absolute right-[18%] top-[45%] hidden h-px w-24 bg-[#183c32]/15 md:block"
  />

  {/* Hero content */}
  <motion.div
    style={{
      y: contentY,
      scale: contentScale,
    }}
    className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24 md:py-28"
  >
    <motion.p
      initial={{ opacity: 0, x: -25 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="text-xs font-medium tracking-[0.2em] text-[#626b65] sm:text-sm sm:tracking-[0.25em]"
    >
      YOUR STORY. OUR EXPERTISE.
    </motion.p>

    <motion.h1
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1,
        delay: 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-[#183c32] sm:mt-6 sm:text-5xl md:text-6xl md:leading-[1.05]"
    >
      From Manuscript
      <br />
      to Published Book.
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.9,
        delay: 0.3,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="mt-6 max-w-2xl text-base leading-7 text-[#626b65] sm:mt-8 sm:text-lg sm:leading-8"
    >
      Professional publishing, editing, design, formatting and worldwide
      distribution — all in one place.
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.9,
        delay: 0.48,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4"
    >
      <motion.div
        whileHover={{ y: -4, scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        <Link
          href="/contact"
          className="block w-full bg-[#183c32] px-6 py-3 text-center text-sm font-medium text-white shadow-sm transition-shadow duration-300 hover:shadow-xl sm:w-auto"
        >
          Publish With Us
        </Link>
      </motion.div>

      <motion.div
        whileHover={{ y: -4, scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        <Link
          href="/books"
          className="block w-full border border-[#d8d1c5] px-6 py-3 text-center text-sm font-medium text-[#183c32] transition-colors duration-300 hover:bg-[#e4ebe6] sm:w-auto"
        >
          Explore Our Books
        </Link>
      </motion.div>
    </motion.div>
  </motion.div>
</section>

);
}
