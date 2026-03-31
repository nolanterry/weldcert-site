import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Developer API — WeldCert REST API Documentation",
  description:
    "Integrate welding certification and compliance data with the WeldCert REST API. Endpoints for welder qualifications, WPS/PQR management, audit records, and continuity tracking.",
  alternates: { canonical: "/developers" },
  openGraph: {
    title: "Developer API — WeldCert REST API Documentation",
    description:
      "RESTful API for welding certification management. Programmatic access to welder qualifications, WPS/PQR records, and audit compliance data.",
    url: "https://weldcert.co/developers",
  },
};

const ENDPOINTS = [
  {
    category: "Welder Qualifications",
    icon: "👨‍🔧",
    description: "Manage welder certifications, continuity logs, and qualification status",
    endpoints: [
      { method: "GET", path: "/api/v1/welders", desc: "List all welders with certification status" },
      { method: "GET", path: "/api/v1/welders/:id", desc: "Retrieve welder details and active qualifications" },
      { method: "POST", path: "/api/v1/welders", desc: "Register a new welder" },
      { method: "GET", path: "/api/v1/welders/:id/qualifications", desc: "List all qualifications for a welder" },
      { method: "POST", path: "/api/v1/welders/:id/continuity", desc: "Log continuity activity to prevent expiry" },
    ],
  },
  {
    category: "WPS / PQR Records",
    icon: "📄",
    description: "Create and manage Welding Procedure Specifications and Procedure Qualification Records",
    endpoints: [
      { method: "GET", path: "/api/v1/wps", desc: "List all WPS documents with code filtering" },
      { method: "POST", path: "/api/v1/wps", desc: "Create a new WPS record" },
      { method: "GET", path: "/api/v1/pqr", desc: "List all PQR records" },
      { method: "GET", path: "/api/v1/wps/:id/pqr", desc: "Get supporting PQR for a specific WPS" },
    ],
  },
  {
    category: "Performance Qualifications",
    icon: "🧪",
    description: "Track welder performance qualification tests and results",
    endpoints: [
      { method: "GET", path: "/api/v1/tests", desc: "List all performance qualification tests" },
      { method: "POST", path: "/api/v1/tests", desc: "Record a new PQ test result" },
      { method: "GET", path: "/api/v1/tests/:id", desc: "Retrieve test details with bend/radiograph results" },
      { method: "GET", path: "/api/v1/tests/:id/pdf", desc: "Download test certificate as PDF" },
    ],
  },
  {
    category: "Audit & Compliance",
    icon: "📊",
    description: "Generate audit-ready reports for AWS, ASME, and AISC inspections",
    endpoints: [
      { method: "GET", path: "/api/v1/reports/audit", desc: "Generate comprehensive audit readiness report" },
      { method: "GET", path: "/api/v1/reports/expiring", desc: "Welders with qualifications expiring in N days" },
      { method: "GET", path: "/api/v1/reports/continuity", desc: "Continuity compliance status across all welders" },
      { method: "GET", path: "/api/v1/audit-logs", desc: "Immutable change log for all qualification records" },
    ],
  },
  {
    category: "Webhooks",
    icon: "🔔",
    description: "Real-time notifications for certification events",
    endpoints: [
      { method: "POST", path: "/api/v1/webhooks", desc: "Register a webhook endpoint" },
      { method: "GET", path: "/api/v1/webhooks", desc: "List registered webhooks" },
      { method: "DELETE", path: "/api/v1/webhooks/:id", desc: "Remove a webhook subscription" },
    ],
  },
];

const WEBHOOK_EVENTS = [
  { event: "qualification.expiring", desc: "Fired 30/60/90 days before a welder qualification expires" },
  { event: "qualification.expired", desc: "Fired when a qualification lapses due to missed continuity" },
  { event: "test.completed", desc: "Fired when a performance qualification test result is recorded" },
  { event: "test.failed", desc: "Fired when a PQ test result is recorded as failed" },
  { event: "wps.created", desc: "Fired when a new WPS document is created" },
  { event: "audit.scheduled", desc: "Fired when an upcoming audit date is set" },
  { event: "continuity.overdue", desc: "Fired when a welder's continuity log is past due" },
];

const CODE_EXAMPLE = `curl -X GET "https://api.weldcert.co/v1/welders?status=active&code=aws_d1_1" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`;

const RESPONSE_EXAMPLE = `{
  "data": [
    {
      "id": "wldr_7mK3pR9x",
      "name": "Carlos Mendez",
      "employee_id": "W-2847",
      "status": "active",
      "qualifications": [
        {
          "code": "AWS D1.1",
          "process": "SMAW",
          "position": "3G",
          "base_metal": "A36",
          "thickness_range": "3/16\\" - unlimited",
          "qualified_date": "2025-09-15",
          "expiry_date": "2027-09-15",
          "continuity_current": true,
          "last_continuity_log": "2026-03-28"
        }
      ],
      "active_qualifications": 4,
      "expiring_within_90_days": 1
    }
  ],
  "pagination": {
    "total": 89,
    "page": 1,
    "per_page": 10,
    "has_more": true
  }
}`;

const CREATE_EXAMPLE = `curl -X POST "https://api.weldcert.co/v1/tests" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "welder_id": "wldr_7mK3pR9x",
    "code": "aws_d1_1",
    "process": "FCAW",
    "position": "4G",
    "base_metal": "A572 Gr50",
    "thickness": "1/2",
    "visual_result": "pass",
    "bend_results": ["pass", "pass", "pass", "pass"],
    "witnessed_by": "John Harper, CWI #98-102347"
  }'`;

const structuredData = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "WeldCert Developer API Documentation",
  description: "REST API documentation for integrating WeldCert welding certification data into your quality management systems.",
  publisher: { "@type": "Organization", name: "WeldCert", url: "https://weldcert.co" },
  url: "https://weldcert.co/developers",
};

const breadcrumbData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://weldcert.co" },
    { "@type": "ListItem", position: 2, name: "Developer API", item: "https://weldcert.co/developers" },
  ],
};

function MethodBadge({ method }: { method: string }) {
  const colors: Record<string, string> = {
    GET: "bg-green-100 text-green-700",
    POST: "bg-blue-100 text-blue-700",
    PATCH: "bg-yellow-100 text-yellow-700",
    DELETE: "bg-red-100 text-red-700",
  };
  return (
    <span className={`inline-block text-xs font-mono font-bold px-2 py-0.5 rounded ${colors[method] || "bg-gray-100 text-gray-700"}`}>
      {method}
    </span>
  );
}

export default function DevelopersPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

        {/* Hero */}
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 text-center px-4">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full mb-4">
            Developer API
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Build with WeldCert
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Integrate welder qualification data into your ERP, quality management, or fabrication tracking systems.
            RESTful API with full audit trail, webhook events, and multi-code support (AWS, ASME, API).
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/demo" className="bg-amber-500 text-gray-900 font-medium px-6 py-3 rounded-lg hover:bg-amber-400 transition-colors">
              Request API Access
            </a>
            <a href="#endpoints" className="border border-gray-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-white/10 transition-colors">
              View Endpoints
            </a>
          </div>
        </section>

        {/* Overview Cards */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: "🔑", title: "API Key Auth", desc: "Bearer token authentication with shop-scoped keys. Separate read/write permissions for quality managers and shop floor systems." },
              { icon: "📦", title: "JSON REST API", desc: "Standard RESTful endpoints. Filter by welding code (AWS/ASME/API), process, position, qualification status, and expiry date." },
              { icon: "⚡", title: "Webhooks", desc: "Real-time notifications for expiring qualifications, test results, continuity gaps, and upcoming audits." },
            ].map((card) => (
              <div key={card.title} className="border border-gray-200 rounded-xl p-6 text-center">
                <span className="text-3xl mb-3 block">{card.icon}</span>
                <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
                <p className="text-sm text-gray-600">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Authentication */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-4">Authentication</h2>
            <p className="text-gray-600 mb-4">
              All API requests require a Bearer token. Generate API keys from your WeldCert dashboard under{" "}
              <strong>Settings → API Keys</strong>. Keys are scoped to your shop/organization.
              Read-only keys are recommended for ERP integrations; write keys for automated test result imports.
            </p>
            <div className="bg-gray-900 rounded-xl p-4 overflow-x-auto">
              <pre className="text-sm text-green-400 font-mono whitespace-pre">
{`Authorization: Bearer wc_live_a1b2c3d4e5f6...`}
              </pre>
            </div>
            <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-yellow-800">
                <strong>⚠️ Audit compliance:</strong> All API mutations are recorded in the immutable audit log.
                CWI inspectors and auditors can trace every record change to its API source.
              </p>
            </div>
          </div>

          {/* Rate Limits */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-4">Rate Limits</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold">Plan</th>
                    <th className="text-left px-4 py-3 font-semibold">Requests / Minute</th>
                    <th className="text-left px-4 py-3 font-semibold">Requests / Day</th>
                    <th className="text-left px-4 py-3 font-semibold">Webhooks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-100">
                    <td className="px-4 py-3">Standard</td>
                    <td className="px-4 py-3">60</td>
                    <td className="px-4 py-3">10,000</td>
                    <td className="px-4 py-3">5 endpoints</td>
                  </tr>
                  <tr className="border-t border-gray-100 bg-gray-50/50">
                    <td className="px-4 py-3 font-medium">Enterprise</td>
                    <td className="px-4 py-3">300</td>
                    <td className="px-4 py-3">100,000</td>
                    <td className="px-4 py-3">Unlimited</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Endpoints */}
          <div id="endpoints" className="mb-16">
            <h2 className="text-2xl font-bold mb-8">API Endpoints</h2>
            <div className="space-y-10">
              {ENDPOINTS.map((group) => (
                <div key={group.category}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{group.icon}</span>
                    <h3 className="text-xl font-semibold">{group.category}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{group.description}</p>
                  <div className="border border-gray-200 rounded-xl overflow-hidden">
                    {group.endpoints.map((ep, i) => (
                      <div key={i} className={`flex items-start gap-3 px-4 py-3 ${i > 0 ? "border-t border-gray-100" : ""}`}>
                        <MethodBadge method={ep.method} />
                        <code className="text-sm font-mono text-gray-800 shrink-0">{ep.path}</code>
                        <span className="text-sm text-gray-500 ml-auto hidden sm:block">{ep.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Code Examples */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Code Examples</h2>
            <div className="mb-8">
              <h3 className="font-semibold mb-3">List active welders qualified under AWS D1.1</h3>
              <div className="bg-gray-900 rounded-xl p-4 overflow-x-auto">
                <pre className="text-sm text-green-400 font-mono whitespace-pre">{CODE_EXAMPLE}</pre>
              </div>
            </div>
            <div className="mb-8">
              <h3 className="font-semibold mb-3">Response</h3>
              <div className="bg-gray-900 rounded-xl p-4 overflow-x-auto">
                <pre className="text-sm text-blue-300 font-mono whitespace-pre">{RESPONSE_EXAMPLE}</pre>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Record a performance qualification test</h3>
              <div className="bg-gray-900 rounded-xl p-4 overflow-x-auto">
                <pre className="text-sm text-green-400 font-mono whitespace-pre">{CREATE_EXAMPLE}</pre>
              </div>
            </div>
          </div>

          {/* Webhook Events */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-4">Webhook Events</h2>
            <p className="text-gray-600 mb-6">
              Subscribe to certification lifecycle events. Payloads are signed with HMAC-SHA256.
              Failed deliveries are retried with exponential backoff (3 attempts).
            </p>
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              {WEBHOOK_EVENTS.map((ev, i) => (
                <div key={ev.event} className={`flex items-start gap-3 px-4 py-3 ${i > 0 ? "border-t border-gray-100" : ""}`}>
                  <code className="text-sm font-mono text-amber-600 font-medium shrink-0">{ev.event}</code>
                  <span className="text-sm text-gray-500">{ev.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* SDKs */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-4">SDKs &amp; Libraries</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { lang: "Node.js / TypeScript", pkg: "npm install @weldcert/sdk", status: "Coming Soon" },
                { lang: "Python", pkg: "pip install weldcert", status: "Coming Soon" },
                { lang: "C# / .NET", pkg: "dotnet add package WeldCert.SDK", status: "Coming Soon" },
              ].map((sdk) => (
                <div key={sdk.lang} className="border border-gray-200 rounded-xl p-5">
                  <h3 className="font-semibold mb-1">{sdk.lang}</h3>
                  <code className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded block mb-3">{sdk.pkg}</code>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-gray-100 text-gray-600">
                    {sdk.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to integrate?</h2>
            <p className="text-gray-400 mb-6 max-w-lg mx-auto">
              API access is available on all paid plans. Connect your ERP or quality management system to WeldCert today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="/demo" className="bg-amber-500 text-gray-900 font-medium px-6 py-3 rounded-lg hover:bg-amber-400 transition-colors">
                Request API Access
              </a>
              <a href="/contact" className="border border-gray-500 text-white font-medium px-6 py-3 rounded-lg hover:bg-white/10 transition-colors">
                Talk to Engineering
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
