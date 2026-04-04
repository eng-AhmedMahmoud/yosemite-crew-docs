export interface DocPage {
  slug: string;
  title: string;
  category: string;
  content: string;
}

export interface NavSection {
  title: string;
  items: { slug: string; title: string }[];
}

export const navigation: NavSection[] = [
  {
    title: "Getting Started",
    items: [
      { slug: "overview", title: "Overview" },
      { slug: "installation", title: "Installation" },
      { slug: "project-structure", title: "Project Structure" },
      { slug: "tech-stack", title: "Tech Stack" },
    ],
  },
  {
    title: "Apps",
    items: [
      { slug: "frontend", title: "Frontend (Next.js)" },
      { slug: "backend", title: "Backend (Express)" },
      { slug: "mobile-app", title: "Mobile App (React Native)" },
    ],
  },
  {
    title: "Backend API Reference",
    items: [
      { slug: "api-index", title: "API Index" },
      { slug: "api-appointment", title: "Appointment API" },
      { slug: "api-chat", title: "Chat API" },
      { slug: "api-companion", title: "Companion API" },
      { slug: "api-document", title: "Document API" },
      { slug: "api-form", title: "Form API" },
      { slug: "api-inventory", title: "Inventory API" },
      { slug: "api-invoice", title: "Invoice API" },
      { slug: "api-notification", title: "Notification API" },
      { slug: "api-organization", title: "Organization API" },
      { slug: "api-stripe", title: "Stripe API" },
      { slug: "api-task", title: "Task API" },
      { slug: "api-user", title: "User API" },
      { slug: "api-other", title: "Other APIs" },
    ],
  },
  {
    title: "Guides",
    items: [
      { slug: "backend-chat-implementation", title: "Chat Implementation" },
      { slug: "notification-setup", title: "Notification Setup" },
      { slug: "liquid-glass", title: "Liquid Glass (iOS)" },
      { slug: "fhir-architecture", title: "FHIR Architecture" },
    ],
  },
  {
    title: "Policies",
    items: [
      { slug: "engineering-standards", title: "Engineering Standards" },
      { slug: "contributing", title: "Contributing" },
      { slug: "code-of-conduct", title: "Code of Conduct" },
      { slug: "security", title: "Security" },
    ],
  },
];

export function getAllSlugs(): string[] {
  return navigation.flatMap((section) => section.items.map((item) => item.slug));
}

export function getPageTitle(slug: string): string {
  for (const section of navigation) {
    for (const item of section.items) {
      if (item.slug === slug) return item.title;
    }
  }
  return slug;
}

export function getAdjacentPages(slug: string): {
  prev: { slug: string; title: string } | null;
  next: { slug: string; title: string } | null;
} {
  const allItems = navigation.flatMap((section) => section.items);
  const index = allItems.findIndex((item) => item.slug === slug);
  return {
    prev: index > 0 ? allItems[index - 1] : null,
    next: index < allItems.length - 1 ? allItems[index + 1] : null,
  };
}
