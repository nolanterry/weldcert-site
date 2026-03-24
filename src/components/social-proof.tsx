"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Smartphone, FileCheck, Clock } from "lucide-react";

const FEATURES_ROW = [
  { icon: Shield, label: "AWS D1.1, ASME IX, AISC & API 1104" },
  { icon: Smartphone, label: "Mobile-First — Works Offline" },
  { icon: FileCheck, label: "One-Click Audit Exports" },
  { icon: Clock, label: "30-Second Daily Logging" },
];

export function SocialProof() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 bg-gray-50 border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-center text-sm text-gray-500 mb-8 font-medium uppercase tracking-wider">
            Purpose-built for welding compliance
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {FEATURES_ROW.map((f) => (
              <div key={f.label} className="text-center flex flex-col items-center">
                <f.icon className="text-brand mb-3" size={28} />
                <div className="text-sm font-medium text-gray-700">{f.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
