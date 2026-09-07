import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function RefundsPage() {
  return (
    <main className="min-h-screen bg-[#f6f4ee] text-[#18211e]">
      <Navbar />

      <section className="border-b border-[#d8d1c5] px-6 py-20 sm:px-8 sm:py-24 md:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-medium tracking-[0.22em] text-[#626b65] sm:text-sm sm:tracking-[0.25em]">
            REFUNDS & CANCELLATIONS
          </p>

          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#183c32] sm:text-5xl md:text-6xl">
            Clear terms for changes and cancellations.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[#626b65] sm:text-lg sm:leading-8">
            This policy explains how cancellations, refunds, revisions, and
            issues with publishing and creative services are handled.
          </p>

          <p className="mt-6 text-xs text-[#7b8781] sm:text-sm">
            Last updated: September 2026
          </p>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-8 sm:py-20 md:py-24">
        <div className="mx-auto max-w-4xl space-y-12">

          <section>
            <p className="text-xs font-medium tracking-[0.2em] text-[#7b8781]">
              01
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-[#183c32] sm:text-3xl">
              Service Cancellations
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#626b65] sm:text-base">
              Cancellation requests should be submitted as soon as possible.
              Whether a refund is available depends on the stage of the
              project and the amount of work already completed.
            </p>
          </section>

          <section>
            <p className="text-xs font-medium tracking-[0.2em] text-[#7b8781]">
              02
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-[#183c32] sm:text-3xl">
              Work Already Completed
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#626b65] sm:text-base">
              If work has already been started or completed, the amount of any
              applicable refund may be reduced to account for services already
              provided, work completed, third-party costs, or other
              non-recoverable expenses.
            </p>
          </section>

          <section>
            <p className="text-xs font-medium tracking-[0.2em] text-[#7b8781]">
              03
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-[#183c32] sm:text-3xl">
              Editing, Formatting & Design
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#626b65] sm:text-base">
              Editing, proofreading, formatting, typesetting, cover design,
              and similar services involve time and creative work. Once work
              has begun, cancellation or refund eligibility will be considered
              based on the work completed and the specific project agreement.
            </p>
          </section>

          <section>
            <p className="text-xs font-medium tracking-[0.2em] text-[#7b8781]">
              04
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-[#183c32] sm:text-3xl">
              Revisions & Corrections
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#626b65] sm:text-base">
              If a delivered service does not meet the agreed project
              requirements, please contact us and explain the issue. Where
              appropriate, we may provide corrections or revisions according
              to the original project scope.
            </p>
          </section>

          <section>
            <p className="text-xs font-medium tracking-[0.2em] text-[#7b8781]">
              05
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-[#183c32] sm:text-3xl">
              Physical Book Orders
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#626b65] sm:text-base">
              Physical book orders may enter production shortly after an order
              is confirmed. Cancellation requests made after production or
              dispatch may not be eligible for a full refund.
            </p>
          </section>

          <section>
            <p className="text-xs font-medium tracking-[0.2em] text-[#7b8781]">
              06
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-[#183c32] sm:text-3xl">
              Damaged or Incorrect Physical Orders
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#626b65] sm:text-base">
              If a physical book arrives damaged or an incorrect item is
              received, please contact us promptly with the order details.
              Photographs or other information may be requested so that the
              issue can be reviewed with the relevant printing, distribution,
              or shipping provider.
            </p>
          </section>

          <section>
            <p className="text-xs font-medium tracking-[0.2em] text-[#7b8781]">
              07
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-[#183c32] sm:text-3xl">
              Digital Products
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#626b65] sm:text-base">
              Because digital products can be delivered immediately and cannot
              generally be physically returned, refunds for digital books,
              magazines, files, or other digital products may depend on the
              circumstances and the applicable purchasing platform.
            </p>
          </section>

          <section>
            <p className="text-xs font-medium tracking-[0.2em] text-[#7b8781]">
              08
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-[#183c32] sm:text-3xl">
              Third-Party Costs
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#626b65] sm:text-base">
              Certain projects may involve third-party services such as
              printing, distribution, hosting, domain registration, payment
              processing, or publishing platforms. Costs that have already
              been paid to third parties may not be recoverable.
            </p>
          </section>

          <section>
            <p className="text-xs font-medium tracking-[0.2em] text-[#7b8781]">
              09
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-[#183c32] sm:text-3xl">
              Refund Processing
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#626b65] sm:text-base">
              If a refund is approved, the applicable refund method and
              processing time will be communicated to the customer. Processing
              times may also depend on the payment provider or financial
              institution involved.
            </p>
          </section>

          <section>
            <p className="text-xs font-medium tracking-[0.2em] text-[#7b8781]">
              10
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-[#183c32] sm:text-3xl">
              How to Request a Refund or Cancellation
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#626b65] sm:text-base">
              To request a cancellation, refund, correction, or replacement,
              contact us with your name, project or order details, and a clear
              explanation of the request. We will review the matter and
              respond according to the applicable project terms and this
              policy.
            </p>
          </section>

          <section>
            <p className="text-xs font-medium tracking-[0.22em] text-[#626b65]">
              SUPPORT
            </p>

            <h2 className="mt-4 text-2xl font-semibold text-[#183c32] sm:text-3xl">
              Need help with an order or project?
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#626b65] sm:text-base">
              Contact us before making a cancellation or refund request so we
              can understand the situation and help you with the appropriate
              next step.
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