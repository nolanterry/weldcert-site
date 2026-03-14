import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Calendar, Shield, FileCheck, BarChart3, Users, Clock, ArrowRight, Award } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Demo — See WeldCert in Action",
  description: "Schedule a personalized demo of WeldCert welding certification management software. See continuity tracking, WPS/PQR management, and audit-ready reporting.",
};

const DEMO_INCLUDES = [
  { icon: Award, title: "Certification Dashboard", desc: "See every welder's qualifications, expiration dates, and continuity status at a glance — across all your facilities." },
  { icon: Clock, title: "Continuity Tracking", desc: "Watch how WeldCert automatically tracks the 6-month activity window required by AWS D1.1 and ASME IX." },
  { icon: FileCheck, title: "WPS/PQR Management", desc: "Digital welding procedure specs and procedure qualification records — linked to qualified welders automatically." },
  { icon: Shield, title: "Audit-Ready Reports", desc: "Generate compliance reports for CWI audits, code inspections, and client qualification requirements in seconds." },
];

const STATS = [
  { value: "47%", label: "Of shops have lapsed welder continuity records" },
  { value: "$2,500+", label: "Cost of a re-qualification test per welder" },
  { value: "6 mo", label: "AWS D1.1 continuity window — miss it and re-test" },
];

const FAQS = [
  { q: "How long is the demo?", a: "About 20 minutes. We customize it based on your welding codes — AWS D1.1, ASME IX, API 1104, or multi-code shops." },
  { q: "Who should attend?", a: "Your QC manager, welding supervisor, or whoever manages welder qualifications. CWIs welcome too." },
  { q: "Do you support our welding codes?", a: "WeldCert supports AWS D1.1, ASME IX, API 1104, and AISC certification tracking. We'll confirm your specific requirements." },
  { q: "Can I try it after the demo?", a: "Yes — every demo includes a 14-day free trial with full access." },
  { q: "How long does setup take?", a: "Most shops are up and running in under an hour. We help you import your existing welder data." },
];

export default function DemoPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-navy via-navy-light to-navy py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-brand/10 text-brand px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <Calendar size={16} />
                  Free Personalized Demo
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                  Stop Tracking Welder Certs in{" "}
                  <span className="text-brand">Spreadsheets</span>
                </h1>
                <p className="text-lg text-gray-300 mb-8">
                  Get a personalized walkthrough of WeldCert tailored to your shop.
                  See how continuity tracking, WPS/PQR management, and audit-ready reports
                  work for fabrication companies like yours.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#book"
                    className="inline-flex items-center justify-center gap-2 bg-brand text-white font-bold px-8 py-4 rounded-xl hover:bg-brand-dark transition-colors text-lg shadow-lg shadow-brand/25"
                  >
                    Book Your Demo <ArrowRight size={20} />
                  </a>
                  <a
                    href="https://app.weldcert.io/sign-up"
                    className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors"
                  >
                    Or Start Free Trial
                  </a>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                  <div className="space-y-4">
                    {STATS.map((s) => (
                      <div key={s.label} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                        <span className="text-2xl font-bold text-brand min-w-[80px]">{s.value}</span>
                        <span className="text-gray-300 text-sm">{s.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What you'll see */}
        <section className="py-20 bg-white px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-navy">What You&apos;ll See in Your Demo</h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Every demo is customized to your welding codes and shop size.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {DEMO_INCLUDES.map((item) => (
                <div key={item.title} className="flex gap-4 p-6 rounded-xl border border-gray-100 hover:border-brand/30 hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-lg bg-brand-light flex items-center justify-center shrink-0">
                    <item.icon className="text-brand" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form */}
        <section id="book" className="py-20 bg-gray-50 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-2 text-navy">Book Your Demo</h2>
            <p className="text-center text-gray-600 mb-10">Fill out the form and we&apos;ll schedule a time that works for you.</p>
            <form
              action="https://formspree.io/f/xpwzgvkd"
              method="POST"
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10 space-y-6"
            >
              <input type="hidden" name="_subject" value="WeldCert Demo Request" />
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input type="text" id="name" name="name" required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all" placeholder="Mike Johnson" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Work Email *</label>
                  <input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all" placeholder="mike@steelfab.com" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company *</label>
                  <input type="text" id="company" name="company" required className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all" placeholder="Precision Steel Fabricators" />
                </div>
                <div>
                  <label htmlFor="welders" className="block text-sm font-medium text-gray-700 mb-2">Number of Welders</label>
                  <select id="welders" name="welder_count" className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all bg-white">
                    <option value="">Select range</option>
                    <option value="1-10">1–10 welders</option>
                    <option value="11-25">11–25 welders</option>
                    <option value="26-50">26–50 welders</option>
                    <option value="50+">50+ welders</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="codes" className="block text-sm font-medium text-gray-700 mb-2">Primary Welding Codes</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {["AWS D1.1", "ASME IX", "API 1104", "AISC"].map((code) => (
                    <label key={code} className="flex items-center gap-2 p-3 border border-gray-200 rounded-lg hover:border-brand/50 cursor-pointer transition-colors">
                      <input type="checkbox" name="welding_codes" value={code} className="rounded border-gray-300 text-brand focus:ring-brand" />
                      <span className="text-sm font-medium">{code}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Anything specific you&apos;d like to see?</label>
                <textarea id="message" name="message" rows={3} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand focus:border-brand outline-none transition-all resize-none" placeholder="E.g., continuity tracking, multi-site management, CWI audit prep..." />
              </div>
              <button type="submit" className="w-full bg-brand text-white font-bold py-4 rounded-xl hover:bg-brand-dark transition-colors text-lg shadow-lg shadow-brand/25">
                Request Demo
              </button>
              <p className="text-center text-sm text-gray-500">We&apos;ll respond within 1 business day. No spam, ever.</p>
            </form>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-navy">Demo FAQ</h2>
            <div className="space-y-4">
              {FAQS.map((faq) => (
                <div key={faq.q} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h3 className="font-semibold text-lg mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-navy px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to See WeldCert?</h2>
            <p className="text-gray-300 mb-8">20 minutes. Tailored to your codes and shop size. No pressure.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#book" className="inline-flex items-center justify-center gap-2 bg-brand text-white font-bold px-8 py-4 rounded-xl hover:bg-brand-dark transition-colors">
                Book Your Demo <Calendar size={20} />
              </a>
              <a href="https://app.weldcert.io/sign-up" className="inline-flex items-center justify-center gap-2 border-2 border-white/20 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors">
                Start Free Trial Instead
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
