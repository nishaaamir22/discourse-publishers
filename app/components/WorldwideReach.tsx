"use client";

import Link from "next/link";
import { motion, type Variants } from "motion/react";

const reachItems = [
{
number: "01",
title: "Amazon KDP Publishing",
},
{
number: "02",
title: "Digital Distribution",
},
{
number: "03",
title: "Physical Printing",
},
{
number: "04",
title: "Worldwide Delivery",
},
];

const itemVariants: Variants = {
hidden: {
opacity: 0,
y: 35,
},
visible: {
opacity: 1,
y: 0,
transition: {
duration: 0.7,
ease: "easeOut",
},
},
};

export default function WorldwideReach() {
return ( <section className="relative overflow-hidden bg-[#102d26] px-6 py-20 text-white sm:px-8 sm:py-24 md:py-28">
<motion.div
animate={{
x: [0, 45, 0],
y: [0, -25, 0],
scale: [1, 1.06, 1],
}}
transition={{
duration: 17,
repeat: Infinity,
ease: "easeInOut",
}}
className="pointer-events-none absolute -right-40 top-0 h-80 w-80 rounded-full bg-[#315c47]/20 blur-3xl"
/>

  <motion.div
    animate={{
      x: [0, -30, 0],
      y: [0, 20, 0],
      scale: [1, 0.96, 1],
    }}
    transition={{
      duration: 19,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="pointer-events-none absolute -left-40 bottom-0 h-72 w-72 rounded-full bg-[#e4ebe6]/5 blur-3xl"
  />

  <div className="relative mx-auto max-w-6xl">
    <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
      <motion.div
        initial={{ opacity: 0, x: -35 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{
          once: false,
          amount: 0.25,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <p className="text-xs font-medium tracking-[0.22em] text-[#c5d0ca] sm:text-sm sm:tracking-[0.25em]">
          WORLDWIDE REACH
        </p>

        <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
          From your desk to readers around the world.
        </h2>

        <p className="mt-6 max-w-xl text-base leading-7 text-[#b7c3bd] sm:text-lg sm:leading-8">
          We help authors publish and distribute their work through
          digital platforms and physical publishing channels, making books
          accessible to readers across the world.
        </p>

        <motion.div
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.98 }}
          transition={{
            duration: 0.25,
            ease: "easeOut",
          }}
        >
          <Link
            href="/contact#contact-form"
            className="mt-8 inline-block border border-[#6f8279] px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-white hover:text-[#102d26]"
          >
            Start Your Publishing Journey
          </Link>
        </motion.div>
      </motion.div>

      <div className="grid grid-cols-2 gap-px overflow-hidden border border-[#315247] bg-[#315247]">
        {reachItems.map((item, index) => (
          <motion.div
            key={item.number}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: 0.2,
            }}
            transition={{
              delay: index * 0.12,
            }}
            whileHover={{
              y: -6,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            }}
            className="group min-h-[150px] bg-[#102d26] p-5 transition-colors duration-300 hover:bg-[#183c32] sm:min-h-[180px] sm:p-7 md:p-8"
          >
            <motion.p
              animate={{
                y: [0, -3, 0],
              }}
              transition={{
                duration: 4 + index * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-2xl font-semibold text-white sm:text-3xl"
            >
              {item.number}
            </motion.p>

            <motion.div
              animate={{
                width: ["32px", "48px", "32px"],
              }}
              transition={{
                duration: 4 + index * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mt-8 h-px bg-[#6f8279]"
            />

            <p className="mt-4 text-xs leading-5 text-[#b7c3bd] sm:text-sm sm:leading-6">
              {item.title}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>

);
}
