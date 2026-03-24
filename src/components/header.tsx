"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const NAV = [
  { label: "Features", href: "/features" },
  { label: "Integrations", href: "/integrations" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Customers", href: "/customers" },
  { label: "Demo", href: "/demo" },
  { label: "Help", href: "/help" },
  { label: "Changelog", href: "/changelog" },
  { label: "Contact", href: "/contact" },
];

const SIGNUP_URL = "https://app.weldcert.io/sign-up";
const LOGIN_URL = "https://app.weldcert.io/login";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-1.5">
          <Image src="/logo.svg" alt="WeldCert" width={28} height={28} />
          <span className="font-bold text-lg text-gray-900">WeldCert</span>
        </Link>

        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-8">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              {n.label}
            </Link>
          ))}
          <a href={LOGIN_URL} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Log In</a>
          <a href={SIGNUP_URL} className="bg-brand text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-brand-dark transition-colors">
            Start Free Trial
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile navigation" className="md:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-3">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="block text-gray-600 py-2">
              {n.label}
            </Link>
          ))}
          <a href={LOGIN_URL} className="block text-center text-gray-600 py-2">Log In</a>
          <a href={SIGNUP_URL} className="block bg-brand text-white text-center font-medium px-5 py-3 rounded-lg">
            Start Free Trial
          </a>
        </nav>
      )}
    </header>
  );
}
