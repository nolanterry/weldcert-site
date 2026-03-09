"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Smartphone, ClipboardCheck, FileText } from "lucide-react";

const STEPS = [
  { num: "01", icon: Smartphone, title: "Open WeldCert", desc: "Select your welder profile or scan the job card. Your qualified processes and active certifications load instantly." },
  { num: "02", icon: ClipboardCheck, title: "Log Activity", desc: "Pick the welding process, position, and project. Snap a photo of the completed weld. Done in under 30 seconds." },
  { num: "03", icon: FileText, title: "Stay Compliant", desc: "Continuity tracking updates automatically. Smart alerts fire before qualifications lapse. Generate audit binders in one click." },
];

export function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">30 seconds. Every day. Never lapse.</h2>
          <p className="text-gray-600">Faster than opening a spreadsheet — and your audit binder builds itself.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-brand/10 mb-4">{s.num}</div>
              <div className="w-14 h-14 rounded-full bg-brand-light flex items-center justify-center mx-auto mb-4">
                <s.icon className="text-brand" size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
