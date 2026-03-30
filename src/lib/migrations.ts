export interface Migration {
  slug: string;
  name: string;
  tagline: string;
  steps: { title: string; description: string; time: string }[];
  featureMap: { feature: string; them: string; us: string }[];
  faqs: { q: string; a: string }[];
}

export const MIGRATIONS: Migration[] = [
  {
    slug: "spreadsheets",
    name: "Spreadsheets & Paper Records",
    tagline:
      "Stop chasing down paper WPS binders and Excel qualification logs. WeldCert digitizes your welder certifications, PQR records, and audit trail in one system.",
    steps: [
      {
        title: "Gather your records",
        description:
          "Collect your welder qualification spreadsheets, paper WPS/PQR binders, and any test result documentation. Take photos of paper records you want to preserve.",
        time: "15 min",
      },
      {
        title: "Create your WeldCert account",
        description:
          "Sign up for a free 14-day trial. No credit card required. Set up your company profile with applicable codes (AWS D1.1, ASME IX, API 1104).",
        time: "3 min",
      },
      {
        title: "Import your welder roster",
        description:
          "Upload your welder list via CSV or enter manually. Include names, ID numbers, certifications, and qualification expiration dates.",
        time: "10 min",
      },
      {
        title: "Enter your WPS/PQR library",
        description:
          "Add your Welding Procedure Specifications and Procedure Qualification Records. WeldCert links PQRs to WPS documents and tracks essential variable ranges.",
        time: "15 min",
      },
      {
        title: "Set up qualification tracking",
        description:
          "Configure expiration alerts and requalification reminders. WeldCert automatically tracks qualification windows per code requirements.",
        time: "5 min",
      },
      {
        title: "Invite your team",
        description:
          "Add quality managers, inspectors, and welding supervisors. Unlimited users included — no per-seat charges.",
        time: "3 min",
      },
    ],
    featureMap: [
      { feature: "Welder qualifications", them: "Excel rows / filing cabinets", us: "Searchable digital registry" },
      { feature: "WPS/PQR management", them: "Paper binders", us: "Linked digital library with version control" },
      { feature: "Expiration tracking", them: "Manual calendar reminders", us: "Automated alerts 30/60/90 days out" },
      { feature: "Audit preparation", them: "Days of scrambling", us: "1-click audit package generation" },
      { feature: "Essential variables", them: "Manual cross-reference", us: "Automated range tracking per code" },
      { feature: "Continuity records", them: "Handwritten logs", us: "Digital continuity log with timestamps" },
      { feature: "Multi-code tracking", them: "Separate spreadsheets per code", us: "Unified AWS/ASME/API tracking" },
      { feature: "Record retention", them: "Boxes in storage rooms", us: "Automatic digital retention per code" },
    ],
    faqs: [
      {
        q: "My quality manager has maintained spreadsheets for 10 years. Will the historical data transfer?",
        a: "Yes. WeldCert's CSV import preserves your full qualification history, including test dates, results, and expiration dates. Your historical timeline remains intact for audits.",
      },
      {
        q: "We have hundreds of WPS/PQR documents. How long does that take?",
        a: "For large libraries, our team provides bulk import assistance at no extra cost. Most shops with 50-100 WPS documents complete the import in a single afternoon.",
      },
      {
        q: "Will our CWI be able to use this in the field?",
        a: "WeldCert's mobile interface is designed for field use. CWIs can look up welder qualifications, verify WPS compliance, and log inspections from their phone or tablet.",
      },
      {
        q: "Do we need to change our existing quality procedures?",
        a: "No. WeldCert adapts to your existing quality system. You can replicate your current approval workflow digitally and enhance it over time.",
      },
    ],
  },
  {
    slug: "weldtrace",
    name: "WeldTrace",
    tagline:
      "Upgrade from WeldTrace to WeldCert for deeper code compliance tracking, automated essential variable management, and unlimited users at a flat monthly rate.",
    steps: [
      {
        title: "Export your WeldTrace data",
        description:
          "Go to WeldTrace Settings → Export and download your welder qualifications, WPS library, and inspection records as CSV.",
        time: "5 min",
      },
      {
        title: "Create your WeldCert account",
        description:
          "Sign up for a free 14-day trial. No credit card required. Select your applicable welding codes during onboarding.",
        time: "3 min",
      },
      {
        title: "Import welder qualifications",
        description:
          "Upload your WeldTrace CSV export. WeldCert maps welder names, IDs, qualification ranges, test results, and expiration dates automatically.",
        time: "5 min",
      },
      {
        title: "Import WPS/PQR library",
        description:
          "Upload your procedure documents. WeldCert links PQRs to WPS records and validates essential variable coverage — something WeldTrace tracks manually.",
        time: "10 min",
      },
      {
        title: "Configure notifications",
        description:
          "Set up expiration alerts, requalification reminders, and audit notifications. More granular than WeldTrace's basic email alerts.",
        time: "5 min",
      },
      {
        title: "Invite your team",
        description:
          "Add all quality personnel. Unlike WeldTrace's per-user pricing, WeldCert includes unlimited users on every plan.",
        time: "3 min",
      },
    ],
    featureMap: [
      { feature: "Essential variable tracking", them: "Manual entry", us: "Automated per code" },
      { feature: "Multi-code support", them: "AWS D1.1 focused", us: "AWS + ASME IX + API 1104" },
      { feature: "User pricing", them: "Per-seat charges", us: "Unlimited users included" },
      { feature: "PQR-to-WPS linking", them: "Manual reference", us: "Automated bi-directional linking" },
      { feature: "Continuity tracking", them: "Basic logging", us: "Automated 6-month continuity alerts" },
      { feature: "Audit packages", them: "Manual assembly", us: "1-click generation" },
      { feature: "Mobile access", them: "Limited", us: "Full mobile app with offline" },
      { feature: "API access", them: "Not available", us: "REST API on all plans" },
    ],
    faqs: [
      {
        q: "Will my WeldTrace data import cleanly?",
        a: "Yes. WeldCert's import tool is designed to accept WeldTrace CSV exports. Welder qualifications, test records, and procedure documents all transfer with their original dates and relationships.",
      },
      {
        q: "Can I run both systems during the transition?",
        a: "Absolutely. Most teams run WeldCert alongside WeldTrace for 1-2 weeks to verify data accuracy before fully switching.",
      },
      {
        q: "Is WeldCert more expensive than WeldTrace?",
        a: "For shops with more than a few users, WeldCert is typically cheaper. WeldTrace charges per user, while WeldCert is a flat monthly rate with unlimited users.",
      },
      {
        q: "What about our existing audit trail?",
        a: "Your complete WeldTrace audit history imports with original timestamps. WeldCert then continues the audit trail seamlessly from the migration date forward.",
      },
    ],
  },
  {
    slug: "weldeye",
    name: "WeldEye (Kemppi)",
    tagline:
      "Move from Kemppi's WeldEye to WeldCert for vendor-neutral certification management that works with any welding equipment — not just Kemppi machines.",
    steps: [
      {
        title: "Export your WeldEye data",
        description:
          "Download your WPS/PQR documents, welder qualification records, and production data from WeldEye's export function.",
        time: "10 min",
      },
      {
        title: "Create your WeldCert account",
        description:
          "Sign up for a free 14-day trial. WeldCert works with any welding equipment — no Kemppi hardware required.",
        time: "3 min",
      },
      {
        title: "Import your WPS/PQR library",
        description:
          "Upload your procedure documents. WeldCert supports ISO 15614, EN ISO 9606, AWS D1.1, ASME IX, and API 1104 — broader code coverage than WeldEye.",
        time: "10 min",
      },
      {
        title: "Import welder qualifications",
        description:
          "Transfer your welder roster with qualification ranges, test results, and certification dates. WeldCert preserves your complete qualification history.",
        time: "5 min",
      },
      {
        title: "Set up equipment-agnostic tracking",
        description:
          "Unlike WeldEye's Kemppi-centric approach, WeldCert tracks qualifications independently of equipment. Add welding machines from any manufacturer.",
        time: "5 min",
      },
      {
        title: "Invite your team",
        description:
          "Add quality managers, welding engineers, and inspectors. Unlimited users at no extra cost — no per-seat WeldEye licensing.",
        time: "3 min",
      },
    ],
    featureMap: [
      { feature: "Equipment vendor lock-in", them: "Kemppi machines only", us: "Vendor-neutral, any equipment" },
      { feature: "Code coverage", them: "ISO/EN focused", us: "AWS + ASME + API + ISO + EN" },
      { feature: "Production monitoring", them: "Kemppi arc data only", us: "Code-agnostic qualification tracking" },
      { feature: "WPS creation", them: "ISO 15614 templates", us: "Multi-code WPS builder" },
      { feature: "Pricing", them: "Per-machine + per-user", us: "Flat rate, unlimited everything" },
      { feature: "Offline capability", them: "Requires connection to machines", us: "Full offline mobile access" },
      { feature: "Third-party integrations", them: "Kemppi ecosystem only", us: "Open API, any ERP/QMS" },
      { feature: "Deployment", them: "Cloud with machine dependency", us: "Cloud-only, no hardware dependency" },
    ],
    faqs: [
      {
        q: "We have Kemppi machines. Do we lose arc monitoring data?",
        a: "WeldCert focuses on qualification and certification management, not real-time arc monitoring. If you need Kemppi arc data, you can continue using WeldEye for that while managing certifications in WeldCert.",
      },
      {
        q: "We use ISO standards, not AWS. Does WeldCert support that?",
        a: "Yes. WeldCert supports ISO 15614, EN ISO 9606, AWS D1.1, ASME IX, and API 1104. You get broader code coverage than WeldEye's primarily ISO-focused platform.",
      },
      {
        q: "What if we add non-Kemppi equipment later?",
        a: "That's exactly why teams switch. WeldCert doesn't care what equipment you use — qualifications and certifications are tracked independently of any hardware vendor.",
      },
      {
        q: "Can our ISO auditor access WeldCert?",
        a: "Yes. Create read-only auditor accounts that show your complete qualification registry, procedure library, and compliance status — ready for ISO 3834 or any other audit.",
      },
    ],
  },
];
