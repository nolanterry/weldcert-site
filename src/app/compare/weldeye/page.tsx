import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import type { Metadata } from "next";
import { ComparisonTable } from "./comparison-table";
import { Check, X, Globe, Smartphone, Link2, DollarSign } from "lucide-react";

export const metadata: Metadata = {
  title: "WeldCert vs WeldEye (Kemppi) — Welding Software Comparison",
  description:
    "Compare WeldCert and Kemppi WeldEye for welder qualification and weld management. WeldCert works with any equipment brand. WeldEye is tied to Kemppi welding machines.",
};

const QUICK_FACTS = [
  {
    category: "Equipment Compatibility",
    weldcert: "Works with ANY welding equipment — brand-agnostic",
    competitor: "Designed for Kemppi machines — limited universal support",
    winner: "weldcert" as const,
  },
  {
    category: "Company Origin",
    weldcert: "US-based, built for American welding codes (AWS, ASME)",
    competitor: "Finnish company (Kemppi Oy) — stronger on ISO/European standards",
    winner: "weldcert" as const,
  },
  {
    category: "Pricing",
    weldcert: "Transparent: $79-299/month published online",
    competitor: "Custom pricing — contact Kemppi sales team",
    winner: "weldcert" as const,
  },
  {
    category: "Focus",
    weldcert: "Welder qualification tracking + compliance management",
    competitor: "Welding production management + machine monitoring",
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
            <div className="font-medium text-gray-900 mb-1">
              WeldEye (Kemppi)
            </div>
            <div className="text-sm text-gray-600">{fact.competitor}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WeldEyeComparisonPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-navy via-navy-light to-navy py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              WeldCert vs WeldEye (Kemppi):
              <br />
              <span className="text-brand">
                Brand-Agnostic vs Equipment-Locked
              </span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Kemppi WeldEye is welding management software tied to Kemppi
              machines. WeldCert is equipment-agnostic — it tracks welder
              qualifications and compliance no matter what brand of equipment
              your shop runs.
            </p>
          </div>
        </section>

        {/* Key Difference Callout */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-amber-50 rounded-xl p-8 border border-amber-200">
              <div className="flex items-start gap-4">
                <Link2
                  className="text-amber-600 mt-1 flex-shrink-0"
                  size={24}
                />
                <div>
                  <h3 className="font-bold text-amber-900 text-lg mb-2">
                    The Critical Difference: Vendor Lock-In
                  </h3>
                  <p className="text-amber-800 text-sm leading-relaxed">
                    WeldEye is built by a welding machine manufacturer. Its
                    deepest features — arc data monitoring, automated
                    parameters, production analytics — work best (or only)
                    with Kemppi equipment. If your shop runs Lincoln, Miller,
                    ESAB, or mixed equipment, you won&apos;t get the full
                    value. WeldCert doesn&apos;t care what machines you
                    run — it tracks the welders, their qualifications, and
                    your compliance paperwork regardless of equipment brand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Comparison */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Side-by-Side Comparison
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Two fundamentally different approaches to welding software.
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
                What Each Platform Does Best
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* WeldCert */}
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-brand mb-2">
                    WeldCert
                  </h3>
                  <p className="text-gray-600">
                    Qualification tracking &amp; compliance
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Globe className="text-brand" size={20} />
                    Equipment Agnostic
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Tracks welders and their qualifications independent of
                    equipment. Run Lincoln, Miller, ESAB, Kemppi, or any mix —
                    WeldCert manages the human side: who is qualified for
                    what process, when they need to re-qualify, and whether
                    your paperwork is audit-ready.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Smartphone className="text-brand" size={20} />
                    US Code Focus
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Built for American welding standards: AWS D1.1 structural,
                    ASME Section IX pressure vessels, API 1104 pipeline.
                    Templates map directly to code-required essential variables.
                    AISC audit-ready out of the box.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <DollarSign className="text-brand" size={20} />
                    Accessible Pricing
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    $79-299/mo with a free trial. No equipment purchase
                    required. No vendor lock-in. Cancel anytime.
                  </p>
                </div>
              </div>

              {/* WeldEye */}
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    WeldEye (Kemppi)
                  </h3>
                  <p className="text-gray-600">
                    Welding production management
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Globe className="text-gray-400" size={20} />
                    Machine Integration
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Connects directly to Kemppi welding machines for real-time
                    arc data, automated parameter collection, and production
                    analytics. Claims universal brand support but deepest
                    features require Kemppi hardware.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Smartphone className="text-gray-400" size={20} />
                    ISO / European Focus
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Strong on ISO 9606 and European welding standards. Finnish
                    origin means European code support is first-class. American
                    codes (AWS, ASME) are supported but may not be as deeply
                    integrated.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <DollarSign className="text-gray-400" size={20} />
                    Custom Pricing
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    No published pricing. Requires contact with Kemppi sales
                    for a custom quote. Often bundled with equipment purchases.
                    Expect enterprise-level pricing for standalone software.
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
                      Run mixed equipment brands (Lincoln, Miller, ESAB, etc.)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check
                      className="text-green-600 mt-0.5 flex-shrink-0"
                      size={16}
                    />
                    <span className="text-sm">
                      Need AWS D1.1 or ASME IX compliance for US projects
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check
                      className="text-green-600 mt-0.5 flex-shrink-0"
                      size={16}
                    />
                    <span className="text-sm">
                      Want qualification tracking without buying new equipment
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check
                      className="text-green-600 mt-0.5 flex-shrink-0"
                      size={16}
                    />
                    <span className="text-sm">
                      Prefer transparent pricing and self-serve signup
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check
                      className="text-green-600 mt-0.5 flex-shrink-0"
                      size={16}
                    />
                    <span className="text-sm">
                      Are a US-based fabrication shop focused on compliance
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Choose WeldEye if you:
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check
                      className="text-gray-600 mt-0.5 flex-shrink-0"
                      size={16}
                    />
                    <span className="text-sm">
                      Already run an all-Kemppi welding fleet
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check
                      className="text-gray-600 mt-0.5 flex-shrink-0"
                      size={16}
                    />
                    <span className="text-sm">
                      Want real-time arc data and production analytics
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check
                      className="text-gray-600 mt-0.5 flex-shrink-0"
                      size={16}
                    />
                    <span className="text-sm">
                      Work primarily under ISO/European welding standards
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check
                      className="text-gray-600 mt-0.5 flex-shrink-0"
                      size={16}
                    />
                    <span className="text-sm">
                      Need machine-level monitoring beyond qualification tracking
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
                  Different tools for different problems
                </h3>
                <p className="text-blue-800 text-sm">
                  WeldEye is a welding production management system — it
                  monitors machines and production output. WeldCert is a
                  compliance management system — it tracks people and their
                  qualifications. If your primary concern is &quot;will we
                  pass an AISC audit?&quot; WeldCert is the answer. If your
                  concern is &quot;what are the arc parameters on bay 3?&quot;
                  WeldEye might be.
                </p>
              </div>

              <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                <h3 className="font-semibold text-purple-900 mb-3">
                  If you&apos;re a US fabrication shop...
                </h3>
                <p className="text-purple-800 text-sm">
                  WeldCert is built for your regulatory environment. AWS D1.1
                  and ASME IX templates, AISC audit-ready exports, and
                  continuity tracking designed around American code
                  requirements. No Kemppi hardware required.
                </p>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="font-semibold text-green-900 mb-3">
                  Try WeldCert free for 14 days
                </h3>
                <p className="text-green-800 text-sm">
                  No equipment to buy. No sales call needed. Sign up, add your
                  welders, and see if WeldCert solves your compliance
                  headaches. Most shops are up and running in under 30 minutes.
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
