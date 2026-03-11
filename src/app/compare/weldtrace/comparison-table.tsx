"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X } from "lucide-react";

type CellValue = boolean | string;

const ROWS: { feature: string; weldtrace: CellValue; weldcert: CellValue }[] = [
  { feature: "AWS D1.1 structural welding support", weldtrace: true, weldcert: true },
  { feature: "ASME Section IX support", weldtrace: true, weldcert: true },
  { feature: "API 1104 pipeline support", weldtrace: true, weldcert: true },
  { feature: "WPS/PQR/WQTR management", weldtrace: true, weldcert: true },
  { feature: "Continuity tracking with alerts", weldtrace: "Manual", weldcert: "Automated" },
  { feature: "Mobile app for welders", weldtrace: false, weldcert: true },
  { feature: "Photo-based weld documentation", weldtrace: false, weldcert: true },
  { feature: "Transparent published pricing", weldtrace: false, weldcert: "$79-299/mo" },
  { feature: "Free trial available", weldtrace: false, weldcert: "14 days" },
  { feature: "Setup time", weldtrace: "Weeks-months", weldcert: "< 30 minutes" },
  { feature: "Self-serve signup", weldtrace: false, weldcert: true },
  { feature: "Audit-ready PDF export", weldtrace: true, weldcert: true },
  { feature: "Project-level weld maps", weldtrace: true, weldcert: false },
  { feature: "NDT result tracking", weldtrace: true, weldcert: true },
  { feature: "ERP-level integration", weldtrace: true, weldcert: false },
  { feature: "Offline capability", weldtrace: false, weldcert: true },
  { feature: "AI-assisted features", weldtrace: false, weldcert: "Coming soon" },
  { feature: "Best for shop size", weldtrace: "500+ welders", weldcert: "5-100 welders" },
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
            <p className="text-gray-600">Direct feature comparison between WeldCert and WeldTrace.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl border border-gray-200 overflow-hidden">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Feature</th>
                  <th className="text-center py-4 px-4 text-sm font-medium text-gray-500 w-40">WeldTrace</th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-brand w-40 bg-brand-light/50">WeldCert</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row) => (
                  <tr key={row.feature} className="border-b border-gray-100 last:border-0">
                    <td className="py-3.5 px-6 text-sm text-gray-700">{row.feature}</td>
                    <td className="py-3.5 px-4 text-center"><CellIcon value={row.weldtrace} /></td>
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
                <span>Both platforms cover major welding codes (AWS, ASME, API)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-brand mt-0.5 flex-shrink-0" size={14} />
                <span>WeldCert wins on mobile access, pricing transparency, and setup speed</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-brand mt-0.5 flex-shrink-0" size={14} />
                <span>WeldTrace wins on project-level weld maps and ERP integration for large-scale projects</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-brand mt-0.5 flex-shrink-0" size={14} />
                <span>For shops under 100 welders, WeldCert provides enterprise features at SMB pricing</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
