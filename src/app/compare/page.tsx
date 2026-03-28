import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import type { Metadata } from "next";
import { Wrench, FileSpreadsheet, FileText, Eye, ArrowRight, Shield, Clock, Users, CheckCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Compare WeldCert — See How We Stack Up",
  description: "Compare WeldCert with alternatives like WeldTrace, WeldsTracker, WeldEye, spreadsheets, and Welder's Log. See why welding companies choose our certification software.",
  alternates: { canonical: "/compare" },
};

const COMPARISONS = [
  {
    name: "WeldTrace",
    href: "/compare/weldtrace",
    icon: Wrench,
    description: "Modern welding certification software vs. legacy desktop platform",
    tagline: "Cloud-based, mobile-first solution vs. outdated desktop software"
  },
  {
    name: "WeldsTracker",
    href: "/compare/weldstracker",
    icon: Wrench,
    description: "Comprehensive welding management vs. basic tracking system",
    tagline: "Full AWS D1.1 compliance vs. simple weld tracking"
  },
  {
    name: "WeldEye/Kemppi",
    href: "/compare/weldeye",
    icon: Eye,
    description: "Welding certification management vs. equipment monitoring focus",
    tagline: "Welder qualification tracking vs. machine data collection"
  },
  {
    name: "Spreadsheets",
    href: "/compare/spreadsheets",
    icon: FileSpreadsheet,
    description: "Digital certification software vs. manual Excel tracking",
    tagline: "Replace Excel chaos with automated AWS D1.1 compliance"
  },
  {
    name: "Welder's Log",
    href: "/compare/welders-log",
    icon: FileText,
    description: "Comprehensive certification platform vs. simple logging tool",
    tagline: "Full qualification management vs. basic weld logging"
  }
];

const DIFFERENTIATORS = [
  {
    icon: Shield,
    title: "Complete AWS D1.1 Compliance",
    description: "Pre-built templates for all AWS D1.1 requirements. Automated WPQ tracking, PQR management, and welder certification renewals with audit-ready documentation."
  },
  {
    icon: Clock,
    title: "14-Day Free Trial",
    description: "Start tracking certifications today. No credit card required, no setup fees. Import your existing data and begin with industry-standard templates."
  },
  {
    icon: Users,
    title: "Built for Welding Companies",
    description: "Not a generic manufacturing tool. Every feature designed specifically for structural welding contractors, fabricators, and inspection companies."
  },
  {
    icon: CheckCircle,
    title: "Transparent Pricing",
    description: "Simple pricing at $199/month per company. No per-welder fees, no hidden costs, no enterprise sales process. Scale from 5 to 500 welders."
  }
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://weldcert.co"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Compare",
      "item": "https://weldcert.co/compare"
    }
  ]
};

const comparisonStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "WeldCert Comparisons",
  "description": "Compare WeldCert with other welding certification management solutions",
  "itemListElement": COMPARISONS.map((comparison, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": `WeldCert vs ${comparison.name}`,
    "description": comparison.tagline,
    "url": `https://weldcert.co${comparison.href}`
  }))
};

export default function ComparePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(comparisonStructuredData) }}
      />
      <Header />
      <main id="main-content">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-navy via-navy-light to-navy py-20 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Compare WeldCert.<br />
            <span className="text-brand">See How We Stack Up.</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Honest comparisons with alternatives. See why welding companies choose WeldCert 
            for AWS D1.1 compliance and welder certification management.
          </p>
        </div>

        {/* Comparison Cards Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Head-to-Head Comparisons</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We've compared WeldCert with the most common alternatives welding companies consider. 
                See the honest breakdown of features, pricing, and AWS D1.1 compliance capabilities.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {COMPARISONS.map((comparison) => (
                <Link
                  key={comparison.name}
                  href={comparison.href}
                  className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-brand hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-brand/10 rounded-lg group-hover:bg-brand/20 transition-colors">
                      <comparison.icon className="text-brand" size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-base">WeldCert</h3>
                        <span className="text-gray-400 font-bold text-sm">vs</span>
                        <h3 className="font-semibold text-base text-gray-700">{comparison.name}</h3>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{comparison.description}</p>
                      <p className="text-brand font-medium text-sm">{comparison.tagline}</p>
                      <div className="flex items-center gap-2 mt-4 text-brand font-medium text-sm group-hover:gap-3 transition-all">
                        Compare <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose WeldCert Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose WeldCert?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Purpose-built for welding companies who need AWS D1.1 compliance without the complexity 
                of generic manufacturing or legacy desktop software.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {DIFFERENTIATORS.map((diff) => (
                <div key={diff.title} className="text-center">
                  <div className="w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <diff.icon className="text-brand" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{diff.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{diff.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 bg-navy">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Ready to See the Difference?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Start your 14-day free trial today. No credit card required. 
              See why welding companies choose WeldCert for AWS D1.1 compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="https://app.weldcert.co/sign-up"
                className="bg-brand text-navy font-semibold px-8 py-4 rounded-lg hover:bg-brand-light transition-colors text-lg"
              >
                Start Free Trial
              </a>
              <a 
                href="/demo"
                className="border border-brand text-brand font-semibold px-8 py-4 rounded-lg hover:bg-brand hover:text-navy transition-colors text-lg"
              >
                Book a Demo
              </a>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}