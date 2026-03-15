import { notFound } from "next/navigation";
import { getAllSlugs, getPageTitle, getAdjacentPages } from "@/lib/docs";
import { getContent } from "@/content";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import Link from "next/link";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  // We need to handle this synchronously for static generation
  return {
    title: "Yosemite Crew Docs",
  };
}

export default async function DocPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = getContent(slug);

  if (!content) {
    notFound();
  }

  const { prev, next } = getAdjacentPages(slug);

  return (
    <div className="max-w-4xl mx-auto px-6 md:px-10 py-10 md:py-14">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-[0.8rem] text-neutral-500 mb-6">
        <Link
          href="/docs/overview"
          className="hover:text-brand-950 transition-colors"
        >
          Docs
        </Link>
        <span>/</span>
        <span className="text-neutral-900 font-medium">
          {getPageTitle(slug)}
        </span>
      </div>

      {/* Content */}
      <MarkdownRenderer content={content} />

      {/* Navigation */}
      <div className="flex justify-between items-center mt-16 pt-6 border-t border-neutral-100">
        {prev ? (
          <Link
            href={`/docs/${prev.slug}`}
            className="group flex items-center gap-2 text-[0.875rem] text-neutral-600 hover:text-brand-950 transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:-translate-x-0.5"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            {prev.title}
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            href={`/docs/${next.slug}`}
            className="group flex items-center gap-2 text-[0.875rem] text-neutral-600 hover:text-brand-950 transition-colors"
          >
            {next.title}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:translate-x-0.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
