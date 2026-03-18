import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found — WeldCert",
  description: "The page you're looking for doesn't exist. Explore our welding certification management software.",
};

const suggestions = [
  { href: "/", label: "Home", desc: "Back to the homepage" },
  { href: "/features", label: "Features", desc: "Certification tracking & compliance" },
  { href: "/pricing", label: "Pricing", desc: "Simple, transparent plans" },
  { href: "/blog", label: "Blog", desc: "Welding compliance tips & guides" },
  { href: "/demo", label: "Book a Demo", desc: "See WeldCert in action" },
  { href: "/help", label: "Help Center", desc: "Find answers to common questions" },
];

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6 py-24">
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-6xl font-bold" style={{ color: "var(--color-brand, #FF6B00)" }}>
          404
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Page not found
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Sorry, we couldn't find the page you're looking for. It may have been moved or no longer exists.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          {suggestions.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group rounded-lg border border-gray-200 p-4 hover:border-orange-300 hover:bg-orange-50 transition-colors"
            >
              <p className="font-semibold text-gray-900 group-hover:text-orange-600">
                {s.label} →
              </p>
              <p className="mt-1 text-sm text-gray-500">{s.desc}</p>
            </Link>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center rounded-lg px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors"
            style={{ backgroundColor: "var(--color-brand, #FF6B00)" }}
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
