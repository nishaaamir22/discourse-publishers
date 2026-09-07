import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const process = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We learn about your manuscript, goals and publishing requirements, then help determine the right services for your project.",
  },
  {
    number: "02",
    title: "Editorial Preparation",
    description:
      "Your manuscript goes through the required editing and proofreading process to prepare the content for publication.",
  },
  {
    number: "03",
    title: "Design & Production",
    description:
      "We prepare the interior layout, typesetting, cover and digital editions according to the selected publishing requirements.",
  },
  {
    number: "04",
    title: "Author Approval",
    description:
      "Before publication, authors have the opportunity to review the prepared work and request any necessary revisions.",
  },
  {
    number: "05",
    title: "Publishing & Distribution",
    description:
      "Once approved, the finished publication moves into its selected publishing and distribution channels, including digital and physical options.",
  },
];

const digitalServices = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Modern, responsive websites and digital platforms designed for authors, publishers, businesses and creative projects.",
  },
  {
    number: "02",
    title: "Digital Publishing",
    description:
      "Professional preparation and publishing of e-books, Kindle editions, magazines and other digital publications.",
  },
  {
    number: "03",
    title: "Author & Brand Websites",
    description:
      "Professional online spaces that showcase authors, books, services, portfolios and publishing work.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#f6f4ee] text-[#18211e]">
      <Navbar />

      {/* Header */}
      <section className="border-b border-[#d8d1c5] px-6 py-20 sm:px-8 sm:py-24 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-[1.5fr_0.7fr] md:items-end md:gap-16">
            <div>
              <p className="text-xs font-medium tracking-[0.22em] text-[#626b65] sm:text-sm sm:tracking-[0.25em]">
                SERVICES
              </p>

              <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-[#183c32] sm:text-5xl md:text-6xl">
                Publishing support,
                <br />
                from start to finish.
              </h1>
            </div>

            <div className="border-l border-[#b8c4be] pl-5 sm:pl-6">
              <p className="text-xs font-medium leading-6 tracking-wide text-[#626b65] sm:text-sm">
                EDITORIAL · DESIGN · PRODUCTION · WEB · PUBLISHING ·
                DISTRIBUTION
              </p>

              <p className="mt-4 text-sm leading-7 text-[#626b65] sm:text-base">
                A complete range of professional services for authors, books,
                publications and digital projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Publishing Process */}
      <section className="bg-[#183c32] px-6 py-20 text-white sm:px-8 sm:py-24 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.22em] text-[#c5d0ca] sm:text-sm sm:tracking-[0.25em]">
              PUBLISHING PROCESS
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              A clear path from manuscript to publication.
            </h2>

            <p className="mt-6 text-base leading-7 text-[#b7c3bd] sm:text-lg sm:leading-8">
              We guide each project through a structured publishing process,
              keeping authors involved at every important stage.
            </p>
          </div>

          <div className="mt-12 border-t border-[#315247] sm:mt-16">
            {process.map((step, index) => (
              <div
                key={step.number}
                className={`grid gap-5 py-7 sm:gap-6 sm:py-8 md:grid-cols-[70px_1fr_1.4fr] md:items-start ${
                  index !== process.length - 1
                    ? "border-b border-[#315247]"
                    : ""
                }`}
              >
                <span className="text-sm font-medium text-[#c5d0ca]">
                  {step.number}
                </span>

                <h3 className="text-xl font-semibold sm:text-2xl">
                  {step.title}
                </h3>

                <p className="max-w-xl text-sm leading-7 text-[#b7c3bd] sm:text-base">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Services */}
      <section className="border-t border-[#d8d1c5] px-6 py-20 sm:px-8 sm:py-24 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.22em] text-[#626b65] sm:text-sm sm:tracking-[0.25em]">
              DIGITAL SERVICES
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-[#183c32] sm:text-4xl md:text-5xl">
              Beyond the printed page.
            </h2>

            <p className="mt-6 text-base leading-7 text-[#626b65] sm:text-lg sm:leading-8">
              We also provide digital solutions that help authors, publishers
              and businesses build a strong professional presence online.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
            {digitalServices.map((service) => (
              <div
                key={service.number}
                className="border border-[#d8d1c5] bg-[#fbf9f5] p-7 sm:p-8"
              >
                <span className="text-sm font-medium tracking-wider text-[#7b8781]">
                  {service.number}
                </span>

                <h3 className="mt-7 text-xl font-semibold text-[#183c32]">
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

      {/* CTA */}
      <section className="border-t border-[#d8d1c5] bg-[#e4ebe6] px-6 py-20 sm:px-8 sm:py-24 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-medium tracking-[0.22em] text-[#626b65] sm:text-sm sm:tracking-[0.25em]">
            START YOUR PROJECT
          </p>

          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-[#183c32] sm:text-4xl md:text-6xl">
            Have a book or digital project in mind?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#626b65] sm:mt-6 sm:text-lg sm:leading-8">
            Tell us about your project and the support you need. We'll help
            you understand the next steps.
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

      <Footer />
    </main>
  );
}