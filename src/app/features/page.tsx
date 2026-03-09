import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import type { Metadata } from "next";
import { FeatureDeepDive } from "./feature-deep-dive";

export const metadata: Metadata = {
  title: "Features",
  description: "WeldCert features: welder roster, continuity dashboard, WPS/PQR management, smart alerts, PDF audit exports, and mobile activity logging. Built for AWS D1.1 and ASME IX compliance.",
};

export default function FeaturesPage() {
  return (
    <>
      <Header />
      <main>
        <div className="bg-gradient-to-br from-navy via-navy-light to-navy py-20 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Built for Fabrication Shops.<br />
            <span className="text-brand">Every Feature Maps to Code Compliance.</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            No bloat, no generic forms. Every feature in WeldCert exists because AWS D1.1 or ASME IX requires it
            or because QC managers asked for it.
          </p>
        </div>
        <FeatureDeepDive />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
