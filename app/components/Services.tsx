"use client";

import { motion, type Variants } from "motion/react";

const services = [
{
number: "01",
title: "Editing & Proofreading",
description:
"Professional editing and proofreading to refine your manuscript, improve clarity, and prepare your work for publication.",
},
{
number: "02",
title: "Book Design & Formatting",
description:
"Carefully designed interiors, typesetting, and formatting for professional print and digital reading experiences.",
},
{
number: "03",
title: "Publishing & Distribution",
description:
"Complete publishing support through Amazon KDP and other distribution channels, with options for physical and digital books.",
},
{
number: "04",
title: "E-books & Magazines",
description:
"Professional preparation and publishing of e-books, Kindle editions, magazines, and other digital publications.",
},
{
number: "05",
title: "Marketing & Promotion",
description:
"Support with book promotion, author branding, online presence, and launch-focused publishing activities.",
},
{
number: "06",
title: "Web Development",
description:
"Professional websites and custom web solutions for authors, publishers, businesses, and personal brands.",
},
{
number: "07",
title: "Custom Publishing",
description:
"Flexible publishing solutions tailored to your project, from manuscript preparation to final publication.",
},
];

const cardVariants: Variants = {
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

export default function Services() {
return ( <section className="relative overflow-hidden bg-[#102d26] px-6 py-24 sm:px-8 md:px-12 lg:px-20">
{/* Existing background + subtle continuous motion */}
<motion.div
animate={{
x: [0, 35, 0],
y: [0, -20, 0],
scale: [1, 1.04, 1],
}}
transition={{
duration: 12,
repeat: Infinity,
ease: "easeInOut",
}}
className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full bg-[#315c4c]/20 blur-3xl"
/>

  <motion.div
    animate={{
      x: [0, -25, 0],
      y: [0, 15, 0],
      scale: [1, 0.96, 1],
    }}
    transition={{
      duration: 15,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-[#e4ebe6]/5 blur-3xl"
  />

  <div className="relative mx-auto max-w-7xl">
    {/* Section heading */}
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="mb-12 max-w-2xl"
    >
      <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-[#315c4c]">
        WHAT WE DO
      </p>

      <h2 className="text-3xl font-semibold tracking-tight text-[#f7f4ef] md:text-5xl">
        Everything your book needs.
      </h2>

      <p className="mt-5 max-w-xl text-sm leading-7 text-[#c5d0ca] sm:text-base">
        From the first edit to the final published book, we provide the
        professional services needed to bring your work to life.
      </p>
    </motion.div>

    {/* Service cards */}
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <motion.article
          key={service.number}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.15,
          }}
          transition={{
            delay: index * 0.08,
          }}
          whileHover={{
            y: -7,
            transition: {
              duration: 0.25,
              ease: "easeOut",
            },
          }}
          className="group relative border border-[#315247] bg-[#102d26] p-7 sm:p-8"
        >
          {/* Existing accent, animated on hover */}
          <motion.div
            initial={{ width: "0%" }}
            whileHover={{ width: "100%" }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
            }}
            className="absolute left-0 top-0 h-px bg-[#7f9d91]"
          />

          <div className="flex items-start justify-between gap-6">
            <motion.span
              animate={{
                y: [0, -2, 0],
              }}
              transition={{
                duration: 4 + index * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-xs font-medium tracking-[0.2em] text-[#7f9d91]"
            >
              {service.number}
            </motion.span>

            <motion.span
              animate={{
                x: [0, 2, 0],
              }}
              transition={{
                duration: 3 + index * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ x: 6 }}
              className="text-[#7f9d91] transition-colors duration-300 group-hover:text-[#c5d0ca]"
            >
              →
            </motion.span>
          </div>

          <h3 className="mt-10 text-xl font-medium text-[#f7f4ef]">
            {service.title}
          </h3>

          <p className="mt-4 text-sm leading-7 text-[#aebdb6]">
            {service.description}
          </p>

          <motion.div
            animate={{
              width: ["15%", "28%", "15%"],
            }}
            transition={{
              duration: 4 + index * 0.35,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mt-8 h-px bg-[#7f9d91]"
          />
        </motion.article>
      ))}
    </div>
  </div>
</section>


);
}
