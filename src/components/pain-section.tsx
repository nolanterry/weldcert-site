"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, Ban, Scale } from "lucide-react";

const CONSEQUENCES = [
  { icon: AlertTriangle, value: "$161,323", label: "per willful violation", desc: "OSHA's maximum penalty for willful violations. A single unqualified welder on a job can trigger this massive fine." },
  { icon: Ban, value: "Immediate", label: "work stoppage", desc: "Inspectors can shut down welding operations if qualification records can't be produced. Your entire project stops." },
  { icon: Scale, value: "Criminal", label: "liability", desc: "Structural failures due to unqualified welding can lead to criminal prosecution. Missing cert records won't protect you." },
];

export function PainSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-navy text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What happens when inspectors arrive and your welder records are incomplete?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Every year, fabrication shops face devastating fines because they can&apos;t produce current qualification records.
            Don&apos;t be one of them.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {CONSEQUENCES.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white/5 border border-white/10 rounded-xl p-8 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-red-500/15 flex items-center justify-center mx-auto mb-4">
                <c.icon className="text-red-400" size={28} />
              </div>
              <div className="text-4xl font-bold text-red-400 mb-1">{c.value}</div>
              <div className="text-sm text-gray-400 mb-4">{c.label}</div>
              <p className="text-sm text-gray-300">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
