import Link from "next/link";
import Image from "next/image";

const PRODUCT_LINKS = [
  { label: "Features", href: "/features" },
  { label: "Integrations", href: "/integrations" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
  { label: "Customers", href: "/customers" },
  { label: "Use Cases", href: "/use-cases" },
  { label: "Resources", href: "/resources" },
  { label: "Help Center", href: "/help" },
  { label: "Getting Started", href: "/getting-started" },
  { label: "Glossary", href: "/glossary" },
  { label: "Partners", href: "/partners" },
  { label: "Careers", href: "/careers" },
  { label: "Status", href: "/status" },
];

const RESOURCE_LINKS = [
  { label: "AWS D1.1 Welder Qualification Requirements", href: "/blog/aws-d1-1-welder-qualification-requirements" },
  { label: "ASME Section IX Continuity Rules", href: "/blog/asme-section-ix-continuity-rules" },
  { label: "Welder Certification Software vs Spreadsheets", href: "/blog/welder-certification-software-vs-spreadsheets" },
  { label: "What Happens When Welder Qualifications Lapse", href: "/blog/welder-qualifications-lapse-consequences" },
  { label: "Welder Certification Software Comparison", href: "/blog/welder-certification-software-comparison" },
];

const COMPLIANCE_LINKS = [
  { label: "AWS D1.1", href: "/blog/aws-d1-1-welder-qualification-requirements" },
  { label: "ASME Section IX", href: "/blog/asme-section-ix-continuity-rules" },
  { label: "API 1104", href: "/blog/api-1104-pipeline-welder-qualification" },
];

export function Footer() {
  return (
    <footer role="contentinfo" className="bg-navy text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-1.5 mb-4">
              <Image src="/logo.svg" alt="WeldCert" width={28} height={28} className="invert" />
              <span className="font-bold text-lg">WeldCert</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              AWS D1.1 and ASME IX compliant welder certification tracking software that keeps your shop audit-ready.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              support@weldcert.io
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-gray-300">Product</h4>
            <div className="space-y-2.5">
              {PRODUCT_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="block text-sm text-gray-400 hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-gray-300">Resources</h4>
            <div className="space-y-2.5">
              {RESOURCE_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="block text-sm text-gray-400 hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-gray-300">Compliance</h4>
            <div className="space-y-2.5">
              {COMPLIANCE_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="block text-sm text-gray-400 hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} WeldCert. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
            <Link href="/accessibility" className="hover:text-gray-300 transition-colors">Accessibility</Link>
            <Link href="/security" className="hover:text-gray-300 transition-colors">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
