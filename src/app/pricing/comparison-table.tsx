"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X, Minus } from "lucide-react";

type CellValue = boolean | string;

const ROWS: { feature: string; paper: CellValue; generic: CellValue; weldcert: CellValue }[] = [
  { feature: "OSHA 1926.1412 compliant templates", paper: false, generic: false, weldcert: true },
  { feature: "Mobile inspection from any phone", paper: false, generic: true, weldcert: true },
  { feature: "Offline mode", paper: true, generic: false, weldcert: true },
  { feature: "Photo evidence with GPS & timestamp", paper: false, generic: "Limited", weldcert: true },
  { feature: "Deficiency tracking & auto-lock", paper: false, generic: false, weldcert: true },
  { feature: "Equipment registry", paper: false, generic: "Basic", weldcert: true },
  { feature: "PDF audit reports (one-click)", paper: false, generic: "Manual export", weldcert: true },
  { feature: "NCCCO cert tracking", paper: false, generic: false, weldcert: true },
  { feature: "Crane-type-specific checklists", paper: false, generic: false, weldcert: true },
  { feature: "Instant search of all records", paper: false, generic: true, weldcert: true },
  { feature: "Role-based access control", paper: false, generic: "Limited", weldcert: true },
  { feature: "Inspection time", paper: "10-15 min", generic: "5-8 min", weldcert: "<3 min" },
];

function CellIcon({ value }: { value: CellValue }) {
  if (value === true) return <Check className="text-green-500 mx-auto" size={18} />;
  if (value === false) return <X className="text-red-400 mx-auto" size={18} />;
  return <span className="text-sm text-gray-500">{value}</span>;
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">WeldCert vs. the alternatives</h2>
            <p className="text-gray-600">See why purpose-built crane inspection software beats generic tools.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl border border-gray-200 overflow-hidden">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Feature</th>
                  <th className="text-center py-4 px-4 text-sm font-medium text-gray-500 w-32">Paper Logs</th>
                  <th className="text-center py-4 px-4 text-sm font-medium text-gray-500 w-32">Generic Apps</th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-brand w-32 bg-brand-light/50">WeldCert</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row) => (
                  <tr key={row.feature} className="border-b border-gray-100 last:border-0">
                    <td className="py-3.5 px-6 text-sm text-gray-700">{row.feature}</td>
                    <td className="py-3.5 px-4 text-center"><CellIcon value={row.paper} /></td>
                    <td className="py-3.5 px-4 text-center"><CellIcon value={row.generic} /></td>
                    <td className="py-3.5 px-4 text-center bg-brand-light/30"><CellIcon value={row.weldcert} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
