"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-[#d8d1c5] bg-[#f6f4ee]/95 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6 py-5 sm:px-8">
        {/* Logo / Brand */}
        <Link
          href="/"
          className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#183c32] focus-visible:ring-offset-2"
        >
          <Image
            src="/logo/LOGO.png"
            alt="Discourse Publishers logo"
            width={56}
            height={56}
            className="h-12 w-12 object-contain sm:h-14 sm:w-14"
            priority
          />

          <span className="text-base font-semibold tracking-wide text-[#183c32] transition-colors duration-200 hover:text-[#6f8279] sm:text-lg">
            Discourse Publishers
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          <Link
            href="/services"
            className="text-sm text-[#18211e] transition-colors duration-200 hover:text-[#6f8279] focus:outline-none focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-[#183c32] focus-visible:ring-offset-2"
          >
            Publishing Services
          </Link>

          <Link
            href="/books"
            className="text-sm text-[#18211e] transition-colors duration-200 hover:text-[#6f8279] focus:outline-none focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-[#183c32] focus-visible:ring-offset-2"
          >
            Books
          </Link>

          <Link
            href="/authors"
            className="text-sm text-[#18211e] transition-colors duration-200 hover:text-[#6f8279] focus:outline-none focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-[#183c32] focus-visible:ring-offset-2"
          >
            For Authors
          </Link>

          <Link
            href="/about"
            className="text-sm text-[#18211e] transition-colors duration-200 hover:text-[#6f8279] focus:outline-none focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-[#183c32] focus-visible:ring-offset-2"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="text-sm text-[#18211e] transition-colors duration-200 hover:text-[#6f8279] focus:outline-none focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-[#183c32] focus-visible:ring-offset-2"
          >
            Contact
          </Link>

          <Link
            href="/contact#contact-form"
            className="bg-[#183c32] px-5 py-2.5 text-sm text-white transition-colors duration-200 hover:bg-[#102d26] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#183c32] focus-visible:ring-offset-2"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center text-[#183c32] transition-colors duration-200 hover:text-[#6f8279] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#183c32] focus-visible:ring-offset-2 md:hidden"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span className="text-2xl leading-none" aria-hidden="true">
            {menuOpen ? "×" : "☰"}
          </span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-[#d8d1c5] px-6 pb-6 pt-3 md:hidden"
        >
          <div className="flex flex-col">
            <Link
              href="/services"
              onClick={() => setMenuOpen(false)}
              className="border-b border-[#d8d1c5] py-4 text-sm text-[#18211e] transition-colors duration-200 hover:text-[#6f8279]"
            >
              Publishing Services
            </Link>

            <Link
              href="/books"
              onClick={() => setMenuOpen(false)}
              className="border-b border-[#d8d1c5] py-4 text-sm text-[#18211e] transition-colors duration-200 hover:text-[#6f8279]"
            >
              Books
            </Link>

            <Link
              href="/authors"
              onClick={() => setMenuOpen(false)}
              className="border-b border-[#d8d1c5] py-4 text-sm text-[#18211e] transition-colors duration-200 hover:text-[#6f8279]"
            >
              For Authors
            </Link>

            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="border-b border-[#d8d1c5] py-4 text-sm text-[#18211e] transition-colors duration-200 hover:text-[#6f8279]"
            >
              About
            </Link>

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="border-b border-[#d8d1c5] py-4 text-sm text-[#18211e] transition-colors duration-200 hover:text-[#6f8279]"
            >
              Contact
            </Link>

            <Link
              href="/contact#contact-form"
              onClick={() => setMenuOpen(false)}
              className="mt-5 bg-[#183c32] px-5 py-3 text-center text-sm font-medium text-white transition-colors duration-200 hover:bg-[#102d26] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#183c32] focus-visible:ring-offset-2"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}