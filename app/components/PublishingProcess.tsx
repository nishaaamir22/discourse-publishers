"use client";

import { motion, type Variants } from "motion/react";

const steps = [
{
number: "01",
title: "Submit",
description:
"Send us your manuscript and tell us about your publishing goals.",
},
{
number: "02",
title: "Edit & Proofread",
description:
"Our team refines your manuscript and prepares it for publication.",
},
{
number: "03",
title: "Design & Format",
description:
"Your book receives professional formatting, typesetting and cover design.",
},
{
number: "04",
title: "Publish & Distribute",
description:
"We publish your work digitally and through print, with worldwide distribution options.",
},
];

const stepVariants: Variants = {
hidden: {
opacity: 0,
y: 45,
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

export default function PublishingProcess() {
return ( <section className="relative overflow-hidden bg-[#183c32] px-4 py-16 text-white sm:px-6 sm:py-20 md:px-8 md:py-24">
{/* Very subtle moving background */}
<motion.div
animate={{
x: [0, 80, 0],
y: [0, -30, 0],
scale: [1, 1.08, 1],
}}
transition={{
duration: 16,
repeat: Infinity,
ease: "easeInOut",
}}
className="pointer-events-none absolute -right-40 top-0 h-80 w-80 rounded-full bg-[#c5d0ca]/5 blur-3xl"
/>

  <motion.div
    animate={{
      x: [0, -60, 0],
      y: [0, 25, 0],
    }}
    transition={{
      duration: 18,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="pointer-events-none absolute -left-40 bottom-0 h-72 w-72 rounded-full bg-[#c5d0ca]/5 blur-3xl"
  />

  <div className="relative mx-auto max-w-6xl">
    {/* Heading */}
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
      <p className="text-[10px] font-medium tracking-[0.18em] text-[#c5d0ca] sm:text-xs md:text-sm md:tracking-[0.25em]">
        HOW IT WORKS
      </p>

      <h2 className="mt-4 max-w-3xl text-2xl font-semibold leading-tight tracking-tight sm:text-3xl md:text-4xl">
        From manuscript to published book.
      </h2>
    </motion.div>

    {/* Process */}
    <div className="relative mt-10 sm:mt-12 md:mt-16">
      {/* Animated connecting line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{
          once: false,
          amount: 0.25,
        }}
        transition={{
          duration: 1.4,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-0 right-0 top-2 hidden h-px origin-left bg-[#c5d0ca]/20 md:block"
      />

      {/* Continuously travelling highlight */}
      <motion.div
        animate={{
          x: ["-10%", "110%"],
          opacity: [0, 0.7, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-0 top-2 hidden h-px w-24 bg-[#c5d0ca]/50 md:block"
      />

      <div className="grid grid-cols-4 gap-3 sm:gap-5 md:gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            variants={stepVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: false,
              amount: 0.2,
            }}
            transition={{
              delay: index * 0.15,
            }}
            whileHover={{
              y: -6,
              transition: {
                duration: 0.25,
                ease: "easeOut",
              },
            }}
            className="relative"
          >
            {/* Step number */}
            <motion.span
              animate={{
                y: [0, -2, 0],
              }}
              transition={{
                duration: 3.5 + index * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 inline-block text-xs text-[#c5d0ca] sm:text-sm"
            >
              {step.number}
            </motion.span>

            <h3 className="mt-2 text-sm font-semibold leading-tight sm:text-base md:mt-3 md:text-xl">
              {step.title}
            </h3>

            <p className="mt-2 text-xs leading-5 text-[#b7c3bd] sm:text-sm sm:leading-6 md:mt-3 md:text-base md:leading-7">
              {step.description}
            </p>

            {/* Small animated underline */}
            <motion.div
              animate={{
                width: ["15%", "35%", "15%"],
              }}
              transition={{
                duration: 4 + index * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mt-5 h-px bg-[#c5d0ca]/30"
            />
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>

);
}
