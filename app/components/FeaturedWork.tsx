import Link from "next/link";

const books = [
  {
    title: "Featured Book One",
    author: "Author Name",
    category: "Fiction",
  },
  {
    title: "Featured Book Two",
    author: "Author Name",
    category: "Non-fiction",
  },
  {
    title: "Featured Book Three",
    author: "Author Name",
    category: "Poetry",
  },
];

export default function FeaturedWork() {
  return (
    <section className="border-t border-[#d8d1c5] bg-[#fbf9f5] px-6 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">

        <div className="flex items-end justify-between gap-6">
          <div className="max-w-3xl">
            <p className="text-xs font-medium tracking-[0.22em] text-[#626b65] sm:text-sm sm:tracking-[0.25em]">
              OUR WORK
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#183c32] sm:text-4xl md:text-5xl">
              Books we've helped bring to life.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#626b65] sm:text-lg sm:leading-8">
              A selection of books and publications we have helped shape through
              editing, design, formatting, and publishing.
            </p>
          </div>

          <Link
            href="/books"
            className="hidden shrink-0 text-sm font-medium text-[#183c32] underline underline-offset-4 hover:opacity-60 sm:block"
          >
            View all books →
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:mt-16 sm:gap-x-6 sm:gap-y-12 md:grid-cols-3 md:gap-8">
          {books.map((book) => (
            <div key={book.title} className="group">

              <div className="aspect-[3/4] overflow-hidden border border-[#d8d1c5] bg-[#e4ebe6]">
                <div className="flex h-full flex-col items-center justify-center p-6 text-center transition-transform duration-300 group-hover:scale-[1.02]">
                  <span className="text-[10px] font-medium tracking-[0.2em] text-[#7b8781] sm:text-xs">
                    DISCOURSE PUBLISHERS
                  </span>

                  <span className="mt-4 text-sm font-medium text-[#183c32] sm:text-base">
                    BOOK COVER
                  </span>

                  <span className="mt-2 text-xs text-[#626b65]">
                    Cover Preview
                  </span>
                </div>
              </div>

              <h3 className="mt-4 text-base font-semibold leading-snug text-[#183c32] sm:mt-5 sm:text-xl">
                {book.title}
              </h3>

              <p className="mt-1.5 text-xs text-[#626b65] sm:mt-2 sm:text-sm">
                {book.author} · {book.category}
              </p>

            </div>
          ))}
        </div>

        {/* Mobile link */}
        <div className="mt-10 sm:hidden">
          <Link
            href="/books"
            className="text-sm font-medium text-[#183c32] underline underline-offset-4"
          >
            View all books →
          </Link>
        </div>

      </div>
    </section>
  );
}
