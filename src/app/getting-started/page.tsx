"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import { Clock, CheckCircle, Play, HelpCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Getting Started with WeldCert | Quick Setup Guide",
  description: "Get started with WeldCert welding certification management in under 15 minutes. Step-by-step setup guide for welder qualification tracking.",
  canonical: "https://weldcert.io/getting-started",
  openGraph: {
    title: "Getting Started with WeldCert | Quick Setup Guide",
    description: "Get started with WeldCert welding certification management in under 15 minutes. Step-by-step setup guide for welder qualification tracking.",
    url: "https://weldcert.io/getting-started",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://weldcert.io"
    },
    {
      "@type": "ListItem", 
      "position": 2,
      "name": "Getting Started",
      "item": "https://weldcert.io/getting-started"
    }
  ]
};

const steps = [
  {
    number: 1,
    title: "Create your account",
    description: "Sign up with your company email and verify your account. No credit card required for the 14-day free trial.",
    time: "2 min",
    tip: "Use your company domain to automatically configure industry-standard welding codes and procedures."
  },
  {
    number: 2, 
    title: "Import welder roster",
    description: "Upload your existing welder list via CSV or manually add each welder with their current certifications and contact details.",
    time: "5 min",
    tip: "Don't have a digital roster? Start with your most active welders—you can add others as they come up for recertification."
  },
  {
    number: 3,
    title: "Set up certification tracking", 
    description: "Configure tracking for relevant welding codes: AWS D1.1, ASME IX, API 1104. Pre-loaded templates include all requirements.",
    time: "3 min",
    tip: "Structural welding? AWS D1.1 templates cover all essential and supplemental variables automatically."
  },
  {
    number: 4,
    title: "Upload existing WPS/PQR documents",
    description: "Import your Welding Procedure Specifications and Procedure Qualification Records to link with welder certifications.",
    time: "4 min",
    tip: "Scan existing paper WPS documents—WeldCert can extract key variables and create digital records automatically."
  },
  {
    number: 5,
    title: "Schedule upcoming qualification tests", 
    description: "Set up reminders for renewal tests and new qualifications. Configure automatic notifications for expiring certifications.",
    time: "3 min",
    tip: "Set reminders 30-60 days before expiration to allow time for scheduling and test preparation."
  },
  {
    number: 6,
    title: "Generate compliance dashboard",
    description: "View your welder certification status, upcoming expirations, and compliance reports. This is your central command center.",
    time: "1 min",
    tip: "Pin the dashboard to your browser favorites—you'll check it daily once you see how useful it is."
  }
];

const faqs = [
  {
    question: "Can I import existing welder certification data?",
    answer: "Yes! WeldCert supports CSV imports for welder rosters, certification records, and WPS/PQR documents. Our team can help migrate data from spreadsheets or other systems."
  },
  {
    question: "How long does setup actually take?",
    answer: "Most companies complete setup in under 15 minutes. The time varies based on your welder roster size, but you can start with key personnel and add others incrementally."
  },
  {
    question: "Do I need welding engineering expertise?",
    answer: "No specialized engineering knowledge required. WeldCert is designed for welding supervisors, QA/QC managers, and HR professionals who manage certifications day-to-day."
  },
  {
    question: "What if I need help during setup?",
    answer: "Our welding industry experts provide setup support via chat, phone, or screen sharing. We offer free onboarding sessions to ensure your team is fully trained."
  }
];

export default function GettingStartedPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-amber-50 to-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-600 font-medium px-4 py-2 rounded-full text-sm mb-6">
              <Clock size={16} />
              Up and running in under 15 minutes
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get Started with WeldCert in Minutes
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Follow this step-by-step guide to set up your welding certification management system and track your first welder qualifications.
            </p>
          </div>
        </section>

        {/* Interactive Checklist */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Your Setup Checklist
            </h2>
            
            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-6 p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold">
                      {step.number}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                      <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-600 text-sm font-medium px-2 py-1 rounded">
                        <Clock size={14} />
                        ~{step.time}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-3">{step.description}</p>
                    
                    {step.tip && (
                      <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                        <p className="text-amber-800 text-sm">
                          <span className="font-medium">Pro tip:</span> {step.tip}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What You'll Need */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              What You'll Need
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <CheckCircle className="w-8 h-8 text-amber-500 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Basic Requirements</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Company email address</li>
                  <li>• Web browser (Chrome, Safari, Firefox)</li>
                  <li>• Welder contact information</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <CheckCircle className="w-8 h-8 text-amber-500 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Welder Information</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Welder names and IDs</li>
                  <li>• Current certifications</li>
                  <li>• Expiration dates</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <CheckCircle className="w-8 h-8 text-green-500 mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Optional (But Helpful)</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Existing WPS/PQR documents</li>
                  <li>• Historical test records</li>
                  <li>• Project qualification requirements</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Video Placeholder */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Watch the Setup Walkthrough
            </h2>
            
            <div className="relative bg-gray-100 rounded-xl overflow-hidden aspect-video">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Complete Setup Walkthrough</h3>
                  <p className="text-gray-600">Follow along as we set up welding certification tracking from start to finish</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Setup Questions & Answers
            </h2>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
                  <div className="flex gap-4">
                    <HelpCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <CTASection />
      <Footer />
    </>
  );
}