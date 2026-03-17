import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import type { Metadata } from "next";
import { HelpCenter } from "./help-center";

export const metadata: Metadata = {
  title: "Help Center — WeldCert Knowledge Base",
  description:
    "Get answers to common questions about WeldCert welding certification management software. Setup guides, WPS/PQR workflows, welder qualification tracking, and audit preparation.",
  openGraph: {
    title: "WeldCert Help Center",
    description: "Everything you need to manage welding certifications and stay code-compliant with WeldCert.",
  },
  alternates: { canonical: "/help" },
};

export default function HelpPage() {
  return (
    <>
      <Header />
      <main>
        <div className="bg-gradient-to-br from-navy via-navy-light to-navy py-20 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Help Center</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Everything you need to manage welding certifications with WeldCert.
            Can&apos;t find what you need? Email{" "}
            <a href="mailto:support@weldcert.io" className="text-brand hover:underline">
              support@weldcert.io
            </a>
          </p>
        </div>
        <HelpCenter />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
