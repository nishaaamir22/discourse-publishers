"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { books, type Book } from "../data/books";

export default function BooksPage() {
const [selectedBook, setSelectedBook] = useState<Book | null>(null);

useEffect(() => {
if (!selectedBook) return;


const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === "Escape") {
    setSelectedBook(null);
  }
};

document.addEventListener("keydown", handleKeyDown);

return () => {
  document.removeEventListener("keydown", handleKeyDown);
};


}, [selectedBook]);

useEffect(() => {
if (selectedBook) {
document.body.style.overflow = "hidden";
} else {
document.body.style.overflow = "";
}


return () => {
  document.body.style.overflow = "";
};


}, [selectedBook]);

return ( <main className="min-h-screen bg-[#f6f4ee] text-[#18211e]"> <Navbar />

```
  {/* Hero */}
  <section className="border-b border-[#d8d1c5] px-6 py-20 sm:px-8 sm:py-24 md:py-28">
    <div className="mx-auto max-w-6xl">
      <p className="text-xs font-medium tracking-[0.22em] text-[#626b65] sm:text-sm sm:tracking-[0.25em]">
        OUR BOOKS
      </p>

      <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-[#183c32] sm:text-5xl md:text-6xl">
        Books we've helped bring to life.
      </h1>

      <p className="mt-6 max-w-2xl text-base leading-7 text-[#626b65] sm:mt-8 sm:text-lg sm:leading-8">
        Explore books and publications shaped through professional
        editing, design, formatting, and publishing.
      </p>
    </div>
  </section>

  {/* Books */}
  <section className="px-6 py-20 sm:px-8 sm:py-24 md:py-28">
    <div className="mx-auto max-w-6xl">
      <div className="grid grid-cols-2 gap-x-5 gap-y-14 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-16 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-20">
        {books.map((book) => (
          <article
            key={book.serial}
            className="group flex h-full min-w-0 flex-col"
          >
            {/* Cover */}
            <button
              type="button"
              onClick={() => setSelectedBook(book)}
              aria-label={`View ${book.title} cover`}
              className="mx-auto flex h-[205px] w-full max-w-[145px] cursor-zoom-in items-center justify-center overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-[#183c32] focus-visible:ring-offset-4 sm:h-[225px] sm:max-w-[155px]"
            >
              <Image
                src={book.cover}
                alt={`${book.title} book cover`}
                width={310}
                height={450}
                className="block max-h-full w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.025]"
              />
            </button>

            {/* Book Information */}
            <div className="mx-auto mt-5 flex min-h-[150px] w-full max-w-[155px] flex-1 flex-col">
              <div className="flex items-center justify-between gap-2 text-[10px] font-medium uppercase tracking-[0.14em] text-[#7b8781]">
                <span>{book.genre}</span>
                <span>{book.serial}</span>
              </div>

              <h2 className="mt-2.5 text-sm font-semibold leading-snug text-[#183c32] sm:text-base">
                {book.title}
              </h2>

              <p className="mt-1.5 text-xs leading-5 text-[#626b65] sm:text-sm">
                {book.author}
              </p>

              <p className="mt-1 text-xs leading-5 text-[#7b8781]">
                {book.country}
              </p>

              {/* Amazon */}
              {book.amazon && (
                <a
                  href={book.amazon}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto pt-4 text-xs font-medium text-[#183c32] underline underline-offset-4 transition-opacity hover:opacity-60 sm:text-sm"
                >
                  View on Amazon →
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>

  {/* Shipping & Delivery */}
  <section className="border-t border-[#d8d1c5] bg-[#fbf9f5] px-6 py-20 sm:px-8 sm:py-24">
    <div className="mx-auto max-w-6xl">
      <div className="max-w-3xl">
        <p className="text-xs font-medium tracking-[0.22em] text-[#626b65] sm:text-sm sm:tracking-[0.25em]">
          SHIPPING &amp; DELIVERY
        </p>

        <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#183c32] sm:text-4xl md:text-5xl">
          Books delivered beyond borders.
        </h2>

        <p className="mt-5 text-base leading-7 text-[#626b65] sm:text-lg sm:leading-8">
          Physical books can be delivered internationally, with delivery
          arrangements depending on the book, destination, and order.
          Digital publications are delivered electronically where
          available.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="border border-[#d8d1c5] bg-[#f6f4ee] p-6">
          <p className="text-xs font-medium tracking-[0.18em] text-[#7b8781]">
            01
          </p>
          <h3 className="mt-4 text-lg font-semibold text-[#183c32]">
            Worldwide Delivery
          </h3>
          <p className="mt-3 text-sm leading-6 text-[#626b65]">
            Physical books may be delivered to destinations around the
            world, subject to available shipping services.
          </p>
        </div>

        <div className="border border-[#d8d1c5] bg-[#f6f4ee] p-6">
          <p className="text-xs font-medium tracking-[0.18em] text-[#7b8781]">
            02
          </p>
          <h3 className="mt-4 text-lg font-semibold text-[#183c32]">
            Processing
          </h3>
          <p className="mt-3 text-sm leading-6 text-[#626b65]">
            Physical orders may require production and handling time before
            they are dispatched.
          </p>
        </div>

        <div className="border border-[#d8d1c5] bg-[#f6f4ee] p-6">
          <p className="text-xs font-medium tracking-[0.18em] text-[#7b8781]">
            03
          </p>
          <h3 className="mt-4 text-lg font-semibold text-[#183c32]">
            Tracking
          </h3>
          <p className="mt-3 text-sm leading-6 text-[#626b65]">
            Where tracking is available, shipment details can be provided
            after dispatch.
          </p>
        </div>

        <div className="border border-[#d8d1c5] bg-[#f6f4ee] p-6">
          <p className="text-xs font-medium tracking-[0.18em] text-[#7b8781]">
            04
          </p>
          <h3 className="mt-4 text-lg font-semibold text-[#183c32]">
            Customs
          </h3>
          <p className="mt-3 text-sm leading-6 text-[#626b65]">
            International orders may be subject to customs duties, taxes,
            or import charges in the destination country.
          </p>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-4 border-t border-[#d8d1c5] pt-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-2xl text-sm leading-6 text-[#626b65]">
          Shipping costs and delivery estimates can vary by destination
          and order. Please contact us if you need information about a
          specific physical book order.
        </p>

        <Link
          href="/shipping"
          className="shrink-0 text-sm font-medium text-[#183c32] underline underline-offset-4 transition-opacity hover:opacity-60"
        >
          Read full Shipping &amp; Delivery policy →
        </Link>
      </div>
    </div>
  </section>

  {/* CTA */}
  <section className="border-t border-[#d8d1c5] bg-[#e4ebe6] px-6 py-20 sm:px-8 sm:py-24">
    <div className="mx-auto max-w-4xl text-center">
      <p className="text-xs font-medium tracking-[0.22em] text-[#626b65] sm:text-sm sm:tracking-[0.25em]">
        YOUR BOOK STARTS HERE
      </p>

      <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-[#183c32] sm:text-4xl md:text-5xl">
        Ready to publish your book?
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#626b65] sm:text-lg sm:leading-8">
        From manuscript preparation to professional design, formatting,
        and worldwide distribution, we're here to help.
      </p>

      <Link
        href="/contact#contact-form"
        className="mt-8 inline-block bg-[#183c32] px-7 py-3.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#102d26]"
      >
        Get Started
      </Link>
    </div>
  </section>

  <Footer />

  {/* Cover Preview Modal */}
  {selectedBook && (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#102d26]/90 p-5 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`${selectedBook.title} cover preview`}
      onClick={() => setSelectedBook(null)}
    >
      <div
        className="relative flex max-h-[92vh] max-w-[92vw] items-center justify-center"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setSelectedBook(null)}
          aria-label="Close cover preview"
          className="absolute -right-2 -top-12 flex h-9 w-9 items-center justify-center text-2xl font-light text-white transition-opacity hover:opacity-60 sm:-right-12 sm:-top-2"
        >
          ×
        </button>

        <Image
          src={selectedBook.cover}
          alt={`${selectedBook.title} book cover`}
          width={800}
          height={1200}
          className="max-h-[88vh] w-auto max-w-[88vw] object-contain shadow-2xl"
        />
      </div>
    </div>
  )}
</main>


);
}
