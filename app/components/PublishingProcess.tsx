export default function PublishingProcess() {
  return (
    <section className="bg-[#183c32] px-4 py-16 text-white sm:px-6 sm:py-20 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-[10px] font-medium tracking-[0.18em] text-[#c5d0ca] sm:text-xs md:text-sm md:tracking-[0.25em]">
          HOW IT WORKS
        </p>

        <h2 className="mt-4 max-w-3xl text-2xl font-semibold leading-tight tracking-tight sm:text-3xl md:text-4xl">
          From manuscript to published book.
        </h2>

        <div className="mt-10 grid grid-cols-4 gap-3 sm:mt-12 sm:gap-5 md:mt-16 md:gap-8">
          <div>
            <span className="text-xs text-[#c5d0ca] sm:text-sm">
              01
            </span>

            <h3 className="mt-2 text-sm font-semibold leading-tight sm:text-base md:mt-3 md:text-xl">
              Submit
            </h3>

            <p className="mt-2 text-xs leading-5 text-[#b7c3bd] sm:text-sm sm:leading-6 md:mt-3 md:text-base md:leading-7">
              Send us your manuscript and tell us about your publishing goals.
            </p>
          </div>

          <div>
            <span className="text-xs text-[#c5d0ca] sm:text-sm">
              02
            </span>

            <h3 className="mt-2 text-sm font-semibold leading-tight sm:text-base md:mt-3 md:text-xl">
              Edit & Proofread
            </h3>

            <p className="mt-2 text-xs leading-5 text-[#b7c3bd] sm:text-sm sm:leading-6 md:mt-3 md:text-base md:leading-7">
              Our team refines your manuscript and prepares it for publication.
            </p>
          </div>

          <div>
            <span className="text-xs text-[#c5d0ca] sm:text-sm">
              03
            </span>

            <h3 className="mt-2 text-sm font-semibold leading-tight sm:text-base md:mt-3 md:text-xl">
              Design & Format
            </h3>

            <p className="mt-2 text-xs leading-5 text-[#b7c3bd] sm:text-sm sm:leading-6 md:mt-3 md:text-base md:leading-7">
              Your book receives professional formatting, typesetting and cover
              design.
            </p>
          </div>

          <div>
            <span className="text-xs text-[#c5d0ca] sm:text-sm">
              04
            </span>

            <h3 className="mt-1 text-sm font-semibold leading-tight sm:text-base md:mt-3 md:text-xl">
              Publish & Distribute
            </h3>

            <p className="mt-2 text-xs leading-5 text-[#b7c3bd] sm:text-sm sm:leading-6 md:mt-3 md:text-base md:leading-7">
              We publish your work digitally and through print, with worldwide
              distribution options.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}