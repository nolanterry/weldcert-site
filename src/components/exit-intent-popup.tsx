"use client";

import { useEffect, useState, useCallback } from "react";
import { X, ArrowRight, ClipboardCheck } from "lucide-react";

const SIGNUP_URL = "https://app.weldcert.io/sign-up";
const STORAGE_KEY = "weldcert_exit_popup_dismissed";
const DISMISS_DAYS = 7;

export function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);

  const dismiss = useCallback(() => {
    setVisible(false);
    try {
      localStorage.setItem(STORAGE_KEY, String(Date.now()));
    } catch {}
  }, []);

  useEffect(() => {
    try {
      const ts = localStorage.getItem(STORAGE_KEY);
      if (ts && Date.now() - Number(ts) < DISMISS_DAYS * 86400000) return;
    } catch {}

    let fired = false;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !fired) {
        fired = true;
        setVisible(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    const mobileTimer = setTimeout(() => {
      if (fired) return;
      const scrollPct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      if (scrollPct < 0.6) {
        fired = true;
        setVisible(true);
      }
    }, 45000);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(mobileTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Free trial offer"
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={dismiss} />

      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 animate-[popup_0.3s_ease-out]">
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close popup"
        >
          <X size={20} />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center">
            <ClipboardCheck className="text-brand" size={24} />
          </div>
          <div>
            <p className="text-sm font-medium text-brand uppercase tracking-wide">Before you go</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Your next AWS audit is closer than you think.
        </h2>
        <p className="text-gray-600 mb-6">
          Start your 14-day free trial — digitize WPS, PQR, and welder certifications in minutes. No credit card, no spreadsheets.
        </p>

        <a
          href={SIGNUP_URL}
          className="flex items-center justify-center gap-2 w-full bg-brand text-white font-semibold px-6 py-3.5 rounded-lg hover:bg-brand-dark transition-colors"
          onClick={dismiss}
        >
          Start Free Trial <ArrowRight size={16} />
        </a>

        <button
          onClick={dismiss}
          className="w-full text-sm text-gray-400 hover:text-gray-600 mt-3 transition-colors"
        >
          No thanks, I trust my filing cabinet
        </button>
      </div>

      <style jsx>{`
        @keyframes popup {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
}
