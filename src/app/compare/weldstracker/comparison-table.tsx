"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X } from "lucide-react";

type CellValue = boolean | string;

const ROWS: { feature: string; weldstracker: CellValue; weldcert: CellValue }[] = [
  { feature: "AWS D1.1 structural welding", weldstracker: true, weldcert: true },
  { feature: "ASME Section IX", weldstracker: true, weldcert: true },
  { feature: "API 1104 pipeline", weldstracker: "Limited", weldcert: true },
  { feature: "WPS management", weldstracker: true, weldcert: true },
  { feature: "PQR management", weldstracker: true, weldcert: true },
  { feature: "WQTR tracking", weldstracker: true, weldcert: true },
  { feature: "Continuity tracking", weldstracker: "Basic", weldcert: "Smart alerts" },
  { feature: "Native mobile app", weldstracker: false, weldcert: true },
  { feature: "Photo documentation", weldstracker: false, weldcert: true },
  { feature: "Offline capability", weldstracker: false, weldcert: true },
  { feature: "Flat-rate pricing", weldstracker: false, weldcert: true },
  { feature: "Free trial", weldstracker: false, weldcert: "14 days" },
  { feature: "Audit-ready PDF export", weldstracker: "Basic", weldcert: "Branded PDF" },
  { feature: "Smart expiration alerts", weldstracker: "Email only", weldcert: "Email + SMS + push" },
  { feature: "Modern UI/UX", weldstracker: false, weldcert: true },
  { feature: "Digital signatures", weldstracker: false, weldcert: true },
  { feature: "Role-based access", weldstracker: true, weldcert: true },
  { feature: "Pricing (25 welders, 2 admins)", weldstracker: "$215/mo", weldcert: "$149/mo" },
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
            <p className="text-gray-600">Direct feature comparison between WeldCert and WeldsTracker.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl border border-gray-200 overflow-hidden">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Feature</th>
                  <th className="text-center py-4 px-4 text-sm font-medium text-gray-500 w-40">WeldsTracker</th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-brand w-40 bg-brand-light/50">WeldCert</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row) => (
                  <tr key={row.feature} className="border-b border-gray-100 last:border-0">
                    <td className="py-3.5 px-6 text-sm text-gray-700">{row.feature}</td>
                    <td className="py-3.5 px-4 text-center"><CellIcon value={row.weldstracker} /></td>
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
                <span>Both cover core welding code compliance (AWS, ASME)</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-brand mt-0.5 flex-shrink-0" size={14} />
                <span>WeldCert is cheaper for shops with 15+ welders due to flat-rate pricing</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-brand mt-0.5 flex-shrink-0" size={14} />
                <span>WeldCert offers mobile apps, photo docs, and modern UX that WeldsTracker lacks</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-brand mt-0.5 flex-shrink-0" size={14} />
                <span>WeldsTracker may work for very small shops wanting minimal per-welder pricing</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
