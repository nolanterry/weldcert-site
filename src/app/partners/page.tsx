import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import type { Metadata } from "next";
import { Handshake, DollarSign, Users, Megaphone, ArrowRight, Shield, BarChart3, CheckCircle, Zap, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Partner Program — WeldCert",
  description: "Join the WeldCert partner program. Earn recurring commissions referring fabrication shops, or integrate your NDT/quality tools with our welding certification platform.",
  alternates: { canonical: "/partners" },
};

const PARTNER_TYPES = [
  {
    icon: Handshake,
    title: "Referral Partners",
    description: "Know fabrication shops drowning in paper WPS/PQR records? Refer them to WeldCert and earn 20% recurring commission for the life of the account.",
    benefits: [
      "20% recurring revenue share",
      "Dedicated partner dashboard",
      "Co-branded certification guides",
      "Priority support for referred shops",
    ],
    cta: "Become a Referral Partner",
    ideal: "CWIs, welding inspectors, NDT companies, safety consultants",
  },
  {
    icon: Zap,
    title: "Technology Partners",
    description: "Integrate WeldCert with your NDT reporting, ERP, or quality management system. Give mutual customers seamless weld certification alongside their existing workflows.",
    benefits: [
      "Full API access and documentation",
      "Joint go-to-market campaigns",
      "Listed on our integrations page",
      "Co-development and roadmap input",
    ],
    cta: "Explore Technology Partnership",
    ideal: "NDT software vendors, ERP providers, fabrication management platforms, welding equipment OEMs",
  },
  {
    icon: BookOpen,
    title: "Training Partners",
    description: "Offer WeldCert alongside your welding training and certification courses. Help students and shops digitize their qualification records from day one.",
    benefits: [
      "Training partner certification",
      "Revenue share on platform licenses",
      "Bulk pricing for training cohorts",
      "Joint certification programs",
    ],
    cta: "Apply as Training Partner",
    ideal: "Welding schools, AWS Accredited Testing Facilities, union training centers, community colleges",
  },
];

const WHY_PARTNER = [
  {
    icon: Shield,
    title: "Compliance Pressure",
    description: "AWS D1.1, ASME IX, and API 1104 all require traceable weld documentation. Auditors are getting stricter — shops need digital solutions.",
  },
  {
    icon: DollarSign,
    title: "Recurring Revenue",
    description: "SaaS model means your commissions recur monthly. One introduction to a fabrication shop generates years of passive income.",
  },
  {
    icon: BarChart3,
    title: "Massive Market",
    description: "300,000+ fabrication shops in the US alone, most still using paper or spreadsheets. The digital transformation of welding QC is just beginning.",
  },
  {
    icon: Users,
    title: "Partner Support",
    description: "Dedicated partner manager, co-branded materials, joint trade show presence, and a portal to track referrals and commissions.",
  },
];

const STEPS = [
  { step: "1", title: "Apply", description: "Submit your partner application. We review within 48 hours and schedule an onboarding call." },
  { step: "2", title: "Onboard", description: "Get your partner dashboard, referral links, and co-branded materials for fabrication shop outreach." },
  { step: "3", title: "Earn & Grow", description: "Refer shops, close deals, and track your recurring commissions in the partner portal." },
];

const partnerSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "WeldCert Partner Program",
  description: "Join the WeldCert partner program for welding certification management.",
  url: "https://weldcert.io/partners",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://weldcert.io" },
      { "@type": "ListItem", position: 2, name: "Partners", item: "https://weldcert.io/partners" },
    ],
  },
};

export default function PartnersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(partnerSchema) }} />
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-gradient-to-br from-orange-50 via-white to-amber-50 py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="inline-block bg-orange-100 text-orange-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
              Partner Program
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Grow Your Business with WeldCert
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Help fabrication shops go digital with welding certification management. Earn recurring revenue
              as a referral partner, technology integrator, or training provider.
            </p>
            <a
              href="mailto:partners@weldcert.io?subject=Partner%20Program%20Application"
              className="inline-flex items-center gap-2 bg-brand text-white font-medium px-8 py-3.5 rounded-lg hover:bg-brand-dark transition-colors"
            >
              Apply to Partner Program <ArrowRight size={18} />
            </a>
          </div>
        </section>

        {/* Partner Types */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">Choose Your Partnership Track</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
              Whether you&apos;re a CWI, NDT vendor, or welding school — we have a partnership model that fits.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {PARTNER_TYPES.map((type) => (
                <div key={type.title} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                    <type.icon className="text-orange-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  <ul className="space-y-2 mb-4">
                    {type.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle size={16} className="text-green-500 mt-0.5 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-gray-500 mb-4">
                    <strong>Ideal for:</strong> {type.ideal}
                  </p>
                  <a
                    href="mailto:partners@weldcert.io?subject=Partner%20Program%20Application"
                    className="inline-flex items-center gap-1.5 text-brand font-medium text-sm hover:underline"
                  >
                    {type.cta} <ArrowRight size={14} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Partner */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Partner with WeldCert?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {WHY_PARTNER.map((item) => (
                <div key={item.title} className="text-center">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm border border-gray-100">
                    <item.icon className="text-brand" size={24} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {STEPS.map((s) => (
                <div key={s.step} className="text-center">
                  <div className="w-12 h-12 bg-brand text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {s.step}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-600">{s.description}</p>
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
