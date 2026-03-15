import type { MetadataRoute } from "next";

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
  ];

  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/features`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/demo`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/help`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    ...blogSlugs.map((slug) => ({
      url: `${base}/blog/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: `${base}/compare/welders-log`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/compare/spreadsheets`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
