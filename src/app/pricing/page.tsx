import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import { FAQSection } from "@/components/faq-section";
import type { Metadata } from "next";
import { PricingTiers } from "./pricing-tiers";
import { ComparisonTable } from "./comparison-table";

export const metadata: Metadata = {
  title: "Pricing",
  description: "WeldCert pricing: 14-day free trial, then starting at $79/mo for 15 welders. Pro $149/mo for 50 welders. All features included. Cheaper than one OSHA fine.",
};

export default function PricingPage() {
  return (
    <>
      <Header />
      <main>
        <div className="bg-gradient-to-br from-navy via-navy-light to-navy py-20 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Simple, Transparent Pricing</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Three plans. Everything included. Still cheaper than one OSHA fine.
          </p>
        </div>
        <PricingTiers />
        <ComparisonTable />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
