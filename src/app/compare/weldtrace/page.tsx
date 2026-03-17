import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import type { Metadata } from "next";
import { ComparisonTable } from "./comparison-table";
import { Check, X, DollarSign, Smartphone, Zap, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "WeldCert vs WeldTrace — Welder Certification Tracking Comparison",
  description:
    "Compare WeldCert and WeldTrace for welder qualification tracking. WeldCert offers transparent pricing starting at $79/mo with a 14-day free trial. WeldTrace requires enterprise sales engagement.",
  alternates: { canonical: "/compare/weldtrace" },
};

const QUICK_FACTS = [
  {
    category: "Target Customer",
    weldcert: "Small-to-mid fabrication shops (5-100 welders)",
    competitor: "Large EPC contractors & industrial fabricators",
    winner: "weldcert" as const,
  },
  {
    category: "Pricing",
    weldcert: "Transparent: $79-299/month, published online",
    competitor: "Not published — enterprise sales required",
    winner: "weldcert" as const,
  },
  {
    category: "Mobile Access",
    weldcert: "Full mobile app — welders log activity from the shop floor",
    competitor: "Desktop/web only — no mobile app",
    winner: "weldcert" as const,
  },
  {
    category: "Getting Started",
    weldcert: "14-day free trial, no credit card, setup in minutes",
    competitor: "Demo request → sales call → custom quote → implementation",
    winner: "weldcert" as const,
  },
];

function QuickComparisonCard({
  fact,
}: {
  fact: (typeof QUICK_FACTS)[0];
}) {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200">
      <h3 className="font-semibold text-lg mb-4">{fact.category}</h3>
      <div className="space-y-3">
        <div
          className={`flex items-start gap-3 p-3 rounded-lg ${
            fact.winner === "weldcert"
              ? "bg-green-50 border border-green-200"
              : "bg-gray-50"
          }`}
        >
          {fact.winner === "weldcert" ? (
            <Check
              className="text-green-500 mt-0.5 flex-shrink-0"
              size={16}
            />
          ) : (
            <div className="w-4 h-4 mt-0.5 flex-shrink-0" />
          )}
          <div>
            <div className="font-medium text-brand mb-1">WeldCert</div>
            <div className="text-sm text-gray-600">{fact.weldcert}</div>
          </div>
        </div>
        <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
          <X className="text-red-400 mt-0.5 flex-shrink-0" size={16} />
          <div>
            <div className="font-medium text-gray-900 mb-1">WeldTrace</div>
            <div className="text-sm text-gray-600">{fact.competitor}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WeldTraceComparisonPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-navy via-navy-light to-navy py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              WeldCert vs WeldTrace:
              <br />
              <span className="text-brand">
                Enterprise Complexity or Modern Simplicity?
              </span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              WeldTrace is built for large EPC contractors with enterprise
              budgets. WeldCert delivers the same code compliance — AWS D1.1,
              ASME IX, API 1104 — at a fraction of the cost, with mobile
              access and instant setup.
            </p>
          </div>
        </section>

        {/* Quick Comparison */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                The Key Differences at a Glance
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                WeldTrace targets enterprise fabricators. WeldCert is built for
                shops that need compliance without the complexity.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {QUICK_FACTS.map((fact) => (
                <QuickComparisonCard key={fact.category} fact={fact} />
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Comparison */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                The Full Feature Breakdown
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Both platforms manage welder qualifications and procedures, but
                they&apos;re designed for very different shops.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* WeldCert */}
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-brand mb-2">
                    WeldCert
                  </h3>
                  <p className="text-gray-600">
                    Modern, mobile-first qualification tracking
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Shield className="text-brand" size={20} />
                    Code Coverage
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Full support for AWS D1.1 structural welding, ASME Section
                    IX pressure vessels, and API 1104 pipeline standards.
                    Pre-built templates for WPS, PQR, and WPQ/WQTR records
                    with all essential variables mapped to code requirements.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Smartphone className="text-brand" size={20} />
                    Shop Floor Access
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Native mobile app lets welders log activity, upload weld
                    photos, and check their qualification status from the shop
                    floor or field. Works offline and syncs when connected.
                    QC managers get a full web dashboard for oversight.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <DollarSign className="text-brand" size={20} />
                    Pricing
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Transparent pricing published online. Starter plan at
                    $79/mo covers up to 15 welders. Pro at $149/mo handles
                    50 welders with API access. No setup fees. No annual
                    contracts required.
                  </p>
                </div>
              </div>

              {/* WeldTrace */}
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    WeldTrace
                  </h3>
                  <p className="text-gray-600">
                    Enterprise weld management platform
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Shield className="text-gray-400" size={20} />
                    Code Coverage
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Comprehensive multi-code support including ASME IX, AWS,
                    ISO, and API standards. Originally built as &quot;Smart
                    Welding Manager&quot; and rebuilt as WeldTrace. Designed for
                    EPC-scale projects with complex weld maps and NDT tracking.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Smartphone className="text-gray-400" size={20} />
                    Shop Floor Access
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Desktop and web-based platform. No dedicated mobile app
                    for welders. QC managers access the system from office
                    workstations. Field data collection requires separate
                    processes or manual entry back at the office.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <DollarSign className="text-gray-400" size={20} />
                    Pricing
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Enterprise pricing not published. Requires contact with
                    sales team for demo and custom quote. Implementation
                    typically involves onboarding and configuration services.
                    Likely $500+/mo based on enterprise positioning.
                  </p>
                </div>
              </div>
            </div>

            {/* When to Choose */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="text-xl font-bold text-green-800 mb-4">
                  Choose WeldCert if you:
                </h3>
                <ul className="space-y-2 text-green-700">
                  <li className="flex items-start gap-2">
                    <Check
                      className="text-green-600 mt-0.5 flex-shrink-0"
                      size={16}
                    />
                    <span className="text-sm">
                      Run a fabrication shop with 5-100 welders
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check
                      className="text-green-600 mt-0.5 flex-shrink-0"
                      size={16}
                    />
                    <span className="text-sm">
                      Want to start tracking qualifications today, not next
                      quarter
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check
                      className="text-green-600 mt-0.5 flex-shrink-0"
                      size={16}
                    />
                    <span className="text-sm">
                      Need welders to log activity from the shop floor via
                      mobile
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check
                      className="text-green-600 mt-0.5 flex-shrink-0"
                      size={16}
                    />
                    <span className="text-sm">
                      Want transparent pricing without a sales process
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check
                      className="text-green-600 mt-0.5 flex-shrink-0"
                      size={16}
                    />
                    <span className="text-sm">
                      Need AWS D1.1 and ASME IX compliance without ERP
                      complexity
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Choose WeldTrace if you:
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check
                      className="text-gray-600 mt-0.5 flex-shrink-0"
                      size={16}
                    />
                    <span className="text-sm">
                      Are a large EPC contractor with 500+ welders
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check
                      className="text-gray-600 mt-0.5 flex-shrink-0"
                      size={16}
                    />
                    <span className="text-sm">
                      Need project-level weld maps and complex NDT tracking
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check
                      className="text-gray-600 mt-0.5 flex-shrink-0"
                      size={16}
                    />
                    <span className="text-sm">
                      Have dedicated IT staff for implementation and training
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check
                      className="text-gray-600 mt-0.5 flex-shrink-0"
                      size={16}
                    />
                    <span className="text-sm">
                      Need ERP-level integration with existing systems
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check
                      className="text-gray-600 mt-0.5 flex-shrink-0"
                      size={16}
                    />
                    <span className="text-sm">
                      Have enterprise budget and long procurement cycles
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <ComparisonTable />

        {/* Bottom Line */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              The Bottom Line
            </h2>

            <div className="space-y-8">
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="font-semibold text-blue-900 mb-3">
                  If you&apos;re a small-to-mid fabrication shop...
                </h3>
                <p className="text-blue-800 text-sm">
                  WeldTrace is overkill. You don&apos;t need ERP-level weld
                  management — you need to track qualifications, get continuity
                  alerts, and pass audits. WeldCert does exactly that at a
                  price that makes sense for a 20-person shop.
                </p>
              </div>

              <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                <h3 className="font-semibold text-purple-900 mb-3">
                  If you&apos;re an AISC-certified structural fabricator...
                </h3>
                <p className="text-purple-800 text-sm">
                  Your AWS D1.1 compliance requirements are well-served by
                  WeldCert. You get WPS/PQR management, continuity tracking
                  with automated alerts, and audit-ready PDF exports — the
                  exact documentation AISC auditors ask for, without the
                  enterprise price tag.
                </p>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="font-semibold text-green-900 mb-3">
                  If you&apos;re evaluating both platforms...
                </h3>
                <p className="text-green-800 text-sm">
                  Start with WeldCert&apos;s 14-day free trial. You&apos;ll
                  know within a week if it covers your needs. Most shops under
                  100 welders find it does everything WeldTrace does for
                  day-to-day compliance — without the enterprise overhead.
                </p>
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
