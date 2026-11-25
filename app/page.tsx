import Footer from "@/components/Footer";
import LeadGate from "@/components/LeadGate";
import Lightbox from "@/components/Lightbox";
import Nav from "@/components/Nav";
import StickyBar from "@/components/StickyBar";
import Challenge from "@/components/sections/Challenge";
import Coach from "@/components/sections/Coach";
import Coaching from "@/components/sections/Coaching";
import Experiences from "@/components/sections/Experiences";
import Faq from "@/components/sections/Faq";
import FinalCta from "@/components/sections/FinalCta";
import Hero from "@/components/sections/Hero";
import Included from "@/components/sections/Included";
import Price from "@/components/sections/Price";
import Solution from "@/components/sections/Solution";
import Testimonials from "@/components/sections/Testimonials";

/** Page order follows the instructions PDF, Sections 1–10. */
export default function Home() {
  return (
    <>
      <div id="site">
        <Nav />
        <main>
          <Hero />
          <Challenge />
          <Solution />
          <Experiences />
          <Coaching />
          <Included />
          <Coach />
          <Price />
          <Testimonials />
          <Faq />
          <FinalCta />
        </main>
        <Footer />
        <StickyBar />
      </div>
      <LeadGate />
      <Lightbox />
    </>
  );
}
