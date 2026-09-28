import { Navbar } from "@/components/site/navbar";
import { ScrollProgress } from "@/components/site/scroll-progress";
import { BackToTop } from "@/components/site/back-to-top";
import { Hero } from "@/components/site/hero";
import { Ticker } from "@/components/site/ticker";
import { About } from "@/components/site/about";
import { Services } from "@/components/site/services";
import { Process } from "@/components/site/process";
import { Academy } from "@/components/site/academy";
import { Gallery } from "@/components/site/gallery";
import { Testimonials } from "@/components/site/testimonials";
import { Batches } from "@/components/site/batches";
import { Faq } from "@/components/site/faq";
import { CtaBanner } from "@/components/site/cta-banner";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Ticker />
        <About />
        <Services />
        <Process />
        <Academy />
        <Gallery />
        <Testimonials />
        <Batches />
        <Faq />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
