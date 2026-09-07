import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

const team = [
{
name: "Aamir Abdullah",
role: "Founder & Owner",
description:
"Leading Discourse Publishers and overseeing the publishing vision, operations and growth of the publishing house.",
image: "/team/aamir-abdullah.jpeg",
},
{
name: "Nisha Aamir",
role: "Web Designer & Developer",
description:
"Designing and developing modern, responsive web experiences with a focus on clean design, usability and performance.",
image: "/team/nisha-aamir.jpeg",
},
{
name: "Momina Aamir",
role: "Formatting Expert",
description:
"Handling book formatting and preparing manuscripts for professional print and digital publication.",
image: null,
},
{
name: "Wajeeh Aamir",
role: "Cover Designer",
description:
"Handling cover creation and helping bring projects from preparation through publication.",
image: "/team/wajeeh-aamir.jpeg",
},
];

export default function AboutPage() {
return ( <main className="min-h-screen bg-[#f6f4ee] text-[#18211e]"> <Navbar />

```
  {/* Team */}
  <section className="px-5 py-16 sm:px-8 sm:py-24 md:py-28">
    <div className="mx-auto max-w-6xl">
      <div className="max-w-2xl">
        <p className="text-[11px] font-medium tracking-[0.2em] text-[#626b65] sm:text-sm sm:tracking-[0.25em]">
          THE PEOPLE BEHIND DISCOURSE
        </p>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#183c32] sm:mt-5 sm:text-4xl md:text-5xl">
          Meet the team.
        </h2>

        <p className="mt-4 text-sm leading-6 text-[#626b65] sm:mt-5 sm:text-lg sm:leading-8">
          A family-led publishing team bringing together creative,
          technical and publishing expertise.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-16 sm:gap-5 lg:grid-cols-4">
        {team.map((member) => (
          <div
            key={member.name}
            className="border border-[#d8d1c5] bg-[#fbf9f5] p-3 transition-transform duration-300 hover:-translate-y-1 sm:p-6"
          >
            {/* Profile Image */}
            {member.image ? (
              <div className="relative aspect-[5/4] overflow-hidden bg-[#e4ebe6] sm:aspect-[4/5]">
                <Image
                  src={member.image}
                  alt={`${member.name} — ${member.role}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 280px"
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="relative aspect-[5/4] overflow-hidden bg-[#e4ebe6] sm:aspect-[4/5]" />
            )}

            {/* Name */}
            <h3 className="mt-3 text-sm font-semibold leading-tight text-[#183c32] sm:mt-5 sm:text-xl">
              {member.name}
            </h3>

            {/* Role */}
            <p className="mt-1 text-[10px] font-semibold leading-4 text-[#626b65] sm:text-sm">
              {member.role}
            </p>

            {/* Description */}
            <p className="mt-2 text-[10px] leading-5 text-[#626b65] sm:mt-4 sm:text-sm sm:leading-7">
              {member.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Hero */}
  <section className="border-b border-[#d8d1c5] px-5 py-16 sm:px-8 sm:py-24 md:py-28">
    <div className="mx-auto max-w-6xl">
      <p className="text-[11px] font-medium tracking-[0.2em] text-[#626b65] sm:text-sm sm:tracking-[0.25em]">
        ABOUT DISCOURSE PUBLISHERS
      </p>

      <h1 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-[#183c32] sm:mt-5 sm:text-5xl md:text-6xl">
        A publishing house built around stories and the people behind
        them.
      </h1>

      <p className="mt-5 max-w-2xl text-sm leading-6 text-[#626b65] sm:mt-6 sm:text-lg sm:leading-8">
        Discourse Publishers brings together publishing, editing, design,
        formatting and digital expertise to help authors turn their
        manuscripts into finished publications.
      </p>
    </div>
  </section>

  {/* Approach */}
  <section className="border-t border-[#d8d1c5] px-5 py-16 sm:px-8 sm:py-24 md:py-28">
    <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center md:gap-20">
      <div>
        <p className="text-[11px] font-medium tracking-[0.2em] text-[#626b65] sm:text-sm sm:tracking-[0.25em]">
          OUR APPROACH
        </p>

        <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#183c32] sm:mt-5 sm:text-4xl md:text-5xl">
          Professional publishing, with the author at the center.
        </h2>
      </div>

      <div className="space-y-4 text-sm leading-6 text-[#626b65] sm:space-y-5 sm:text-lg sm:leading-8">
        <p>
          Every publication begins with an idea. Our role is to help
          develop that idea into a finished work while respecting the
          author's vision.
        </p>

        <p>
          From editorial preparation and book formatting to cover design,
          digital publishing and physical distribution, we bring the
          essential stages of publishing together in one place.
        </p>

        <p>
          We aim to make the publishing process clearer, more professional,
          and accessible to authors at every stage of their journey.
        </p>
      </div>
    </div>
  </section>

  {/* What We Stand For */}
  <section className="bg-[#183c32] px-5 py-16 text-white sm:px-8 sm:py-24 md:py-28">
    <div className="mx-auto max-w-6xl">
      <div className="max-w-2xl">
        <p className="text-[11px] font-medium tracking-[0.2em] text-[#c5d0ca] sm:text-sm sm:tracking-[0.25em]">
          WHAT WE STAND FOR
        </p>

        <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:mt-5 sm:text-4xl md:text-5xl">
          Quality, creativity and commitment to every publication.
        </h2>
      </div>

      <div className="mt-10 grid gap-3 sm:mt-16 sm:grid-cols-3 sm:gap-6">
        <div className="border border-[#315247] p-5 sm:p-8">
          <h3 className="text-lg font-semibold sm:text-xl">Quality</h3>

          <p className="mt-3 text-sm leading-6 text-[#b7c3bd] sm:mt-4 sm:leading-7">
            Every stage of publishing deserves attention to detail and
            professional standards.
          </p>
        </div>

        <div className="border border-[#315247] p-5 sm:p-8">
          <h3 className="text-lg font-semibold sm:text-xl">Creativity</h3>

          <p className="mt-3 text-sm leading-6 text-[#b7c3bd] sm:mt-4 sm:leading-7">
            Each publication should have an identity that reflects the work
            and its author.
          </p>
        </div>

        <div className="border border-[#315247] p-5 sm:p-8">
          <h3 className="text-lg font-semibold sm:text-xl">
            Collaboration
          </h3>

          <p className="mt-3 text-sm leading-6 text-[#b7c3bd] sm:mt-4 sm:leading-7">
            We work alongside authors throughout the publishing process.
          </p>
        </div>
      </div>
    </div>
  </section>

  <Footer />
</main>


);
}
