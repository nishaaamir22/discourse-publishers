"use client";

import Link from "next/link";
import { motion } from "motion/react";

const exploreLinks = [
{
href: "/services",
label: "Publishing Services",
},
{
href: "/books",
label: "Books",
},
{
href: "/authors",
label: "For Authors",
},
];

const companyLinks = [
{
href: "/about",
label: "About Us",
},
{
href: "/contact",
label: "Contact",
},
{
href: "/terms",
label: "Terms & Conditions",
},
{
href: "/shipping",
label: "Shipping & Delivery",
},
{
href: "/refunds",
label: "Refunds & Cancellations",
},
{
href: "/privacy",
label: "Privacy Policy",
},
];

export default function Footer() {
return ( <footer className="relative overflow-hidden border-t border-[#315247] bg-[#102d26] px-6 py-14 text-white sm:px-8 sm:py-16">
<motion.div
animate={{
x: [0, 35, 0],
y: [0, -15, 0],
scale: [1, 1.04, 1],
}}
transition={{
duration: 18,
repeat: Infinity,
ease: "easeInOut",
}}
className="pointer-events-none absolute -right-40 top-0 h-72 w-72 rounded-full bg-[#315c4c]/10 blur-3xl"
/>

  <div className="relative mx-auto max-w-6xl">
    <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-4 md:gap-10">
      {/* Brand */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{
          once: false,
          amount: 0.2,
        }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className="sm:col-span-2"
      >
        <motion.h3
          animate={{
            y: [0, -2, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-xl font-semibold tracking-wide"
        >
          Discourse Publishers
        </motion.h3>

        <p className="mt-4 max-w-md text-sm leading-7 text-[#b7c3bd] sm:text-base">
          Professional publishing services for authors, books and
          publications — from manuscript to worldwide distribution.
        </p>

        <p className="mt-6 text-xs font-medium tracking-[0.2em] text-[#81948c]">
          PUBLISHING WITH PURPOSE.
        </p>
      </motion.div>

      {/* Explore */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{
          once: false,
          amount: 0.2,
        }}
        transition={{
          duration: 0.7,
          delay: 0.1,
          ease: "easeOut",
        }}
      >
        <h4 className="text-sm font-semibold">Explore</h4>

        <div className="mt-5 space-y-3 text-sm text-[#b7c3bd]">
          {exploreLinks.map((link) => (
            <motion.div
              key={link.href}
              whileHover={{ x: 4 }}
              transition={{
                duration: 0.2,
                ease: "easeOut",
              }}
            >
              <Link
                href={link.href}
                className="block transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Company */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{
          once: false,
          amount: 0.2,
        }}
        transition={{
          duration: 0.7,
          delay: 0.2,
          ease: "easeOut",
        }}
      >
        <h4 className="text-sm font-semibold">Company</h4>

        <div className="mt-5 space-y-3 text-sm text-[#b7c3bd]">
          {companyLinks.map((link) => (
            <motion.div
              key={link.href}
              whileHover={{ x: 4 }}
              transition={{
                duration: 0.2,
                ease: "easeOut",
              }}
            >
              <Link
                href={link.href}
                className="block transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{
        once: false,
        amount: 0.3,
      }}
      transition={{
        duration: 0.9,
        ease: "easeOut",
      }}
      className="mt-12 origin-left border-t border-[#315247] pt-6"
    >
      <p className="text-xs leading-6 text-[#81948c] sm:text-sm">
        © 2026 Discourse Publishers. All rights reserved.
      </p>
    </motion.div>
  </div>
</footer>

);
}
