import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Integrations — Connect WeldCert with Your Shop Tools",
  description:
    "WeldCert integrates with QuickBooks, Xero, Procore, DocuSign, Google Workspace, FabSuite, SigmaNEST, StruCad, and more. Sync welder qualifications with the tools your shop already uses.",
  alternates: { canonical: "/integrations" },
  openGraph: {
    title: "Integrations — Connect WeldCert with Your Shop Tools",
    description:
      "WeldCert integrates with QuickBooks, Procore, DocuSign, Google Workspace, and more.",
    url: "https://weldcert.io/integrations",
  },
};

const INTEGRATIONS = [
  { emoji: "💰", name: "QuickBooks", description: "Sync welder costs, certification expenses, and project billing to QuickBooks automatically.", status: "available" as const },
  { emoji: "📊", name: "Xero", description: "Export certification tracking and compliance cost data to Xero for streamlined accounting.", status: "coming-soon" as const },
  { emoji: "🏗️", name: "Procore", description: "Push welder qualifications and WPS data directly into Procore project records.", status: "coming-soon" as const },
  { emoji: "🔧", name: "Fabrication Suite (FabSuite)", description: "Sync welder assignments and qualification status with FabSuite job tracking.", status: "coming-soon" as const },
  { emoji: "✂️", name: "SigmaNEST", description: "Link welder qualifications to SigmaNEST cutting and nesting workflows.", status: "coming-soon" as const },
  { emoji: "📐", name: "StruCad", description: "Connect structural steel detailing in StruCad with welder qualification requirements.", status: "coming-soon" as const },
  { emoji: "✍️", name: "DocuSign", description: "Collect e-signatures on PQRs, WPS documents, and welder qualification test records.", status: "available" as const },
  { emoji: "📧", name: "Google Workspace", description: "Share qualification reports via Gmail, store audit docs in Drive, sync renewal dates to Calendar.", status: "available" as const },
  { emoji: "💼", name: "Microsoft 365", description: "Integrate with Outlook, SharePoint, and Teams for seamless report distribution.", status: "coming-soon" as const },
  { emoji: "💬", name: "Slack", description: "Get instant alerts for expiring qualifications, upcoming continuity deadlines, and audit reminders.", status: "coming-soon" as const },
  { emoji: "🛡️", name: "SAP QM", description: "Feed welder qualification and inspection data into SAP Quality Management modules.", status: "coming-soon" as const },
  { emoji: "☁️", name: "AWS Welding Portal", description: "Sync welder certifications and qualification records with the AWS online portal.", status: "coming-soon" as const },
];

export default function IntegrationsPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="bg-gradient-to-br from-navy via-navy-light to-navy py-20 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Integrations
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Connect WeldCert with the tools your fabrication shop already relies on. Sync welder qualifications, automate compliance tracking, and eliminate double data entry.
          </p>
        </section>

        {/* Grid */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INTEGRATIONS.map((integration) => (
              <div
                key={integration.name}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-brand/30 transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">{integration.emoji}</span>
                  {integration.status === "available" ? (
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-green-100 text-green-700">
                      Available
                    </span>
                  ) : (
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-gray-100 text-gray-500">
                      Coming Soon
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {integration.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {integration.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-navy via-navy-light to-navy py-16 px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Don&apos;t see your tool?
          </h2>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto">
            We&apos;re building new integrations all the time. Let us know what your shop needs and we&apos;ll prioritize it.
          </p>
          <a
            href="mailto:support@weldcert.io?subject=Integration%20Request"
            className="inline-block bg-brand text-white font-semibold px-8 py-4 rounded-lg hover:bg-brand-dark transition-colors text-lg"
          >
            Request an Integration
          </a>
        </section>

        {/* JSON-LD BreadcrumbList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://weldcert.io" },
                { "@type": "ListItem", position: 2, name: "Integrations", item: "https://weldcert.io/integrations" },
              ],
            }),
          }}
        />
      </main>
      <Footer />
    </>
  );
}
