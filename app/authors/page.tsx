import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const authorBenefits = [
  {
    number: "01",
    title: "Keep Your Voice",
    description:
      "Your story remains yours. We work with your manuscript while preserving your voice, ideas, and creative direction.",
  },
  {
    number: "02",
    title: "Professional Expertise",
    description:
      "Our team handles the technical and creative stages of publishing, from editing and formatting to cover design.",
  },
  {
    number: "03",
    title: "Print & Digital",
    description:
      "Prepare your work for both digital readers and physical books, with publishing options suited to your project.",
  },
];

export default function AuthorsPage() {
  return (
    <main className="min-h-screen bg-[#f6f4ee] text-[#18211e]">
      <Navbar />

      {/* Hero */}
      <section className="border-b border-[#d8d1c5] px-6 py-20 sm:px-8 sm:py-24 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-medium tracking-[0.22em] text-[#626b65] sm:text-sm sm:tracking-[0.25em]">
            FOR AUTHORS
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-[#183c32] sm:text-5xl md:text-6xl">
            Your manuscript deserves to become a book.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[#626b65] sm:text-lg sm:leading-8">
            Whether you are publishing for the first time or bringing your
            next book to life, we provide the creative, editorial, and
            publishing support you need from manuscript to finished book.
          </p>
        </div>
      </section>

      {/* Author Benefits */}
      <section className="px-6 py-20 sm:px-8 sm:py-24 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.22em] text-[#626b65] sm:text-sm sm:tracking-[0.25em]">
              WHY PUBLISH WITH US
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#183c32] sm:text-4xl md:text-5xl">
              Publishing support built around authors.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {authorBenefits.map((benefit) => (
              <div
                key={benefit.number}
                className="min-h-[250px] border border-[#d8d1c5] bg-[#fbf9f5] p-7 sm:p-8"
              >
                <span className="text-sm font-medium tracking-wider text-[#7b8781]">
                  {benefit.number}
                </span>

                <h3 className="mt-10 text-xl font-semibold text-[#183c32]">
                  {benefit.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#626b65] sm:text-base">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Authors Can Expect */}
      <section className="bg-[#183c32] px-6 py-20 text-white sm:px-8 sm:py-24 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
            <div>
              <p className="text-xs font-medium tracking-[0.22em] text-[#c5d0ca] sm:text-sm sm:tracking-[0.25em]">
                YOUR PUBLISHING JOURNEY
              </p>

              <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                From your manuscript to your readers.
              </h2>
            </div>

            <div>
              <p className="text-base leading-7 text-[#b7c3bd] sm:text-lg sm:leading-8">
                Start with your manuscript and publishing goals. We help guide
                your project through editing, design, formatting, publishing,
                and distribution while keeping you involved throughout the
                process.
              </p>

              <Link
                href="/contact#contact-form"
                className="mt-8 inline-block border border-[#6f8279] px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-white hover:text-[#183c32]"
              >
                Start Your Publishing Journey
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}