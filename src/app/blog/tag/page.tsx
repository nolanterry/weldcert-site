import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { getAllTags, TAG_LABELS } from "@/lib/blog-meta";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Topics — WeldCert",
  description:
    "Browse welding certification articles by topic. AWS D1.1, ASME Section IX, CWI certification, WPS/PQR documentation, and more.",
  alternates: { canonical: "/blog/tag" },
};

export default function TagIndexPage() {
  const tags = getAllTags();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://weldcert.io" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://weldcert.io/blog" },
      { "@type": "ListItem", position: 3, name: "Topics", item: "https://weldcert.io/blog/tag" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main id="main-content">
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Blog Topics</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">Browse welding certification articles by topic.</p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex flex-wrap gap-3">
              {tags.map(({ tag, count }) => (
                <Link key={tag} href={`/blog/tag/${tag}`} className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 bg-white hover:border-orange-400/40 hover:shadow-md transition-all group">
                  <span className="text-sm font-medium text-gray-800 group-hover:text-orange-600 transition-colors">
                    {TAG_LABELS[tag] || tag.charAt(0).toUpperCase() + tag.slice(1).replace(/-/g, " ")}
                  </span>
                  <span className="text-xs font-medium text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full group-hover:bg-orange-50 group-hover:text-orange-600 transition-colors">{count}</span>
                </Link>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link href="/blog" className="text-sm font-medium text-orange-600 hover:underline">← Back to all articles</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
