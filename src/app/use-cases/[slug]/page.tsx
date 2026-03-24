import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface UseCase {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSub: string;
  painPoints: { title: string; desc: string }[];
  solutions: { title: string; desc: string; feature: string }[];
  metrics: { stat: string; label: string }[];
}

const USE_CASES: UseCase[] = [
  {
    slug: "structural-steel-fabricators",
    title: "WeldCert for Structural Steel Fabricators",
    metaTitle: "WeldCert for Structural Steel Fabricators — AISC & D1.1 Compliance",
    metaDescription:
      "Manage AISC certification, AWS D1.1 welder qualifications, and WPS/PQR documentation digitally. WeldCert helps structural steel fabricators pass audits and keep every welder current.",
    heroHeadline: "AISC Certification & D1.1 Compliance — Finally Under Control",
    heroSub:
      "Structural steel fabricators live and die by their AISC certification. One lapsed welder qualification or missing WPS can hold up a project — or worse, fail an audit. WeldCert gives you a single system to track every welder, every procedure, and every certification across your shop and field operations.",
    painPoints: [
      {
        title: "AISC audits require perfect documentation",
        desc: "Your AISC certification depends on maintaining complete, current records for every WPS, PQR, and welder qualification. Paper filing systems make it nearly impossible to prove compliance at audit time — missing a single document can trigger a corrective action.",
      },
      {
        title: "Welder qualifications expire without warning",
        desc: "D1.1 requires welders to maintain continuous qualification through documented activity. If a welder hasn't used a specific process in 6 months, they lose qualification — and you may not know until the inspector asks.",
      },
      {
        title: "WPS/PQR management is scattered and manual",
        desc: "Your welding procedures live in binders, shared drives, and individual computers. Finding the right WPS for a specific joint configuration, material, and process takes time your shop floor doesn't have.",
      },
      {
        title: "Multi-project tracking overwhelms spreadsheets",
        desc: "Each project has different code requirements, different qualified welders, and different inspection needs. Tracking which welders are qualified for which procedures on which projects exceeds what spreadsheets can handle.",
      },
    ],
    solutions: [
      {
        title: "Digital welder qualification tracking",
        desc: "Every welder's qualifications are tracked in real time — processes, positions, materials, thickness ranges, and expiration dates. Automated alerts fire before qualifications lapse, so you never assign an unqualified welder.",
        feature: "Qualification Tracker",
      },
      {
        title: "Centralized WPS/PQR library",
        desc: "All your welding procedures in one searchable library. Filter by process, base metal, thickness, position, or joint type. Link PQRs to their supporting WPSes and track revision history automatically.",
        feature: "Procedure Library",
      },
      {
        title: "AISC audit preparation toolkit",
        desc: "Generate audit-ready documentation packages with one click. WeldCert compiles welder qualifications, procedure records, continuity logs, and inspection reports into the exact format AISC auditors expect.",
        feature: "Audit Prep Module",
      },
      {
        title: "Project-level compliance dashboard",
        desc: "See every project's welding compliance status at a glance. Which welders are qualified for the required procedures? Are all WPSes approved? Are inspections current? Green/yellow/red status for every requirement.",
        feature: "Project Dashboard",
      },
    ],
    metrics: [
      { stat: "82%", label: "reduction in qualification tracking time" },
      { stat: "100%", label: "AISC audit pass rate for WeldCert users" },
      { stat: "Zero", label: "lapsed qualifications with automated alerts" },
      { stat: "45 sec", label: "to find any WPS in the digital library" },
    ],
  },
  {
    slug: "pressure-vessel-manufacturers",
    title: "WeldCert for Pressure Vessel Manufacturers",
    metaTitle: "WeldCert for Pressure Vessel Manufacturers — ASME Section IX & NDE Tracking",
    metaDescription:
      "Manage ASME Section IX WPS/PQR records, welder performance qualifications, and NDE documentation digitally. WeldCert helps pressure vessel manufacturers maintain stamp-ready compliance.",
    heroHeadline: "ASME Section IX Compliance — Stamp-Ready, Always",
    heroSub:
      "Pressure vessel manufacturers operate under some of the most demanding welding codes in the industry. ASME Section IX qualification requirements, NDE documentation, and Authorized Inspector oversight leave zero room for error. WeldCert digitizes your entire quality system — so your stamp is never at risk.",
    painPoints: [
      {
        title: "ASME Section IX documentation is voluminous and complex",
        desc: "Every welder needs performance qualification records for each process, position, and material combination. Every procedure needs a WPS backed by a PQR with documented test results. Managing this paper trail for dozens of welders across multiple ASME stamps is a massive administrative burden.",
      },
      {
        title: "NDE tracking falls through the cracks",
        desc: "Radiographic, ultrasonic, magnetic particle, and liquid penetrant testing must be documented per-weld, per-joint, and linked to the correct WPS. Paper NDE logs make it nearly impossible to cross-reference inspection results with welder qualifications and procedure requirements.",
      },
      {
        title: "Authorized Inspector visits require instant access to records",
        desc: "When your AI (Authorized Inspector) visits, they expect to see any welder's qualification record, any WPS/PQR, or any NDE report within minutes. Digging through filing cabinets during an inspection visit wastes everyone's time and erodes confidence.",
      },
      {
        title: "Continuity requirements create qualification gaps",
        desc: "ASME Section IX requires documented continuity of welding activity. If a welder hasn't performed a specific process in the allowable timeframe, their qualification lapses. Tracking continuity manually across dozens of welders and processes is error-prone.",
      },
    ],
    solutions: [
      {
        title: "Complete Section IX qualification management",
        desc: "Track every welder's performance qualifications — WPS, process, position, material group, thickness range, and filler metal. WeldCert maps essential variables automatically and alerts you to qualification boundaries.",
        feature: "Section IX Tracker",
      },
      {
        title: "Integrated NDE documentation",
        desc: "Log NDE results by joint, weld, and WPS. Link radiographic film numbers, UT reports, MT/PT results, and acceptance criteria directly to the production record. Full traceability from weld to inspection.",
        feature: "NDE Log Manager",
      },
      {
        title: "Instant AI-ready record retrieval",
        desc: "Pull any record in seconds — welder PQRs, WPS packages, NDE reports, or material test reports. Searchable, filterable, and always current. Your Authorized Inspector will be impressed.",
        feature: "Smart Record Search",
      },
      {
        title: "Automated continuity tracking",
        desc: "WeldCert monitors each welder's production activity against their qualified processes. When a continuity gap is approaching, you get an alert — giving you time to assign work or schedule a re-qualification test.",
        feature: "Continuity Monitor",
      },
    ],
    metrics: [
      { stat: "90%", label: "less time preparing for AI inspections" },
      { stat: "100%", label: "NDE traceability from weld to report" },
      { stat: "Zero", label: "undetected continuity lapses" },
      { stat: "60%", label: "reduction in WPS/PQR administration time" },
    ],
  },
  {
    slug: "pipeline-contractors",
    title: "WeldCert for Pipeline Contractors",
    metaTitle: "WeldCert for Pipeline Contractors — API 1104 & Field Welder Qualification",
    metaDescription:
      "Manage API 1104 welder qualifications, bend test tracking, and field compliance documentation digitally. WeldCert helps pipeline contractors keep every welder qualified and every joint documented.",
    heroHeadline: "API 1104 Field Compliance — From Spread to Office",
    heroSub:
      "Pipeline welding happens in the field — far from your office and your filing cabinets. WeldCert brings your qualification tracking, bend test records, and compliance documentation to where your welders actually work. No more lost records, lapsed qualifications, or audit scrambles.",
    painPoints: [
      {
        title: "Field qualification tracking is chaotic",
        desc: "Your welders are on spreads across multiple states. Their qualification records are in binders at the home office — or worse, in someone's truck. When an inspector asks if a welder is qualified for a specific procedure, you need the answer immediately.",
      },
      {
        title: "Bend test and destructive test records get lost",
        desc: "API 1104 requires documented bend tests, nick-break tests, and sometimes tensile tests for every welder qualification. Those test records travel between labs, the field office, and headquarters — and they get lost along the way.",
      },
      {
        title: "Project-specific qualification requirements vary",
        desc: "Every pipeline owner and engineering firm has supplementary requirements beyond API 1104. Wall thickness restrictions, specific filler metals, preheat requirements — each project is different, and tracking which welders meet which project specs is a nightmare.",
      },
      {
        title: "High welder turnover amplifies the problem",
        desc: "Pipeline construction has inherently high turnover. New welders join the spread, need qualification tests, and start production — all while your QC team tries to keep documentation current. The paperwork never catches up.",
      },
    ],
    solutions: [
      {
        title: "Mobile-first field qualification access",
        desc: "Every welder's qualification record is accessible from any device, anywhere. QC inspectors on the spread can verify qualifications instantly — no phone calls to the home office, no digging through binders.",
        feature: "Mobile Access",
      },
      {
        title: "Centralized test record management",
        desc: "Bend tests, nick-breaks, tensiles, and macro results — all documented and linked to the welder's qualification record. Upload lab reports, attach photos, and maintain a complete chain of custody for every test.",
        feature: "Test Record Hub",
      },
      {
        title: "Project-specific qualification mapping",
        desc: "Define each project's supplementary requirements and let WeldCert automatically identify which welders are qualified. When a new project kicks off, you instantly know who can weld and who needs additional testing.",
        feature: "Project Qualifier",
      },
      {
        title: "Rapid onboarding for new welders",
        desc: "New welder joins the spread? Enter their existing qualifications, schedule qualification tests for any gaps, and get them into production faster. Digital onboarding replaces the paper shuffle.",
        feature: "Welder Onboarding",
      },
    ],
    metrics: [
      { stat: "70%", label: "faster welder onboarding and qualification" },
      { stat: "Zero", label: "lost test records with digital documentation" },
      { stat: "5 min", label: "to verify any welder's field qualifications" },
      { stat: "85%", label: "reduction in qualification-related project delays" },
    ],
  },
];

export function generateStaticParams() {
  return USE_CASES.map((uc) => ({ slug: uc.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const uc = USE_CASES.find((u) => u.slug === params.slug);
  if (!uc) return {};
  return {
    title: uc.metaTitle,
    description: uc.metaDescription,
    openGraph: { title: uc.metaTitle, description: uc.metaDescription },
  };
}

export default function UseCaseDetailPage({ params }: { params: { slug: string } }) {
  const uc = USE_CASES.find((u) => u.slug === params.slug);
  if (!uc) notFound();

  const otherCases = USE_CASES.filter((u) => u.slug !== uc.slug);

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="bg-navy text-white py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-4">Use Case</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{uc.heroHeadline}</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">{uc.heroSub}</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.weldcert.io/sign-up"
                className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Start Free Trial
              </a>
              <Link
                href="/demo"
                className="border border-white/20 hover:bg-white/10 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">The Challenges You Face</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Welding compliance is demanding — and the cost of getting it wrong is measured in failed audits, project delays, and rejected welds.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {uc.painPoints.map((pp, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-200 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-sm font-bold">
                      {i + 1}
                    </span>
                    <h3 className="font-semibold text-gray-900">{pp.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{pp.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">How WeldCert Solves It</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Purpose-built features for welding code compliance — designed by people who understand the codes.
            </p>
            <div className="space-y-8">
              {uc.solutions.map((sol, i) => (
                <div key={i} className="flex gap-5 items-start">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1 flex-wrap">
                      <h3 className="font-semibold text-gray-900 text-lg">{sol.title}</h3>
                      <span className="text-xs font-medium bg-amber-100 text-amber-700 px-2.5 py-0.5 rounded-full">
                        {sol.feature}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{sol.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Metrics */}
        <section className="py-16 bg-navy text-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-10 text-center">Results That Matter</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {uc.metrics.map((m, i) => (
                <div key={i}>
                  <p className="text-3xl md:text-4xl font-bold text-amber-400">{m.stat}</p>
                  <p className="text-sm text-gray-300 mt-1">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">See WeldCert in Action</h2>
            <p className="text-gray-600 mb-8">
              Try it free for 14 days — no credit card required. Set up your team in minutes.
            </p>
            <a
              href="https://app.weldcert.io/sign-up"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
            >
              Start Free Trial <ArrowRight size={18} />
            </a>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-amber-500 text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Simplify Welding Compliance?</h2>
            <p className="text-amber-100 mb-8">
              Join fabricators and contractors who&apos;ve eliminated paper qualification tracking and passed every audit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.weldcert.io/sign-up"
                className="bg-white text-amber-600 font-semibold px-8 py-3 rounded-lg hover:bg-amber-50 transition-colors"
              >
                Start Free Trial
              </a>
              <Link
                href="/demo"
                className="border border-white/30 hover:bg-white/10 font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Explore More */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Explore More Use Cases</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {otherCases.map((other) => (
                <Link
                  key={other.slug}
                  href={`/use-cases/${other.slug}`}
                  className="group flex items-center justify-between bg-gray-50 hover:bg-amber-50 border border-gray-200 hover:border-amber-300 rounded-xl p-6 transition-all"
                >
                  <div>
                    <h3 className="font-semibold text-gray-900">{other.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{other.metaDescription.slice(0, 80)}…</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-amber-500 transition-colors flex-shrink-0 ml-4" />
                </Link>
              ))}
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
              { "@type": "ListItem", position: 3, name: uc.title, item: `https://weldcert.io/use-cases/${uc.slug}` },
            ],
          }),
        }}
      />
    </>
  );
}
