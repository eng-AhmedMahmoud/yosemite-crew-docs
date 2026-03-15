"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/lib/docs";

export default function Sidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const currentSlug = pathname.replace("/docs/", "").replace("/docs", "");

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed top-4 left-4 z-50 md:hidden bg-white border border-neutral-100 rounded-xl p-2.5 shadow-[0_0_8px_0_rgba(0,0,0,0.1)]"
        aria-label="Toggle navigation"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#302f2e"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {mobileOpen ? (
            <path d="M18 6L6 18M6 6l12 12" />
          ) : (
            <>
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </>
          )}
        </svg>
      </button>

      {/* Backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-screen w-72 bg-white border-r border-neutral-100 overflow-y-auto transition-transform duration-200 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:sticky md:top-0`}
      >
        {/* Logo */}
        <div className="px-6 py-5 border-b border-neutral-100">
          <Link href="/docs/overview" className="flex items-center gap-3">
            <img
              src="https://d2il6osz49gpup.cloudfront.net/YC.svg"
              alt="YC"
              width={32}
              height={32}
            />
            <div>
              <span className="font-[family-name:var(--font-grotesk)] font-bold text-neutral-900 text-[1.1rem]">
                Yosemite Crew
              </span>
              <span className="block text-[0.7rem] text-neutral-600 font-medium tracking-wide uppercase">
                Developer Docs
              </span>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="px-4 py-4">
          {navigation.map((section) => (
            <div key={section.title} className="mb-5">
              <h3 className="px-3 mb-1.5 text-[0.7rem] font-semibold uppercase tracking-wider text-neutral-500">
                {section.title}
              </h3>
              <ul>
                {section.items.map((item) => {
                  const isActive = currentSlug === item.slug;
                  return (
                    <li key={item.slug}>
                      <Link
                        href={`/docs/${item.slug}`}
                        onClick={() => setMobileOpen(false)}
                        className={`block px-3 py-1.5 rounded-lg text-[0.875rem] transition-colors ${
                          isActive
                            ? "bg-brand-100 text-brand-950 font-medium"
                            : "text-neutral-700 hover:bg-neutral-100/60 hover:text-neutral-900"
                        }`}
                      >
                        {item.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-neutral-100 mt-auto">
          <a
            href="https://github.com/YosemiteCrew/Yosemite-Crew"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[0.8rem] text-neutral-600 hover:text-brand-950 transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View on GitHub
          </a>
        </div>
      </aside>
    </>
  );
}
