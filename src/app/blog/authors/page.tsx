import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AUTHORS } from "@/lib/authors";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Authors | WeldCert",
  description:
    "Meet the WeldCert blog authors — welding compliance experts writing about AWS D1.1, ASME Section IX, CWI certification, and welder qualification tracking.",
  alternates: { canonical: "/blog/authors" },
};

export default function AuthorsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://weldcert.io" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://weldcert.io/blog" },
      { "@type": "ListItem", position: 3, name: "Authors", item: "https://weldcert.io/blog/authors" },
    ],
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "WeldCert Blog Authors",
    description: metadata.description,
    url: "https://weldcert.io/blog/authors",
    publisher: {
      "@type": "Organization",
      name: "WeldCert",
      url: "https://weldcert.io",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <Header />
      <main id="main-content">
        <section className="bg-gradient-to-br from-navy via-navy-light to-navy py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Blog Authors</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Meet the experts behind WeldCert&apos;s welding compliance and certification content.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 grid gap-8 md:grid-cols-2">
            {AUTHORS.map((author) => (
              <Link
                key={author.slug}
                href={`/blog/authors/${author.slug}`}
                className="border border-gray-100 rounded-xl p-6 hover:border-orange-600/30 hover:shadow-md transition-all block"
              >
                <h2 className="text-xl font-bold mb-1 text-gray-900">{author.name}</h2>
                <p className="text-sm text-orange-600 font-medium mb-3">{author.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{author.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {author.expertise.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
