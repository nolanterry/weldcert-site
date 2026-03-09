import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Welder certification guides, AWS D1.1 compliance tips, and welding industry insights from WeldCert. Stay informed on qualification tracking and best practices.",
};

const POSTS = [
  {
    slug: "welder-qualification-lapse-consequences",
    title: "What Happens When Welder Qualifications Lapse: Investigation and Liability",
    excerpt: "When a structural failure involves lapsed welder qualifications, what you document in the first 24 hours determines whether you face a standard citation or criminal liability. Covers OSHA reporting timelines, scene documentation, and how your qualification records become your defense.",
    date: "March 8, 2026",
    readTime: "13 min read",
    category: "Safety",
  },
  {
    slug: "consumable-qualification-requirements",
    title: "Welding Consumable Qualification Requirements: Electrodes and Wires",
    excerpt: "Complete OSHA welding consumable requirements under ASME Section IX. Covers electrode classification systems, wire feed quality standards, flux handling procedures, gas mixture specifications, and storage requirements.",
    date: "March 8, 2026",
    readTime: "11 min read",
    category: "Materials",
  },
  {
    slug: "welder-qualification-record-template",
    title: "Welder Qualification Record Template: What Inspectors Actually Need",
    excerpt: "Most welder qualification forms are missing critical fields. Learn what a compliant WQR must contain, common documentation gaps that trigger AWS citations, and why static templates create more risk than they solve.",
    date: "March 8, 2026",
    readTime: "10 min read",
    category: "Templates",
  },
  {
    slug: "asme-section-ix-continuity-rules",
    title: "ASME Section IX Continuity Rules: When Welders Must Requalify",
    excerpt: "How often should welders demonstrate continuity? Break down the 6-month rule, production welding requirements, and requalification triggers under ASME Section IX QW-322, plus essential variables that affect qualification validity.",
    date: "March 8, 2026",
    readTime: "12 min read",
    category: "Compliance",
  },
  {
    slug: "wps-pqr-management-guide",
    title: "How to Manage WPS and PQR Records for AWS D1.1 Compliance",
    excerpt: "Complete guide to Welding Procedure Specification and Procedure Qualification Record management. Learn essential variable tracking, revision control systems, digital WPS libraries, and how to prevent citations with proper documentation.",
    date: "March 8, 2026",
    readTime: "11 min read",
    category: "Compliance",
  },
  {
    slug: "aws-d1-1-welder-qualification-requirements",
    title: "AWS D1.1 Welder Qualification Requirements: Complete Field Guide",
    excerpt: "A comprehensive guide to AWS D1.1 welder qualification requirements for structural welding. Covers test positions, joint configurations, performance qualification variables, visual inspection criteria, and all AWS-required qualification elements.",
    date: "March 7, 2026",
    readTime: "11 min read",
    category: "Qualifications",
  },
  {
    slug: "welding-code-violation-penalties",
    title: "OSHA Welding Code Penalties: What Non-Compliance Actually Costs",
    excerpt: "The real financial impact of OSHA welding violations in 2026. From $16,323 serious violations to $161,323 willful violations, plus real citation examples involving unqualified welders and how penalties compound with multiple violations.",
    date: "March 6, 2026",
    readTime: "12 min read",
    category: "Compliance",
  },
  {
    slug: "api-1104-pipeline-welder-qualification",
    title: "API 1104 Pipeline Welder Qualification: Field to Facility Requirements",
    excerpt: "Comprehensive guide to API 1104 pipeline welder qualification requirements throughout project lifecycle. From initial qualification tests and continuity maintenance to position restrictions, essential variables, and requalification requirements for cross-country pipeline construction.",
    date: "March 5, 2026",
    readTime: "13 min read",
    category: "Pipeline",
  },
  {
    slug: "welder-certification-tracking-best-practices",
    title: "Welder Certification Tracking: Digital Systems vs Manual Records",
    excerpt: "Comprehensive guide to welder certification tracking based on AWS D1.1 and ASME IX standards. Learn qualification expiration monitoring, continuity tracking systems, digital certification management, and proper record retention techniques for compliance audits.",
    date: "March 4, 2026",
    readTime: "12 min read",
    category: "Technology",
  },
  {
    slug: "welder-certification-software-comparison",
    title: "Welder Certification Software Comparison: WeldCert vs Competitors",
    excerpt: "Complete guide to welder certification tracking software in 2026. Compare WeldCert, Welders Log, WeldsTracker, and WeldCertPro programs, understand feature differences, pricing models, mobile capabilities, and compliance reporting features.",
    date: "March 3, 2026",
    readTime: "13 min read",
    category: "Technology",
  },
  {
    slug: "aws-d1-1-compliance-complete-guide",
    title: "AWS D1.1 Compliance Requirements: The Complete 2026 Guide", 
    excerpt: "Everything you need to know about AWS D1.1 structural welding compliance — welder qualification requirements, WPS documentation, inspection procedures, and how to maintain certification records.",
    date: "March 1, 2026",
    readTime: "12 min read",
    category: "Compliance",
  },
  {
    slug: "daily-welder-activity-logging",
    title: "Daily Welder Activity Logging: What AWS D1.1 Actually Requires",
    excerpt: "A detailed breakdown of the AWS-required daily welder activity logging under AWS D1.1 continuity requirements. Know exactly what your welders need to record to maintain their qualifications.",
    date: "February 22, 2026",
    readTime: "10 min read",
    category: "Activity",
  },
  {
    slug: "welder-certification-software-vs-spreadsheets",
    title: "Welder Certification Software vs Spreadsheets: Why Digital Wins",
    excerpt: "Excel welder tracking spreadsheets are a liability. Digital certification software eliminates lost records, missed expirations, and audit-day panic. Here's the full comparison.",
    date: "February 15, 2026",
    readTime: "9 min read",
    category: "Technology",
  },
  {
    slug: "aws-welding-audit-preparation",
    title: "How to Prepare for an AWS Welding Code Audit",
    excerpt: "AWS welding audits don't have to be stressful. Learn what inspectors look for, which qualification records they'll request, and how to be ready before they arrive.",
    date: "February 8, 2026",
    readTime: "11 min read",
    category: "Compliance",
  },
  {
    slug: "osha-welding-safety-standards-explained",
    title: "OSHA 29 CFR 1910.252 Explained: Welding Safety and Certification Rules",
    excerpt: "A plain-English breakdown of 29 CFR 1910.252 — the OSHA standard that governs welding safety and welder qualification oversight. What it requires, who's responsible, and how to comply.",
    date: "February 1, 2026",
    readTime: "13 min read",
    category: "Regulations",
  },
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-gradient-to-br from-navy via-navy-light to-navy py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Blog</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Welder certification guides, AWS D1.1 compliance tips, and welding industry insights.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="space-y-8">
              {POSTS.map((post) => (
                <article key={post.slug} className="border border-gray-100 rounded-xl p-6 hover:border-brand/30 hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-brand bg-brand-light px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">{post.date}</span>
                    <span className="text-xs text-gray-400">{post.readTime}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-xl font-bold mb-2 hover:text-brand transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm font-medium text-brand hover:text-brand-dark transition-colors"
                  >
                    Read more →
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
