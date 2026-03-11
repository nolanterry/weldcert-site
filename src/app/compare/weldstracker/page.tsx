import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import type { Metadata } from "next";
import { ComparisonTable } from "./comparison-table";
import { Check, X, DollarSign, Smartphone, Users, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "WeldCert vs WeldsTracker — Welder Certification Software Comparison",
  description:
    "Compare WeldCert and WeldsTracker for welder qualification tracking. WeldCert offers flat-rate pricing, modern mobile apps, and AI-powered features. WeldsTracker charges per user + per welder.",
};

const QUICK_FACTS = [
  {
    category: "Pricing Model",
    weldcert: "Flat rate: $79-299/mo — unlimited users included",
    competitor: "Per-user ($19.99) + per-welder ($6.99/mo) — costs scale fast",
    winner: "weldcert" as const,
  },
  {
    category: "Platform Design",
    weldcert: "Purpose-built modern SaaS with native mobile app",
    competitor: "WordPress-based marketing site, basic web app",
    winner: "weldcert" as const,
  },
  {
    category: "Mobile Access",
    weldcert: "Native iOS/Android app + responsive web dashboard",
    competitor: "Partial mobile support — limited functionality",
    winner: "weldcert" as const,
  },
  {
    category: "Trial Availability",
    weldcert: "14-day free trial, no credit card required",
    competitor: "Contact sales for access",
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
            <div className="font-medium text-gray-900 mb-1">WeldsTracker</div>
            <div className="text-sm text-gray-600">{fact.competitor}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WeldsTrackerComparisonPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-navy via-navy-light to-navy py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              WeldCert vs WeldsTracker:
              <br />
              <span className="text-brand">
                Flat-Rate Simplicity vs Per-Welder Pricing
              </span>
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              WeldsTracker charges per user AND per welder — costs add up
              fast as your shop grows. WeldCert offers flat-rate plans with
              unlimited users, modern mobile apps, and a free trial to prove
              the value before you pay.
            </p>
          </div>
        </section>

        {/* Pricing Breakdown */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                The Pricing Math That Matters
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Per-welder pricing sounds cheap until you do the math for your
                actual shop size.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center">
                <div className="text-sm text-gray-500 mb-2">10-Welder Shop</div>
                <div className="text-2xl font-bold text-red-600 mb-1">$90/mo</div>
                <div className="text-xs text-gray-400">WeldsTracker (1 user + 10 welders)</div>
                <div className="my-3 border-t border-gray-200" />
                <div className="text-2xl font-bold text-brand mb-1">$79/mo</div>
                <div className="text-xs text-gray-400">WeldCert Starter (15 welders incl.)</div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center">
                <div className="text-sm text-gray-500 mb-2">25-Welder Shop</div>
                <div className="text-2xl font-bold text-red-600 mb-1">$215/mo</div>
                <div className="text-xs text-gray-400">WeldsTracker (2 users + 25 welders)</div>
                <div className="my-3 border-t border-gray-200" />
                <div className="text-2xl font-bold text-brand mb-1">$149/mo</div>
                <div className="text-xs text-gray-400">WeldCert Pro (50 welders incl.)</div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 text-center">
                <div className="text-sm text-gray-500 mb-2">50-Welder Shop</div>
                <div className="text-2xl font-bold text-red-600 mb-1">$410/mo</div>
                <div className="text-xs text-gray-400">WeldsTracker (3 users + 50 welders)</div>
                <div className="my-3 border-t border-gray-200" />
                <div className="text-2xl font-bold text-brand mb-1">$149/mo</div>
                <div className="text-xs text-gray-400">WeldCert Pro (50 welders incl.)</div>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border border-green-200 text-center">
              <p className="text-green-800 font-semibold">
                A 50-welder shop saves <span className="text-2xl">$3,132/year</span> with WeldCert vs WeldsTracker
              </p>
            </div>
          </div>
        </section>

        {/* Quick Comparison */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Beyond Pricing: Feature Differences
              </h2>
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
                Platform Deep Dive
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Feature-by-feature comparison of what each platform delivers
                for welder certification tracking.
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
                    Modern compliance platform built in 2026
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Zap className="text-brand" size={20} />
                    Technology
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Built on a modern cloud stack with real-time sync, native
                    mobile apps, and a responsive web dashboard. Designed for
                    both shop floor and office use. Photo documentation,
                    digital signatures, and offline capability included.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Users className="text-brand" size={20} />
                    User Experience
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Clean, intuitive interface that welders and QC managers
                    can learn in minutes. Traffic-light dashboard shows
                    qualification status at a glance. Smart alerts warn
                    before certifications expire.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <DollarSign className="text-brand" size={20} />
                    Total Cost
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Flat monthly rate includes all users. No per-welder fees.
                    No setup charges. Your cost stays predictable whether
                    you add 5 welders or 50.
                  </p>
                </div>
              </div>

              {/* WeldsTracker */}
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    WeldsTracker
                  </h3>
                  <p className="text-gray-600">
                    Per-user/per-welder tracking tool
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Zap className="text-gray-400" size={20} />
                    Technology
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Web-based platform with WordPress-powered marketing site.
                    Partial mobile support but no dedicated native app. Basic
                    feature set covering core WPS and welder qualification
                    tracking needs.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Users className="text-gray-400" size={20} />
                    User Experience
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Functional but dated interface. Gets the job done for
                    basic qualification tracking. Limited dashboard and
                    reporting capabilities compared to modern alternatives.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <DollarSign className="text-gray-400" size={20} />
                    Total Cost
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    $19.99 per admin user plus $6.99 per welder per month.
                    Costs scale linearly with your workforce. A growing shop
                    faces growing bills with no volume discounts.
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
                      Want predictable costs that don&apos;t grow per welder
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check
                      className="text-green-600 mt-0.5 flex-shrink-0"
                      size={16}
                    />
                    <span className="text-sm">
                      Need a modern mobile app for shop floor use
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check
                      className="text-green-600 mt-0.5 flex-shrink-0"
                      size={16}
                    />
                    <span className="text-sm">
                      Value a clean, modern interface your team will adopt
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check
                      className="text-green-600 mt-0.5 flex-shrink-0"
                      size={16}
                    />
                    <span className="text-sm">
                      Want to try before you buy with a free trial
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check
                      className="text-green-600 mt-0.5 flex-shrink-0"
                      size={16}
                    />
                    <span className="text-sm">
                      Plan to grow — flat pricing means no surprise cost spikes
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Choose WeldsTracker if you:
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <Check
                      className="text-gray-600 mt-0.5 flex-shrink-0"
                      size={16}
                    />
                    <span className="text-sm">
                      Have a very small shop (under 10 welders) and want minimal cost
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check
                      className="text-gray-600 mt-0.5 flex-shrink-0"
                      size={16}
                    />
                    <span className="text-sm">
                      Only need basic WPS and qualification record keeping
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check
                      className="text-gray-600 mt-0.5 flex-shrink-0"
                      size={16}
                    />
                    <span className="text-sm">
                      Don&apos;t need mobile access or photo documentation
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check
                      className="text-gray-600 mt-0.5 flex-shrink-0"
                      size={16}
                    />
                    <span className="text-sm">
                      Are comfortable with a more basic interface
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
                  If you have 15+ welders...
                </h3>
                <p className="text-blue-800 text-sm">
                  WeldCert is cheaper than WeldsTracker at any shop size above
                  15 welders. And you get a significantly better product —
                  modern UI, mobile apps, automated continuity alerts, and
                  photo documentation that WeldsTracker doesn&apos;t offer.
                </p>
              </div>

              <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                <h3 className="font-semibold text-purple-900 mb-3">
                  If you&apos;re currently using WeldsTracker...
                </h3>
                <p className="text-purple-800 text-sm">
                  Your team will thank you for switching. WeldCert&apos;s
                  mobile app means welders can check qualifications and log
                  activity from the shop floor instead of walking to the
                  office computer. QC managers get a dashboard that actually
                  shows what matters.
                </p>
              </div>

              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="font-semibold text-green-900 mb-3">
                  Ready to compare for yourself?
                </h3>
                <p className="text-green-800 text-sm">
                  Start WeldCert&apos;s free trial and import your welder
                  roster. You&apos;ll see the difference in the first 10
                  minutes — no sales call required.
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
