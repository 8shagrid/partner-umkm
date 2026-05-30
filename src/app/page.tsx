import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import BenefitSection from "@/components/BenefitSection";
import PricingSection from "@/components/PricingSection";
import PortfolioSection from "@/components/PortfolioSection";
import ProcessSection from "@/components/ProcessSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <BenefitSection />
        <PricingSection />
        <PortfolioSection />
        <ProcessSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
