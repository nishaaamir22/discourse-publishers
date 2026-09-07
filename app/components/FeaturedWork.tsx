"use client";

import Image from "next/image";
import Link from "next/link";
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

return ( <section className="bg-[#f5f0e6] px-6 py-24 md:px-12 lg:px-20"> <div className="mx-auto max-w-7xl">

```
    <div className="mb-12 flex items-end justify-between gap-6">
      <div>
        <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-[#315c4c]">
          OUR BOOKS
        </p>

        <h2 className="text-3xl font-semibold tracking-tight text-[#163b32] md:text-5xl">
          Featured Work
        </h2>
      </div>

      <Link
        href="/books"
        className="hidden text-sm font-medium text-[#315c4c] transition hover:text-[#163b32] md:block"
      >
        View all books →
      </Link>
    </div>

    <div className="grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-8">
      {selectedBooks.map((book) => (
        <Link
          key={book.serial}
          href="/books"
          className="group"
        >
          <div className="relative aspect-[3/4] overflow-hidden bg-[#e8e0d2]">
            <Image
              src={book.cover}
              alt={`${book.title} by ${book.author}`}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 33vw"
            />

            <div className="absolute left-3 top-3 bg-[#315c4c] px-3 py-1.5 text-[10px] font-bold tracking-[0.15em] text-white">
              NEW
            </div>
          </div>

          <div className="pt-4">
            <h3 className="line-clamp-2 text-sm font-semibold uppercase tracking-wide text-[#163b32] md:text-base">
              {book.title}
            </h3>

            <p className="mt-1 text-xs text-[#6f756f] md:text-sm">
              {book.author}
            </p>
          </div>
        </Link>
      ))}
    </div>

    <div className="mt-10 text-center md:hidden">
      <Link
        href="/books"
        className="text-sm font-medium text-[#315c4c]"
      >
        View all books →
      </Link>
    </div>

  </div>
</section>


);
}
