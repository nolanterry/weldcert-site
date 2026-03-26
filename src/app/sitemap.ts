import type { MetadataRoute } from "next";
import { AUTHORS } from "@/lib/authors";
import { getAllTags } from "@/lib/blog-meta";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://weldcert.io";
  const now = new Date();

  const blogSlugs = [
    "aws-d1-1-compliance-complete-guide",
    "daily-welder-activity-logging", 
    "welder-certification-software-vs-spreadsheets",
    "aws-welding-audit-preparation",
    "osha-welding-safety-standards-explained",
    "aws-d1-1-welder-qualification-requirements",
    "api-1104-pipeline-welder-qualification",
    "asme-section-ix-continuity-rules",
    "welding-code-violation-penalties",
    "welder-certification-software-comparison",
    "wps-pqr-management-guide",
    "welder-certification-tracking-best-practices",
    "consumable-qualification-requirements",
    "welder-qualification-lapse-consequences",
    "welder-qualification-record-template",
    "ndt-welding-inspection-methods",
    "welding-quality-control-plan-guide",
    "prequalified-welding-procedures-aws-d1-1",
    "structural-welding-inspection-checklist-2026",
    "weld-rejection-rework-costs",
    "asme-section-ix-essential-variables",
    "welder-performance-qualification-test-guide",
    "welding-documentation-record-retention",
    "aws-d1-1-table-4-10-explained",
    "cwi-certification-requirements",
    "weld-failure-investigation-documentation",
    "weld-visual-inspection-guide",
    "welder-requalification-frequency-guide",
    "welding-procedure-specification-guide",
  ];

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/features`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/integrations`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/customers`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/demo`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/help`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/resources`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/status`, lastModified: now, changeFrequency: "daily" as const, priority: 0.5 },
    { url: `${base}/roi-calculator`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/use-cases`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/use-cases/structural-steel-fabricators`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/use-cases/pressure-vessel-manufacturers`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/use-cases/pipeline-contractors`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    ...blogSlugs.map((slug) => ({
      url: `${base}/blog/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: `${base}/blog/authors`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.6 },
    ...AUTHORS.map((author) => ({
      url: `${base}/blog/authors/${author.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    { url: `${base}/compare/welders-log`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/compare/spreadsheets`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/compare/weldtrace`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/compare/weldstracker`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/compare/weldeye`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/changelog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/accessibility`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${base}/blog/tag`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.5 },
    ...getAllTags().map(({ tag }) => ({ url: `${base}/blog/tag/${tag}`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.5 })),
  ];
}
