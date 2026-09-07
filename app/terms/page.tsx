import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#f6f4ee] text-[#18211e]">
      <Navbar />

      {/* Header */}
      <section className="border-b border-[#d8d1c5] px-6 py-20 sm:px-8 sm:py-24 md:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-medium tracking-[0.22em] text-[#626b65] sm:text-sm sm:tracking-[0.25em]">
            TERMS & CONDITIONS
          </p>

          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#183c32] sm:text-5xl md:text-6xl">
            Our terms of working together.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[#626b65] sm:text-lg sm:leading-8">
            These terms explain how our publishing, design, web development,
            and related services work, as well as the responsibilities of both
            Discourse Publishers and our clients.
          </p>

          <p className="mt-6 text-xs text-[#7b8781] sm:text-sm">
            Last updated: September 2026
          </p>
        </div>
      </section>

      {/* Terms */}
      <section className="px-6 py-16 sm:px-8 sm:py-20 md:py-24">
        <div className="mx-auto max-w-4xl space-y-12">

          {/* 01 */}
          <section>
            <p className="text-xs font-medium tracking-[0.2em] text-[#7b8781]">
              01
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-[#183c32] sm:text-3xl">
              About Our Services
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#626b65] sm:text-base">
              Discourse Publishers provides publishing and creative services,
              including editing and proofreading, book formatting, cover
              design, e-book preparation, publishing assistance, magazine
              publishing, marketing support, and related services. We may also
              provide web design and development services through our web
              development division.
            </p>
          </section>

          {/* 02 */}
          <section>
            <p className="text-xs font-medium tracking-[0.2em] text-[#7b8781]">
              02
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-[#183c32] sm:text-3xl">
              Project Agreements
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#626b65] sm:text-base">
              Each project may have different requirements, pricing,
              timelines, deliverables, and revision limits. These details will
              be discussed and agreed upon with the client before work begins.
              Any additional work outside the agreed scope may require a
              separate fee or revised timeline.
            </p>
          </section>

          {/* 03 */}
          <section>
            <p className="text-xs font-medium tracking-[0.2em] text-[#7b8781]">
              03
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-[#183c32] sm:text-3xl">
              Client Responsibilities
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#626b65] sm:text-base">
              Clients are responsible for providing accurate information,
              materials, manuscripts, images, documents, and instructions
              required for their project. Clients must have the necessary
              rights or permissions to use all materials they provide to us.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#626b65] sm:text-base">
              Delays in providing required materials, approvals, or feedback
              may affect the agreed project timeline.
            </p>
          </section>

          {/* 04 */}
          <section>
            <p className="text-xs font-medium tracking-[0.2em] text-[#7b8781]">
              04
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-[#183c32] sm:text-3xl">
              Manuscripts & Intellectual Property
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#626b65] sm:text-base">
              Clients retain ownership of their original manuscripts and
              intellectual property unless a separate written agreement states
              otherwise. By submitting material to us, the client confirms
              that they have the necessary rights to have the material edited,
              designed, formatted, published, or otherwise processed.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#626b65] sm:text-base">
              Discourse Publishers does not claim ownership of a client's
              original creative work merely because it has been submitted for
              services.
            </p>
          </section>

          {/* 05 */}
          <section>
            <p className="text-xs font-medium tracking-[0.2em] text-[#7b8781]">
              05
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-[#183c32] sm:text-3xl">
              Editing & Creative Services
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#626b65] sm:text-base">
              Editing, proofreading, formatting, cover design, and other
              creative services are performed according to the project brief
              and information supplied by the client. Final approval of the
              work remains the client's responsibility before publication or
              printing.
            </p>
          </section>

          {/* 06 */}
          <section>
            <p className="text-xs font-medium tracking-[0.2em] text-[#7b8781]">
              06
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-[#183c32] sm:text-3xl">
              Revisions & Approvals
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#626b65] sm:text-base">
              Revision policies may vary depending on the service or project.
              Clients are expected to review proofs and provide feedback
              within a reasonable period. Once a final version has been
              approved, additional changes may be treated as new work and may
              incur additional charges.
            </p>
          </section>

          {/* 07 */}
          <section>
            <p className="text-xs font-medium tracking-[0.2em] text-[#7b8781]">
              07
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-[#183c32] sm:text-3xl">
              Publishing & Distribution
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#626b65] sm:text-base">
              Publishing and distribution services may involve third-party
              platforms such as Amazon KDP and printing or distribution
              partners. Platform approval, availability, pricing, royalties,
              printing times, delivery times, and other platform-controlled
              matters may be outside our direct control.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#626b65] sm:text-base">
              We will assist with the publishing process according to the
              agreed service, but cannot guarantee acceptance, sales,
              rankings, reviews, or a specific level of commercial success.
            </p>
          </section>

          {/* 08 */}
          <section>
            <p className="text-xs font-medium tracking-[0.2em] text-[#7b8781]">
              08
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-[#183c32] sm:text-3xl">
              Payments
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#626b65] sm:text-base">
              Service fees, deposits, payment schedules, and any applicable
              additional charges will be communicated before or during the
              project. Work may be paused if an agreed payment is not received
              when due.
            </p>
          </section>

          {/* 09 */}
          <section>
            <p className="text-xs font-medium tracking-[0.2em] text-[#7b8781]">
              09
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-[#183c32] sm:text-3xl">
              Digital Products
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#626b65] sm:text-base">
              Digital books, e-books, magazines, files, designs, and other
              digital deliverables may be subject to separate purchasing and
              usage conditions. Digital files should not be redistributed,
              resold, or reproduced without the necessary rights or permission.
            </p>
          </section>

          {/* 10 */}
          <section>
            <p className="text-xs font-medium tracking-[0.2em] text-[#7b8781]">
              10
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-[#183c32] sm:text-3xl">
              Physical Books & Delivery
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#626b65] sm:text-base">
              Physical book orders may be produced and delivered through
              printing or distribution partners. Delivery times and shipping
              costs may vary depending on destination, production method,
              availability, customs, and the carrier.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#626b65] sm:text-base">
              Specific shipping, delivery, refund, and cancellation conditions
              will be covered in our separate policies where applicable.
            </p>
          </section>

          {/* 11 */}
          <section>
            <p className="text-xs font-medium tracking-[0.2em] text-[#7b8781]">
              11
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-[#183c32] sm:text-3xl">
              Web Development Services
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#626b65] sm:text-base">
              For web development projects, ownership, source-code access,
              hosting, domain registration, maintenance, third-party services,
              and other deliverables will depend on the individual project
              agreement.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#626b65] sm:text-base">
              Unless otherwise agreed, third-party services, hosting providers,
              domain registrars, plugins, APIs, and other external platforms
              remain subject to their own terms and policies.
            </p>
          </section>

          {/* 12 */}
          <section>
            <p className="text-xs font-medium tracking-[0.2em] text-[#7b8781]">
              12
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-[#183c32] sm:text-3xl">
              Website Use
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#626b65] sm:text-base">
              You agree not to misuse this website, attempt to gain
              unauthorized access, interfere with its operation, submit
              malicious content, or use the website for unlawful purposes.
            </p>
          </section>

          {/* 13 */}
          <section>
            <p className="text-xs font-medium tracking-[0.2em] text-[#7b8781]">
              13
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-[#183c32] sm:text-3xl">
              Limitation of Responsibility
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#626b65] sm:text-base">
              We make reasonable efforts to provide professional services and
              accurate information. However, we are not responsible for delays,
              interruptions, decisions, policies, or failures caused by
              third-party platforms, payment providers, printing partners,
              shipping carriers, hosting providers, or other external
              services.
            </p>
          </section>

          {/* 14 */}
          <section>
            <p className="text-xs font-medium tracking-[0.2em] text-[#7b8781]">
              14
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-[#183c32] sm:text-3xl">
              Changes to These Terms
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#626b65] sm:text-base">
              We may update these Terms & Conditions when our services,
              business practices, or legal requirements change. The latest
              version published on this website will apply to future use of the
              website and services.
            </p>
          </section>

          {/* Contact */}
          <section className="border-t border-[#d8d1c5] pt-12">
            <p className="text-xs font-medium tracking-[0.22em] text-[#626b65]">
              QUESTIONS
            </p>

            <h2 className="mt-4 text-2xl font-semibold text-[#183c32] sm:text-3xl">
              Need clarification?
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#626b65] sm:text-base">
              If you have questions about these terms or a specific project,
              please contact us before placing an order or starting a service.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-block bg-[#183c32] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#102d26]"
            >
              Contact Us
            </Link>
          </section>

        </div>
      </section>

      <Footer />
    </main>
  );
}