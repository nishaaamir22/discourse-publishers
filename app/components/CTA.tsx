import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-[#e4ebe6] px-6 py-20 sm:px-8 sm:py-24 md:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs font-medium tracking-[0.22em] text-[#626b65] sm:text-sm sm:tracking-[0.25em]">
          YOUR BOOK STARTS HERE
        </p>

        <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-[#183c32] sm:text-4xl md:text-6xl">
          Ready to bring your story to life?
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#626b65] sm:mt-6 sm:text-lg sm:leading-8">
          Whether you have a finished manuscript or are just beginning your
          publishing journey, we're here to help you take the next step.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
         <Link
  href="/contact#contact-form"
className="bg-[#183c32] px-7 py-3.5 text-center text-sm font-medium text-white transition-colors duration-300 hover:bg-[#102d26]"
  >
Get Started
  
</Link>

          <Link
            href="/contact"
            className="border border-[#aebdb5] px-7 py-3.5 text-center text-sm font-medium text-[#183c32] transition-colors duration-300 hover:bg-[#f6f4ee]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

