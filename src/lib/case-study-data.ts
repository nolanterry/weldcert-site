export interface CaseStudy {
  slug: string;
  companyName: string;
  industry: string;
  companySize: string;
  products: string[];
  hero: {
    summary: string;
    keyMetric: string;
  };
  challenge: {
    title: string;
    description: string;
    painPoints: string[];
  };
  solution: {
    title: string;
    description: string;
    implementation: string[];
  };
  results: {
    title: string;
    description: string;
    metrics: Array<{
      value: string;
      label: string;
    }>;
  };
  quote: {
    text: string;
    author: string;
    title: string;
  };
  atAGlance: {
    companySize: string;
    industry: string;
    products: string[];
    keyResults: string[];
  };
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "summit-steel-fabricators",
    companyName: "Summit Steel Fabricators",
    industry: "Structural Steel Fabrication",
    companySize: "AISC-certified, 28 welders",
    products: ["WeldCert Pro"],
    hero: {
      summary: "AISC-certified structural steel fabricator eliminates certification gaps and passes AWS D1.1 audit with zero nonconformance reports.",
      keyMetric: "Zero lapsed certifications",
    },
    challenge: {
      title: "Manual Tracking Led to Expired Certifications",
      description: "Summit Steel Fabricators was manually tracking welder qualifications across multiple codes and procedures, leading to expired certifications going unnoticed until critical moments.",
      painPoints: [
        "Manual tracking of welder qualifications led to expired certifications going unnoticed",
        "Paper-based WPQ records scattered across multiple filing cabinets",
        "No automated alerts for upcoming certification expirations",
        "Time-consuming manual searches during urgent project needs",
      ],
    },
    solution: {
      title: "Automated Continuity Tracking & Alerts",
      description: "WeldCert automated the entire qualification tracking process with real-time continuity monitoring and proactive expiration management.",
      implementation: [
        "Digitized all existing WPQ records for 28 welders",
        "Implemented automated continuity tracking for all active qualifications",
        "Set up email alerts 30 and 7 days before certification expiration",
        "Created searchable database of qualified welders by position and process",
      ],
    },
    results: {
      title: "Audit-Ready with Zero Administrative Burden",
      description: "Summit achieved complete qualification tracking automation and passed their AWS D1.1 audit without any nonconformance reports.",
      metrics: [
        { value: "Zero", label: "Lapsed Certifications" },
        { value: "60%", label: "Less Admin Time" },
        { value: "Zero", label: "NCRs on AWS D1.1 Audit" },
        { value: "28", label: "Welders Fully Tracked" },
      ],
    },
    quote: {
      text: "WeldCert completely transformed how we manage welder qualifications. We never have to worry about expired certs anymore, and audit prep is now just a few clicks.",
      author: "Maria Santos",
      title: "Quality Manager, Summit Steel Fabricators",
    },
    atAGlance: {
      companySize: "AISC-certified, 28 welders",
      industry: "Structural Steel Fabrication",
      products: ["WeldCert Pro"],
      keyResults: [
        "Zero lapsed certifications",
        "60% reduction in admin time",
        "Passed AWS D1.1 audit with zero NCRs",
        "Automated expiration alerts"
      ],
    },
  },
  {
    slug: "gulf-coast-piping-solutions",
    companyName: "Gulf Coast Piping Solutions",
    industry: "ASME Pressure Vessel Manufacturing",
    companySize: "ASME IX shop, 40 welders",
    products: ["WeldCert Enterprise"],
    hero: {
      summary: "ASME IX pressure vessel shop accelerates multi-code operations with digital WPS/PQR management and inspector portal access.",
      keyMetric: "75% faster PQR lookups",
    },
    challenge: {
      title: "Paper-Based System Couldn't Handle Multi-Code Work",
      description: "Gulf Coast Piping Solutions' paper-based WPS/PQR system was overwhelmed by the complexity of multi-code pressure vessel work across various ASME standards.",
      painPoints: [
        "Paper-based WPS/PQR system couldn't keep up with multi-code work",
        "Manual searches through binders for qualified procedures taking hours",
        "No systematic tracking of essential variable changes across codes",
        "Inspector access to procedures requiring physical presence at facility",
      ],
    },
    solution: {
      title: "Digital WPS/PQR Management with Multi-Code Support",
      description: "WeldCert Enterprise provided comprehensive digital procedure management with support for multiple ASME codes and automated essential variable tracking.",
      implementation: [
        "Digitized complete WPS/PQR library covering ASME IX, VIII, and B31.3",
        "Implemented multi-code qualification matrix for all 40 welders",
        "Created automated essential variable tracking across all procedures",
        "Set up secure inspector portal for remote procedure access",
      ],
    },
    results: {
      title: "Streamlined Multi-Code Operations",
      description: "Gulf Coast achieved rapid procedure lookups and seamless inspector collaboration while maintaining full ASME compliance.",
      metrics: [
        { value: "75%", label: "Faster PQR Lookup Time" },
        { value: "Automated", label: "Essential Variable Tracking" },
        { value: "Remote", label: "Inspector Access Portal" },
        { value: "Multi-Code", label: "ASME IX/VIII/B31.3 Support" },
      ],
    },
    quote: {
      text: "WeldCert Enterprise handles our complex multi-code operations effortlessly. What used to take hours of digging through binders now takes seconds, and inspectors can review everything remotely.",
      author: "David Thompson",
      title: "Welding Engineer, Gulf Coast Piping Solutions",
    },
    atAGlance: {
      companySize: "ASME IX shop, 40 welders",
      industry: "ASME Pressure Vessel Manufacturing",
      products: ["WeldCert Enterprise"],
      keyResults: [
        "75% reduction in PQR lookup time",
        "Automated essential variable tracking",
        "Remote inspector access portal",
        "Multi-code ASME compliance"
      ],
    },
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find(study => study.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return CASE_STUDIES.map(study => study.slug);
}