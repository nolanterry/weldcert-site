import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "WeldCert",
  applicationCategory: "BusinessApplication",
  operatingSystem: "iOS, Android, Web",
  description: "Mobile-first welder certification and qualification tracking software. Prevents lapsed qualifications, generates audit reports for AWS D1.1, ASME IX compliance.",
  offers: {
    "@type": "Offer",
    price: "79",
    priceCurrency: "USD",
    priceValidUntil: "2027-12-31",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "89",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
