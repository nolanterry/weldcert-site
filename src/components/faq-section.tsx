"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "Does WeldCert meet AWS D1.1 and ASME Section IX requirements?",
    a: "Yes. WeldCert's qualification tracking is built directly from AWS D1.1, ASME Section IX, API 1104, and OSHA 29 CFR 1910.252 requirements. Every welder qualification, continuity record, and activity log maps to specific regulatory requirements. Your digital records meet all welding code documentation standards.",
  },
  {
    q: "Can my welders use WeldCert without cell service?",
    a: "Yes. WeldCert works offline on any smartphone. Welders can log daily activity, record process details, and update their status without connectivity. Everything syncs automatically when they're back in range.",
  },
  {
    q: "How long does it take to log daily activity?",
    a: "Most welders complete their daily activity log in under 30 seconds. That's faster than filling out a paper timesheet — and the result is a timestamped, process-documented digital record that automatically maintains their continuity requirements.",
  },
  {
    q: "What happens when a welder's qualification is about to expire?",
    a: "WeldCert automatically sends email and SMS alerts 30, 60, and 90 days before any qualification expires. Quality managers get instant notifications with renewal deadlines, so no certifications slip through the cracks.",
  },
  {
    q: "Can I try WeldCert before committing?",
    a: "Absolutely. We offer a 14-day free trial with up to 15 welders. No credit card required. You'll have access to every feature so you can see how WeldCert works with your actual team and processes.",
  },
  {
    q: "How does pricing work?",
    a: "WeldCert starts at $79/month (or $59/month on annual billing) for up to 15 welders. Pro is $149/month for up to 50 welders. Enterprise is $299/month for unlimited welders. Every plan includes all features, smart alerts, and support.",
  },
  {
    q: "Will auditors accept digital qualification records?",
    a: "Yes. AWS, ASME, and OSHA inspectors require that qualification records be maintained and available for review — they do not require paper. Digital records with welder names, dates, process qualifications, and continuity logs satisfy all documentation requirements. Digital records are often preferred because they're organized and searchable.",
  },
  {
    q: "How do I get my team started?",
    a: "Sign up for a free trial, add your welders to the roster, upload their current qualifications, and they can start logging activity the same day. No training required — if they can use a smartphone, they can use WeldCert.",
  },
];

function FAQItem({ faq }: { faq: { q: string; a: string } }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-5 text-left gap-4"
      >
        <span className="font-medium text-gray-900">{faq.q}</span>
        <ChevronDown
          size={20}
          className={`text-gray-400 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-gray-600 leading-relaxed">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">
            Got questions? We&apos;ve got answers. If you don&apos;t see what you need, <a href="/contact" className="text-brand hover:underline">contact us</a>.
          </p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 px-6">
          {FAQS.map((faq) => (
            <FAQItem key={faq.q} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
