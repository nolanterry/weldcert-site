"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ShieldCheck, Bell, Smartphone, FileText } from "lucide-react";

const HIGHLIGHTS = [
  { icon: ShieldCheck, title: "100% Audit-Ready", description: "Every welder qualification, WPS, PQR, and continuity record — organized and exportable in seconds." },
  { icon: Bell, title: "Smart Expiration Alerts", description: "Automatic notifications before any certification lapses. Never send an unqualified welder to a job." },
  { icon: Smartphone, title: "Mobile-First Logging", description: "Welders log daily activity from their phone in under 30 seconds. GPS, timestamp, and photo evidence included." },
  { icon: FileText, title: "One-Click Audit Packages", description: "Generate PDF documentation bundles for any welder, date range, or code requirement with a single click." },
];

export function TestimonialCarousel() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      aria-label="Platform highlights"
      className="py-20 md:py-28 bg-white/[0.03]"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
          Built for Welding Compliance
        </h2>
        <p className="text-gray-500 mb-12">
          Everything you need to keep your shop audit-ready — without the spreadsheet chaos.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 text-left">
          {HIGHLIGHTS.map((h) => (
            <div key={h.title} className="bg-gray-50 rounded-xl border border-gray-100 p-6">
              <h.icon className="text-amber-500 mb-3" size={24} />
              <h3 className="font-semibold text-gray-900 mb-1">{h.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{h.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="https://app.weldcert.io/sign-up"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Start Your Free Trial <ArrowRight size={18} />
          </a>
          <p className="text-sm text-gray-400 mt-3">14 days free · No credit card required</p>
        </div>
      </div>
    </motion.section>
  );
}
