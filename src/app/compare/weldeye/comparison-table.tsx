"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X } from "lucide-react";

type CellValue = boolean | string;

const ROWS: { feature: string; weldeye: CellValue; weldcert: CellValue }[] = [
  { feature: "AWS D1.1 structural welding", weldeye: "Supported", weldcert: "Native templates" },
  { feature: "ASME Section IX", weldeye: "Supported", weldcert: "Native templates" },
  { feature: "ISO 9606 (European)", weldeye: "Native support", weldcert: "Supported" },
  { feature: "API 1104 pipeline", weldeye: "Limited", weldcert: true },
  { feature: "WPS/PQR management", weldeye: true, weldcert: true },
  { feature: "Welder qualification tracking", weldeye: true, weldcert: true },
  { feature: "Continuity monitoring", weldeye: "Basic", weldcert: "Smart alerts" },
  { feature: "Works with any equipment brand", weldeye: "Limited", weldcert: true },
  { feature: "Machine data / arc monitoring", weldeye: "Kemppi machines", weldcert: false },
  { feature: "Production analytics", weldeye: true, weldcert: false },
  { feature: "Native mobile app", weldeye: true, weldcert: true },
  { feature: "Photo documentation", weldeye: "Basic", weldcert: true },
  { feature: "Transparent published pricing", weldeye: false, weldcert: "$79-299/mo" },
  { feature: "Free trial", weldeye: false, weldcert: "14 days" },
  { feature: "Self-serve signup", weldeye: false, weldcert: true },
  { feature: "Audit-ready PDF export", weldeye: true, weldcert: true },
  { feature: "Offline capability", weldeye: "Limited", weldcert: true },
  { feature: "US code specialization", weldeye: false, weldcert: true },
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
            <p className="text-gray-600">Direct comparison between WeldCert and WeldEye (Kemppi).</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl border border-gray-200 overflow-hidden">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Feature</th>
                  <th className="text-center py-4 px-4 text-sm font-medium text-gray-500 w-40">WeldEye</th>
                  <th className="text-center py-4 px-4 text-sm font-semibold text-brand w-40 bg-brand-light/50">WeldCert</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row) => (
                  <tr key={row.feature} className="border-b border-gray-100 last:border-0">
                    <td className="py-3.5 px-6 text-sm text-gray-700">{row.feature}</td>
                    <td className="py-3.5 px-4 text-center"><CellIcon value={row.weldeye} /></td>
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
                <span>WeldEye excels at machine-level data if you run Kemppi equipment</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-brand mt-0.5 flex-shrink-0" size={14} />
                <span>WeldCert excels at compliance management for US welding codes</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-brand mt-0.5 flex-shrink-0" size={14} />
                <span>WeldCert works with any equipment brand — no vendor lock-in</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="text-brand mt-0.5 flex-shrink-0" size={14} />
                <span>WeldCert offers self-serve signup with transparent pricing and a free trial</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
