export interface BlogMeta {
  slug: string;
  title: string;
  tags: string[];
  author: string;
}

export const BLOG_META: BlogMeta[] = [
  { slug: "ndt-welding-inspection-methods", title: "Non-Destructive Testing for Welds: NDT Methods Every Fabricator Should Know", tags: ["inspection", "standards", "qualification"], author: "nolan-terry" },
  { slug: "welding-quality-control-plan-guide", title: "How to Build a Welding Quality Control Plan That Passes Audits", tags: ["compliance", "audit", "documentation"], author: "nolan-terry" },
  { slug: "prequalified-welding-procedures-aws-d1-1", title: "Prequalified Welding Procedures Under AWS D1.1: When You Can Skip PQR Testing", tags: ["aws", "wps-pqr", "standards"], author: "nolan-terry" },
  { slug: "structural-welding-inspection-checklist-2026", title: "Structural Welding Inspection Checklist for 2026: Before, During, and After", tags: ["inspection", "aws", "compliance"], author: "nolan-terry" },
  { slug: "weld-rejection-rework-costs", title: "Weld Rejection Rates: What Rework Actually Costs Your Shop", tags: ["standards", "inspection", "tracking"], author: "weldcert-team" },
  { slug: "asme-section-ix-essential-variables", title: "ASME Section IX Essential Variables: The Complete Guide to QW-350", tags: ["asme", "qualification", "compliance"], author: "weldcert-team" },
  { slug: "welder-performance-qualification-test-guide", title: "Welder Performance Qualification Tests: Positions, Methods, and Pass Criteria", tags: ["qualification", "certification", "asme"], author: "weldcert-team" },
  { slug: "welding-documentation-record-retention", title: "Welding Documentation and Record Retention: How Long to Keep What", tags: ["documentation", "compliance", "audit"], author: "weldcert-team" },
  { slug: "asme-section-ix-continuity-rules", title: "ASME Section IX Continuity Rules: When Welders Must Requalify", tags: ["asme", "qualification", "compliance"], author: "nolan-terry" },
  { slug: "aws-d1-1-table-4-10-explained", title: "AWS D1.1 Table 4.10 Explained: Visual Acceptance Criteria", tags: ["aws", "inspection", "standards"], author: "nolan-terry" },
  { slug: "aws-d1-1-welder-qualification-requirements", title: "AWS D1.1 Welder Qualification Requirements: Complete Guide", tags: ["aws", "qualification", "certification"], author: "nolan-terry" },
  { slug: "cwi-certification-requirements", title: "CWI Certification Requirements: How to Become a Certified Welding Inspector", tags: ["certification", "cwi", "inspection"], author: "nolan-terry" },
  { slug: "weld-failure-investigation-documentation", title: "Weld Failure Investigation Documentation: What You Need", tags: ["documentation", "inspection", "compliance"], author: "nolan-terry" },
  { slug: "weld-visual-inspection-guide", title: "Weld Visual Inspection Guide: Defects, Criteria & Best Practices", tags: ["inspection", "aws", "standards"], author: "nolan-terry" },
  { slug: "welder-qualification-checklist", title: "Welder Qualification Checklist: Never Miss a Step", tags: ["qualification", "templates", "certification"], author: "weldcert-team" },
  { slug: "welder-requalification-frequency-guide", title: "Welder Requalification Frequency Guide: When to Retest", tags: ["qualification", "compliance", "certification"], author: "weldcert-team" },
  { slug: "welding-audit-penalties-fines", title: "Welding Audit Penalties & Fines: What Non-Compliance Costs", tags: ["compliance", "audit", "standards"], author: "weldcert-team" },
  { slug: "welding-procedure-specification-guide", title: "Welding Procedure Specification (WPS) Guide: How to Write One", tags: ["wps-pqr", "documentation", "standards"], author: "weldcert-team" },
  { slug: "welder-qualification-lapse-consequences", title: "What Happens When Welder Qualifications Lapse: Investigation and Liability", tags: ["compliance", "certification", "standards"], author: "nolan-terry" },
  { slug: "consumable-qualification-requirements", title: "Welding Consumable Qualification Requirements: Electrodes and Wires", tags: ["asme", "qualification", "standards"], author: "nolan-terry" },
  { slug: "welder-qualification-record-template", title: "Welder Qualification Record Template: What Inspectors Actually Need", tags: ["documentation", "templates", "qualification"], author: "nolan-terry" },
  { slug: "wps-pqr-management-guide", title: "How to Manage WPS and PQR Records for AWS D1.1 Compliance", tags: ["wps-pqr", "compliance", "documentation"], author: "nolan-terry" },
  { slug: "welding-code-violation-penalties", title: "OSHA Welding Code Penalties: What Non-Compliance Actually Costs", tags: ["compliance", "standards", "audit"], author: "nolan-terry" },
  { slug: "api-1104-pipeline-welder-qualification", title: "API 1104 Pipeline Welder Qualification: Field to Facility Requirements", tags: ["qualification", "certification", "standards"], author: "nolan-terry" },
  { slug: "welder-certification-tracking-best-practices", title: "Welder Certification Tracking: Digital Systems vs Manual Records", tags: ["technology", "tracking", "compliance"], author: "weldcert-team" },
  { slug: "welder-certification-software-comparison", title: "Welder Certification Software Comparison: WeldCert vs Competitors", tags: ["technology", "comparison", "tracking"], author: "weldcert-team" },
  { slug: "aws-d1-1-compliance-complete-guide", title: "AWS D1.1 Compliance Requirements: The Complete 2026 Guide", tags: ["aws", "compliance", "qualification"], author: "weldcert-team" },
  { slug: "daily-welder-activity-logging", title: "Daily Welder Activity Logging: What AWS D1.1 Actually Requires", tags: ["documentation", "compliance", "tracking"], author: "weldcert-team" },
  { slug: "welder-certification-software-vs-spreadsheets", title: "Welder Certification Software vs Spreadsheets: Why Digital Wins", tags: ["technology", "comparison", "tracking"], author: "weldcert-team" },
  { slug: "aws-welding-audit-preparation", title: "How to Prepare for an AWS Welding Code Audit", tags: ["audit", "compliance", "documentation"], author: "weldcert-team" },
  { slug: "osha-welding-safety-standards-explained", title: "OSHA 29 CFR 1910.252 Explained: Welding Safety and Certification Rules", tags: ["compliance", "standards", "certification"], author: "weldcert-team" },
];

export function getAllTags(): { tag: string; count: number }[] {
  const tagMap = new Map<string, number>();
  BLOG_META.forEach((p) => p.tags.forEach((t) => tagMap.set(t, (tagMap.get(t) || 0) + 1)));
  return Array.from(tagMap.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}

export function getPostsByTag(tag: string): BlogMeta[] {
  return BLOG_META.filter((p) => p.tags.includes(tag));
}

export const TAG_LABELS: Record<string, string> = {
  "asme": "ASME",
  "aws": "AWS D1.1",
  "qualification": "Qualification",
  "compliance": "Compliance",
  "inspection": "Inspection",
  "standards": "Standards",
  "certification": "Certification",
  "cwi": "CWI",
  "documentation": "Documentation",
  "tracking": "Tracking",
  "technology": "Technology",
  "comparison": "Comparison",
  "templates": "Templates",
  "audit": "Audit",
  "wps-pqr": "WPS/PQR",
  "business": "Business",
};

export function getRelatedPosts(currentSlug: string, count = 3): BlogMeta[] {
  const current = BLOG_META.find((p) => p.slug === currentSlug);
  if (!current) return BLOG_META.filter((p) => p.slug !== currentSlug).slice(0, count);

  const scored = BLOG_META
    .filter((p) => p.slug !== currentSlug)
    .map((p) => ({
      ...p,
      score: p.tags.filter((t) => current.tags.includes(t)).length,
    }))
    .sort((a, b) => b.score - a.score || a.title.localeCompare(b.title));

  return scored.slice(0, count);
}
