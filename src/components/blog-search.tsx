"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

export function BlogSearch({ posts }: { posts: Post[] }) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = useMemo(() => {
    const cats = Array.from(new Set(posts.map((p) => p.category)));
    cats.sort();
    return cats;
  }, [posts]);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return posts.filter((post) => {
      const matchesCategory = !activeCategory || post.category === activeCategory;
      const matchesQuery =
        !q ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [posts, query, activeCategory]);

  return (
    <>
      {/* Search + Filter */}
      <div className="mb-10 space-y-4">
        <div className="relative">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search articles..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full rounded-lg border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm text-gray-900 placeholder:text-gray-400 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20 transition-colors"
            aria-label="Search blog posts"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
              !activeCategory
                ? "bg-brand text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-brand text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="space-y-8">
        {filtered.length === 0 && (
          <p className="text-center text-gray-500 py-12">
            No articles found. Try a different search term or category.
          </p>
        )}
        {filtered.map((post) => (
          <article
            key={post.slug}
            className="border border-gray-100 rounded-xl p-6 hover:border-brand/30 hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-medium text-brand bg-brand-light px-2.5 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-xs text-gray-400">{post.date}</span>
              <span className="text-xs text-gray-400">{post.readTime}</span>
            </div>
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-xl font-bold mb-2 hover:text-brand transition-colors">
                {post.title}
              </h2>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="text-sm font-medium text-brand hover:text-brand-dark transition-colors"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>

      {/* Result count */}
      {(query || activeCategory) && filtered.length > 0 && (
        <p className="text-xs text-gray-400 mt-6 text-center">
          Showing {filtered.length} of {posts.length} articles
        </p>
      )}
    </>
  );
}
