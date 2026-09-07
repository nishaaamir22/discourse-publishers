import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ShippingPage() {
  return (
    <main className="min-h-screen bg-[#f6f4ee] text-[#18211e]">
      <Navbar />

      {/* Header */}
      <section className="border-b border-[#d8d1c5] px-6 py-20 sm:px-8 sm:py-24 md:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-medium tracking-[0.22em] text-[#626b65] sm:text-sm sm:tracking-[0.25em]">
            SHIPPING & DELIVERY
          </p>

          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-[#183c32] sm:text-5xl md:text-6xl">
            From our work to your hands.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[#626b65] sm:text-lg sm:leading-8">
            This policy explains how physical books and other printed
            materials are processed, shipped, and delivered.
          </p>

          <p className="mt-6 text-xs text-[#7b8781] sm:text-sm">
            Last updated: September 2026
          </p>
        </div>
      </section>

      {/* Policy */}
      <section className="px-6 py-16 sm:px-8 sm:py-20 md:py-24">
        <div className="mx-auto max-w-4xl space-y-12">

          {/* 01 */}
          <section>
            <p className="text-xs font-medium tracking-[0.2em] text-[#7b8781]">
              01
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-[#183c32] sm:text-3xl">
              Physical Orders
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#626b65] sm:text-base">
              Physical books and printed publications may be produced through
              printing and distribution partners. An order may require
              production time before it is handed to the shipping carrier.
            </p>
          </section>

          {/* 02 */}
          <section>
            <p className="text-xs font-medium tracking-[0.2em] text-[#7b8781]">
              02
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-[#183c32] sm:text-3xl">
              Processing & Production
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#626b65] sm:text-base">
              Processing and production times can vary depending on the book,
              quantity, printing method, destination, and availability. Any
              estimated timeframe provided to a customer is an estimate and
              may change due to circumstances outside our control.
            </p>
          </section>

          {/* 03 */}
          <section>
            <p className="text-xs font-medium tracking-[0.2em] text-[#7b8781]">
              03
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-[#183c32] sm:text-3xl">
              Worldwide Delivery
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#626b65] sm:text-base">
              We may arrange delivery to destinations around the world through
              available printing, distribution, and shipping partners.
              Availability, shipping methods, delivery times, and costs may
              differ by destination.
            </p>
          </section>

          {/* 04 */}
          <section>
            <p className="text-xs font-medium tracking-[0.2em] text-[#7b8781]">
              04
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-[#183c32] sm:text-3xl">
              Shipping Costs
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#626b65] sm:text-base">
              Shipping charges, where applicable, depend on factors such as
              destination, package size, weight, quantity, shipping method,
              and the service provider used for the order.
            </p>

            <p className="mt-4 text-sm leading-7 text-[#626b65] sm:text-base">
              Any applicable shipping charges will be communicated or shown
              before an order is confirmed.
            </p>
          </section>

          {/* 05 */}
          <section>
            <p className="text-xs font-medium tracking-[0.2em] text-[#7b8781]">
              05
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-[#183c32] sm:text-3xl">
              Customs & Import Charges
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#626b65] sm:text-base">
              International shipments may be subject to customs duties,
              import taxes, handling charges, or other fees imposed by the
              destination country. Unless specifically stated otherwise, these
              charges are the responsibility of the recipient.
            </p>
          </section>

          {/* 06 */}
          <section>
            <p className="text-xs font-medium tracking-[0.2em] text-[#7b8781]">
              06
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-[#183c32] sm:text-3xl">
              Delivery Estimates
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#626b65] sm:text-base">
              Delivery estimates are not guaranteed dates. Actual delivery
              times may be affected by production, weather, customs clearance,
              carrier delays, public holidays, incorrect address information,
              or other circumstances beyond our control.
            </p>
          </section>

          {/* 07 */}
          <section>
            <p className="text-xs font-medium tracking-[0.2em] text-[#7b8781]">
              07
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-[#183c32] sm:text-3xl">
              Tracking
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#626b65] sm:text-base">
              Where tracking is available, tracking information may be
              provided after the order has been dispatched. Tracking updates
              are supplied by the relevant carrier or distribution partner.
            </p>
          </section>

          {/* 08 */}
          <section>
            <p className="text-xs font-medium tracking-[0.2em] text-[#7b8781]">
              08
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-[#183c32] sm:text-3xl">
              Incorrect Delivery Information
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#626b65] sm:text-base">
              Customers are responsible for providing accurate delivery
              information. If an order cannot be delivered because an
              incorrect or incomplete address was provided, additional
              shipping or replacement costs may apply.
            </p>
          </section>

          {/* 09 */}
          <section>
            <p className="text-xs font-medium tracking-[0.2em] text-[#7b8781]">
              09
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-[#183c32] sm:text-3xl">
              Delayed or Missing Orders
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#626b65] sm:text-base">
              If an order appears to be delayed or missing, please contact us
              with the relevant order details. We may work with the applicable
              printing, distribution, or shipping provider to investigate the
              shipment.
            </p>
          </section>

          {/* 10 */}
          <section>
            <p className="text-xs font-medium tracking-[0.2em] text-[#7b8781]">
              10
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-[#183c32] sm:text-3xl">
              Damaged Items
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#626b65] sm:text-base">
              If a physical item arrives damaged, please contact us as soon as
              reasonably possible. We may request photographs or other
              information needed to assess the issue and coordinate with the
              relevant supplier or carrier.
            </p>
          </section>

          {/* 11 */}
          <section>
            <p className="text-xs font-medium tracking-[0.2em] text-[#7b8781]">
              11
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-[#183c32] sm:text-3xl">
              Digital Products
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#626b65] sm:text-base">
              E-books, digital magazines, downloadable files, and other
              digital products do not require physical shipping. Delivery of
              digital products may occur through the applicable online
              platform or download system.
            </p>
          </section>

          {/* 12 */}
          <section>
            <p className="text-xs font-medium tracking-[0.2em] text-[#7b8781]">
              12
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-[#183c32] sm:text-3xl">
              Third-Party Delivery Services
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#626b65] sm:text-base">
              Printing companies, distributors, postal services, courier
              companies, and other third-party providers may be involved in
              fulfilling physical orders. Their own terms, delivery procedures,
              service limitations, and operating conditions may apply.
            </p>
          </section>

          {/* Contact */}
          <section className="border-t border-[#d8d1c5] pt-12">
            <p className="text-xs font-medium tracking-[0.22em] text-[#626b65]">
              DELIVERY SUPPORT
            </p>

            <h2 className="mt-4 text-2xl font-semibold text-[#183c32] sm:text-3xl">
              Have a delivery question?
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#626b65] sm:text-base">
              If you need help with a physical order, delivery issue, or
              shipment, please contact us with your order details.
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