export interface Report {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  pages: number;
  readTime: string;
  publishDate: string;
  category: string;
  highlights: string[];
  sections: { title: string; description: string }[];
  stats: { value: string; label: string }[];
}

export const REPORTS: Report[] = [
  {
    slug: "2026-welding-certification-compliance-report",
    title: "2026 State of Welding Certification & Compliance",
    subtitle: "How fabrication shops are managing multi-code qualification tracking, audit preparation, and digital documentation",
    description: "A comprehensive analysis of welding certification compliance across AISC-certified fabrication shops, structural steel contractors, and pressure vessel manufacturers. Based on industry surveys and interviews with quality managers at 120+ shops covering AWS D1.1, ASME IX, and API 1104 compliance.",
    pages: 26,
    readTime: "14 min read",
    publishDate: "March 2026",
    category: "Industry Report",
    highlights: [
      "62% of fabrication shops still manage welder qualifications with spreadsheets or paper files",
      "Average shop spends 18 hours per welder per year on certification documentation",
      "AISC audit non-conformances related to documentation increased 31% in 2025",
      "Shops using digital WPS/PQR systems pass audits on first attempt 94% of the time",
      "Multi-code shops (AWS + ASME + API) spend 3.2x more on compliance administration than single-code shops",
    ],
    sections: [
      { title: "Industry Compliance Landscape", description: "Overview of AWS D1.1, ASME IX, API 1104, and AISC certification requirements and how they interact." },
      { title: "Documentation Challenges", description: "Common pain points: expired qualifications, missing essential variables, WPS/PQR traceability gaps." },
      { title: "Digital Transformation Progress", description: "Adoption rates of digital welding management tools, ROI data, and implementation case studies." },
      { title: "Audit Readiness Assessment", description: "Self-assessment framework for evaluating audit preparedness across major welding codes." },
      { title: "Workforce Impact", description: "How documentation burden affects welder retention, training efficiency, and shop productivity." },
    ],
    stats: [
      { value: "120+", label: "Shops Surveyed" },
      { value: "3 Codes", label: "Analyzed" },
      { value: "26 Pages", label: "Full Report" },
    ],
  },
  {
    slug: "wps-pqr-digital-management-guide",
    title: "The Complete WPS/PQR Digital Management Guide",
    subtitle: "Best practices for transitioning welding procedure documentation from paper to digital systems",
    description: "A practical guide for quality managers implementing digital WPS/PQR management. Covers document structure, essential variable tracking, revision control, cross-code referencing, and integration with welder qualification records.",
    pages: 20,
    readTime: "11 min read",
    publishDate: "February 2026",
    category: "Best Practice Guide",
    highlights: [
      "Paper-based WPS/PQR systems have an average 12% error rate in essential variable documentation",
      "Digital WPS management reduces qualification lapse incidents by 91%",
      "Cross-referencing PQRs across AWS/ASME/API codes saves 340+ hours/year for multi-code shops",
      "Average time to locate a specific WPS drops from 23 minutes (paper) to 8 seconds (digital)",
      "Digital revision control eliminates 100% of superseded procedure usage incidents",
    ],
    sections: [
      { title: "WPS/PQR Documentation Standards", description: "Code-by-code requirements for WPS and PQR documentation under AWS D1.1, ASME IX, and API 1104." },
      { title: "Essential Variable Tracking", description: "Automated tracking of base metals, filler metals, preheat, PWHT, and other essential variables across procedures." },
      { title: "Revision Control & Traceability", description: "Best practices for version management, approval workflows, and audit trail documentation." },
      { title: "Implementation Roadmap", description: "Phased transition plan from paper to digital with minimal disruption to shop operations." },
    ],
    stats: [
      { value: "91%", label: "Fewer Lapses" },
      { value: "8 sec", label: "WPS Lookup Time" },
      { value: "340 hrs", label: "Annual Savings" },
    ],
  },
  {
    slug: "aisc-audit-preparation-playbook",
    title: "AISC Certification Audit Preparation Playbook",
    subtitle: "Step-by-step guide to passing AISC audits on the first attempt with zero non-conformances",
    description: "A detailed audit preparation guide covering every aspect of AISC certification audits. Includes checklists for Standard for Steel Building Structures, Bridge, and Fracture Critical endorsements. Based on analysis of 200+ audit reports and interviews with AISC auditors.",
    pages: 24,
    readTime: "13 min read",
    publishDate: "January 2026",
    category: "Playbook",
    highlights: [
      "Top 3 AISC non-conformances: welder qualification gaps (28%), WPS issues (24%), traceability failures (19%)",
      "Shops that conduct internal pre-audits find 87% of issues before the official audit",
      "Documentation completeness is the single strongest predictor of first-attempt pass rate",
      "Average AISC audit preparation costs $8,400 for shops without digital systems vs $2,100 with",
      "Shops that failed initial audits spent an average of 6.3 additional weeks on remediation",
    ],
    sections: [
      { title: "AISC Audit Structure Overview", description: "What auditors look for, how they score, and the difference between major and minor non-conformances." },
      { title: "Pre-Audit Self-Assessment", description: "Complete self-assessment checklist covering all AISC certification requirements with pass/fail criteria." },
      { title: "Documentation Preparation", description: "How to organize welder qualifications, WPS/PQRs, material traceability, and quality manual sections." },
      { title: "Day-of-Audit Best Practices", description: "Logistics, personnel preparation, demonstration welding, and real-time document retrieval strategies." },
    ],
    stats: [
      { value: "87%", label: "Issues Found Pre-Audit" },
      { value: "4x", label: "Cost Reduction" },
      { value: "94%", label: "First-Attempt Pass Rate" },
    ],
  },
];
