"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type Book = {
serial: string;
title: string;
author: string;
genre: string;
country: string;
cover: string;
amazon: string;
};

const books: Book[] = [
{
serial: "01",
title: "COTTON DREAMS",
author: "Gordana Andonovska",
genre: "Poetry",
country: "Macedonia",
cover: "/books/book-1.jpeg",
amazon: "https://www.amazon.com/dp/XXXXXXXXXX",
},
{
serial: "02",
title: "LAFZ-ZAAD",
author: "Khair Zaman Rashid",
genre: "Poetry",
country: "Pakistan",
cover: "/books/book-2.jpeg",
amazon: "",
},
{
serial: "03",
title: "THE GAZELLE OF THE NEIGHBOURHOOD",
author: "Mahmood Said Kawash",
genre: "Poetry",
country: "Denmark",
cover: "/books/book-3.jpeg",
amazon: "https://a.co/d/0ecUmTAz",
},
{
serial: "04",
title: "Canti Silenti dell’Anima (Italian Edition)",
author: "Francesco Favetta",
genre: "Poetry",
country: "Italy",
cover: "/books/book-4.jpeg",
amazon: "https://a.co/d/04JiwHez",
},
{
serial: "05",
title: "Letters Never Sent",
author: "Oliver James",
genre: "Literary Fiction",
country: "Australia",
cover: "/books/book-5.jpeg",
amazon: "",
},
{
serial: "06",
title: "A Quiet Morning",
author: "Emma Wilson",
genre: "Poetry",
country: "United States",
cover: "/books/book-6.jpeg",
amazon: "",
},
{
serial: "07",
title: "Fragments of Memory",
author: "Noah Anderson",
genre: "Memoir",
country: "United Kingdom",
cover: "/books/book-7.jpeg",
amazon: "",
},
{
serial: "08",
title: "OUTSHINE THE DARKNESS",
author: "Melony Axe",
genre: "Memoir",
country: "The UK",
cover: "/books/book-8.jpeg",
amazon: "https://a.co/d/0bZxfqSX",
},
{
serial: "09",
title: "TELL SOMEBODY",
author: "Melony Axe",
genre: "Children book",
country: "The UK",
cover: "/books/book-9.jpeg",
amazon: "https://a.co/d/05X8BxCb",
},
{
serial: "10",
title: "A HUMAN BUT NOT HUMAN: BOOK 1",
author: "MUKHTAR SHERIM",
genre: "Satirical novel",
country: "Kazakhstan",
cover: "/books/temp-10.jpeg",
amazon: "https://a.co/d/0dBAeNbQ",
},
{
serial: "11",
title: "A HUMAN BUT NOT HUMAN: BOOK 2",
author: "MUKHTAR SHERIM",
genre: "Satirical novel",
country: "Kazakhstan",
cover: "/books/temp-11.jpeg",
amazon: "https://a.co/d/0dqdcSSB",
},
{
serial: "12",
title: "A SITAR: A Collection of Plays",
author: "Imtiaz Sarwar (Author), Kashaf Riaz (Translator)",
genre: "Plays",
country: "Pakistan",
cover: "/books/book-12.jpeg",
amazon: "https://a.co/d/0g369ATj",
},
{
serial: "13",
title: "Between Two Worlds",
author: "Ethan Walker",
genre: "Fiction",
country: "United States",
cover: "/books/temp-13.jpeg",
amazon: "",
},
{
serial: "14",
title: "Stories from Home",
author: "Charlotte Hall",
genre: "Short Stories",
country: "Australia",
cover: "/books/book-14.jpeg",
amazon: "",
},
{
serial: "15",
title: "The Art of Beginning",
author: "Benjamin Young",
genre: "Self-Help",
country: "Canada",
cover: "/books/book-15.jpeg",
amazon: "",
},
{
serial: "16",
title: "Moonlight Pages",
author: "Lily Allen",
genre: "Poetry",
country: "United Kingdom",
cover: "/books/book-16.jpeg",
amazon: "",
},
{
serial: "17",
title: "A Thousand Roads",
author: "James Scott",
genre: "Travel",
country: "United States",
cover: "/books/book-17.jpeg",
amazon: "",
},
{
serial: "18",
title: "The Silent Room",
author: "Olivia Green",
genre: "Mystery",
country: "Ireland",
cover: "/books/book-18.jpeg",
amazon: "",
},
{
serial: "19",
title: "Notes to Myself",
author: "William Adams",
genre: "Memoir",
country: "United States",
cover: "/books/book-19.jpeg",
amazon: "",
},
{
serial: "20",
title: "Garden of Words",
author: "Ella Baker",
genre: "Poetry",
country: "United Kingdom",
cover: "/books/book-20.jpeg",
amazon: "",
},
{
serial: "21",
title: "The Long Way Home",
author: "Michael Nelson",
genre: "Fiction",
country: "Canada",
cover: "/books/book-21.jpeg",
amazon: "",
},
{
serial: "22",
title: "When Stars Fall",
author: "Sophia Carter",
genre: "Romance",
country: "United States",
cover: "/books/book-22.jpeg",
amazon: "",
},
{
serial: "23",
title: "The Paper Boat",
author: "Alexander King",
genre: "Children's",
country: "Australia",
cover: "/books/book-23.jpeg",
amazon: "",
},
{
serial: "24",
title: "Walking Through Silence",
author: "Emily Wright",
genre: "Poetry",
country: "Canada",
cover: "/books/book-24.jpeg",
amazon: "",
},
{
serial: "25",
title: "The Other Side",
author: "Samuel Turner",
genre: "Fiction",
country: "United States",
cover: "/books/book-25.jpeg",
amazon: "",
},
{
serial: "26",
title: "Fragments of Light",
author: "Ava Collins",
genre: "Poetry",
country: "United Kingdom",
cover: "/books/book-26.jpeg",
amazon: "",
},
{
serial: "27",
title: "The Open Window",
author: "Jack Morgan",
genre: "Literary Fiction",
country: "Ireland",
cover: "/books/book-27.jpeg",
amazon: "",
},
{
serial: "28",
title: "Conversations with Time",
author: "Chloe Harris",
genre: "Essays",
country: "United States",
cover: "/books/book-28.jpeg",
amazon: "",
},
{
serial: "29",
title: "A Place to Remember",
author: "Thomas Cooper",
genre: "Memoir",
country: "Canada",
cover: "/books/book-29.jpeg",
amazon: "",
},
{
serial: "30",
title: "Rain on the Window",
author: "Harper Mitchell",
genre: "Poetry",
country: "Australia",
cover: "/books/book-30.jpeg",
amazon: "",
},
{
serial: "31",
title: "The Unknown Road",
author: "George Parker",
genre: "Adventure",
country: "United States",
cover: "/books/book-31.jpeg",
amazon: "",
},
{
serial: "32",
title: "Before the Dawn",
author: "Lucy Evans",
genre: "Fiction",
country: "United Kingdom",
cover: "/books/book-32.jpeg",
amazon: "",
},
{
serial: "33",
title: "A Collection of Dreams",
author: "David Edwards",
genre: "Poetry",
country: "Canada",
cover: "/books/book-33.jpeg",
amazon: "",
},
{
serial: "34",
title: "The Blue Door",
author: "Hannah Roberts",
genre: "Mystery",
country: "United States",
cover: "/books/book-34.jpeg",
amazon: "",
},
{
serial: "35",
title: "Small Things",
author: "Joseph Phillips",
genre: "Essays",
country: "Australia",
cover: "/books/book-35.jpeg",
amazon: "",
},
{
serial: "36",
title: "Where Rivers Meet",
author: "Amelia Foster",
genre: "Fiction",
country: "United Kingdom",
cover: "/books/book-36.jpeg",
amazon: "",
},
{
serial: "37",
title: "The Sound of Rain",
author: "Robert Bennett",
genre: "Poetry",
country: "United States",
cover: "/books/book-37.jpeg",
amazon: "",
},
{
serial: "38",
title: "Across the Sea",
author: "Evelyn Wood",
genre: "Travel",
country: "Canada",
cover: "/books/book-38.jpeg",
amazon: "",
},
{
serial: "39",
title: "The Empty Chair",
author: "Christopher Ross",
genre: "Literary Fiction",
country: "Ireland",
cover: "/books/book-39.jpeg",
amazon: "",
},
{
serial: "40",
title: "Pages of Yesterday",
author: "Sophie Murphy",
genre: "Memoir",
country: "United Kingdom",
cover: "/books/book-40.jpeg",
amazon: "",
},
{
serial: "41",
title: "A Different Season",
author: "Matthew Bailey",
genre: "Fiction",
country: "United States",
cover: "/books/book-41.jpeg",
amazon: "",
},
{
serial: "42",
title: "The Poetry Room",
author: "Alice Richardson",
genre: "Poetry",
country: "Australia",
cover: "/books/book-42.jpeg",
amazon: "",
},
{
serial: "43",
title: "Through the Looking Glass",
author: "Daniel Howard",
genre: "Fiction",
country: "Canada",
cover: "/books/book-43.jpeg",
amazon: "",
},
{
serial: "44",
title: "A Life in Letters",
author: "Victoria Ward",
genre: "Memoir",
country: "United Kingdom",
cover: "/books/book-44.jpeg",
amazon: "",
},
{
serial: "45",
title: "The First Chapter",
author: "Andrew Cox",
genre: "Self-Help",
country: "United States",
cover: "/books/book-45.jpeg",
amazon: "",
},
{
serial: "46",
title: "Beyond the Pages",
author: "Sarah Gray",
genre: "Essays",
country: "Australia",
cover: "/books/book-46.jpeg",
amazon: "",
},
{
serial: "47",
title: "The Hidden Garden",
author: "Edward James",
genre: "Fiction",
country: "Canada",
cover: "/books/book-47.jpeg",
amazon: "",
},
{
serial: "48",
title: "Words Between Lines",
author: "Megan Watson",
genre: "Poetry",
country: "United Kingdom",
cover: "/books/book-48.jpeg",
amazon: "",
},
{
serial: "49",
title: "The Journey Within",
author: "Ryan Brooks",
genre: "Self-Help",
country: "United States",
cover: "/books/book-49.jpeg",
amazon: "",
},
{
serial: "50",
title: "After the Rain",
author: "Natalie Wilson",
genre: "Poetry",
country: "Canada",
cover: "/books/book-50.jpeg",
amazon: "",
},
];

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
