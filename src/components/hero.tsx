"use client";

import { motion } from "framer-motion";
import { Shield, Clock, FileCheck, ArrowRight } from "lucide-react";

const SIGNUP_URL = "https://app.weldcert.io/sign-up";

const STATS = [
  { icon: Shield, value: "$161K+", label: "OSHA fine per willful violation" },
  { icon: Clock, value: "<30 sec", label: "Daily activity logging time" },
  { icon: FileCheck, value: "100%", label: "Audit-ready qualification records" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy-light to-navy py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,107,0,0.08),transparent_60%)]" />
      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-brand/15 text-brand text-xs font-semibold px-3 py-1 rounded-full mb-6 border border-brand/20">
              AWS D1.1 & ASME IX Compliant
            </span>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-white">
              Stop Gambling with{" "}
              <span className="text-brand">Spreadsheet Welder Tracking</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-xl">
              WeldCert eliminates spreadsheets and prevents lapsed qualifications. 
              Track every welder's certifications with smart alerts. Be audit-ready when inspectors arrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <a
                href={SIGNUP_URL}
                className="bg-brand text-white font-semibold px-8 py-4 rounded-lg hover:bg-brand-dark transition-colors text-center flex items-center justify-center gap-2"
              >
                Start Free Trial <ArrowRight size={18} />
              </a>
              <a
                href="/features"
                className="border border-gray-500 text-gray-200 font-medium px-8 py-4 rounded-lg hover:bg-white/5 transition-colors text-center"
              >
                See All Features
              </a>
            </div>
          </motion.div>

          <div className="grid grid-cols-3 gap-6">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="text-center"
              >
                <s.icon className="mx-auto mb-2 text-brand" size={24} />
                <div className="text-2xl font-bold text-white">{s.value}</div>
                <div className="text-xs text-gray-400">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
