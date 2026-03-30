export interface Webinar {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  date: string;
  time: string;
  duration: string;
  speaker: { name: string; title: string; company: string };
  topics: string[];
  status: "upcoming" | "on-demand";
  category: string;
}

export const WEBINARS: Webinar[] = [
  {
    slug: "aws-d1-1-documentation-digital-transformation",
    title: "AWS D1.1 Documentation in the Digital Age: From Paper WPS to Digital Compliance",
    description: "How structural steel fabricators are digitizing WPS, PQR, and welder qualification records to streamline AWS D1.1 audits and reduce documentation errors.",
    longDescription: "AWS D1.1 audits live and die on documentation quality — yet most fabrication shops still manage WPS, PQR, and welder qualification records across filing cabinets, spreadsheets, and email chains. This webinar shows how leading AISC-certified fabricators are transitioning to digital documentation workflows that eliminate the most common audit findings. We'll walk through the exact documentation requirements for D1.1 compliance, demonstrate how digital systems handle WPS-to-PQR linkage, welder qualification tracking with expiration alerts, and audit-ready report generation. Whether you're preparing for your first AISC audit or looking to streamline an established QC program, you'll leave with a practical digitization roadmap.",
    date: "2026-04-29",
    time: "1:00 PM ET",
    duration: "45 min",
    speaker: { name: "Nolan Terry", title: "CEO", company: "WeldCert" },
    topics: [
      "AWS D1.1 documentation requirements breakdown",
      "Most common audit findings (and how to prevent them)",
      "Digital WPS-to-PQR linkage workflows",
      "Welder qualification tracking with expiration alerts",
      "Building an audit-ready QC program",
    ],
    status: "upcoming",
    category: "Compliance",
  },
  {
    slug: "welder-qualification-management-best-practices",
    title: "Welder Qualification Management: Best Practices for Multi-Code Shops",
    description: "Strategies for managing welder qualifications across AWS D1.1, ASME IX, and API 1104 — including cross-code qualification mapping and continuity tracking.",
    longDescription: "Fabrication shops that work across multiple codes face a unique challenge: tracking welder qualifications under AWS D1.1, ASME IX, API 1104, and other standards simultaneously. Each code has different essential variables, continuity requirements, and requalification triggers. This webinar addresses the specific challenges of multi-code qualification management — including how to map qualifications across codes to minimize redundant testing, implement continuity tracking that satisfies all applicable standards, and structure your records so auditors from different code bodies can quickly find what they need. We'll share case studies from shops that reduced their qualification testing costs by 40%+ through strategic cross-code mapping.",
    date: "2026-05-20",
    time: "2:00 PM ET",
    duration: "50 min",
    speaker: { name: "Nolan Terry", title: "CEO", company: "WeldCert" },
    topics: [
      "Cross-code qualification mapping (D1.1 / ASME IX / API 1104)",
      "Essential variables comparison across codes",
      "Continuity tracking requirements by standard",
      "Reducing redundant qualification testing",
      "Record organization for multi-code audits",
    ],
    status: "upcoming",
    category: "Qualification",
  },
  {
    slug: "weld-inspection-ndt-documentation",
    title: "NDT Documentation for Weld Inspection: What Auditors Actually Look For",
    description: "A quality control manager's guide to NDT documentation — from VT through RT/UT — including report formats, acceptance criteria records, and traceability requirements.",
    longDescription: "Non-destructive testing documentation is one of the most scrutinized areas in any welding audit. Inspectors and auditors examine not just whether NDT was performed, but how results were documented, whether acceptance criteria were properly applied, and whether full traceability exists from weld map to joint to test report. This on-demand webinar covers documentation requirements for each NDT method (VT, MT, PT, RT, UT), the report formats that satisfy different code bodies, how to document acceptance/rejection decisions with proper traceability, and common documentation errors that result in audit findings. Includes downloadable NDT report templates for AWS D1.1 and ASME IX projects.",
    date: "2026-02-25",
    time: "1:00 PM ET",
    duration: "40 min",
    speaker: { name: "Nolan Terry", title: "CEO", company: "WeldCert" },
    topics: [
      "NDT documentation requirements by method (VT/MT/PT/RT/UT)",
      "Report formats for AWS D1.1 and ASME IX",
      "Acceptance criteria documentation",
      "Weld map to test report traceability",
      "Common NDT documentation errors",
    ],
    status: "on-demand",
    category: "Inspection",
  },
  {
    slug: "welding-audit-preparation-checklist",
    title: "Welding Audit Preparation: The Complete QC Manager's Checklist",
    description: "Everything you need to prepare for a welding code audit — from document organization to personnel interviews to shop floor readiness.",
    longDescription: "A welding audit can be a straightforward verification of a well-run QC program — or a stressful scramble through disorganized records. This on-demand webinar provides a comprehensive audit preparation framework covering the three phases every QC manager should follow: pre-audit documentation review (organizing WPS, PQR, welder qualifications, NDT reports, and material certs), shop floor readiness (equipment calibration records, consumable storage, work area compliance), and personnel preparation (who auditors will interview and what they'll ask). We cover preparation for AISC certification audits, owner/engineer third-party audits, and code body examinations. Includes a downloadable 50-point audit preparation checklist.",
    date: "2026-01-30",
    time: "2:00 PM ET",
    duration: "45 min",
    speaker: { name: "Nolan Terry", title: "CEO", company: "WeldCert" },
    topics: [
      "Pre-audit documentation review checklist",
      "Shop floor readiness assessment",
      "Personnel interview preparation",
      "AISC certification audit specifics",
      "50-point audit preparation framework",
    ],
    status: "on-demand",
    category: "Audit Prep",
  },
];

export function getWebinarBySlug(slug: string): Webinar | undefined {
  return WEBINARS.find((w) => w.slug === slug);
}

export function getUpcomingWebinars(): Webinar[] {
  return WEBINARS.filter((w) => w.status === "upcoming");
}

export function getOnDemandWebinars(): Webinar[] {
  return WEBINARS.filter((w) => w.status === "on-demand");
}
