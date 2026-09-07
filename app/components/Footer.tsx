import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#315247] bg-[#102d26] px-6 py-14 text-white sm:px-8 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-4 md:gap-10">

          {/* Brand */}
          <div className="sm:col-span-2">
            <h3 className="text-xl font-semibold tracking-wide">
              Discourse Publishers
            </h3>

            <p className="mt-4 max-w-md text-sm leading-7 text-[#b7c3bd] sm:text-base">
              Professional publishing services for authors, books and
              publications — from manuscript to worldwide distribution.
            </p>

            <p className="mt-6 text-xs font-medium tracking-[0.2em] text-[#81948c]">
              PUBLISHING WITH PURPOSE.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-sm font-semibold">Explore</h4>

            <div className="mt-5 space-y-3 text-sm text-[#b7c3bd]">
              <Link
                href="/services"
                className="block transition-colors hover:text-white"
              >
                Publishing Services
              </Link>

              <Link
                href="/books"
                className="block transition-colors hover:text-white"
              >
                Books
              </Link>

              <Link
                href="/authors"
                className="block transition-colors hover:text-white"
              >
                For Authors
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold">Company</h4>

            <div className="mt-5 space-y-3 text-sm text-[#b7c3bd]">
              <Link
                href="/about"
                className="block transition-colors hover:text-white"
              >
                About Us
              </Link>

              <Link
                href="/contact"
                className="block transition-colors hover:text-white"
              >
                Contact
              </Link>
              <Link
               href="/terms"
               className="block transition-colors hover:text-white"
             >
               Terms & Conditions
              </Link>
              <Link
  href="/shipping"
  className="block transition-colors hover:text-white"
>
  Shipping & Delivery
</Link>
<Link
  href="/refunds"
  className="block transition-colors hover:text-white"
>
  Refunds & Cancellations
</Link>
              <Link
                href="/privacy"
                className="block transition-colors hover:text-white"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[#315247] pt-6">
          <p className="text-xs leading-6 text-[#81948c] sm:text-sm">
            © 2026 Discourse Publishers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}