"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { books, featuredBookSerials } from "../data/books";

export default function FeaturedWork() {
const selectedBooks =
featuredBookSerials === null
? [...books]
.sort((a, b) => Number(b.serial) - Number(a.serial))
.slice(0, 3)
: featuredBookSerials
.map((serial) => books.find((book) => book.serial === serial))
.filter((book): book is (typeof books)[number] => Boolean(book));

return ( <section className="relative overflow-hidden bg-[#f5f0e6] px-6 py-24 md:px-12 lg:px-20">
<motion.div
animate={{
x: [0, 35, 0],
y: [0, -18, 0],
scale: [1, 1.05, 1],
}}
transition={{
duration: 15,
repeat: Infinity,
ease: "easeInOut",
}}
className="pointer-events-none absolute -right-40 top-10 h-80 w-80 rounded-full bg-[#e4ebe6]/40 blur-3xl"
/>

  <motion.div
    animate={{
      x: [0, -25, 0],
      y: [0, 20, 0],
      scale: [1, 0.96, 1],
    }}
    transition={{
      duration: 17,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="pointer-events-none absolute -left-40 bottom-0 h-72 w-72 rounded-full bg-[#e8e0d2]/60 blur-3xl"
  />

  <div className="relative mx-auto max-w-7xl">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
      className="mb-12 flex items-end justify-between gap-6"
    >
      <div>
        <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-[#315c4c]">
          OUR BOOKS
        </p>

        <h2 className="text-3xl font-semibold tracking-tight text-[#163b32] md:text-5xl">
          Featured Work
        </h2>
      </div>

      <motion.div
        whileHover={{ x: 4 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="hidden md:block"
      >
        <Link
          href="/books"
          className="text-sm font-medium text-[#315c4c] transition-colors duration-300 hover:text-[#163b32]"
        >
          View all books →
        </Link>
      </motion.div>
    </motion.div>

    <div className="grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-8">
      {selectedBooks.map((book, index) => (
        <motion.div
          key={book.serial}
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: false,
            amount: 0.15,
          }}
          transition={{
            duration: 0.75,
            delay: index * 0.12,
            ease: "easeOut",
          }}
          whileHover={{
            y: -8,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          }}
        >
          <Link href="/books" className="group block">
            <motion.div
              animate={{
                y: [0, -3, 0, 3, 0],
              }}
              transition={{
                duration: 7 + index * 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative aspect-[3/4] overflow-hidden bg-[#e8e0d2]"
            >
              <Image
                src={book.cover}
                alt={`${book.title} by ${book.author}`}
                fill
                className="object-cover transition duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />

              <motion.div
                animate={{
                  y: [0, -2, 0],
                }}
                transition={{
                  duration: 3.5 + index * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-3 top-3 bg-[#315c4c] px-3 py-1.5 text-[10px] font-bold tracking-[0.15em] text-white"
              >
                NEW
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="pointer-events-none absolute inset-0 bg-[#163b32]/10"
              />
            </motion.div>

            <div className="pt-4">
              <h3 className="line-clamp-2 text-sm font-semibold uppercase tracking-wide text-[#163b32] md:text-base">
                {book.title}
              </h3>

              <motion.p
                animate={{
                  x: [0, 1, 0],
                }}
                transition={{
                  duration: 5 + index * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mt-1 text-xs text-[#6f756f] md:text-sm"
              >
                {book.author}
              </motion.p>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{
        duration: 0.7,
        delay: 0.25,
        ease: "easeOut",
      }}
      className="mt-10 text-center md:hidden"
    >
      <Link
        href="/books"
        className="text-sm font-medium text-[#315c4c] transition-colors duration-300 hover:text-[#163b32]"
      >
        View all books →
      </Link>
    </motion.div>
  </div>
</section>
);
}
