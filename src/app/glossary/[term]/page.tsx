import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CTASection } from "@/components/cta-section";
import { GLOSSARY_TERMS, getGlossaryTermBySlug } from "@/lib/glossary-data";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, BookOpen } from "lucide-react";

interface Props {
  params: Promise<{ term: string }>;
}

export async function generateStaticParams() {
  return GLOSSARY_TERMS.map((t) => ({ term: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { term: slug } = await params;
  const entry = getGlossaryTermBySlug(slug);
  if (!entry) return {};
  return {
    title: `${entry.term} — Welding Certification Glossary`,
    description: entry.definition,
    openGraph: { title: `${entry.term} — WeldCert Glossary`, description: entry.definition },
    alternates: { canonical: `/glossary/${entry.slug}` },
  };
}

export default async function GlossaryTermPage({ params }: Props) {
  const { term: slug } = await params;
  const entry = getGlossaryTermBySlug(slug);
  if (!entry) notFound();

  const relatedTerms = entry.relatedTerms.map((s) => GLOSSARY_TERMS.find((t) => t.slug === s)).filter(Boolean);

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "DefinedTerm",
      name: entry.term,
      description: entry.definition,
      url: `https://weldcert.io/glossary/${entry.slug}`,
      inDefinedTermSet: { "@type": "DefinedTermSet", name: "Welding Certification Glossary", url: "https://weldcert.io/glossary" },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://weldcert.io" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://weldcert.io/glossary" },
        { "@type": "ListItem", position: 3, name: entry.term, item: `https://weldcert.io/glossary/${entry.slug}` },
      ],
    },
  ];

  const sorted = [...GLOSSARY_TERMS].sort((a, b) => a.term.localeCompare(b.term));
  const idx = sorted.findIndex((t) => t.slug === entry.slug);
  const prev = idx > 0 ? sorted[idx - 1] : null;
  const next = idx < sorted.length - 1 ? sorted[idx + 1] : null;

  return (
    <>
      <Header />
      <main id="main-content">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

        <div className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 py-3">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-gray-700">Home</Link><span>/</span>
              <Link href="/glossary" className="hover:text-gray-700">Glossary</Link><span>/</span>
              <span className="text-gray-900 font-medium">{entry.term}</span>
            </nav>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 py-12">
          <Link href="/glossary" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-brand mb-6 transition-colors">
            <ArrowLeft size={14} /> Back to Glossary
          </Link>

          <div className="flex items-start gap-3 mb-2">
            <span className="px-2.5 py-1 bg-brand/10 text-brand rounded text-xs font-medium">{entry.category}</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">{entry.term}</h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8 border-l-4 border-brand pl-4">{entry.definition}</p>

          <div className="prose prose-lg max-w-none">
            <h2 className="flex items-center gap-2"><BookOpen size={20} className="text-brand" />In Detail</h2>
            <p>{entry.longDescription}</p>
          </div>

          {relatedTerms.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Related Terms</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {relatedTerms.map((rt) => rt && (
                  <Link key={rt.slug} href={`/glossary/${rt.slug}`} className="p-4 rounded-lg border border-gray-200 hover:border-brand hover:shadow-sm transition-all group">
                    <h3 className="font-medium text-gray-900 group-hover:text-brand transition-colors">{rt.term}</h3>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-2">{rt.definition}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-12 pt-8 border-t border-gray-200 flex justify-between">
            {prev ? <Link href={`/glossary/${prev.slug}`} className="text-sm text-gray-500 hover:text-brand transition-colors">← {prev.term}</Link> : <span />}
            {next ? <Link href={`/glossary/${next.slug}`} className="text-sm text-gray-500 hover:text-brand transition-colors">{next.term} →</Link> : <span />}
          </div>
        </article>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
