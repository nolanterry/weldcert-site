import { getCaseStudyBySlug, getAllCaseStudySlugs } from "@/lib/case-study-data";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ArrowRight, Building2, Users, Package, ChevronRight } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllCaseStudySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);
  
  if (!caseStudy) {
    return {
      title: "Case Study Not Found — WeldCert",
    };
  }

  return {
    title: `${caseStudy.companyName} Case Study — WeldCert`,
    description: caseStudy.hero.summary,
    alternates: {
      canonical: `/customers/${slug}`,
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

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
        "name": "Customers",
        "item": "https://weldcert.io/customers"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": caseStudy.companyName,
        "item": `https://weldcert.io/customers/${slug}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main id="main-content">
        {/* Breadcrumbs */}
        <div className="bg-gray-50 py-4 px-4">
          <div className="max-w-6xl mx-auto">
            <nav className="flex items-center gap-2 text-sm text-gray-600">
              <a href="/" className="hover:text-brand transition-colors">Home</a>
              <ChevronRight size={16} />
              <a href="/customers" className="hover:text-brand transition-colors">Customers</a>
              <ChevronRight size={16} />
              <span className="text-gray-900">{caseStudy.companyName}</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-br from-navy via-navy-light to-navy py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                  {caseStudy.companyName}
                </h1>
                <div className="text-brand font-semibold text-lg mb-4">
                  {caseStudy.industry}
                </div>
                <p className="text-lg text-gray-300 mb-6 max-w-2xl">
                  {caseStudy.hero.summary}
                </p>
                <div className="bg-white/10 border border-white/20 rounded-xl p-6 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-white mb-1">
                    {caseStudy.hero.keyMetric}
                  </div>
                  <div className="text-gray-300">Key Achievement</div>
                </div>
              </div>
              
              {/* At a Glance Sidebar */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
                  <Building2 size={20} className="text-brand" />
                  At a Glance
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Company Size</div>
                    <div className="text-gray-900">{caseStudy.atAGlance.companySize}</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Industry</div>
                    <div className="text-gray-900">{caseStudy.atAGlance.industry}</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Products Used</div>
                    <div className="text-gray-900">{caseStudy.atAGlance.products.join(", ")}</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Key Results</div>
                    <ul className="text-gray-900 space-y-1">
                      {caseStudy.atAGlance.keyResults.map((result, index) => (
                        <li key={index} className="text-sm">• {result}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenge */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {caseStudy.challenge.title}
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {caseStudy.challenge.description}
            </p>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="font-semibold text-red-900 mb-4">Key Challenges:</h3>
              <ul className="space-y-2">
                {caseStudy.challenge.painPoints.map((point, index) => (
                  <li key={index} className="text-red-800 flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {caseStudy.solution.title}
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {caseStudy.solution.description}
            </p>
            <div className="bg-brand/5 border border-brand/20 rounded-xl p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Implementation:</h3>
              <ul className="space-y-2">
                {caseStudy.solution.implementation.map((point, index) => (
                  <li key={index} className="text-gray-700 flex items-start gap-2">
                    <span className="text-brand mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {caseStudy.results.title}
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {caseStudy.results.description}
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {caseStudy.results.metrics.map((metric, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200">
                  <div className="text-3xl font-bold text-brand mb-2">
                    {metric.value}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="bg-navy rounded-xl p-8 text-white">
              <blockquote className="text-lg italic mb-4 leading-relaxed">
                "{caseStudy.quote.text}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-brand rounded-full flex items-center justify-center">
                  <Users size={20} />
                </div>
                <div>
                  <div className="font-semibold">{caseStudy.quote.author}</div>
                  <div className="text-gray-300">{caseStudy.quote.title}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-brand text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Streamline Your Welder Qualifications?
            </h2>
            <p className="text-lg text-amber-100 mb-8 max-w-2xl mx-auto">
              Join the fabrication shops that never worry about expired certifications.
              Start your WeldCert journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.weldcert.io/sign-up"
                className="inline-flex items-center gap-2 bg-white text-brand font-semibold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg"
              >
                Start Your Free Trial <ArrowRight size={20} />
              </a>
              <a
                href="/demo"
                className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors text-lg"
              >
                Book a Demo
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}