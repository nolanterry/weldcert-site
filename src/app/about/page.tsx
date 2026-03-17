import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import { Shield, Target, HardHat, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "WeldCert was built by people who understand welding compliance. Our mission: make every fabrication shop audit-ready.",
  alternates: { canonical: "/about" },
};

const VALUES = [
  {
    icon: Shield,
    title: "Quality First, Always",
    desc: "Every decision we make starts with one question: does this make welding operations more compliant? If the answer isn't a clear yes, we don't build it.",
  },
  {
    icon: Target,
    title: "Purpose-Built for Welding",
    desc: "We don't make generic tracking software. WeldCert is built exclusively for fabrication shops, by people who understand AWS D1.1, ASME IX, and the production floor.",
  },
  {
    icon: HardHat,
    title: "Built for the Shop Floor",
    desc: "Our users wear welding helmets, not headsets. WeldCert works with gloves on, in industrial environments, and without cell service. Because that's where real welding happens.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-br from-navy via-navy-light to-navy py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              We Built WeldCert Because<br />
              <span className="text-brand">Spreadsheets Lose Qualifications</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              When welder qualification records are incomplete, illegible, or missing entirely, unqualified welders
              work on critical structures. We&apos;re here to fix that.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    WeldCert started in a steel fabrication shop in Houston, Texas. A quality manager was
                    digging through file cabinets full of welder qualification records, trying to find current
                    certifications for an AWS inspector. Half the records were outdated. Three welders' continuity
                    logs were missing entirely. They had been welding on structural steel all month.
                  </p>
                  <p>
                    That moment crystallized something we&apos;d been seeing across the industry: Excel
                    tracking systems don&apos;t fail because people are careless. They fail because spreadsheets
                    are the wrong tool for the job. Files get corrupted. Expiration dates are missed. Quality managers
                    manually update cells while welders forget to log activity. Binders sit in offices nobody checks.
                  </p>
                  <p>
                    We built WeldCert to solve that problem. Not with a generic tracking app that
                    sort-of works for welders, but with purpose-built software that maps directly to
                    welding compliance standards — AWS D1.1 for structural welding, ASME Section IX for
                    pressure vessels, and API 1104 for pipelines.
                  </p>
                  <p>
                    Today, fabrication shops across the country use WeldCert to track welder qualifications
                    automatically, log daily activity in under 30 seconds, prevent qualification lapses,
                    and pull up any certification record in seconds when inspectors arrive.
                  </p>
                </div>
              </div>
              <div className="bg-gray-100 rounded-2xl aspect-square flex items-center justify-center border border-gray-200">
                <div className="text-center text-gray-400">
                  <HardHat size={64} strokeWidth={1} />
                  <p className="text-sm mt-3">Team photo placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Make every fabrication shop audit-ready.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {VALUES.map((v) => (
                <div key={v.title} className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="w-12 h-12 rounded-lg bg-brand-light flex items-center justify-center mb-4">
                    <v.icon className="text-brand" size={24} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{v.title}</h3>
                  <p className="text-sm text-gray-600">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">The Qualification Gap is Real</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-12">
              Every year, fabrication shops face AWS citations not because they don't qualify welders,
              but because they can&apos;t prove continuity. WeldCert closes that gap.
            </p>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold text-brand mb-2">71%</div>
                <p className="text-sm text-gray-500">of AWS citations involve qualification documentation failures</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-brand mb-2">$161K</div>
                <p className="text-sm text-gray-500">maximum fine per willful violation</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-brand mb-2">30 sec</div>
                <p className="text-sm text-gray-500">average WeldCert activity log time</p>
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
