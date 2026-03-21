export interface BlogMeta {
  slug: string;
  title: string;
  tags: string[];
}

export const BLOG_META: BlogMeta[] = [
  { slug: "asme-section-ix-continuity-rules", title: "ASME Section IX Continuity Rules: Don't Let Qualifications Lapse", tags: ["asme", "qualification", "compliance"] },
  { slug: "aws-d1-1-table-4-10-explained", title: "AWS D1.1 Table 4.10 Explained: Visual Acceptance Criteria", tags: ["aws", "inspection", "standards"] },
  { slug: "aws-d1-1-welder-qualification-requirements", title: "AWS D1.1 Welder Qualification Requirements: Complete Guide", tags: ["aws", "qualification", "certification"] },
  { slug: "cwi-certification-requirements", title: "CWI Certification Requirements: How to Become a Certified Welding Inspector", tags: ["certification", "cwi", "inspection"] },
  { slug: "daily-welding-activity-log-guide", title: "Daily Welding Activity Log Guide: What to Track", tags: ["documentation", "compliance", "tracking"] },
  { slug: "weld-failure-investigation-documentation", title: "Weld Failure Investigation Documentation: What You Need", tags: ["documentation", "inspection", "compliance"] },
  { slug: "weld-tracking-software-vs-spreadsheets", title: "Weld Tracking Software vs Spreadsheets: Full Comparison", tags: ["technology", "documentation", "comparison"] },
  { slug: "weld-visual-inspection-guide", title: "Weld Visual Inspection Guide: Defects, Criteria & Best Practices", tags: ["inspection", "aws", "standards"] },
  { slug: "welder-qualification-checklist", title: "Welder Qualification Checklist: Never Miss a Step", tags: ["qualification", "templates", "certification"] },
  { slug: "welder-qualification-report-template", title: "Welder Qualification Report Template: What to Include", tags: ["documentation", "templates", "qualification"] },
  { slug: "welder-requalification-frequency-guide", title: "Welder Requalification Frequency Guide: When to Retest", tags: ["qualification", "compliance", "certification"] },
  { slug: "welding-audit-penalties-fines", title: "Welding Audit Penalties & Fines: What Non-Compliance Costs", tags: ["compliance", "audit", "standards"] },
  { slug: "welding-audit-preparation-guide", title: "Welding Audit Preparation Guide: Your Complete Checklist", tags: ["audit", "compliance", "documentation"] },
  { slug: "welding-procedure-specification-guide", title: "Welding Procedure Specification (WPS) Guide: How to Write One", tags: ["wps-pqr", "documentation", "standards"] },
  { slug: "wps-pqr-documentation-guide", title: "WPS & PQR Documentation Guide: Everything You Need to Know", tags: ["wps-pqr", "documentation", "standards"] },
];

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
