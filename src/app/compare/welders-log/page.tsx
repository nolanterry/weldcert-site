import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import type { Metadata } from "next";
import { ComparisonTable } from "./comparison-table";
import { Check, X, Clock, Shield, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "WeldCert vs Welders Log Comparison",
  description: "Compare WeldCert and Welders Log welder certification tracking software. WeldCert offers modern mobile-first design with a 14-day free trial. Welders Log is legacy desktop software.",
  alternates: { canonical: "/compare/welders-log" },
};

const QUICK_FACTS = [
  {
    category: "Platform Type",
    weldcert: "Modern cloud-based, mobile-first",
    welderslog: "Legacy desktop software only",
    winner: "weldcert"
  },
  {
    category: "Trial Availability", 
    weldcert: "14-day free trial, no credit card",
    welderslog: "Contact sales required",
    winner: "weldcert"
  },
  {
    category: "Mobile Access",
    weldcert: "Native mobile apps + web dashboard",
    welderslog: "Desktop only, no mobile support", 
    winner: "weldcert"
  },
  {
    category: "Pricing Model",
    weldcert: "Transparent: $79-299/month",
    welderslog: "Opaque: $125-195/month + setup",
    winner: "weldcert"
  }
];

function QuickComparisonCard({ fact }: { fact: typeof QUICK_FACTS[0] }) {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200">
      <h3 className="font-semibold text-lg mb-4">{fact.category}</h3>
      <div className="space-y-3">
        <div className={`flex items-start gap-3 p-3 rounded-lg ${fact.winner === 'weldcert' ? 'bg-green-50 border border-green-200' : 'bg-gray-50'}`}>
          {fact.winner === 'weldcert' ? (
            <Check className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
          ) : (
            <div className="w-4 h-4 mt-0.5 flex-shrink-0" />
          )}
          <div>
            <div className="font-medium text-brand mb-1">WeldCert</div>
            <div className="text-sm text-gray-600">{fact.weldcert}</div>
          </div>
        </div>
        <div className={`flex items-start gap-3 p-3 rounded-lg ${fact.winner === 'welderslog' ? 'bg-green-50 border border-green-200' : 'bg-gray-50'}`}>
          {fact.winner === 'welderslog' ? (
            <Check className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
          ) : (
            <X className="text-red-400 mt-0.5 flex-shrink-0" size={16} />
          )}
          <div>
            <div className="font-medium text-gray-900 mb-1">Welders Log</div>
            <div className="text-sm text-gray-600">{fact.welderslog}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WeldersLogComparisonPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-navy via-navy-light to-navy py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              WeldCert vs Welders Log:<br />
              <span className="text-brand">Which Welder Certification Software Is Right for You?</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Both platforms help with welder qualification tracking, but they serve different tech preferences and shop sizes. 
              Here's the honest comparison to help you choose the right solution.
            </p>
          </div>
        </section>

        {/* Quick Comparison Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The Key Differences at a Glance</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Before diving deep, here are the four biggest differences that matter most to crane companies.
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The Full Feature Breakdown</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Both platforms solve crane inspection challenges, but with different approaches and capabilities.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* WeldCert Column */}
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-brand mb-2">WeldCert</h3>
                  <p className="text-gray-600">Purpose-built for all crane types</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Shield className="text-brand" size={20} />
                    Crane Type Coverage
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Supports all crane types with specific inspection templates: mobile cranes (1926.1412), 
                    tower cranes (1926.1435), and overhead cranes (1910.179). Each template maps directly 
                    to OSHA requirements for that crane type, ensuring complete compliance coverage.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Clock className="text-brand" size={20} />
                    Getting Started
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    14-day free trial with no credit card required. Sign up, download the mobile app, 
                    and start inspecting within minutes. Setup involves adding your equipment and 
                    operators — the inspection templates are already OSHA-compliant out of the box.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Users className="text-brand" size={20} />
                    Target Market
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Designed for crane-focused companies of all sizes: independent operators with 2-3 cranes, 
                    mid-size rental companies, and large contractors with mixed fleets. The interface 
                    scales from simple single-operator use to enterprise multi-location management.
                  </p>
                </div>
              </div>

              {/* InspectAll Column */}
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">InspectAll</h3>
                  <p className="text-gray-600">Multi-industry inspection platform</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Shield className="text-gray-400" size={20} />
                    Crane Type Coverage
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Focuses primarily on overhead and gantry cranes (OSHA 1910.179) used in manufacturing 
                    and industrial facilities. Limited support for construction cranes. Templates are 
                    more generic to accommodate their broader industrial inspection focus.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Clock className="text-gray-400" size={20} />
                    Getting Started
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Sales-driven process requiring contact with their team for demos, pricing, and setup. 
                    No self-serve trial available. Implementation typically involves custom configuration 
                    and training sessions, making the sales cycle longer for larger deployments.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Users className="text-gray-400" size={20} />
                    Target Market
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Targets enterprise organizations across multiple industries: hospitals (medical equipment), 
                    manufacturing facilities (overhead cranes), and large crane service companies. 
                    Better suited for organizations needing broad inspection management beyond just cranes.
                  </p>
                </div>
              </div>
            </div>

            {/* When to Choose Each */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="text-xl font-bold text-green-800 mb-4">Choose WeldCert if you:</h3>
                <ul className="space-y-2 text-green-700">
                  <li className="flex items-start gap-2">
                    <Check className="text-green-600 mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-sm">Operate mobile, tower, or construction cranes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-green-600 mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-sm">Want to start with a free trial today</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-green-600 mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-sm">Need crane-specific OSHA compliance features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-green-600 mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-sm">Run a crane-focused business (any size)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-green-600 mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-sm">Want transparent pricing and quick setup</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Choose InspectAll if you:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check className="text-gray-600 mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-sm">Only operate overhead/gantry cranes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-gray-600 mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-sm">Need inspections for non-crane equipment too</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-gray-600 mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-sm">Are a large enterprise with complex requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-gray-600 mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-sm">Prefer custom implementations over standard solutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="text-gray-600 mt-0.5 flex-shrink-0" size={16} />
                    <span className="text-sm">Don't mind longer sales cycles</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <ComparisonTable />

        {/* Bottom Comparison Insights */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">The Bottom Line</h2>
            
            <div className="space-y-8">
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="font-semibold text-blue-900 mb-3">If you're a construction crane company...</h3>
                <p className="text-blue-800 text-sm">
                  WeldCert is purpose-built for your needs. You'll get mobile crane (1926.1412) and tower crane (1926.1435) 
                  templates that InspectAll doesn't offer, plus immediate access with a free trial. The software maps directly 
                  to construction crane regulations, not generic industrial equipment standards.
                </p>
              </div>

              <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                <h3 className="font-semibold text-purple-900 mb-3">If you're a manufacturing facility with overhead cranes...</h3>
                <p className="text-purple-800 text-sm">
                  Both platforms support OSHA 1910.179 compliance. WeldCert offers faster setup and transparent pricing, 
                  while InspectAll provides broader industrial equipment inspection capabilities if you need to manage 
                  non-crane equipment through the same platform.
                </p>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="font-semibold text-green-900 mb-3">If you're evaluating both platforms...</h3>
                <p className="text-green-800 text-sm">
                  Start with WeldCert's free trial to see if it meets your needs. It covers more crane types, 
                  offers transparent pricing, and provides crane-specific features. You can always explore InspectAll 
                  later if you need broader industrial inspection capabilities beyond cranes.
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