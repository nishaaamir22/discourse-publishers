"use client";

import { motion, type Variants } from "motion/react";

const testimonials = [
{
quote:
"A wonderful experience from manuscript submission to the final publication. The team was professional and supportive throughout.",
author: "Author Name",
role: "Published Author",
},
{
quote:
"From editing to cover design, everything was handled with great attention to detail. My book turned out exactly the way I imagined.",
author: "Author Name",
role: "Published Author",
},
{
quote:
"The team made the publishing process simple and clear. I am very happy with the quality of the finished book.",
author: "Author Name",
role: "Published Author",
},
];

const cardVariants: Variants = {
hidden: {
opacity: 0,
y: 40,
},
visible: {
opacity: 1,
y: 0,
transition: {
duration: 0.75,
ease: "easeOut",
},
},
};

export default function Testimonials() {
return ( <section className="relative overflow-hidden border-t border-[#d8d1c5] bg-[#f6f4ee] px-6 py-20 sm:px-8 sm:py-24 md:py-28">
<motion.div
animate={{
x: [0, 30, 0],
y: [0, -18, 0],
scale: [1, 1.05, 1],
}}
transition={{
duration: 16,
repeat: Infinity,
ease: "easeInOut",
}}
className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-[#e4ebe6]/50 blur-3xl"
/>

  <motion.div
    animate={{
      x: [0, -25, 0],
      y: [0, 15, 0],
      scale: [1, 0.96, 1],
    }}
    transition={{
      duration: 18,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="pointer-events-none absolute -left-40 bottom-0 h-72 w-72 rounded-full bg-[#d8d1c5]/30 blur-3xl"
  />

  <div className="relative mx-auto max-w-6xl">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{
        once: false,
        amount: 0.25,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="grid gap-8 md:grid-cols-2 md:items-end"
    >
      <div>
        <p className="text-xs font-medium tracking-[0.22em] text-[#626b65] sm:text-sm sm:tracking-[0.25em]">
          CLIENT FEEDBACK
        </p>

        <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-[#183c32] sm:text-4xl md:text-5xl">
          Trusted by authors who care about their work.
        </h2>
      </div>

      <p className="max-w-lg text-base leading-7 text-[#626b65] sm:text-lg sm:leading-8 md:justify-self-end">
        Every book is personal. We work closely with authors to turn their
        ideas and manuscripts into professionally published work.
      </p>
    </motion.div>

    <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.15,
          }}
          transition={{
            delay: index * 0.12,
          }}
          whileHover={{
            y: -7,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          }}
          animate={{
            y: [0, -3, 0, 3, 0],
          }}
          className="group flex min-h-[300px] flex-col justify-between rounded-sm border border-[#d8d1c5] bg-white p-7 transition-colors duration-300 hover:border-[#183c32] sm:p-8"
        >
          <div>
            <motion.div
              animate={{
                y: [0, -3, 0],
                rotate: [0, -2, 0],
              }}
              transition={{
                duration: 5 + index,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-4xl leading-none text-[#183c32]"
            >
              “
            </motion.div>

            <motion.div
              animate={{
                opacity: [0.75, 1, 0.75],
              }}
              transition={{
                duration: 4 + index * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mt-3 text-sm tracking-widest text-[#183c32]"
            >
              ★★★★★
            </motion.div>

            <p className="mt-5 text-sm leading-7 text-[#626b65] sm:text-base">
              {testimonial.quote}
            </p>
          </div>

          <div className="mt-8 border-t border-[#e4dfd7] pt-5">
            <p className="font-semibold text-[#183c32]">
              {testimonial.author}
            </p>

            <p className="mt-1 text-xs text-[#626b65] sm:text-sm">
              {testimonial.role}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


);
}
