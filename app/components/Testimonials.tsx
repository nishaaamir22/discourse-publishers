const testimonials = [
  {
    quote:
      "A wonderful experience from manuscript submission to the final publication. The team was professional and supportive throughout.",
    author: "Author Name",
    role: "Published Author",
  },
  {
    quote:
      "From editing to cover design, everything was handled with great attention to detail. My book turned out exactly the way I imagined.",
    author: "Author Name",
    role: "Published Author",
  },
  {
    quote:
      "The team made the publishing process simple and clear. I am very happy with the quality of the finished book.",
    author: "Author Name",
    role: "Published Author",
  },
];

export default function Testimonials() {
  return (
    <section className="border-t border-[#d8d1c5] bg-[#f6f4ee] px-6 py-20 sm:px-8 sm:py-24 md:py-28">
      <div className="mx-auto max-w-6xl">

        <div className="grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <p className="text-xs font-medium tracking-[0.22em] text-[#626b65] sm:text-sm sm:tracking-[0.25em]">
              CLIENT FEEDBACK
            </p>

            <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-[#183c32] sm:text-4xl md:text-5xl">
              Trusted by authors who care about their work.
            </h2>
          </div>

          <p className="max-w-lg text-base leading-7 text-[#626b65] sm:text-lg sm:leading-8 md:justify-self-end">
            Every book is personal. We work closely with authors to turn their
            ideas and manuscripts into professionally published work.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group flex min-h-[300px] flex-col justify-between rounded-sm border border-[#d8d1c5] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#183c32] sm:p-8"
            >
              <div>
                <div className="text-4xl leading-none text-[#183c32]">
                  “
                </div>

                <div className="mt-3 text-sm tracking-widest text-[#183c32]">
                  ★★★★★
                </div>

                <p className="mt-5 text-sm leading-7 text-[#626b65] sm:text-base">
                  {testimonial.quote}
                </p>
              </div>

              <div className="mt-8 border-t border-[#e4dfd7] pt-5">
                <p className="font-semibold text-[#183c32]">
                  {testimonial.author}
                </p>

                <p className="mt-1 text-xs text-[#626b65] sm:text-sm">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}