"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const LOGOS = [
  "Pacific Steel Fabricators",
  "Midwest Structural Steel",
  "Gulf Coast Welding Corp",
  "Summit Pressure Vessels",
  "Ironworkers Union Local 25",
  "Atlas Pipeline Contractors",
];

const STATS_ROW = [
  { value: "2,400+", label: "Welders Tracked" },
  { value: "18K+", label: "Qualifications Managed" },
  { value: "99.6%", label: "Audit Pass Rate" },
  { value: "<30 sec", label: "Avg. Daily Log Time" },
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
            Trusted by fabrication shops and contractors nationwide
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-12">
            {LOGOS.map((name) => (
              <div key={name} className="flex items-center gap-2 text-gray-400">
                <div className="w-8 h-8 bg-gray-200 rounded" />
                <span className="text-sm font-medium">{name}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS_ROW.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-bold text-navy">{s.value}</div>
                <div className="text-sm text-gray-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
