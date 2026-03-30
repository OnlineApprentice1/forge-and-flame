import Hero from "@/components/home/Hero";
import SignatureProject from "@/components/home/SignatureProject";
import Services from "@/components/home/Services";
import Process from "@/components/home/Process";
import Materials from "@/components/home/Materials";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <SignatureProject />
      <Services />
      <Process />
      <Materials />
      <Testimonials />
      <CTA />
    </>
  );
}
