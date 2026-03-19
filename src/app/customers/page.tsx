import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import { Star, Quote, Clock, ShieldCheck, FileCheck } from "lucide-react";
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

const TESTIMONIALS = [
  {
    quote:
      "We had 47 welders across three shifts and tracked everything in a shared Excel file. One day the file got corrupted and we lost 6 months of qualification records. That was the last straw.",
    name: "Rick Stanton",
    title: "QC Manager",
    company: "Precision Structural Fabricators",
    location: "Pittsburgh, PA",
    metric: "Zero data loss since switching",
  },
  {
    quote:
      "Our AWS D1.1 audit used to be a two-week fire drill. Last time, the inspector was in and out in half a day. Every WPS, PQR, and welder continuity record was two clicks away.",
    name: "Angela Torres",
    title: "Quality Director",
    company: "Southern Steel Works",
    location: "Birmingham, AL",
    metric: "Audit prep reduced from 2 weeks to 2 hours",
  },
  {
    quote:
      "I got a call from our AISC auditor asking if we changed quality systems. He said our documentation was the best he'd seen in 20 years of auditing fabrication shops.",
    name: "James Kowalski",
    title: "Owner",
    company: "Kowalski Iron & Steel",
    location: "Milwaukee, WI",
    metric: "AISC certification renewed with zero NCRs",
  },
  {
    quote:
      "WeldCert caught that two of our welders' certifications were expiring in 30 days. Under the old system, we wouldn't have known until an inspector flagged it. That would have shut down an active project.",
    name: "Marcus Johnson",
    title: "Welding Supervisor",
    company: "Delta Fabrication Group",
    location: "Memphis, TN",
    metric: "Automated renewal alerts saved 2 active projects",
  },
  {
    quote:
      "The continuity log tracking alone justifies the cost. AWS requires proof your welders have used each process within the last 6 months. Tracking that manually for 30+ welders was a nightmare.",
    name: "Linda Park",
    title: "QA/QC Coordinator",
    company: "Pacific Structural Steel",
    location: "Portland, OR",
    metric: "100% continuity log compliance",
  },
  {
    quote:
      "We bid on a DOT bridge project that required full welder qualification documentation. I exported everything from WeldCert in 15 minutes. Our competitor took a week and still had gaps. We won the contract.",
    name: "Robert Vance",
    title: "Estimating Manager",
    company: "Tri-State Bridge & Steel",
    location: "Columbus, OH",
    metric: "Won $2.3M contract with faster documentation",
  },
];

const CASE_STUDIES = [
  {
    company: "Precision Structural Fabricators",
    industry: "Structural Steel Fabrication",
    scale: "47 welders, 3 shifts",
    challenge:
      "Managed welder qualifications in a shared spreadsheet that multiple supervisors edited simultaneously. Data conflicts, accidental deletions, and version confusion led to incomplete records during their AISC audit — resulting in 3 non-conformance reports.",
    solution:
      "Deployed WeldCert with role-based access for supervisors and QC staff. Imported all existing welder records and WPS/PQR documentation. Set up automated certification expiration alerts and continuity log tracking.",
    results: [
      "Eliminated spreadsheet conflicts — single source of truth for all qualification data",
      "Passed next AISC audit with zero non-conformance reports",
      "Reduced QC manager's administrative time by 12 hours per week",
      "Onboarded new welders 60% faster with digital qualification workflows",
    ],
  },
  {
    company: "Southern Steel Works",
    industry: "Industrial & Commercial Fabrication",
    scale: "23 welders, AISC-certified, AWS D1.1 + D1.5",
    challenge:
      "Multi-code shop working under both AWS D1.1 (structural) and D1.5 (bridge) with different qualification requirements. QC team spent 80+ hours preparing for each annual audit, pulling records from filing cabinets and cross-referencing against code requirements manually.",
    solution:
      "Configured WeldCert with code-specific qualification templates for D1.1 and D1.5. Linked each welder to their applicable codes, processes, and positions. Automated continuity tracking with 30/60/90-day expiration warnings.",
    results: [
      "Audit preparation reduced from 80+ hours to under 4 hours",
      "Inspector completed review in half a day (previously took 2 full days)",
      "Identified 5 welders with lapsed continuity records before the audit",
      "Qualified for expedited AISC renewal based on documentation quality",
    ],
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={16} className="fill-brand text-brand" />
      ))}
    </div>
  );
}

export default function CustomersPage() {
  return (
    <>
      <Header />
      <main>
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

        {/* Testimonials Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
              What Our Customers Say
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Real feedback from QC managers, welding supervisors, and shop owners
              who switched from spreadsheets to WeldCert.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {TESTIMONIALS.map((t) => (
                <div
                  key={t.name}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col"
                >
                  <Quote size={24} className="text-brand/30 mb-3" />
                  <p className="text-gray-700 flex-1 mb-4 leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="border-t border-gray-100 pt-4 mt-auto">
                    <Stars />
                    <p className="font-semibold text-gray-900 mt-2">{t.name}</p>
                    <p className="text-sm text-gray-500">
                      {t.title}, {t.company}
                    </p>
                    <p className="text-sm text-gray-400">{t.location}</p>
                    <p className="text-xs text-brand font-medium mt-2">
                      {t.metric}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
              Customer Stories
            </h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              See how fabrication shops transformed their qualification tracking
              with WeldCert.
            </p>
            <div className="space-y-12">
              {CASE_STUDIES.map((cs) => (
                <div
                  key={cs.company}
                  className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
                >
                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="bg-brand/10 text-brand text-sm font-medium px-3 py-1 rounded-full">
                      {cs.industry}
                    </span>
                    <span className="bg-gray-200 text-gray-700 text-sm font-medium px-3 py-1 rounded-full">
                      {cs.scale}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {cs.company}
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        The Challenge
                      </h4>
                      <p className="text-gray-600">{cs.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        The Solution
                      </h4>
                      <p className="text-gray-600">{cs.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Results
                      </h4>
                      <ul className="space-y-2">
                        {cs.results.map((r) => (
                          <li
                            key={r}
                            className="flex items-start gap-2 text-gray-600"
                          >
                            <ShieldCheck
                              size={16}
                              className="text-brand mt-1 shrink-0"
                            />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
