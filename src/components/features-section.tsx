"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, ClipboardCheck, FileText, AlertCircle, Smartphone, Download } from "lucide-react";

const FEATURES = [
  { icon: Users, title: "Welder Roster", desc: "Complete database of all welders with qualifications, certifications, and personal details. Track AWS D1.1, ASME IX, and API 1104 certifications in one place." },
  { icon: ClipboardCheck, title: "Continuity Dashboard", desc: "Traffic light system shows every welder's qualification status at a glance. Green = current, yellow = expiring soon, red = lapsed or needs renewal." },
  { icon: FileText, title: "WPS/PQR/WPQ Management", desc: "Create, store, and version-control welding procedures. Link WPQs to specific WPSs, track procedure approvals, and maintain complete documentation." },
  { icon: Smartphone, title: "Mobile Activity Logging", desc: "Welders log daily activity in under 30 seconds. Touch-friendly interface works with gloves. Maintains continuity requirements automatically." },
  { icon: AlertCircle, title: "Smart Alerts", desc: "Email and SMS notifications 30, 60, and 90 days before qualification lapses. Never lose track of renewal deadlines again." },
  { icon: Download, title: "Audit Export", desc: "One-click PDF audit binder generation. Complete qualification records, procedure documentation, and activity logs formatted for inspectors." },
];

export function FeaturesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to track welder qualifications</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            WeldCert eliminates spreadsheets and prevents costly qualification lapses with smart tracking, mobile logging, and automated alerts.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-xl border border-gray-100 hover:border-brand/30 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-brand-light flex items-center justify-center mb-4">
                <f.icon className="text-brand" size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-gray-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
