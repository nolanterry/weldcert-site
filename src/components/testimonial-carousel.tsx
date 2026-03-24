"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    quote: "An AWS auditor showed up unannounced. I pulled up every welder's qualification and continuity records on my phone in under a minute. He said it was the cleanest documentation he'd ever seen.",
    name: "Maria Rodriguez",
    title: "Quality Manager",
    company: "Gulf Coast Fabricators",
  },
  {
    quote: "My welders used to forget their daily logs half the time. Now they tap through it in 30 seconds on their phone. I can see every welder's status from my desk — no more spreadsheet chaos.",
    name: "Jim Peterson",
    title: "Welding Supervisor",
    company: "Midwest Structural Steel",
  },
  {
    quote: "We manage 52 welders across 4 shops. Before WeldCert, tracking continuity was a nightmare of Excel files and expired certs. Now it's automated and audit-ready. Complete game changer.",
    name: "Sarah Chen",
    title: "Director of Quality Assurance",
    company: "Pacific Steel Works",
  },
  {
    quote: "The expiration alerts alone saved us. We almost sent a welder to a critical job with lapsed certs. WeldCert flagged it 30 days out. That could have been a rejected weld and a six-figure rework.",
    name: "Frank DiNapoli",
    title: "CWI / Shop Foreman",
    company: "Atlas Welding & Fabrication",
  },
  {
    quote: "We switched from a $400/month enterprise platform that required two days of training. WeldCert does everything we need at a fraction of the cost. My team was using it the same afternoon.",
    name: "Keisha Washington",
    title: "Operations Manager",
    company: "Southern Weld Technologies",
  },
];

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [paused, next]);

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      aria-label="Customer testimonials"
      className="py-20 md:py-28 bg-white/[0.03]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
          Trusted by fabrication shops nationwide
        </h2>
        <p className="text-gray-500 mb-12">
          See why quality managers are switching from spreadsheets to WeldCert.
        </p>

        <div className="relative min-h-[260px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              aria-live="polite"
              className="w-full"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="text-amber-500 fill-amber-500" size={20} />
                ))}
              </div>

              {/* Quote */}
              <div className="relative max-w-2xl mx-auto">
                <span className="absolute -top-6 -left-2 text-6xl leading-none text-amber-500/20 font-serif select-none">&ldquo;</span>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed italic px-6">
                  {TESTIMONIALS[current].quote}
                </p>
                <span className="absolute -bottom-4 -right-2 text-6xl leading-none text-amber-500/20 font-serif select-none">&rdquo;</span>
              </div>

              {/* Attribution */}
              <div className="mt-8">
                <p className="font-semibold text-gray-900">{TESTIMONIALS[current].name}</p>
                <p className="text-sm text-gray-500">
                  {TESTIMONIALS[current].title}, {TESTIMONIALS[current].company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8" role="tablist" aria-label="Testimonial navigation">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              role="tab"
              aria-selected={i === current}
              aria-label={`Testimonial ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === current ? "bg-amber-500 w-7" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
