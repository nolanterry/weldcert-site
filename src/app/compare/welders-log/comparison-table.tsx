"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X } from "lucide-react";

type CellValue = boolean | string;

const ROWS: { feature: string; inspectall: CellValue; weldcert: CellValue }[] = [
  { feature: "Mobile crane inspections (OSHA 1926.1412)", inspectall: false, weldcert: true },
  { feature: "Tower crane inspections (OSHA 1926.1435)", inspectall: false, weldcert: true },
  { feature: "Overhead crane inspections (OSHA 1910.179)", inspectall: true, weldcert: true },
  { feature: "Pricing transparency", inspectall: "Contact sales", weldcert: "$199/mo" },
  { feature: "Free trial availability", inspectall: false, weldcert: "14 days" },
  { feature: "Mobile app (iOS/Android)", inspectall: true, weldcert: true },
  { feature: "Photo verification with GPS", inspectall: "Basic", weldcert: true },
  { feature: "Offline inspection mode", inspectall: "Limited", weldcert: true },
  { feature: "Setup time", inspectall: "Weeks", weldcert: "< 30 minutes" },
  { feature: "NCCCO certification tracking", inspectall: false, weldcert: true },
  { feature: "Equipment deficiency tracking", inspectall: true, weldcert: true },
  { feature: "PDF audit reports", inspectall: true, weldcert: true },
  { feature: "Multi-industry equipment support", inspectall: true, weldcert: false },
  { feature: "Crane-only specialization", inspectall: false, weldcert: true },
  { feature: "Role-based access control", inspectall: true, weldcert: true },
];

function CellIcon({ value }: { value: CellValue }) {
  if (value === true) return <Check className="text-green-500 mx-auto" size={18} />;
  if (value === false) return <X className="text-red-400 mx-auto" size={18} />;
  return <span className="text-sm text-gray-600 text-center block">{value}</span>;
}

export function ComparisonTable() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Feature Comparison Table</h2>
            <p className="text-gray-600">Direct feature comparison between WeldCert and InspectAll.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl border border-gray-200 overflow-hidden">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Feature</th>
                  <th className="text-center py-4 px-4 text-sm font-medium text-gray-500 w-40">InspectAll</th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-brand w-40 bg-brand-light/50">WeldCert</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row) => (
                  <tr key={row.feature} className="border-b border-gray-100 last:border-0">
                    <td className="py-3.5 px-6 text-sm text-gray-700">{row.feature}</td>
                    <td className="py-3.5 px-4 text-center"><CellIcon value={row.inspectall} /></td>
                    <td className="py-3.5 px-4 text-center bg-brand-light/30"><CellIcon value={row.weldcert} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="font-semibold mb-3">Key Takeaways:</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <Check className="text-brand mt-0.5 flex-shrink-0" size={14} />
                <span>WeldCert covers all crane types; InspectAll focuses on overhead cranes only</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-brand mt-0.5 flex-shrink-0" size={14} />
                <span>WeldCert offers transparent pricing and immediate trial access</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-brand mt-0.5 flex-shrink-0" size={14} />
                <span>Both platforms provide core inspection features, but with different specializations</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-brand mt-0.5 flex-shrink-0" size={14} />
                <span>InspectAll better suits multi-industry equipment management needs</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}