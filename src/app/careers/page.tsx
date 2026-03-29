import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import type { Metadata } from "next";
import { Briefcase, MapPin, Clock, Users, Shield, Zap, Heart, TrendingUp, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers — WeldCert",
  description: "Join WeldCert and help modernize welder certification management. We're building compliance software for fabrication shops and welding contractors.",
  alternates: { canonical: "/careers" },
};

const VALUES = [
  {
    icon: Shield,
    title: "Quality Is Non-Negotiable",
    description: "Welding certification exists because structural integrity saves lives. We build software that ensures every welder's qualifications are current and documented.",
  },
  {
    icon: Zap,
    title: "Simplify the Complex",
    description: "AWS D1.1, ASME IX, CWB — welding codes are dense. We turn complex certification requirements into intuitive workflows that any shop can use.",
  },
  {
    icon: Users,
    title: "Built for the Shop Floor",
    description: "Our users are welding supervisors and quality managers, not tech executives. We design for real-world workflows and mobile-first field use.",
  },
  {
    icon: Heart,
    title: "Craftsmanship",
    description: "We admire the skilled trades our customers represent. We bring that same craftsmanship to our code, design, and customer interactions.",
  },
];

const BENEFITS = [
  "Competitive salary + equity",
  "Remote-first (US time zones)",
  "Unlimited PTO",
  "Health, dental, and vision",
  "$1,000/year learning budget",
  "Latest MacBook + home office stipend",
  "Annual team retreat",
  "401(k) match",
];

const POSITIONS = [
  {
    title: "Senior Full-Stack Engineer",
    department: "Engineering",
    location: "Remote (US)",
    type: "Full-time",
    description: "Build the platform powering welder certification tracking for fabrication shops. Next.js, TypeScript, PostgreSQL, PDF generation, expiration alerts.",
  },
  {
    title: "Mobile Engineer (React Native)",
    department: "Engineering",
    location: "Remote (US)",
    type: "Full-time",
    description: "Build mobile experiences for welding supervisors who need to verify certifications and log continuity in the field. Camera-based WPS/PQR capture.",
  },
  {
    title: "Account Executive — Manufacturing SaaS",
    department: "Sales",
    location: "Remote (US)",
    type: "Full-time",
    description: "Sell to quality managers at AISC-certified fabrication shops, structural steel contractors, and pipeline companies. Demo-to-close sales cycle.",
  },
  {
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Remote (US)",
    type: "Full-time",
    description: "Onboard fabrication shops, manage certification data migrations, and ensure customers maintain compliance. Welding or manufacturing industry experience preferred.",
  },
  {
    title: "Technical Writer",
    department: "Content",
    location: "Remote (US)",
    type: "Contract",
    description: "Write documentation, compliance guides, and blog content about AWS, ASME, and CWB welding codes. Make complex certification requirements accessible.",
  },
];

export default function CareersPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <span className="inline-block text-sm font-medium text-amber-400 mb-4 tracking-wide uppercase">
              We&apos;re Hiring
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Digitize Welding Certification<br />Management
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Fabrication shops still track welder qualifications in filing cabinets and spreadsheets.
              WeldCert is changing that — and we need great people to help.
            </p>
            <div className="mt-8">
              <a href="#positions" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                View Open Positions <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Why WeldCert */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why WeldCert?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Welding is a $22B industry where compliance failures cost millions.
                We&apos;re building the software that fabrication shops actually want to use.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {VALUES.map((value) => (
                <div key={value.title} className="flex gap-4 p-6 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="flex-shrink-0 w-11 h-11 rounded-lg bg-amber-100 flex items-center justify-center">
                    <value.icon className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{value.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits & Perks</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Great people deserve great benefits. Here&apos;s what we offer.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {BENEFITS.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-100">
                  <TrendingUp className="w-4 h-4 text-amber-500 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="positions" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Don&apos;t see the right role? Email us at <a href="mailto:careers@weldcert.co" className="text-amber-600 hover:underline">careers@weldcert.co</a> — we&apos;re always interested in talented people.
              </p>
            </div>
            <div className="space-y-4">
              {POSITIONS.map((position) => (
                <div key={position.title} className="p-6 rounded-xl border border-gray-200 hover:border-amber-200 hover:shadow-md transition-all group">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-3.5 h-3.5" /> {position.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" /> {position.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" /> {position.type}
                        </span>
                      </div>
                      <p className="mt-3 text-sm text-gray-600 leading-relaxed">{position.description}</p>
                    </div>
                    <a
                      href={`mailto:careers@weldcert.co?subject=Application: ${position.title}`}
                      className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap self-start"
                    >
                      Apply Now <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Culture</h2>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-white p-6 rounded-xl border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">🔧 Trades Tech</h3>
                <p className="text-sm text-gray-600">We build for skilled tradespeople — welders, fabricators, quality inspectors. Understanding their world is how we build great software.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">🌎 Remote First</h3>
                <p className="text-sm text-gray-600">Work from anywhere in the US. Async communication, weekly syncs, and a focus on output over hours.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100">
                <h3 className="font-semibold text-gray-900 mb-2">📈 Early Stage</h3>
                <p className="text-sm text-gray-600">Greenfield product with a massive addressable market. Every engineer, designer, and salesperson has direct impact on our trajectory.</p>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://weldcert.co" },
              { "@type": "ListItem", position: 2, name: "Careers", item: "https://weldcert.co/careers" },
            ],
          }),
        }}
      />
    </>
  );
}
