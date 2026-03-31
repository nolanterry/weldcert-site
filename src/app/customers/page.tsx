import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import { CASE_STUDIES } from "@/lib/case-study-data";
import { Clock, ShieldCheck, FileCheck, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customers",
  description:
    "See how fabrication shops and welding companies use WeldCert to pass AWS audits, track welder qualifications, and eliminate spreadsheet chaos.",
  alternates: { canonical: "/customers" },
};

const METRICS = [
  { value: "85%", label: "Less audit prep time", icon: Clock },
  { value: "100%", label: "Qualification tracking accuracy", icon: ShieldCheck },
  { value: "0", label: "Missed certification renewals", icon: FileCheck },
];

export default function CustomersPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-gradient-to-br from-navy via-navy-light to-navy py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Trusted by Fabrication Shops
              <br />
              <span className="text-brand">That Can&apos;t Afford Audit Failures</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              From small specialty shops to multi-shift AISC-certified fabricators,
              WeldCert keeps welder qualifications organized, current, and audit-ready.
            </p>
          </div>
        </section>

        {/* Metrics */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {METRICS.map((m) => (
                <div key={m.label} className="text-center">
                  <m.icon size={32} className="mx-auto mb-3 text-brand" />
                  <p className="text-4xl font-bold text-gray-900">{m.value}</p>
                  <p className="text-gray-600 mt-1">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Customer Stories */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Customer Success Stories
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                See how fabrication shops and welding companies use WeldCert to
                eliminate spreadsheet chaos and achieve perfect audit compliance.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {CASE_STUDIES.map((study) => (
                <div
                  key={study.slug}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {study.companyName}
                    </h3>
                    <span className="bg-brand/10 text-brand text-sm px-3 py-1 rounded-full">
                      {study.industry}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {study.hero.summary}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="bg-gray-50 px-4 py-2 rounded-lg">
                      <div className="font-bold text-brand text-lg">
                        {study.hero.keyMetric}
                      </div>
                      <div className="text-sm text-gray-600">Key Result</div>
                    </div>
                    <a
                      href={`/customers/${study.slug}`}
                      className="inline-flex items-center gap-1 text-brand font-semibold hover:text-brand-dark transition-colors"
                    >
                      Read Story <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://app.weldcert.io/sign-up"
                  className="inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                >
                  Start Your Free Trial <ArrowRight size={18} />
                </a>
                <a
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold px-8 py-3 rounded-lg transition-colors"
                >
                  Book a Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
