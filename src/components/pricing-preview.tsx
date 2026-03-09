"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, ArrowRight } from "lucide-react";

const SIGNUP_URL = "https://app.weldcert.io/sign-up";

const FEATURES = [
  "Unlimited activity logs",
  "All welding process tracking",
  "Photo documentation & GPS",
  "Continuity dashboard (traffic lights)",
  "PDF audit export packages",
  "WPS/PQR/WPQ management",
  "Welder roster & certifications",
  "Smart expiration alerts",
  "Priority support",
];

export function PricingPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="pricing" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple pricing. Cheaper than one failed audit.</h2>
        <p className="text-gray-600 mb-12">Start free. Scale as your shop grows.</p>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="rounded-xl border border-gray-200 p-6 text-left"
          >
            <div className="text-sm font-semibold text-gray-500 mb-2">FREE TRIAL</div>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-4xl font-bold">$0</span>
              <span className="text-gray-500">/14 days</span>
            </div>
            <p className="text-sm text-gray-500 mb-6">Up to 5 welders. No credit card.</p>
            <a href={SIGNUP_URL} className="block text-center border border-brand text-brand font-medium py-3 rounded-lg hover:bg-brand-light transition-colors">
              Start Free Trial
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-xl border-2 border-brand p-6 text-left shadow-lg relative"
          >
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-white text-xs font-semibold px-3 py-1 rounded-full">
              MOST POPULAR
            </span>
            <div className="text-sm font-semibold text-brand mb-2">STARTER</div>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-4xl font-bold">$79</span>
              <span className="text-gray-500">/mo</span>
            </div>
            <p className="text-sm text-gray-500 mb-1">Up to 15 welders. 1 admin.</p>
            <p className="text-xs text-brand mb-6">$59/mo billed annually</p>
            <a href={SIGNUP_URL} className="block text-center bg-brand text-white font-medium py-3 rounded-lg hover:bg-brand-dark transition-colors">
              Start Free Trial
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-xl border border-gray-200 p-6 text-left"
          >
            <div className="text-sm font-semibold text-gray-500 mb-2">ENTERPRISE</div>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-4xl font-bold">Custom</span>
            </div>
            <p className="text-sm text-gray-500 mb-6">Unlimited welders, SSO, custom integrations.</p>
            <a href="/contact" className="block text-center border border-gray-300 text-gray-700 font-medium py-3 rounded-lg hover:bg-gray-50 transition-colors">
              Contact Sales
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12"
        >
          <p className="text-sm text-gray-500 mb-6">All plans include:</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {FEATURES.map((f) => (
              <div key={f} className="flex items-center gap-1.5">
                <Check className="text-green-500 shrink-0" size={14} />
                <span className="text-sm text-gray-600">{f}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
