"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const SIGNUP_URL = "https://app.weldcert.io/sign-up";

const ALL_FEATURES = [
  "Welder roster management",
  "AWS D1.1 & ASME IX compliance",
  "Continuity dashboard (traffic lights)",
  "WPS/PQR/WPQ management", 
  "Mobile activity logging",
  "Smart alerts (email/SMS)",
  "Audit export (PDF binders)",
  "Qualification history & search",
  "Offline mode",
];

const TIERS = [
  {
    name: "Starter",
    price: "$79",
    period: "/month",
    annualNote: "$59/mo billed annually — save $240/year",
    desc: "Up to 15 welders. Perfect for small fabrication shops.",
    cta: "Start Free Trial",
    ctaStyle: "border border-brand text-brand hover:bg-brand-light",
    href: SIGNUP_URL,
    features: ALL_FEATURES,
    highlight: false,
  },
  {
    name: "Pro",
    price: "$149",
    period: "/month",
    annualNote: "$119/mo billed annually — save $360/year",
    desc: "Up to 50 welders. Great for growing contractors and mid-size shops.",
    cta: "Start Free Trial",
    ctaStyle: "bg-brand text-white hover:bg-brand-dark",
    href: SIGNUP_URL,
    features: [...ALL_FEATURES, "Priority email support"],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "$299",
    period: "/month",
    annualNote: "$249/mo billed annually — save $600/year",
    desc: "Unlimited welders. SSO, dedicated account manager, custom onboarding.",
    cta: "Contact Sales",
    ctaStyle: "border border-gray-300 text-gray-700 hover:bg-gray-50",
    href: "/contact",
    features: [...ALL_FEATURES, "Priority email support", "SSO / SAML", "Dedicated account manager", "Custom onboarding", "SLA guarantee"],
    highlight: false,
  },
];

export function PricingTiers() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-2xl p-8 flex flex-col ${
                tier.highlight
                  ? "border-2 border-brand shadow-xl relative"
                  : "border border-gray-200"
              }`}
            >
              {tier.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-white text-xs font-semibold px-4 py-1 rounded-full">
                  MOST POPULAR
                </span>
              )}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{tier.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold">{tier.price}</span>
                  {tier.period && <span className="text-gray-500">{tier.period}</span>}
                </div>
                {tier.annualNote && (
                  <p className="text-sm text-brand mt-2">{tier.annualNote}</p>
                )}
                <p className="text-sm text-gray-500 mt-3">{tier.desc}</p>
              </div>

              <a
                href={tier.href}
                className={`block text-center font-medium py-3 rounded-lg transition-colors mb-8 ${tier.ctaStyle}`}
              >
                {tier.cta}
              </a>

              <div className="space-y-3 flex-1">
                {tier.features.map((f) => (
                  <div key={f} className="flex items-start gap-2">
                    <Check className="text-green-500 shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-gray-600">{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            <strong>Quick math:</strong> 10 welders = $79/mo. 30 welders = $149/mo. 100+ welders = $299/mo.
            <br />
            A single OSHA willful violation fine: <strong>$161,323</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
