"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FileText, Download, CheckCircle, BookOpen, ClipboardList, FileSpreadsheet } from "lucide-react";

const RESOURCES = [
  {
    title: "AWS D1.1 Weld Inspection Checklist",
    description: "Complete visual and dimensional inspection checklist aligned with AWS D1.1 structural welding code. Covers fillet welds, groove welds, and joint preparation requirements.",
    type: "Checklist" as const,
    pages: "4 pages",
    slug: "aws-d11-inspection-checklist",
  },
  {
    title: "WPS/PQR Documentation Template",
    description: "Fillable Welding Procedure Specification and Procedure Qualification Record templates with all essential variables per AWS D1.1 and ASME Section IX.",
    type: "Template" as const,
    pages: "6 pages",
    slug: "wps-pqr-template",
  },
  {
    title: "Welder Qualification Record (WQR) Template",
    description: "Track welder qualifications, test results, process ranges, and expiration dates. Includes continuity log for maintaining active qualifications.",
    type: "Template" as const,
    pages: "3 pages",
    slug: "wqr-template",
  },
  {
    title: "ASME Section IX Quick Reference Card",
    description: "Pocket reference covering essential and supplementary essential variables, base metal P-numbers, filler metal F-numbers, and qualification ranges for common processes.",
    type: "Guide" as const,
    pages: "2 pages",
    slug: "asme-section-ix-reference",
  },
  {
    title: "Weld Defect Identification Guide",
    description: "Visual reference guide for identifying common weld defects — porosity, undercut, incomplete fusion, slag inclusion, and cracks — with acceptance criteria per code.",
    type: "Guide" as const,
    pages: "8 pages",
    slug: "weld-defect-guide",
  },
  {
    title: "CWI Audit Preparation Playbook",
    description: "Step-by-step guide to preparing for a third-party welding audit. Covers document organization, WPS/PQR review, welder qualification verification, and common non-conformances.",
    type: "Whitepaper" as const,
    pages: "12 pages",
    slug: "cwi-audit-playbook",
  },
  {
    title: "NDT Inspection Scheduling Template",
    description: "Spreadsheet template for scheduling and tracking non-destructive testing — RT, UT, MT, PT — with inspector assignments, acceptance criteria, and report tracking.",
    type: "Template" as const,
    pages: "1 sheet",
    slug: "ndt-scheduling-template",
  },
  {
    title: "Weld Log & Traceability Template",
    description: "Production weld log template linking each weld to its WPS, welder, heat number, NDT results, and final disposition. Full material traceability from start to acceptance.",
    type: "Template" as const,
    pages: "2 pages",
    slug: "weld-log-template",
  },
];

const TYPE_CONFIG = {
  Checklist: { icon: ClipboardList, color: "bg-green-100 text-green-700" },
  Template: { icon: FileSpreadsheet, color: "bg-blue-100 text-blue-700" },
  Guide: { icon: BookOpen, color: "bg-amber-100 text-amber-700" },
  Whitepaper: { icon: FileText, color: "bg-purple-100 text-purple-700" },
};

export default function ResourcesPage() {
  const [email, setEmail] = useState("");
  const [activeResource, setActiveResource] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState<Set<string>>(new Set());
  const [globalUnlocked, setGlobalUnlocked] = useState(false);

  const handleDownload = async (slug: string) => {
    if (globalUnlocked || submitted.has(slug)) {
      setSubmitted((prev) => new Set(prev).add(slug));
      return;
    }
    setActiveResource(slug);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !activeResource) return;

    try {
      await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: `resource-${activeResource}` }),
      });
    } catch {
      // Best-effort
    }

    const newSubmitted = new Set(submitted);
    newSubmitted.add(activeResource);
    setSubmitted(newSubmitted);
    setGlobalUnlocked(true);
    setActiveResource(null);
    localStorage.setItem("weldcert-resources-email", email);
  };

  return (
    <>
      <Header />
      <main id="main-content">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://weldcert.io" },
                { "@type": "ListItem", position: 2, name: "Resources", item: "https://weldcert.io/resources" },
              ],
            }),
          }}
        />

        {/* Hero */}
        <section className="bg-gradient-to-br from-navy via-navy-light to-navy py-20 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Free Welding Certification Resources
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Checklists, templates, and guides built by CWIs and quality managers. Download what you need to keep certifications current and audits passing.
          </p>
        </section>

        {/* Resource Grid */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {RESOURCES.map((resource) => {
              const config = TYPE_CONFIG[resource.type];
              const Icon = config.icon;
              const isUnlocked = globalUnlocked || submitted.has(resource.slug);

              return (
                <div
                  key={resource.slug}
                  className="border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-brand/30 transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${config.color}`}>
                      <Icon size={14} />
                      {resource.type}
                    </span>
                    <span className="text-xs text-gray-400">{resource.pages}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {resource.description}
                  </p>
                  <button
                    onClick={() => handleDownload(resource.slug)}
                    className={`inline-flex items-center gap-2 text-sm font-medium px-4 py-2.5 rounded-lg transition-colors ${
                      isUnlocked
                        ? "bg-green-50 text-green-700 hover:bg-green-100"
                        : "bg-brand text-white hover:bg-brand-dark"
                    }`}
                  >
                    {isUnlocked ? (
                      <>
                        <CheckCircle size={16} />
                        Download PDF
                      </>
                    ) : (
                      <>
                        <Download size={16} />
                        Get Free Download
                      </>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        {/* Email Capture Modal */}
        {activeResource && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4" role="dialog" aria-modal="true" aria-label="Download resource">
            <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Get Your Free Download
              </h2>
              <p className="text-sm text-gray-600 mb-6">
                Enter your email to unlock all resources instantly. No spam — just welding compliance content.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand"
                  aria-label="Email address"
                  autoComplete="email"
                />
                <button
                  type="submit"
                  className="w-full bg-brand text-white font-medium py-3 rounded-lg hover:bg-brand-dark transition-colors"
                >
                  Unlock All Resources
                </button>
              </form>
              <button
                onClick={() => setActiveResource(null)}
                className="mt-4 w-full text-sm text-gray-400 hover:text-gray-600 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* CTA */}
        <section className="bg-gradient-to-br from-navy via-navy-light to-navy py-16 px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Go Digital?
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            WeldCert replaces paper qualification records with a digital welding certification platform. Start your 14-day free trial — no credit card required.
          </p>
          <a
            href="https://app.weldcert.io/sign-up"
            className="inline-block bg-brand text-white font-semibold px-8 py-4 rounded-lg hover:bg-brand-dark transition-colors text-lg"
          >
            Start Free Trial
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
