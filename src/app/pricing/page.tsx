import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import { FAQSection } from "@/components/faq-section";
import type { Metadata } from "next";
import { PricingTiers } from "./pricing-tiers";
import { ComparisonTable } from "./comparison-table";
import { TrustBadges } from "./trust-badges";

export const metadata: Metadata = {
  title: "Pricing",
  description: "WeldCert pricing: 14-day free trial, then starting at $79/mo for 15 welders. Pro $149/mo for 50 welders. All features included. Cheaper than one OSHA fine.",
  alternates: { canonical: "/pricing" },
};

const pricingFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does WeldCert meet AWS D1.1 and ASME Section IX requirements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. WeldCert's qualification tracking is built directly from AWS D1.1, ASME Section IX, API 1104, and OSHA 29 CFR 1910.252 requirements. Every welder qualification, continuity record, and activity log maps to specific regulatory requirements. Your digital records meet all welding code documentation standards.",
      },
    },
    {
      "@type": "Question",
      name: "Can my welders use WeldCert without cell service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. WeldCert works offline on any smartphone. Welders can log daily activity, record process details, and update their status without connectivity. Everything syncs automatically when they're back in range.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to log daily activity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most welders complete their daily activity log in under 30 seconds. That's faster than filling out a paper timesheet — and the result is a timestamped, process-documented digital record that automatically maintains their continuity requirements.",
      },
    },
    {
      "@type": "Question",
      name: "What happens when a welder's qualification is about to expire?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WeldCert automatically sends email and SMS alerts 30, 60, and 90 days before any qualification expires. Quality managers get instant notifications with renewal deadlines, so no certifications slip through the cracks.",
      },
    },
    {
      "@type": "Question",
      name: "Can I try WeldCert before committing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We offer a 14-day free trial with up to 15 welders. No credit card required. You'll have access to every feature so you can see how WeldCert works with your actual team and processes.",
      },
    },
    {
      "@type": "Question",
      name: "How does pricing work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "WeldCert starts at $79/month (or $59/month on annual billing) for up to 15 welders. Pro is $149/month for up to 50 welders. Enterprise is $299/month for unlimited welders. Every plan includes all features, smart alerts, and support.",
      },
    },
    {
      "@type": "Question",
      name: "Will auditors accept digital qualification records?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. AWS, ASME, and OSHA inspectors require that qualification records be maintained and available for review — they do not require paper. Digital records with welder names, dates, process qualifications, and continuity logs satisfy all documentation requirements. Digital records are often preferred because they're organized and searchable.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get my team started?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sign up for a free trial, add your welders to the roster, upload their current qualifications, and they can start logging activity the same day. No training required — if they can use a smartphone, they can use WeldCert.",
      },
    },
  ],
};

export default function PricingPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pricingFaqSchema) }}
        />
        <div className="bg-gradient-to-br from-navy via-navy-light to-navy py-20 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Simple, Transparent Pricing</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Three plans. Everything included. Still cheaper than one OSHA fine.
          </p>
        </div>
        <PricingTiers />
        <ComparisonTable />
        <TrustBadges />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
