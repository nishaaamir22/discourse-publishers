import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import PublishingProcess from "./components/PublishingProcess";
import FeaturedWork from "./components/FeaturedWork";
import Testimonials from "./components/Testimonials";
import WorldwideReach from "./components/WorldwideReach";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f4ef] text-[#1c1c1c]">
     <Navbar /> 
     <Hero />
    <Services />
    <PublishingProcess />
    <FeaturedWork />
    <Testimonials />
    <WorldwideReach />
    <CTA />
    <Footer />

</main>
  );
}