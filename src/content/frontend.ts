export const content = `
# Frontend (Next.js)

The Yosemite Crew web frontend is a **Next.js 15** application that serves as the Practice Management System (PMS) for veterinary clinics and pet care providers.

## Getting Started

\`\`\`bash
# From the monorepo root
pnpm run dev --filter website
\`\`\`

The app runs on [http://localhost:3000](http://localhost:3000) by default.

## Tech Stack

- **Next.js 15.5.10** with App Router
- **React 19.1.1**
- **Tailwind CSS 4.1.17** for styling
- **Zustand 5.0.6** for state management
- **React Bootstrap 2.10.9** for UI components
- **Stream Chat React 13.11.0** for messaging
- **Recharts 2.15.1** for charts and analytics
- **Stripe** for payment processing
- **Amazon Cognito** for authentication

## Project Structure

\`\`\`
apps/frontend/
├── src/
│   ├── app/               # Next.js App Router pages
│   ├── components/
│   │   └── ui/
│   │       ├── cards/     # Card components (InviteCard, OrgCard, etc.)
│   │       ├── inputs/    # Form inputs and controls
│   │       ├── tables/    # GenericTable, DataTable, utilities
│   │       ├── overlays/  # Modal, Toast, Loader, OtpModal
│   │       ├── layout/    # Sidebar, Header, PublicShell
│   │       ├── filters/   # Filters, InventoryFilters
│   │       ├── widgets/   # Feature-specific components
│   │       └── primitives/ # Base UI elements
│   ├── stores/            # Zustand state stores
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utilities and helpers
│   └── styles/            # Global styles
├── public/
│   └── fonts/             # Satoshi and Clash Grotesk fonts
├── package.json
└── tsconfig.json
\`\`\`

## Design System

### Fonts
- **Satoshi** — Primary font for body text and headings (weights: 300-900)
- **Clash Grotesk** — Accent font for branding (weights: 400, 500, 700)

### Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| \`brand-950\` | \`#247aed\` | Primary blue (CTAs, links) |
| \`neutral-900\` | \`#302f2e\` | Primary text |
| \`neutral-700\` | \`#595958\` | Secondary text |
| \`neutral-100\` | \`#eaeaea\` | Borders, backgrounds |
| \`success-600\` | \`#008f5d\` | Success states |
| \`warning-600\` | \`#f68523\` | Warning states |
| \`danger-600\` | \`#ea3729\` | Error / danger states |

### Typography Scale

| Class | Size | Weight | Usage |
|-------|------|--------|-------|
| \`text-display-1\` | 48px | 500 | Large headings |
| \`text-display-2\` | 40px | 500 | Medium display |
| \`text-heading-1\` | 28px | 500 | Section titles |
| \`text-heading-2\` | 22px | 500 | Subsection titles |
| \`text-heading-3\` | 20px | 500 | Section headings |
| \`text-body-3\` | 18px | 400 | Regular body text |
| \`text-body-4\` | 16px | 400 | Small body text |
| \`text-caption-1\` | 14px | 400 | Captions |
| \`text-caption-2\` | 12px | 400 | Smallest text |

### Elevation

| Level | Shadow |
|-------|--------|
| \`elevation-0\` | None |
| \`elevation-1\` | \`0 0 8px rgba(0,0,0,0.2)\` |
| \`elevation-2\` | \`0 0 16px rgba(0,0,0,0.4)\` |

## Scripts

\`\`\`bash
pnpm run dev          # Start development server
pnpm run build        # Production build
pnpm run start        # Start production server
pnpm run lint         # Run ESLint
pnpm run type-check   # TypeScript type checking
pnpm run test         # Run Jest tests
\`\`\`

## Key Features

- **Dashboard** — Analytics with appointment trends, revenue, and inventory data
- **Appointment Management** — Schedule, reschedule, cancel, and check-in
- **Patient Records** — Companion (pet) profiles and medical history
- **Inventory Management** — Track items, batches, vendors, and stock levels
- **Billing & Invoicing** — Stripe-powered payment processing
- **Real-time Chat** — Stream Chat integration for vet-owner communication
- **Forms & Documents** — Digital forms, SOAP notes, and document management
- **Task Management** — Custom tasks with templates and library items
- **Multi-Organization** — Support for multiple clinic locations
- **RBAC** — Role-based access control for staff permissions
- **Finance** — Dedicated finance view linking invoices to appointments with filterable data tables and summary widgets
- **IDEXX Integration** — Lab order creation, test catalog browsing, result retrieval with PDF preview, IVLS census management
- **Merck Vet Manual** — Clinical reference search with multi-language support, embedded mode, and HL7 InfoButton integration
- **Trust Center** — Public compliance page displaying certifications, security pillars, sub-processors, and data processing details
- **Guides & Tutorials** — Video guide library with category filtering, search, and modal player
- **Contact Us** — Public contact form with query type selection, data access requests, and file upload support
- **Developer Portal** — Embedded Docusaurus developer documentation with Swagger/OpenAPI reference for backend APIs
- **Toast Notifications** — System-wide toast notification system (error, success, info, warning) via react-toastify
`;
