const services = [
  {
    number: "01",
    title: "Editing & Proofreading",
    description:
      "Refine your manuscript with professional editing, proofreading, and language polishing before publication.",
  },
  {
    number: "02",
    title: "Book Design & Formatting",
    description:
      "Create a polished reading experience with professional interior formatting, typesetting, and cover design.",
  },
  {
    number: "03",
    title: "Publishing & Distribution",
    description:
      "Take your finished book to readers through Amazon KDP, digital platforms, print, and worldwide distribution.",
  },
  {
    number: "04",
    title: "E-books & Magazines",
    description:
      "Prepare and publish Kindle editions, e-books, magazines, and other digital publications.",
  },
  {
    number: "05",
    title: "Marketing & Promotion",
    description:
      "Build visibility for your work through author branding, promotional graphics, launch support, and marketing.",
  },
  {
    number: "06",
    title: "Web Development",
    description:
      "Build modern, responsive websites and digital platforms for authors, publishers, businesses, and creative projects.",
  },
  {
    number: "07",
    title: "Custom Publishing",
    description:
      "Choose a publishing solution tailored to your manuscript, goals, budget, and publishing requirements.",
  },
];

export default function Services() {
  return (
    <section className="border-t border-[#d8d1c5] bg-[#f6f4ee] px-6 py-24 sm:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">

        <div className="grid gap-8 md:grid-cols-2 md:items-end">
          <div>
            <p className="text-xs font-medium tracking-[0.22em] text-[#626b65] sm:text-sm sm:tracking-[0.25em]">
              WHAT WE DO
            </p>

            <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-[#183c32] sm:text-4xl md:text-5xl">
              Everything your book needs.
            </h2>
          </div>

          <p className="max-w-lg text-base leading-7 text-[#626b65] sm:text-lg sm:leading-8 md:justify-self-end">
            From the first edit to the final published edition, we bring
            together creative, technical, and digital expertise to turn ideas
            into professional publications and online experiences.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.number}
              className="group min-h-[240px] border border-[#d8d1c5] bg-[#fbf9f5] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#183c32] hover:bg-[#e4ebe6] sm:p-8"
            >
              <span className="text-sm font-medium tracking-wider text-[#7b8781]">
                {service.number}
              </span>

              <h3 className="mt-8 max-w-xs text-xl font-semibold leading-snug text-[#183c32]">
                {service.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#626b65] sm:text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}