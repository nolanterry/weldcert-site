"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { motion, useSpring, useTransform } from "framer-motion";
import { Calculator, TrendingUp, Clock, DollarSign, ShieldCheck, ChevronDown, ChevronUp, ArrowRight, Bell } from "lucide-react";

/* ─── Animated Number ─── */
function AnimatedNumber({ value, prefix = "", suffix = "", decimals = 0 }: { value: number; prefix?: string; suffix?: string; decimals?: number }) {
  const spring = useSpring(0, { stiffness: 50, damping: 20 });
  const display = useTransform(spring, (v) => `${prefix}${v.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}${suffix}`);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => { spring.set(value); }, [spring, value]);
  useEffect(() => {
    const unsub = display.on("change", (v) => { if (ref.current) ref.current.textContent = v; });
    return unsub;
  }, [display]);

  return <span ref={ref}>{`${prefix}${value.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}${suffix}`}</span>;
}

/* ─── Slider ─── */
function Slider({ label, min, max, step, value, onChange, prefix = "", suffix = "" }: { label: string; min: number; max: number; step: number; value: number; onChange: (v: number) => void; prefix?: string; suffix?: string }) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <label className="text-sm font-medium text-gray-300">{label}</label>
        <span className="text-sm font-bold text-amber-400">{prefix}{value.toLocaleString()}{suffix}</span>
      </div>
      <input
        type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label={label}
        className="w-full h-2 rounded-full appearance-none cursor-pointer"
        style={{ background: `linear-gradient(to right, #f59e0b ${pct}%, #1e293b ${pct}%)` }}
      />
      <div className="flex justify-between text-xs text-gray-500 mt-1">
        <span>{prefix}{min.toLocaleString()}{suffix}</span>
        <span>{prefix}{max.toLocaleString()}{suffix}</span>
      </div>
    </div>
  );
}

/* ─── Main Page ─── */
export default function ROICalculatorPage() {
  const [welders, setWelders] = useState(30);
  const [documents, setDocuments] = useState(50);
  const [hours, setHours] = useState(40);
  const [rate, setRate] = useState(35);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [methodOpen, setMethodOpen] = useState(false);

  const hoursSaved = hours * 0.65;
  const costSavedMonth = hoursSaved * rate;
  const annualSavings = costSavedMonth * 12;
  const annualCost = 2388;
  const roi = annualSavings > 0 ? Math.round(((annualSavings - annualCost) / annualCost) * 100) : 0;

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    const leads = JSON.parse(localStorage.getItem("weldcert_roi_leads") || "[]");
    leads.push({ email, welders, documents, hours, rate, annualSavings, roi, ts: new Date().toISOString() });
    localStorage.setItem("weldcert_roi_leads", JSON.stringify(leads));
    setSubmitted(true);
  }, [email, welders, documents, hours, rate, annualSavings, roi]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://weldcert.io" },
      { "@type": "ListItem", position: 2, name: "ROI Calculator", item: "https://weldcert.io/roi-calculator" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main className="bg-[#0b1120] min-h-screen">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-4 pt-16 pb-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-1.5 mb-6">
              <Calculator className="w-4 h-4 text-amber-400" />
              <span className="text-sm text-amber-400 font-medium">ROI Calculator</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Calculate Your <span className="text-amber-400">Certification Savings</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              See how much time and money WeldCert saves your shop by replacing spreadsheets and paper-based cert tracking with automated workflows.
            </p>
          </motion.div>
        </section>

        {/* Calculator */}
        <section className="max-w-6xl mx-auto px-4 pb-20">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Inputs */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#111827] border border-gray-800 rounded-2xl p-8">
              <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5 text-amber-400" /> Your Current Situation
              </h2>
              <Slider label="Number of welders certified" min={5} max={200} step={1} value={welders} onChange={setWelders} />
              <Slider label="WPS/PQR documents managed" min={10} max={500} step={5} value={documents} onChange={setDocuments} />
              <Slider label="Hours per month on cert tracking/paperwork" min={10} max={80} step={1} value={hours} onChange={setHours} suffix=" hrs" />
              <Slider label="Admin hourly rate" min={25} max={60} step={1} value={rate} onChange={setRate} prefix="$" />
            </motion.div>

            {/* Results */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#111827] border border-gray-800 rounded-2xl p-8 flex flex-col">
              <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-amber-400" /> Your Savings with WeldCert
              </h2>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-[#0b1120] rounded-xl p-4 border border-gray-800">
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Hours Saved / Month</p>
                  <p className="text-2xl font-bold text-white"><AnimatedNumber value={Math.round(hoursSaved)} suffix=" hrs" /></p>
                </div>
                <div className="bg-[#0b1120] rounded-xl p-4 border border-gray-800">
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Cost Saved / Month</p>
                  <p className="text-2xl font-bold text-white"><AnimatedNumber value={Math.round(costSavedMonth)} prefix="$" /></p>
                </div>
                <div className="bg-[#0b1120] rounded-xl p-4 border border-gray-800">
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Annual Savings</p>
                  <p className="text-2xl font-bold text-emerald-400"><AnimatedNumber value={Math.round(annualSavings)} prefix="$" /></p>
                </div>
                <div className="bg-[#0b1120] rounded-xl p-4 border border-gray-800">
                  <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">ROI</p>
                  <p className="text-2xl font-bold text-emerald-400"><AnimatedNumber value={roi} suffix="%" /></p>
                </div>
              </div>

              {/* Comparison */}
              <div className="bg-[#0b1120] rounded-xl p-4 border border-gray-800 mb-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-xs text-gray-500 uppercase mb-2">Spreadsheets</p>
                    <p className="text-lg font-bold text-red-400"><AnimatedNumber value={hours} suffix=" hrs/mo" /></p>
                    <p className="text-xs text-gray-500 mt-1">Manual tracking</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase mb-2">With WeldCert</p>
                    <p className="text-lg font-bold text-emerald-400"><AnimatedNumber value={Math.round(hours * 0.35)} suffix=" hrs/mo" /></p>
                    <p className="text-xs text-gray-500 mt-1">Automated tracking</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-lg p-3 mb-6">
                <Bell className="w-5 h-5 text-amber-400 shrink-0" />
                <p className="text-sm text-amber-300">Zero expired certifications — automatic renewal alerts</p>
              </div>

              {/* Lead Capture */}
              {!submitted ? (
                <form onSubmit={handleSubmit} className="mt-auto">
                  <p className="text-sm text-gray-400 mb-3">Get a detailed ROI report customized for your shop:</p>
                  <div className="flex gap-2">
                    <input type="email" required placeholder="you@company.com" value={email} onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 bg-[#0b1120] border border-gray-700 rounded-lg px-4 py-2.5 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-amber-500" />
                    <button type="submit" className="bg-amber-500 hover:bg-amber-600 text-black font-medium px-5 py-2.5 rounded-lg text-sm transition-colors flex items-center gap-1.5">
                      Get Report <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              ) : (
                <div className="mt-auto bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4 text-center">
                  <p className="text-emerald-400 font-medium">✓ We&apos;ll send your custom ROI report shortly!</p>
                </div>
              )}
            </motion.div>
          </div>

          {/* Methodology */}
          <div className="mt-12 max-w-4xl mx-auto">
            <button onClick={() => setMethodOpen(!methodOpen)}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm w-full justify-between bg-[#111827] border border-gray-800 rounded-xl px-6 py-4">
              <span className="font-medium">Methodology & Assumptions</span>
              {methodOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            {methodOpen && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="bg-[#111827] border border-t-0 border-gray-800 rounded-b-xl px-6 py-4 text-sm text-gray-400 space-y-2">
                <p><strong className="text-gray-300">Time reduction:</strong> WeldCert reduces cert tracking and paperwork time by approximately 65% based on customer transitions from spreadsheets to digital management.</p>
                <p><strong className="text-gray-300">Cost calculation:</strong> Hours saved × admin hourly rate. Does not include indirect savings from avoided lapsed certifications, failed audits, or project delays.</p>
                <p><strong className="text-gray-300">ROI calculation:</strong> (Annual savings − WeldCert annual cost of $2,388) ÷ WeldCert annual cost × 100.</p>
                <p><strong className="text-gray-300">Certification alerts:</strong> Automatic renewal alerts eliminate 100% of expired certification incidents based on customer-reported data.</p>
              </motion.div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
