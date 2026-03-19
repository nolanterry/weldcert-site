import type { Metadata } from "next";
import { ArrowRight, Check, Shield, AlertTriangle, Flame, Star, FileCheck, Clock, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "AWS D1.1 & ASME IX Welding Compliance Software | WeldCert",
  description: "Meet AWS D1.1, ASME Section IX, and AISC certification requirements with automated continuity tracking, WPS/PQR management, and one-click audit packages.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/lp/aws-weld-compliance" },
};

const FRAMEWORKS = [
  { code: "AWS D1.1", name: "Structural Welding Code — Steel", detail: "6-month continuity, WPS/PQR tracking" },
  { code: "ASME IX", name: "Boiler & Pressure Vessel Code", detail: "Performance qualification records" },
  { code: "AISC", name: "Certification Standards", detail: "Quality management documentation" },
  { code: "API 1104", name: "Pipeline Welding Standard", detail: "Welder qualification & testing records" },
];

const COMPLIANCE_GAPS = [
  { stat: "47%", text: "of fabrication shops have at least one lapsed welder continuity record at any given time" },
  { stat: "$2,500+", text: "average cost of a single AWS re-audit — not including project delays" },
  { stat: "6 months", text: "maximum gap before a welder must requalify under AWS D1.1 §6.3" },
];

const FEATURES = [
  { title: "Continuity Dashboard", desc: "Traffic-light view of every welder's qualification status. Green, yellow, red — no guessing." },
  { title: "Smart Expiration Alerts", desc: "Automatic notifications at 30, 60, and 90 days before a cert lapses. Configurable by role." },
  { title: "WPS/PQR/WPQ Registry", desc: "Upload, organize, and link procedure specs directly to welder qualifications." },
  { title: "Activity Log with Evidence", desc: "Welders log work from their phone — photo, GPS, timestamp, process, and position." },
  { title: "One-Click Audit Packages", desc: "Generate PDF bundles with all logs, certs, and WPS docs for any date range or welder." },
  { title: "Welder Roster Management", desc: "Track certifications, test dates, employers, and qualification ranges for every welder." },
  { title: "Process-Specific Tracking", desc: "SMAW, GMAW, FCAW, GTAW, SAW — track continuity per process per position." },
  { title: "Role-Based Access", desc: "QC managers see everything. Foremen see their crew. Welders log and view their own records." },
];

const TESTIMONIALS = [
  { name: "Tom H.", role: "CWI, AISC-Certified Fabricator", text: "We had a surprise CWI audit. I pulled every welder's continuity record, WPS, and PQR in 5 minutes. The auditor actually asked what software we use." },
  { name: "Sarah M.", role: "Quality Manager, Pressure Vessel Mfg", text: "ASME IX compliance used to be our biggest headache. Now every performance qualification is tracked and linked to the right procedure." },
  { name: "Ray K.", role: "Safety Director, Pipeline Contractor", text: "We run 200+ welders across 12 job sites. WeldCert is the only way we can track continuity without a full-time admin." },
];

const SIGNUP_URL = "https://app.weldcert.io/sign-up";

export default function LPAWSWeldCompliance() {
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
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-red-200">
            <AlertTriangle size={14} /> AWS D1.1 §6.3 Requires Documented Continuity Records
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900">
            Welding Compliance Shouldn&apos;t Live in a{" "}
            <span className="text-brand">Spreadsheet.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-8">
            WeldCert automates continuity tracking, WPS/PQR management, and audit-ready
            documentation for AWS D1.1, ASME Section IX, AISC, and API 1104.
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

      {/* Compliance Frameworks */}
      <section className="py-12 px-4 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-center text-gray-900 mb-8">Built-In Support for Major Welding Codes</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {FRAMEWORKS.map((fw) => (
              <div key={fw.code} className="text-center p-5 rounded-xl bg-gray-50 border border-gray-100">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand/10 text-brand mb-3">
                  <BookOpen size={20} />
                </div>
                <p className="text-sm font-bold text-gray-900">{fw.code}</p>
                <p className="text-xs text-gray-500 mt-1">{fw.name}</p>
                <p className="text-xs text-brand mt-2">{fw.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Gap Stats */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {COMPLIANCE_GAPS.map((g) => (
              <div key={g.stat} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-brand mb-3">{g.stat}</p>
                <p className="text-sm text-gray-500">{g.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
            Compliance Features Built for Welding
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {FEATURES.map((f) => (
              <div key={f.title} className="flex items-start gap-3 p-5 rounded-lg bg-white border border-gray-100">
                <Check className="text-brand shrink-0 mt-0.5" size={18} />
                <div>
                  <p className="text-sm font-semibold text-gray-900">{f.title}</p>
                  <p className="text-xs text-gray-500 mt-1">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">
            Built for CWIs, QC Managers & Shop Foremen
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

      {/* Cost comparison */}
      <section className="py-16 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">One Failed Audit Costs More Than a Year of WeldCert</h2>
          <p className="text-gray-500 mb-8">
            A re-audit runs <span className="text-gray-900 font-semibold">$2,500+</span> plus project delays.
            WeldCert is <span className="text-gray-900 font-semibold">$79/month</span> — less than <span className="text-gray-900 font-semibold">$3/welder/day</span>.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <div className="bg-white border border-gray-200 rounded-xl p-6 flex-1 min-w-[200px] max-w-[250px]">
              <p className="text-xs text-gray-400 font-semibold mb-2">WITHOUT WELDCERT</p>
              <p className="text-3xl font-bold text-red-500">$2,500+</p>
              <p className="text-xs text-gray-400 mt-1">per re-audit + delays</p>
            </div>
            <div className="bg-white border-2 border-brand rounded-xl p-6 flex-1 min-w-[200px] max-w-[250px]">
              <p className="text-xs text-brand font-semibold mb-2">WITH WELDCERT</p>
              <p className="text-3xl font-bold text-gray-900">$79<span className="text-sm text-gray-400">/mo</span></p>
              <p className="text-xs text-brand mt-1">$59/mo billed annually</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Next Audit Will Ask for Documentation. Have It Ready.
          </h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            AWS, ASME, AISC, API — every code requires records. WeldCert makes them automatic.
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
