import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ExitIntentPopup } from "@/components/exit-intent-popup";
import { CookieConsent } from "@/components/cookie-consent";
import { PromoBar } from "@/components/promo-bar";
import { MobileCtaBar } from "@/components/mobile-cta-bar";
import { SocialProofToast } from "@/components/social-proof-toast";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://weldcert.io"),
  title: { default: "WeldCert — Welder Certification Tracking Software", template: "%s | WeldCert" },
  description: "Mobile-first welder certification and qualification tracking software. Eliminates spreadsheets, prevents lapsed qualifications, keeps fabrication shops audit-ready for AWS D1.1, ASME IX, and OSHA.",
  openGraph: {
    type: "website",
    siteName: "WeldCert",
    title: "WeldCert — Welder Certification Tracking Made Simple",
    description: "Track welder qualifications, prevent lapses, generate audit reports. Smart alerts and mobile logging. Try free for 14 days.",
  },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: [{ url: "/favicon-32.png", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "WeldCert",
    applicationCategory: "BusinessApplication",
    operatingSystem: "iOS, Android, Web",
    url: "https://weldcert.io",
    description:
      "Mobile-first welder certification and qualification tracking software. Prevents lapsed qualifications, generates audit reports for AWS D1.1, ASME IX compliance.",
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "79",
      highPrice: "299",
      priceCurrency: "USD",
      offerCount: "3",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "WeldCert",
    url: "https://weldcert.io",
    logo: "https://weldcert.io/favicon-32.png",
    description:
      "Welder certification and qualification tracking software for fabrication shops and welding contractors.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      url: "https://weldcert.io/demo",
    },
    sameAs: [],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Does WeldCert meet AWS D1.1 and ASME Section IX requirements?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. WeldCert's qualification tracking is built directly from AWS D1.1, ASME Section IX, API 1104, and OSHA 29 CFR 1910.252 requirements. Every welder qualification, continuity record, and activity log maps to specific regulatory requirements.",
        },
      },
      {
        "@type": "Question",
        name: "Can my welders use WeldCert without cell service?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. WeldCert works offline on any smartphone. Welders can log daily activity, record process details, and update their status without connectivity. Everything syncs automatically when they're back in range.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to log daily activity?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most welders complete their daily activity log in under 30 seconds. That's faster than filling out a paper timesheet — and the result is a timestamped, process-documented digital record that automatically maintains their continuity requirements.",
        },
      },
      {
        "@type": "Question",
        name: "What happens when a welder's qualification is about to expire?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "WeldCert automatically sends email and SMS alerts 30, 60, and 90 days before any qualification expires. Quality managers get instant notifications with renewal deadlines.",
        },
      },
      {
        "@type": "Question",
        name: "Can I try WeldCert before committing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. We offer a 14-day free trial with up to 15 welders. No credit card required. You'll have access to every feature so you can see how WeldCert works with your actual team and processes.",
        },
      },
      {
        "@type": "Question",
        name: "How does pricing work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "WeldCert starts at $79/month (or $59/month on annual billing) for up to 15 welders. Pro is $149/month for up to 50 welders. Enterprise is $299/month for unlimited welders. Every plan includes all features, smart alerts, and support.",
        },
      },
      {
        "@type": "Question",
        name: "Will auditors accept digital qualification records?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. AWS, ASME, and OSHA inspectors require that qualification records be maintained and available for review — they do not require paper. Digital records are often preferred because they're organized and searchable.",
        },
      },
      {
        "@type": "Question",
        name: "How do I get my team started?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sign up for a free trial, add your welders to the roster, upload their current qualifications, and they can start logging activity the same day. No training required.",
        },
      },
    ],
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        <PromoBar />
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        {structuredData.map((data, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
          />
        ))}
        {children}
        <ExitIntentPopup />
        <MobileCtaBar />
        <CookieConsent />
        <SocialProofToast />
      </body>
    </html>
  );
}
