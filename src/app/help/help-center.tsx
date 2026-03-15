"use client";

import { useState } from "react";
import {
  ChevronDown,
  Rocket,
  FileCheck,
  Users,
  FileText,
  CreditCard,
  Flame,
  Search,
  HelpCircle,
  ClipboardList,
  AlertTriangle,
} from "lucide-react";

interface Article { q: string; a: string }
interface Category { title: string; icon: React.ReactNode; description: string; articles: Article[] }

const CATEGORIES: Category[] = [
  {
    title: "Getting Started",
    icon: <Rocket size={22} />,
    description: "Set up your shop, add welders, and create your first WPS.",
    articles: [
      {
        q: "How do I create my WeldCert account?",
        a: "Visit app.weldcert.io/sign-up and enter your email. You'll get a 14-day free trial with full access — no credit card required. The setup wizard walks you through adding your shop details, uploading your first WPS, and adding welders.",
      },
      {
        q: "How do I add welders to the system?",
        a: "Go to Welders → Add Welder. Enter their name, stamp/ID number, and qualification details (processes, positions, base metals, filler metals, thickness ranges). Upload their PQR test results and certification documents. WeldCert tracks all qualification ranges and expiration dates automatically.",
      },
      {
        q: "How do I upload existing WPS documents?",
        a: "Go to WPS Library → Upload WPS. You can upload PDFs of existing procedure specifications or create new ones using our AWS D1.1, ASME Section IX, or API 1104 templates. WeldCert parses the essential variables and links them to welder qualifications.",
      },
      {
        q: "What welding codes does WeldCert support?",
        a: "WeldCert supports AWS D1.1 (Structural Steel), AWS D1.2 (Aluminum), AWS D1.5 (Bridge Welding), ASME Section IX (Pressure Vessels/Piping), API 1104 (Pipeline), and CWB W47.1 (Canadian). Each code has specific qualification rules, essential variable tracking, and expiration logic built in.",
      },
      {
        q: "Can I import data from spreadsheets?",
        a: "Yes. Contact support@weldcert.io with your existing welder qualification spreadsheets, PQR logs, or WPS documents. We'll help you import everything so you have a complete digital record from day one.",
      },
    ],
  },
  {
    title: "WPS & PQR Management",
    icon: <FileCheck size={22} />,
    description: "Create, manage, and link Welding Procedure Specifications and Procedure Qualification Records.",
    articles: [
      {
        q: "How do I create a new WPS?",
        a: "Go to WPS Library → New WPS and select your code (AWS D1.1, ASME IX, etc.). Fill in the essential and non-essential variables: process (SMAW, GMAW, FCAW, etc.), base metal group, filler metal classification, position, preheat/interpass temperatures, and joint design. WeldCert validates that all required fields are complete per your selected code.",
      },
      {
        q: "How do I link a PQR to a WPS?",
        a: "Open the WPS and click 'Link PQR.' Select from existing PQR records or create a new one. Enter the test results: tensile, bend, impact (if required), and any supplemental tests. WeldCert validates that the PQR essential variables support the WPS ranges. If there's a gap, you'll see a clear warning.",
      },
      {
        q: "What happens when a WPS essential variable changes?",
        a: "WeldCert flags any essential variable change that requires requalification. For example, changing from GMAW short-circuit to spray transfer, or exceeding the qualified thickness range. The system creates an action item to either update the PQR or create a new qualification test.",
      },
      {
        q: "Can I generate WPS/PQR PDFs for clients?",
        a: "Yes. Open any WPS or PQR and click 'Download PDF.' The document is formatted per the applicable code standard, includes all essential variables, linked test records, and approval signatures. Many fabrication shops generate these for project submittals and client QA packages.",
      },
    ],
  },
  {
    title: "Welder Qualifications",
    icon: <Flame size={22} />,
    description: "Track qualifications, continuity, and expiration dates.",
    articles: [
      {
        q: "How does qualification tracking work?",
        a: "Each welder's profile shows their complete qualification matrix: processes, positions, base metals, thickness ranges, and filler metals they're qualified for. WeldCert cross-references this against your WPS library so you always know which welders can perform which procedures.",
      },
      {
        q: "How does WeldCert handle qualification expiration?",
        a: "Qualification periods vary by code: AWS D1.1 qualifications must be renewed every 6 months if the welder hasn't used the process (continuity). ASME IX qualifications expire if not used within 6 months. WeldCert tracks usage automatically and alerts you 90, 60, and 30 days before expiration.",
      },
      {
        q: "How do I maintain welder continuity?",
        a: "Under each welder's profile, log their welding activity by process. WeldCert tracks the 6-month continuity window automatically. If a welder's continuity is about to lapse, the system alerts you so you can assign work or schedule a requalification test before the deadline.",
      },
      {
        q: "What happens when a welder fails a qualification test?",
        a: "Log the failed test under the welder's profile. WeldCert records the failure, reason, and date. The welder's qualification status updates to show the gap. You can schedule an immediate retest or assign alternative procedures they're still qualified for.",
      },
      {
        q: "Can I see which welders are qualified for a specific WPS?",
        a: "Yes. Open any WPS and click 'Qualified Welders.' WeldCert shows every welder whose qualifications cover that procedure's essential variable ranges. This is critical for project planning — you instantly know who can perform the work.",
      },
    ],
  },
  {
    title: "Audit & Compliance",
    icon: <ClipboardList size={22} />,
    description: "Prepare for CWI audits, client QA reviews, and code compliance.",
    articles: [
      {
        q: "How do I prepare for a CWI audit?",
        a: "Go to Reports → Audit Package. Select the project, date range, and applicable code. WeldCert generates a complete package: welder qualification records, WPS/PQR documentation, continuity logs, inspection records, and any non-conformance reports. Export as a single PDF or zip file. Auditors consistently report this saves 4-6 hours of document hunting.",
      },
      {
        q: "Does WeldCert track non-conformance reports (NCRs)?",
        a: "Yes. Go to Quality → New NCR to document any weld rejection, repair, or deviation. Link it to the specific welder, WPS, and project. Track corrective actions, root cause analysis, and resolution. NCR history feeds into welder performance metrics and audit documentation.",
      },
      {
        q: "How long are records retained?",
        a: "WeldCert retains all records indefinitely. Most codes require qualification records for the life of the equipment or structure, and many clients require extended retention. Your data is backed up daily and encrypted at rest.",
      },
      {
        q: "Can I share records with clients or inspectors?",
        a: "Yes. Generate a read-only share link for any report, welder qualification, or WPS package. Set an expiration date if needed. The recipient can view and download without needing a WeldCert account. This is ideal for project submittals and third-party inspections.",
      },
    ],
  },
  {
    title: "Alerts & Notifications",
    icon: <AlertTriangle size={22} />,
    description: "Expiration warnings, continuity alerts, and team notifications.",
    articles: [
      {
        q: "What alerts does WeldCert send?",
        a: "Qualification expiration (90, 60, 30 days before), continuity lapse warnings (welder hasn't welded with a process in 4+ months), NCR assignments, PQR review deadlines, and team member additions. All alerts go by email, with optional dashboard notifications.",
      },
      {
        q: "Can I customize alert timing?",
        a: "Yes. Under Settings → Alerts, adjust the warning windows for expiration and continuity alerts. Some shops prefer 120-day advance notice for qualifications that require scheduling a testing facility. You can also mute alerts for specific welders (e.g., retired or seasonal workers).",
      },
    ],
  },
  {
    title: "Team Management",
    icon: <Users size={22} />,
    description: "Roles, permissions, and multi-shop coordination.",
    articles: [
      {
        q: "What roles are available?",
        a: "Admin: Full access including billing, settings, and user management. QA Manager: Can manage WPS/PQR documents, welder qualifications, and generate reports. Inspector: Can log inspection results and NCRs. Viewer: Read-only access for clients, auditors, or project managers.",
      },
      {
        q: "Can I manage multiple shop locations?",
        a: "Yes. Create locations under Settings → Shops. Assign welders and equipment to locations. Each shop can have its own WPS library while sharing the master qualification database. QA managers see their shop; admins see everything.",
      },
    ],
  },
  {
    title: "Billing & Account",
    icon: <CreditCard size={22} />,
    description: "Plans, payments, and account settings.",
    articles: [
      {
        q: "How much does WeldCert cost?",
        a: "WeldCert pricing is based on the number of active welders tracked. Visit our pricing page for current plans. All plans include unlimited WPS/PQR documents, full code compliance tracking, and team access. Enterprise plans include SSO and dedicated onboarding.",
      },
      {
        q: "How does the free trial work?",
        a: "Sign up and get 14 days of full access — no credit card required. Add your welders, upload your WPS library, and run the system with real data. At the end of the trial, choose a plan to continue or your account pauses (data retained for 90 days).",
      },
      {
        q: "Can I cancel anytime?",
        a: "Yes. Cancel under Settings → Billing. Access continues through your current billing period. Data is retained for 90 days after cancellation. Export everything before canceling.",
      },
    ],
  },
];

function ArticleAccordion({ article }: { article: Article }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button onClick={() => setOpen(!open)} className="w-full flex items-start justify-between gap-4 py-4 text-left group">
        <span className="text-sm font-medium text-gray-900 group-hover:text-brand transition-colors">{article.q}</span>
        <ChevronDown size={18} className={`flex-shrink-0 mt-0.5 text-gray-400 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="pb-4 pr-8 text-sm text-gray-600 leading-relaxed">{article.a}</div>}
    </div>
  );
}

export function HelpCenter() {
  const [search, setSearch] = useState("");

  const filtered = CATEGORIES.map((cat) => ({
    ...cat,
    articles: cat.articles.filter(
      (a) => !search || a.q.toLowerCase().includes(search.toLowerCase()) || a.a.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter((cat) => cat.articles.length > 0);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="relative mb-12">
          <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search help articles..."
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand"
          />
        </div>

        <div className="space-y-10">
          {filtered.map((cat) => (
            <div key={cat.title}>
              <div className="flex items-center gap-3 mb-2">
                <div className="text-brand">{cat.icon}</div>
                <h2 className="text-xl font-bold text-gray-900">{cat.title}</h2>
              </div>
              <p className="text-sm text-gray-500 mb-4 ml-[34px]">{cat.description}</p>
              <div className="bg-gray-50 rounded-xl p-4">
                {cat.articles.map((a) => <ArticleAccordion key={a.q} article={a} />)}
              </div>
            </div>
          ))}
        </div>

        {search && filtered.length === 0 && (
          <div className="text-center py-12">
            <HelpCircle size={40} className="mx-auto text-gray-300 mb-3" />
            <p className="text-gray-500">No articles match &ldquo;{search}&rdquo;</p>
            <p className="text-sm text-gray-400 mt-1">
              Try a different search or email <a href="mailto:support@weldcert.io" className="text-brand hover:underline">support@weldcert.io</a>
            </p>
          </div>
        )}

        <div className="mt-12 bg-gray-50 rounded-xl p-8 text-center">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Still need help?</h3>
          <p className="text-sm text-gray-600 mb-4">Our support team responds within 2 hours during business hours.</p>
          <a href="mailto:support@weldcert.io" className="inline-flex items-center gap-2 bg-brand text-white text-sm font-medium px-6 py-2.5 rounded-lg hover:bg-brand-dark transition-colors">
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
}
