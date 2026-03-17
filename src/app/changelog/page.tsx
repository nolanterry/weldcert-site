import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Changelog",
  description:
    "See what's new in WeldCert. Product updates, new features, and improvements to welder certification management software.",
  alternates: { canonical: "/changelog" },
  openGraph: {
    title: "Changelog | WeldCert",
    description:
      "See what's new in WeldCert. Product updates, new features, and improvements to welder certification management software.",
    url: "https://weldcert.io/changelog",
  },
};

type ChangeCategory = "new" | "improved" | "fixed";

interface Change {
  category: ChangeCategory;
  text: string;
}

interface Release {
  version: string;
  date: string;
  summary: string;
  changes: Change[];
}

const RELEASES: Release[] = [
  {
    version: "1.2.0",
    date: "March 10, 2026",
    summary: "API 1104 support, continuity alerts, and enhanced reporting",
    changes: [
      { category: "new", text: "API 1104 pipeline welder qualification tracking with process-specific endorsement management" },
      { category: "new", text: "Automated continuity alerts — get notified 30, 60, and 90 days before welder qualifications lapse" },
      { category: "improved", text: "WPS/PQR document management now supports drag-and-drop file uploads with auto-tagging" },
      { category: "improved", text: "Qualification matrix view loads 3× faster for organizations with 200+ welders" },
      { category: "fixed", text: "Resolved an issue where ASME Section IX continuity dates didn't account for leap years" },
      { category: "fixed", text: "Fixed CSV export including archived welder records when 'active only' filter was applied" },
    ],
  },
  {
    version: "1.1.0",
    date: "February 3, 2026",
    summary: "Audit preparation tools, team management, and consumable tracking",
    changes: [
      { category: "new", text: "Audit preparation dashboard — one-click readiness check against AWS D1.1, ASME IX, and API 1104 requirements" },
      { category: "new", text: "Consumable qualification tracking for filler metals, fluxes, and shielding gases with lot-level traceability" },
      { category: "improved", text: "Team management supports multi-site organizations with per-location admin and supervisor roles" },
      { category: "improved", text: "Certification card PDF generation now includes QR codes linking to live verification status" },
      { category: "fixed", text: "Corrected thickness range calculations for GMAW groove weld qualifications under AWS D1.1" },
      { category: "fixed", text: "Fixed an issue where email notifications for expiring certifications sent duplicate alerts" },
    ],
  },
  {
    version: "1.0.0",
    date: "January 6, 2026",
    summary: "WeldCert launches — welder certification management built for compliance",
    changes: [
      { category: "new", text: "Complete welder qualification management platform with support for AWS D1.1, ASME Section IX, and more" },
      { category: "new", text: "Digital WPS and PQR library with version control and approval workflows" },
      { category: "new", text: "Welder qualification matrix showing all active certifications, processes, and expiration dates at a glance" },
      { category: "new", text: "Automated certification expiration tracking with configurable email and SMS reminders" },
      { category: "new", text: "Compliance reporting with pre-built templates for AWS, ASME, and CWB audit documentation" },
      { category: "new", text: "Mobile-friendly interface for recording field welds and updating continuity logs on-site" },
    ],
  },
];

const CATEGORY_CONFIG: Record<ChangeCategory, { label: string; emoji: string; color: string }> = {
  new: { label: "New", emoji: "🆕", color: "bg-emerald-100 text-emerald-800" },
  improved: { label: "Improved", emoji: "✨", color: "bg-blue-100 text-blue-800" },
  fixed: { label: "Fixed", emoji: "🐛", color: "bg-amber-100 text-amber-800" },
};

export default function ChangelogPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-navy via-navy-light to-navy py-20 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Changelog</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Everything new in WeldCert — features, improvements, and fixes shipped to simplify welder certification management.
          </p>
        </section>

        {/* Timeline */}
        <section className="max-w-3xl mx-auto px-4 py-16">
          <div className="space-y-12">
            {RELEASES.map((release) => (
              <article key={release.version} className="relative pl-8 border-l-2 border-gray-200">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-brand border-2 border-white" />
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-brand/10 text-brand font-mono text-sm font-semibold">
                    v{release.version}
                  </span>
                  <time className="text-sm text-gray-500">{release.date}</time>
                </div>
                <p className="text-gray-700 font-medium mb-4">{release.summary}</p>
                <ul className="space-y-2">
                  {release.changes.map((change, i) => {
                    const cfg = CATEGORY_CONFIG[change.category];
                    return (
                      <li key={i} className="flex items-start gap-2">
                        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium shrink-0 mt-0.5 ${cfg.color}`}>
                          {cfg.emoji} {cfg.label}
                        </span>
                        <span className="text-gray-600 text-sm">{change.text}</span>
                      </li>
                    );
                  })}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
