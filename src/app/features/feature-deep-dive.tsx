"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ClipboardCheck,
  Warehouse,
  AlertCircle,
  FileText,
  Users,
  Smartphone,
  Camera,
  Search,
  Bell,
  Lock,
  type LucideIcon,
} from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  desc: string;
  bullets: string[];
}

const FEATURES: Feature[] = [
  {
    icon: ClipboardCheck,
    title: "Continuity Dashboard",
    subtitle: "Traffic light system for every welder's qualifications",
    desc: "See every welder's qualification status at a glance. Green means active, yellow means approaching lapse, red means imminent expiration. The dashboard calculates continuity automatically from activity logs — no manual date tracking.",
    bullets: [
      "Real-time continuity status per welder per process",
      "AWS D1.1 and ASME IX 6-month lapse rules built in",
      "Filter by welder, process, code, or status",
      "Compliance score percentage across entire shop",
      "Drill down to individual qualification details",
      "Historical continuity trends and patterns",
    ],
  },
  {
    icon: Warehouse,
    title: "WPS / PQR / WPQ Management",
    subtitle: "All your welding procedures in one place",
    desc: "Create, store, and version-control Welding Procedure Specifications with all essential variables. Link PQRs as supporting documentation. Track every welder's Performance Qualifications with test results, positions, and material ranges.",
    bullets: [
      "Full WPS creation with essential variables (process, position, material, filler, preheat)",
      "PQR records linked to supporting WPS",
      "WPQ/WQTR records per welder with test results",
      "Document upload for scanned records and radiographs",
      "Version control and revision history",
      "AWS D1.1 Table 4.10 positional qualification logic",
    ],
  },
  {
    icon: AlertCircle,
    title: "Smart Alerts",
    subtitle: "Never let a qualification lapse again",
    desc: "WeldCert monitors every welder's continuity status and fires alerts before qualifications expire. Configurable thresholds at 90, 60, 30, and 14 days. Weekly digest emails give QC managers a complete picture of upcoming expirations.",
    bullets: [
      "Email alerts at 90, 60, and 30 days before lapse",
      "SMS alerts at 14 days and on expiration",
      "Weekly digest email to QC managers",
      "Configurable thresholds per organization",
      "Critical alerts when qualifications actually lapse",
      "Re-qualification scheduling suggestions",
    ],
  },
  {
    icon: FileText,
    title: "Audit Export",
    subtitle: "One-click audit binder generation",
    desc: "Generate complete qualification packages as professional PDF documents. Per-welder packages include all WPS, PQR, WPQ records, continuity logs, and test results. Per-project packages show every welder who worked on it and their qualifications at time of welding.",
    bullets: [
      "Per-welder audit packages with all qualification records",
      "Per-project packages with welder qualifications at time of work",
      "Code-specific exports (AWS D1.1 package, ASME IX package)",
      "Full shop qualification matrix export",
      "Company-branded PDF with table of contents",
      "Generate complete audit binder in under 10 seconds",
    ],
  },
  {
    icon: Users,
    title: "Welder Roster",
    subtitle: "CWI tracking and role-based access",
    desc: "Manage your entire welding team. Track CWI certifications, NCCER credentials, and qualification records per welder. QC managers get full visibility. Welders see their own qualifications and can log activity from the field.",
    bullets: [
      "Role-based access (admin, QC manager, welder)",
      "CWI and NCCER certification tracking with expiry alerts",
      "Individual welder profiles with qualification history",
      "Bulk import welders from CSV",
      "Employee ID and contact management",
      "Activity audit log for all team actions",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Activity Logging",
    subtitle: "Built for the shop floor, not the office",
    desc: "Welders log daily activity from their phone in under 30 seconds. Select process, position, and project — done. Activity automatically updates continuity tracking. GPS and timestamp create an audit trail. No special hardware needed.",
    bullets: [
      "Works on iOS and Android — any smartphone",
      "Large touch targets for gloved hands",
      "Process selection from qualified processes only",
      "Photo upload for weld documentation",
      "GPS and timestamp auto-capture",
      "Activity auto-updates continuity dashboard",
    ],
  },
];

function FeatureBlock({ feature, index }: { feature: Feature; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const isReversed = index % 2 === 1;

  return (
    <div ref={ref} className={`py-16 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${isReversed ? "md:flex-row-reverse" : ""}`}>
          <motion.div
            initial={{ opacity: 0, x: isReversed ? 30 : -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className={isReversed ? "md:order-2" : ""}
          >
            <div className="w-12 h-12 rounded-lg bg-brand-light flex items-center justify-center mb-4">
              <feature.icon className="text-brand" size={24} />
            </div>
            <h2 className="text-3xl font-bold mb-2">{feature.title}</h2>
            <p className="text-brand font-medium mb-4">{feature.subtitle}</p>
            <p className="text-gray-600 mb-6 leading-relaxed">{feature.desc}</p>
            <ul className="space-y-2.5">
              {feature.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0 mt-1.5" />
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: isReversed ? -30 : 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={isReversed ? "md:order-1" : ""}
          >
            <div className="bg-gray-100 rounded-2xl aspect-[4/3] flex items-center justify-center border border-gray-200">
              <div className="text-center text-gray-400">
                <feature.icon size={48} strokeWidth={1} />
                <p className="text-sm mt-2">Screenshot placeholder</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export function FeatureDeepDive() {
  return (
    <div>
      {FEATURES.map((feature, i) => (
        <FeatureBlock key={feature.title} feature={feature} index={i} />
      ))}
    </div>
  );
}
