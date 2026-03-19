import type { Metadata } from "next";
import { ArrowRight, Check, Shield, AlertTriangle, Clock, FileText, Flame, Users, BarChart3, Star, Camera, Bell } from "lucide-react";

export const metadata: Metadata = {
  title: "Welding Certification Tracking Software | WeldCert",
  description: "Track welder qualifications, WPS/PQR records, and continuity logs in one platform. Built for AISC-certified fabrication shops. $79/mo, unlimited logs.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/lp/welding-certification-software" },
};

const PAIN_POINTS = [
  { icon: AlertTriangle, text: "Welder certs expiring without anyone noticing?" },
  { icon: Clock, text: "Scrambling to find continuity logs before an audit?" },
  { icon: FileText, text: "Tracking WPS/PQR/WPQ across spreadsheets and filing cabinets?" },
];

const FEATURES = [
  "Unlimited welding activity logs with photo evidence",
  "WPS, PQR & WPQ document management",
  "Welder roster with certification tracking",
  "Continuity dashboard — traffic-light status at a glance",
  "Smart expiration alerts (30, 60, 90 days)",
  "One-click PDF audit export packages",
  "GPS & timestamp on every log entry",
  "Role-based access (QC manager, foreman, welder)",
];

const TESTIMONIALS = [
  { name: "Mike R.", role: "QC Manager, AISC-Certified Fabricator", text: "We went from 3 filing cabinets to one dashboard. Our last CWI audit took 20 minutes instead of 2 days." },
  { name: "Carlos D.", role: "Shop Foreman, Structural Steel", text: "Welders log their activity from their phones. No more chasing paper logs at the end of the month." },
  { name: "Linda P.", role: "Quality Director, Pipeline Contractor", text: "The continuity tracking alone saved us. We caught 4 lapsed certs before our ASME audit." },
];

const SIGNUP_URL = "https://app.weldcert.io/sign-up";

export default function LPWeldingCertificationSoftware() {
  return (
    <main id="main-content" className="min-h-screen bg-white text-gray-700">
      {/* Minimal header */}
      <div className="border-b border-gray-200 py-4 px-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Flame className="text-brand" size={20} strokeWidth={2.5} />
            <span className="text-xl font-bold tracking-tight text-gray-900">
              Weld<span className="text-brand">Cert</span>
            </span>
          </div>
          <a href={SIGNUP_URL} className="text-sm font-semibold text-brand hover:text-brand-dark transition-colors">
            Sign In →
          </a>
        </div>
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand/5 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-brand/10 text-brand text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-brand/20">
            <Shield size={14} /> Built for AISC & AWS Compliance
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900">
            Stop Losing Welder Certs in Filing Cabinets.{" "}
            <span className="text-brand">Go Digital.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-8">
            WeldCert replaces spreadsheets, binders, and guesswork with one platform to track
            every welder qualification, continuity log, and WPS/PQR record.
          </p>
          <a
            href={SIGNUP_URL}
            className="inline-flex items-center justify-center gap-2 bg-brand text-white font-bold px-10 py-5 rounded-xl hover:bg-brand-dark transition-colors text-lg shadow-lg shadow-brand/25"
          >
            Start Your Free 14-Day Trial <ArrowRight size={20} />
          </a>
          <p className="mt-4 text-sm text-gray-400">No credit card required · Set up in 10 minutes</p>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-12 px-4 border-b border-gray-100">
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {PAIN_POINTS.map((p) => (
              <div key={p.text} className="flex flex-col items-center text-center p-6 rounded-xl bg-gray-50 border border-gray-100">
                <p.icon className="text-amber-500 mb-3" size={28} />
                <p className="text-sm text-gray-600 font-medium">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stat */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-6xl md:text-7xl font-bold text-brand mb-4">6 months</p>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            That&apos;s how long a welder has to requalify if continuity lapses under AWS D1.1.
            WeldCert makes sure you never miss the window.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
            Everything You Need to Stay Audit-Ready
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {FEATURES.map((f) => (
              <div key={f} className="flex items-start gap-3 p-4 rounded-lg bg-white border border-gray-100">
                <Check className="text-brand shrink-0 mt-0.5" size={18} />
                <span className="text-sm text-gray-600">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">
            Trusted by Fabrication Shops
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-gray-50 border border-gray-100 rounded-xl p-6">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-amber-400 fill-amber-400" />)}
                </div>
                <p className="text-sm text-gray-600 mb-4 italic">&ldquo;{t.text}&rdquo;</p>
                <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                <p className="text-xs text-gray-400">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Cheaper Than One Failed Audit</h2>
          <p className="text-gray-500 mb-8">
            A single AWS re-audit costs <span className="text-gray-900 font-semibold">$2,500+</span>.
            WeldCert starts at <span className="text-gray-900 font-semibold">$79/month</span>.
          </p>
          <div className="bg-white border-2 border-brand rounded-2xl p-8">
            <p className="text-sm text-brand font-semibold mb-2">STARTER</p>
            <p className="text-4xl font-bold text-gray-900 mb-1">$79<span className="text-lg text-gray-400">/mo</span></p>
            <p className="text-sm text-gray-400 mb-1">Up to 15 welders · 1 admin</p>
            <p className="text-xs text-brand mb-6">$59/mo billed annually</p>
            <ul className="text-left space-y-2 mb-8">
              {["Unlimited welding activity logs", "WPS/PQR/WPQ management", "Continuity dashboard with traffic lights", "Photo evidence with GPS & timestamp", "Smart expiration alerts", "One-click PDF audit exports"].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                  <Check size={16} className="text-brand shrink-0" />{f}
                </li>
              ))}
            </ul>
            <a
              href={SIGNUP_URL}
              className="block w-full bg-brand text-white font-bold py-4 rounded-xl hover:bg-brand-dark transition-colors text-center"
            >
              Start Free 14-Day Trial
            </a>
            <p className="text-xs text-gray-400 mt-3">No credit card required</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Next CWI Audit Shouldn&apos;t Be a Fire Drill
          </h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            Every welder cert, every continuity log, every WPS — searchable and exportable in seconds.
          </p>
          <a
            href={SIGNUP_URL}
            className="inline-flex items-center justify-center gap-2 bg-brand text-white font-bold px-10 py-5 rounded-xl hover:bg-brand-dark transition-colors text-lg shadow-lg shadow-brand/25"
          >
            Get Started Free <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* Minimal footer */}
      <footer className="border-t border-gray-200 py-6 px-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between text-xs text-gray-400">
          <p>© 2026 WeldCert. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-gray-500">Privacy</a>
            <a href="/terms" className="hover:text-gray-500">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
