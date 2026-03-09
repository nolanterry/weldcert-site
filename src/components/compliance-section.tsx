"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, AlertTriangle } from "lucide-react";

const REGS = [
  { code: "AWS D1.1", title: "Welder Qualification", desc: "Performance qualifications must be current for specific processes, positions, and materials. Semi-annual continuity required." },
  { code: "ASME IX", title: "Continuity Requirements", desc: "Welders must maintain continuity by welding with qualified processes every 6 months or requalify." },
  { code: "API 1104", title: "Pipeline Qualification", desc: "Specific qualification requirements for pipeline welding. Testing records and continuity documentation mandatory." },
  { code: "1910.252", title: "OSHA Welding Safety", desc: "Qualified person oversight, proper ventilation, and documentation of welder training and certification records." },
];

export function ComplianceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Built on welding standards,
                <br />
                <span className="text-brand">not around them.</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Every WeldCert feature maps directly to AWS D1.1, ASME IX, and OSHA welding standards.
                Your welders log activity — compliance happens automatically.
              </p>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex gap-3">
                <AlertTriangle className="text-red-500 shrink-0 mt-0.5" size={20} />
                <div>
                  <p className="text-sm font-semibold text-red-700">The cost of non-compliance</p>
                  <p className="text-sm text-red-600 mt-1">
                    OSHA fines up to <strong>$161,323 per willful violation</strong>. After a welding incident,
                    investigators demand qualification records immediately. Lapsed certs = negligence liability.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="space-y-4">
            {REGS.map((r, i) => (
              <motion.div
                key={r.code}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-lg p-5 border border-gray-100"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="text-green-600" size={16} />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-brand bg-brand-light px-2 py-0.5 rounded">{r.code}</span>
                    <h3 className="font-semibold mt-1">{r.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{r.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
