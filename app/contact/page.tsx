"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const projects = [
{
number: "01",
title: "Discourse Publishers",
description: "Professional publishing-house website.",
},
{
number: "02",
title: "SkillBridge",
description: "Student portfolio and internship-matching platform.",
},
{
number: "03",
title: "Library Management System",
description: "Digital system for managing library records.",
},
{
number: "04",
title: "QuickBasket",
description: "Multi-store online delivery system.",
},
];

const webServices = [
"Website Design",
"Front-End Development",
"Responsive Websites",
"Business Websites",
"Custom Web Solutions",
];

const publishingServices = [
"Editing & Proofreading",
"Book Formatting & Typesetting",
"Cover Design",
"E-book & Kindle Formatting",
"Amazon KDP Publishing",
"Magazine Publishing",
];

export default function ContactPage() {
const [isSubmitting, setIsSubmitting] = useState(false);
const [successMessage, setSuccessMessage] = useState("");
const [errorMessage, setErrorMessage] = useState("");

async function handleSubmit(event: FormEvent<HTMLFormElement>) {
event.preventDefault();

setIsSubmitting(true);
setSuccessMessage("");
setErrorMessage("");

const form = event.currentTarget;
const formData = new FormData(form);
const file = formData.get("requirements");

if (!(file instanceof File) || file.size === 0) {
  setErrorMessage("Please upload your requirement document.");
  setIsSubmitting(false);
  return;
}

if (file.size > 25 * 1024 * 1024) {
  setErrorMessage("Your requirement document must be 25MB or smaller.");
  setIsSubmitting(false);
  return;
}

try {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: formData,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.error || "Something went wrong.");
  }

  setSuccessMessage(
    "Thank you. Your inquiry has been sent successfully. We will get back to you soon."
  );

  form.reset();
} catch (error) {
  setErrorMessage(
    error instanceof Error
      ? error.message
      : "Something went wrong. Please try again."
  );
} finally {
  setIsSubmitting(false);
}

}

return ( <main className="min-h-screen bg-[#f7f4ef] text-[#1c1c1c]"> <Navbar />

```
  {/* Profiles */}
  <section className="border-b border-[#d8d1c5] bg-[#fbf9f5] px-6 py-20 sm:px-8 sm:py-24">
    <div className="mx-auto max-w-6xl">
      <div className="max-w-3xl">
        <p className="text-xs font-medium tracking-[0.22em] text-[#626b65] sm:text-sm sm:tracking-[0.25em]">
          OUR CONTACTS
        </p>

        <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#183c32] sm:text-4xl">
          Choose the right team for your project.
        </h2>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {/* Publishing */}
        <div className="border border-[#d8d1c5] bg-[#f7f4ef] p-7 sm:p-9">
          <div className="mb-7 flex items-center gap-5 border-b border-[#d8d1c5] pb-7">
            <div className="relative h-20 w-20 shrink-0 overflow-hidden bg-[#e4ebe6] sm:h-24 sm:w-24">
              <Image
                src="/team/aamir-abdullah.jpeg"
                alt="Aamir Abdullah — Founder & Owner"
                fill
                sizes="96px"
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-xs font-medium tracking-[0.2em] text-[#626b65]">
                PUBLISHING
              </p>

              <h3 className="mt-2 text-2xl font-semibold text-[#183c32]">
                Aamir Abdullah
              </h3>

              <p className="mt-1 text-sm text-[#626b65]">
                Publishing Services
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-[#183c32]">
              Services
            </p>

            <ul className="mt-3 space-y-2 text-sm leading-6 text-[#626b65]">
              {publishingServices.map((service) => (
                <li key={service}>• {service}</li>
              ))}
            </ul>
          </div>

          <div className="mt-8 space-y-3 border-t border-[#d8d1c5] pt-6 text-sm">
            <p className="text-[#626b65]">
              Email:{" "}
              <a
                href="mailto:discourseglmag@gmail.com"
                className="font-medium text-[#183c32] underline underline-offset-4 hover:opacity-60"
              >
                discourseglmag@gmail.com
              </a>
            </p>

            <p className="text-[#626b65]">
              WhatsApp:{" "}
              <a
                href="https://wa.me/923121703807"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-[#183c32] underline underline-offset-4 hover:opacity-60"
              >
                +92 312 1703807
              </a>
            </p>

            <p className="text-[#626b65]">
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=https://discoursepublishers.com"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-[#183c32] underline underline-offset-4 hover:opacity-60"
              >
                Facebook
              </a>
            </p>

            <p className="text-[#626b65]">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-[#183c32] underline underline-offset-4 hover:opacity-60"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>

        {/* Web Development */}
        <div className="border border-[#d8d1c5] bg-[#f7f4ef] p-7 sm:p-9">
          <div className="mb-7 flex items-center gap-5 border-b border-[#d8d1c5] pb-7">
            <div className="relative h-20 w-20 shrink-0 overflow-hidden bg-[#e4ebe6] sm:h-24 sm:w-24">
              <Image
                src="/team/nisha-aamir.jpeg"
                alt="Nisha Aamir — Web Designer & Developer"
                fill
                sizes="96px"
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-xs font-medium tracking-[0.2em] text-[#626b65]">
                WEB DEVELOPMENT
              </p>

              <h3 className="mt-2 text-2xl font-semibold text-[#183c32]">
                Nisha Aamir
              </h3>

              <p className="mt-1 text-sm text-[#626b65]">
                Web Designer &amp; Developer
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-[#183c32]">
              Services
            </p>

            <ul className="mt-3 space-y-2 text-sm leading-6 text-[#626b65]">
              {webServices.map((service) => (
                <li key={service}>• {service}</li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <p className="text-sm font-medium text-[#183c32]">
              Selected Projects
            </p>

            <div className="mt-4 space-y-4">
              {projects.map((project) => (
                <div key={project.number} className="flex gap-4">
                  <span className="text-xs font-medium tracking-[0.15em] text-[#81948c]">
                    {project.number}
                  </span>

                  <div>
                    <p className="text-sm font-medium text-[#183c32]">
                      {project.title}
                    </p>

                    <p className="mt-1 text-xs leading-5 text-[#626b65]">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 space-y-3 border-t border-[#d8d1c5] pt-6 text-sm">
            <p className="text-[#626b65]">
              Email:{" "}
              <a
                href="mailto:discoursewebdev@gmail.com"
                className="font-medium text-[#183c32] underline underline-offset-4 hover:opacity-60"
              >
                discoursewebdev@gmail.com
              </a>
            </p>

            <p className="text-[#626b65]">
              WhatsApp:{" "}
              <a
                href="https://wa.me/923167575455"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-[#183c32] underline underline-offset-4 hover:opacity-60"
              >
                +92 316-7574557
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Inquiry Introduction */}
  <section
    id="inquiry"
    className="px-6 py-20 sm:px-8 sm:py-24 md:py-28"
  >
    <div className="mx-auto max-w-6xl">
      <div className="max-w-3xl">
        <p className="text-xs font-medium tracking-[0.22em] text-[#626b65] sm:text-sm sm:tracking-[0.25em]">
          START A CONVERSATION
        </p>

        <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#183c32] sm:text-4xl md:text-5xl">
          Tell us about your project.
        </h2>

        <p className="mt-5 text-base leading-7 text-[#626b65] sm:text-lg sm:leading-8">
          Share the details below and our team will review your inquiry and
          get in touch with you.
        </p>
      </div>

      {/* Actual Form */}
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="mt-10"
      >
        <div id="contact-form" className="scroll-mt-24" />

        {/* Contact Details */}
        <div className="border-t border-[#d8d1c5] pt-10">
          <p className="text-xs font-medium tracking-[0.2em] text-[#626b65]">
            CONTACT DETAILS
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="text-sm font-medium text-[#183c32]"
              >
                Full Name *
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-2 w-full border border-[#d8d1c5] bg-[#fbf9f5] px-4 py-3 text-sm text-[#183c32] outline-none transition focus:border-[#183c32] focus:ring-1 focus:ring-[#183c32]"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-[#183c32]"
              >
                Email Address *
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 w-full border border-[#d8d1c5] bg-[#fbf9f5] px-4 py-3 text-sm text-[#183c32] outline-none transition focus:border-[#183c32] focus:ring-1 focus:ring-[#183c32]"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="text-sm font-medium text-[#183c32]"
              >
                Phone / WhatsApp
              </label>

              <input
                id="phone"
                name="phone"
                type="tel"
                className="mt-2 w-full border border-[#d8d1c5] bg-[#fbf9f5] px-4 py-3 text-sm text-[#183c32] outline-none transition focus:border-[#183c32] focus:ring-1 focus:ring-[#183c32]"
              />
            </div>

            <div>
              <label
                htmlFor="country"
                className="text-sm font-medium text-[#183c32]"
              >
                Country
              </label>

              <input
                id="country"
                name="country"
                type="text"
                className="mt-2 w-full border border-[#d8d1c5] bg-[#fbf9f5] px-4 py-3 text-sm text-[#183c32] outline-none transition focus:border-[#183c32] focus:ring-1 focus:ring-[#183c32]"
              />
            </div>
          </div>
        </div>

        {/* Service */}
        <div className="mt-12 border-t border-[#d8d1c5] pt-10">
          <p className="text-xs font-medium tracking-[0.2em] text-[#626b65]">
            SERVICE
          </p>

          <div className="mt-6">
            <label
              htmlFor="service"
              className="text-sm font-medium text-[#183c32]"
            >
              What can we help you with? *
            </label>

            <select
              id="service"
              name="service"
              required
              defaultValue=""
              className="mt-2 w-full border border-[#d8d1c5] bg-[#fbf9f5] px-4 py-3 text-sm text-[#183c32] outline-none transition focus:border-[#183c32] focus:ring-1 focus:ring-[#183c32]"
            >
              <option value="" disabled>
                Select a service
              </option>
              <option value="Publishing Services">
                Publishing Services
              </option>
              <option value="Editing & Proofreading">
                Editing &amp; Proofreading
              </option>
              <option value="Book Formatting & Typesetting">
                Book Formatting &amp; Typesetting
              </option>
              <option value="Cover Design">Cover Design</option>
              <option value="E-book & Kindle Formatting">
                E-book &amp; Kindle Formatting
              </option>
              <option value="Amazon KDP Publishing">
                Amazon KDP Publishing
              </option>
              <option value="Magazine Publishing">
                Magazine Publishing
              </option>
              <option value="Website Design">Website Design</option>
              <option value="Front-End Development">
                Front-End Development
              </option>
              <option value="Responsive Websites">
                Responsive Websites
              </option>
              <option value="Business Websites">
                Business Websites
              </option>
              <option value="Custom Web Solutions">
                Custom Web Solutions
              </option>
            </select>
          </div>
        </div>

        {/* Project Details */}
        <div className="mt-12 border-t border-[#d8d1c5] pt-10">
          <p className="text-xs font-medium tracking-[0.2em] text-[#626b65]">
            PROJECT DETAILS
          </p>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="title"
                className="text-sm font-medium text-[#183c32]"
              >
                Project / Book Title
              </label>

              <input
                id="title"
                name="title"
                type="text"
                className="mt-2 w-full border border-[#d8d1c5] bg-[#fbf9f5] px-4 py-3 text-sm text-[#183c32] outline-none transition focus:border-[#183c32] focus:ring-1 focus:ring-[#183c32]"
              />
            </div>

            <div>
              <label
                htmlFor="projectType"
                className="text-sm font-medium text-[#183c32]"
              >
                Project Type
              </label>

              <select
                id="projectType"
                name="projectType"
                defaultValue=""
                className="mt-2 w-full border border-[#d8d1c5] bg-[#fbf9f5] px-4 py-3 text-sm text-[#183c32] outline-none transition focus:border-[#183c32] focus:ring-1 focus:ring-[#183c32]"
              >
                <option value="">Select project type</option>
                <option value="Book">Book</option>
                <option value="E-book">E-book</option>
                <option value="Magazine">Magazine</option>
                <option value="Website">Website</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="stage"
                className="text-sm font-medium text-[#183c32]"
              >
                Current Stage
              </label>

              <select
                id="stage"
                name="stage"
                defaultValue=""
                className="mt-2 w-full border border-[#d8d1c5] bg-[#fbf9f5] px-4 py-3 text-sm text-[#183c32] outline-none transition focus:border-[#183c32] focus:ring-1 focus:ring-[#183c32]"
              >
                <option value="">Select current stage</option>
                <option value="Idea / Planning">Idea / Planning</option>
                <option value="Manuscript in Progress">
                  Manuscript in Progress
                </option>
                <option value="Completed Manuscript">
                  Completed Manuscript
                </option>
                <option value="Already Published">
                  Already Published
                </option>
                <option value="Existing Website">
                  Existing Website
                </option>
              </select>
            </div>

            <div>
              <label
                htmlFor="size"
                className="text-sm font-medium text-[#183c32]"
              >
                Approx. Size
              </label>

              <input
                id="size"
                name="size"
                type="text"
                placeholder="e.g. 80 pages / 10,000 words"
                className="mt-2 w-full border border-[#d8d1c5] bg-[#fbf9f5] px-4 py-3 text-sm text-[#183c32] outline-none transition placeholder:text-[#9aa39e] focus:border-[#183c32] focus:ring-1 focus:ring-[#183c32]"
              />
            </div>

            <div>
              <label
                htmlFor="timeline"
                className="text-sm font-medium text-[#183c32]"
              >
                Desired Timeline
              </label>

              <select
                id="timeline"
                name="timeline"
                defaultValue=""
                className="mt-2 w-full border border-[#d8d1c5] bg-[#fbf9f5] px-4 py-3 text-sm text-[#183c32] outline-none transition focus:border-[#183c32] focus:ring-1 focus:ring-[#183c32]"
              >
                <option value="">Select timeline</option>
                <option value="As soon as possible">
                  As soon as possible
                </option>
                <option value="1–3 months">1–3 months</option>
                <option value="3–6 months">3–6 months</option>
                <option value="6+ months">6+ months</option>
                <option value="Not sure">Not sure</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="budget"
                className="text-sm font-medium text-[#183c32]"
              >
                Estimated Budget
              </label>

              <select
                id="budget"
                name="budget"
                defaultValue=""
                className="mt-2 w-full border border-[#d8d1c5] bg-[#fbf9f5] px-4 py-3 text-sm text-[#183c32] outline-none transition focus:border-[#183c32] focus:ring-1 focus:ring-[#183c32]"
              >
                <option value="">Select budget range</option>
                <option value="Under $100">Under $100</option>
                <option value="$100–$300">$100–$300</option>
                <option value="$300–$500">$300–$500</option>
                <option value="$500–$1,000">$500–$1,000</option>
                <option value="$1,000+">$1,000+</option>
                <option value="Not sure">Not sure</option>
              </select>
            </div>
          </div>
        </div>

        {/* Requirement Document */}
        <div className="mt-12 border-t border-[#d8d1c5] pt-10">
          <p className="text-xs font-medium tracking-[0.2em] text-[#626b65]">
            REQUIREMENT DOCUMENT
          </p>

          <div className="mt-6">
            <label
              htmlFor="requirements"
              className="text-sm font-medium text-[#183c32]"
            >
              Upload your requirements *
            </label>

            <input
              id="requirements"
              name="requirements"
              type="file"
              required
              accept=".pdf,.doc,.docx"
              className="mt-2 block w-full border border-[#d8d1c5] bg-[#fbf9f5] px-4 py-3 text-sm text-[#626b65] file:mr-4 file:border-0 file:bg-[#183c32] file:px-4 file:py-2 file:text-sm file:font-medium file:text-white hover:file:bg-[#102d26]"
            />

            <p className="mt-2 text-xs leading-5 text-[#81948c]">
              Accepted formats: PDF, DOC, DOCX. Maximum file size: 25MB.
            </p>
          </div>
        </div>

        {/* Additional Message */}
        <div className="mt-12 border-t border-[#d8d1c5] pt-10">
          <label
            htmlFor="message"
            className="text-sm font-medium text-[#183c32]"
          >
            Additional Message
          </label>

          <textarea
            id="message"
            name="message"
            rows={7}
            placeholder="Tell us anything else that may help us understand your project."
            className="mt-2 w-full resize-y border border-[#d8d1c5] bg-[#fbf9f5] px-4 py-3 text-sm leading-6 text-[#183c32] outline-none transition placeholder:text-[#9aa39e] focus:border-[#183c32] focus:ring-1 focus:ring-[#183c32]"
          />
        </div>

        {/* Messages */}
        {successMessage && (
          <div
            className="mt-8 border border-[#9eb2a8] bg-[#e4ebe6] px-5 py-4 text-sm leading-6 text-[#183c32]"
            role="status"
          >
            {successMessage}
          </div>
        )}

        {errorMessage && (
          <div
            className="mt-8 border border-[#c9a9a0] bg-[#f4e8e5] px-5 py-4 text-sm leading-6 text-[#7a3025]"
            role="alert"
          >
            {errorMessage}
          </div>
        )}

        {/* Submit */}
        <div className="mt-8 flex flex-col gap-5 border-t border-[#d8d1c5] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-xs leading-5 text-[#81948c]">
            By submitting this inquiry, you agree that we may contact you
            regarding your project and use the information provided to
            respond to your request.
          </p>

          <button
            type="submit"
            disabled={isSubmitting}
            className="shrink-0 bg-[#183c32] px-7 py-3.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#102d26] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Sending..." : "Send Inquiry"}
          </button>
        </div>
      </form>
    </div>
  </section>

  <Footer />
</main>

);
}
