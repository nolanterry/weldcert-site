"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X } from "lucide-react";

type CellValue = boolean | string;

const ROWS: { feature: string; paper: CellValue; weldcert: CellValue }[] = [
  { feature: "Record retrieval speed", paper: "20+ minutes", weldcert: "3 seconds" },
  { feature: "Inspection time per crane", paper: "15 minutes", weldcert: "3 minutes" },
  { feature: "Records get lost/damaged", paper: true, weldcert: false },
  { feature: "Photo evidence capability", paper: false, weldcert: true },
  { feature: "Searchable records", paper: false, weldcert: true },
  { feature: "Weather resistance", paper: false, weldcert: true },
  { feature: "Deficiency tracking system", paper: false, weldcert: true },
  { feature: "Equipment auto-lock on defects", paper: false, weldcert: true },
  { feature: "GPS location tagging", paper: false, weldcert: true },
  { feature: "Timestamp accuracy", paper: false, weldcert: true },
  { feature: "Digital signatures", paper: false, weldcert: true },
  { feature: "Audit report generation", paper: "Manual copying", weldcert: "One-click PDF" },
  { feature: "Compliance templates", paper: "Generic forms", weldcert: "OSHA-specific" },
  { feature: "Storage requirements", paper: "Physical space", weldcert: "Cloud-based" },
  { feature: "Backup copies", paper: "Manual photocopying", weldcert: "Automatic" },
  { feature: "Multi-user access", paper: "One person at a time", weldcert: "Unlimited" },
  { feature: "Real-time reporting", paper: false, weldcert: true },
  { feature: "Annual cost (10 cranes)", paper: "$26,800", weldcert: "$2,388" },
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Paper vs Digital: Side-by-Side</h2>
            <p className="text-gray-600">Complete feature and cost comparison between paper logs and WeldCert.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl border border-gray-200 overflow-hidden">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Feature</th>
                  <th className="text-center py-4 px-4 text-sm font-medium text-gray-500 w-40">Paper Logs</th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-brand w-40 bg-brand-light/50">WeldCert</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row) => (
                  <tr key={row.feature} className="border-b border-gray-100 last:border-0">
                    <td className="py-3.5 px-6 text-sm text-gray-700">{row.feature}</td>
                    <td className="py-3.5 px-4 text-center"><CellIcon value={row.paper} /></td>
                    <td className="py-3.5 px-4 text-center bg-brand-light/30"><CellIcon value={row.weldcert} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Summary Stats */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
              <div className="text-3xl font-bold text-brand mb-2">520</div>
              <div className="text-sm text-gray-600">Hours saved annually</div>
              <div className="text-xs text-gray-400 mt-1">10-crane fleet switching to digital</div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">$24,412</div>
              <div className="text-sm text-gray-600">Annual savings</div>
              <div className="text-xs text-gray-400 mt-1">ROI of 1,023%</div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">0</div>
              <div className="text-sm text-gray-600">Documentation failures</div>
              <div className="text-xs text-gray-400 mt-1">With digital records</div>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="font-semibold mb-3">Bottom Line:</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <Check className="text-brand mt-0.5 flex-shrink-0" size={14} />
                <span>Paper logs cost 11x more than digital solutions when you factor in hidden costs</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-brand mt-0.5 flex-shrink-0" size={14} />
                <span>Digital inspections are 5x faster with better quality and compliance</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-brand mt-0.5 flex-shrink-0" size={14} />
                <span>Zero documentation risk vs 78% of OSHA citations involving paper trail failures</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-brand mt-0.5 flex-shrink-0" size={14} />
                <span>Switch to WeldCert pays for itself in the first month</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}