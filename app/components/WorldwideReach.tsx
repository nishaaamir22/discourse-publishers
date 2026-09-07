import Link from "next/link";

const reachItems = [
  {
    number: "01",
    title: "Amazon KDP Publishing",
  },
  {
    number: "02",
    title: "Digital Distribution",
  },
  {
    number: "03",
    title: "Physical Printing",
  },
  {
    number: "04",
    title: "Worldwide Delivery",
  },
];

export default function WorldwideReach() {
  return (
    <section className="bg-[#102d26] px-6 py-20 text-white sm:px-8 sm:py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">

          <div>
            <p className="text-xs font-medium tracking-[0.22em] text-[#c5d0ca] sm:text-sm sm:tracking-[0.25em]">
              WORLDWIDE REACH
            </p>

            <h2 className="mt-5 max-w-xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              From your desk to readers around the world.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-[#b7c3bd] sm:text-lg sm:leading-8">
              We help authors publish and distribute their work through
              digital platforms and physical publishing channels, making books
              accessible to readers across the world.
            </p>

            <Link
              href="/contact#contact-form"
              className="mt-8 inline-block border border-[#6f8279] px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-white hover:text-[#102d26]"
            >
              Start Your Publishing Journey
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-px overflow-hidden border border-[#315247] bg-[#315247]">

            {reachItems.map((item) => (
              <div
                key={item.number}
                className="group min-h-[150px] bg-[#102d26] p-5 transition-colors duration-300 hover:bg-[#183c32] sm:min-h-[180px] sm:p-7 md:p-8"
              >
                <p className="text-2xl font-semibold text-white sm:text-3xl">
                  {item.number}
                </p>

                <div className="mt-8 h-px w-8 bg-[#6f8279] transition-all duration-300 group-hover:w-14" />

                <p className="mt-4 text-xs leading-5 text-[#b7c3bd] sm:text-sm sm:leading-6">
                  {item.title}
                </p>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}
