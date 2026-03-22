import Link from "next/link";
import { getAuthorBySlug } from "@/lib/authors";

export function AuthorByline({ slug }: { slug: string }) {
  const author = getAuthorBySlug(slug);
  if (!author) return null;

  return (
    <p className="text-sm text-gray-300">
      By{" "}
      <Link
        href={`/blog/authors/${author.slug}`}
        className="text-orange-600 hover:text-orange-500 transition-colors"
      >
        {author.name}
      </Link>
      , {author.role}
    </p>
  );
}
