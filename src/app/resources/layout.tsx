import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Resources — Welding Certification Templates & Compliance Guides | WeldCert",
  description:
    "Download free AWS D1.1 checklists, WPS/PQR templates, welder qualification trackers, and CWI audit guides. Built for quality managers and welding engineers.",
  alternates: { canonical: "/resources" },
  openGraph: {
    title: "Free Resources — Welding Certification Templates & Compliance Guides",
    description:
      "Download free AWS D1.1 checklists, WPS/PQR templates, and welder qualification trackers.",
    url: "https://weldcert.io/resources",
  },
};

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
