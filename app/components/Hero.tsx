import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8 sm:py-24 md:py-28">
      <p className="text-xs font-medium tracking-[0.2em] text-[#626b65] sm:text-sm sm:tracking-[0.25em]">
        YOUR STORY. OUR EXPERTISE.
      </p>

      <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-[#183c32] sm:mt-6 sm:text-5xl md:text-6xl md:leading-[1.05]">
        From Manuscript
        <br />
        to Published Book.
      </h1>

      <p className="mt-6 max-w-2xl text-base leading-7 text-[#626b65] sm:mt-8 sm:text-lg sm:leading-8">
        Professional publishing, editing, design, formatting and worldwide
        distribution — all in one place.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
        <Link
          href="/contact#contact-form"
          className="w-full bg-[#183c32] px-6 py-3 text-center text-sm font-medium text-white hover:bg-[#102d26] sm:w-auto"
        >
          Publish With Us
        </Link>

        <Link
          href="/books"
          className="w-full border border-[#d8d1c5] px-6 py-3 text-center text-sm font-medium text-[#183c32] hover:bg-[#e4ebe6] sm:w-auto"
        >
          Explore Our Books
        </Link>
      </div>
    </section>
  );
}
