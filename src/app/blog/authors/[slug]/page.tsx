import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AUTHORS, getAuthorBySlug } from "@/lib/authors";
import { BLOG_META } from "@/lib/blog-meta";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return AUTHORS.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const author = getAuthorBySlug(params.slug);
  if (!author) return {};
  return {
    title: `${author.name} — Blog Author | WeldCert`,
    description: author.bio,
    alternates: { canonical: `/blog/authors/${author.slug}` },
  };
}

export default function AuthorDetailPage({ params }: { params: { slug: string } }) {
  const author = getAuthorBySlug(params.slug);
  if (!author) notFound();

  const posts = BLOG_META.filter((p) => p.author === author.slug);

  const personSchema = {
    "@context": "https://schema.org",
    "@type": author.slug === "weldcert-team" ? "Organization" : "Person",
    name: author.name,
    jobTitle: author.role,
    description: author.bio,
    url: `https://weldcert.io/blog/authors/${author.slug}`,
    worksFor: {
      "@type": "Organization",
      name: "WeldCert",
      url: "https://weldcert.io",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://weldcert.io" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://weldcert.io/blog" },
      { "@type": "ListItem", position: 3, name: "Authors", item: "https://weldcert.io/blog/authors" },
      { "@type": "ListItem", position: 4, name: author.name, item: `https://weldcert.io/blog/authors/${author.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Header />
      <main id="main-content">
        <section className="bg-gradient-to-br from-navy via-navy-light to-navy py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-2 text-white">{author.name}</h1>
            <p className="text-lg text-orange-600 font-medium mb-6">{author.role}</p>
            <p className="text-gray-300 leading-relaxed max-w-2xl">{author.bio}</p>
            <div className="flex flex-wrap gap-2 mt-6">
              {author.expertise.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-white/10 text-gray-300 px-2.5 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-gray-900">
              Articles by {author.name} ({posts.length})
            </h2>
            <div className="space-y-6">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="border border-gray-100 rounded-xl p-6 hover:border-orange-600/30 hover:shadow-md transition-all"
                >
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium text-brand bg-brand-light px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-lg font-bold hover:text-orange-600 transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
