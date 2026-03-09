"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  { name: "Maria Rodriguez", company: "Gulf Coast Fabricators", location: "Houston, TX", quote: "AWS inspector showed up for a surprise audit last month. Pulled up every welder's qualification records on my phone in 30 seconds. He said it was the best documentation he'd ever seen. WeldCert paid for itself that one visit.", rating: 5 },
  { name: "Jim Peterson", company: "Midwest Structural Steel", location: "Chicago, IL", quote: "My welders used to forget to log their daily activity half the time. Now they tap through it on their phone in 30 seconds. I can see every welder's continuity status from my desk. No more scrambling before audits.", rating: 5 },
  { name: "Sarah Chen", company: "Pacific Steel Works", location: "Seattle, WA", quote: "We manage 47 welders across 6 job sites. Before WeldCert, tracking qualifications was a nightmare of Excel spreadsheets. Now everything's digital, searchable, and audit-ready. Complete game changer.", rating: 5 },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by fabrication shops nationwide</h2>
          <p className="text-gray-600">See why quality managers are switching from spreadsheets to WeldCert.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="text-brand fill-brand" size={16} />
                ))}
              </div>
              <p className="text-sm text-gray-700 mb-4 italic leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-gray-500">{t.company} &middot; {t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
