import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ArrowRight, Building2, Factory, HardHat } from "lucide-react";

export const metadata: Metadata = {
  title: "Use Cases — WeldCert for Every Fabrication & Welding Operation",
  description:
    "See how WeldCert helps structural steel fabricators, pressure vessel manufacturers, and pipeline contractors manage welder qualifications, code compliance, and certification tracking.",
  openGraph: {
    title: "WeldCert Use Cases — Welding Compliance for Your Industry",
    description:
      "From AISC D1.1 to ASME Section IX to API 1104, see how WeldCert fits your operation.",
  },
};

const USE_CASES = [
  {
    slug: "structural-steel-fabricators",
    title: "WeldCert for Structural Steel Fabricators",
    subtitle: "AISC certification management, AWS D1.1 compliance tracking, and welder qualification records in one platform.",
    icon: Building2,
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    slug: "pressure-vessel-manufacturers",
    title: "WeldCert for Pressure Vessel Manufacturers",
    subtitle: "ASME Section IX WPS/PQR management, NDE tracking, and stamp-ready documentation.",
    icon: Factory,
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    slug: "pipeline-contractors",
    title: "WeldCert for Pipeline Contractors",
    subtitle: "API 1104 field welder qualification management, bend test tracking, and project-level compliance reporting.",
    icon: HardHat,
    color: "bg-emerald-500/10 text-emerald-600",
  },
];

export default function UseCasesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-navy text-white py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-4">Use Cases</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Welding Compliance Built for Your Industry
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Whether you&apos;re fabricating structural steel, building pressure vessels, or welding pipeline, WeldCert tracks every qualification, procedure, and certification — so your team stays code-compliant and audit-ready.
            </p>
          </div>
        </section>

        {/* Use Case Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {USE_CASES.map((uc) => {
                const Icon = uc.icon;
                return (
                  <Link
                    key={uc.slug}
                    href={`/use-cases/${uc.slug}`}
                    className="group bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg hover:border-amber-300 transition-all duration-200"
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${uc.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-3">{uc.title}</h2>
                    <p className="text-gray-600 text-sm leading-relaxed mb-5">{uc.subtitle}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-600 group-hover:gap-2.5 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-navy text-white py-16">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Not Sure Which Plan Fits?</h2>
            <p className="text-gray-300 mb-8">
              Book a 15-minute call and we&apos;ll walk you through WeldCert for your specific code requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://app.weldcert.io/sign-up" className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
                Start Free Trial
              </a>
              <Link href="/demo" className="border border-white/20 hover:bg-white/10 text-white font-semibold px-8 py-3 rounded-lg transition-colors">
                Book a Demo
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://weldcert.io" },
              { "@type": "ListItem", position: 2, name: "Use Cases", item: "https://weldcert.io/use-cases" },
            ],
          }),
        }}
      />
    </>
  );
}
