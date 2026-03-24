"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Clock, FileText } from "lucide-react";

const BENEFITS = [
  { icon: ShieldCheck, title: "Audit-Ready in Seconds", description: "Pull up any welder's qualification records, WPS, PQR, and continuity logs instantly — from your phone or desktop." },
  { icon: Clock, title: "Never Miss an Expiration", description: "Automated alerts at 30, 60, and 90 days before any certification lapses. No more last-minute scrambles." },
  { icon: FileText, title: "Eliminate Spreadsheet Chaos", description: "Replace shared Excel files and paper binders with one searchable, digital system built for welding compliance." },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Fabrication Shops Choose WeldCert</h2>
          <p className="text-gray-600">Purpose-built for welding qualification tracking and audit compliance.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {BENEFITS.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm"
            >
              <b.icon className="text-brand mb-4" size={28} />
              <h3 className="font-semibold text-gray-900 mb-2">{b.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{b.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
