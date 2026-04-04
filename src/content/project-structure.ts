export const content = `
# Project Structure

Yosemite Crew is organized as a **Turborepo monorepo** using **pnpm workspaces**. This structure allows shared code, consistent tooling, and efficient builds across all applications.

## Top-Level Directory Layout

\`\`\`
Yosemite-Crew/
├── apps/
│   ├── frontend/          # Next.js 15 web application (PMS)
│   ├── backend/           # Express.js REST API server
│   ├── mobileAppYC/       # React Native mobile app
│   └── dev-docs/          # Docusaurus documentation (internal)
├── packages/
│   ├── types/             # Shared TypeScript types & FHIR mappings
│   │   └── src/
│   │       ├── dto/       # Data Transfer Objects for API contracts
│   │       ├── user.ts    # User/Practitioner types
│   │       ├── companion.ts  # Pet/Patient types
│   │       ├── appointment.ts
│   │       ├── organization.ts
│   │       ├── invoice.ts
│   │       ├── form.ts
│   │       └── ...
│   └── fhirtypes/         # FHIR type definitions
├── docs/                  # Engineering documentation
│   ├── engineering-standards.md
│   └── guide/             # Setup and implementation guides
├── turbo.json             # Turborepo build configuration
├── pnpm-workspace.yaml    # Workspace configuration
├── commitlint.config.cjs  # Conventional commit enforcement
├── lint-staged.config.cjs # Pre-commit lint and format hooks
├── .prettierrc.json       # Code formatting rules
├── CONTRIBUTING.md
└── README.md
\`\`\`

## Applications

### Frontend (\`apps/frontend\`)

The web-based Practice Management System built with:
- **Next.js 15.5** with App Router
- **React 19** for UI rendering
- **Tailwind CSS 4** for styling
- **Zustand** for state management
- **React Bootstrap** for component primitives
- **Stream Chat React** for real-time messaging
- **Recharts** for data visualization
- **Stripe** for payment processing
- **Amazon Cognito** for authentication

Key directories:
\`\`\`
apps/frontend/src/
├── app/                   # Next.js App Router pages
├── components/
│   └── ui/
│       ├── cards/         # Card components
│       ├── inputs/        # Form inputs
│       ├── tables/        # Data tables
│       ├── overlays/      # Modals, toasts, loaders
│       ├── layout/        # Sidebar, header, shells
│       ├── filters/       # Filter components
│       ├── widgets/       # Feature-specific components
│       └── primitives/    # Base UI elements
├── stores/                # Zustand state stores
├── hooks/                 # Custom React hooks
├── lib/                   # Utilities and helpers
└── styles/                # Global styles and themes
\`\`\`

### Backend (\`apps/backend\`)

The REST API server built with:
- **Express 4** on Node.js 22 (ESM)
- **MongoDB** via Mongoose for data storage
- **Redis** via BullMQ for job queues and caching
- **Socket.io** for real-time events
- **AWS SDK** (S3, Cognito, SES, Pinpoint)
- **Stripe** for payment processing
- **Stream Chat** server SDK
- **Winston** for structured logging
- **Jest** for testing

Key directories:
\`\`\`
apps/backend/src/
├── routers/               # Express route handlers (41 routers)
├── controllers/           # Business logic controllers
├── services/              # Service layer
├── models/                # Mongoose models
├── middleware/             # Auth, RBAC, validation
├── jobs/                  # BullMQ job processors
├── utils/                 # Helper functions
└── config/                # App configuration
\`\`\`

### Mobile App (\`apps/mobileAppYC\`)

The pet owner mobile app built with:
- **React Native 0.81** with TypeScript
- **React Navigation 7** for routing
- **Redux Toolkit** for state management
- **Firebase** (Auth, Messaging, Crashlytics)
- **Stream Chat React Native** for messaging
- **AWS Amplify** for cloud services
- **Stripe React Native** for payments
- **React Native Reanimated** for animations

## Shared Packages

### \`packages/types\`

Central type definitions shared across all apps. Contains:
- Domain model types (User, Companion, Appointment, etc.)
- FHIR resource mappings with \`toFHIR*\` / \`fromFHIR*\` helpers
- DTO wrappers for API request/response validation
- Custom FHIR extensions for animal health

### \`packages/fhirtypes\`

FHIR type definitions adapted for veterinary/animal health use cases. The \`packages/fhir\` package was removed in favour of Postgres-native implementations; only \`fhirtypes\` remains for shared type definitions.

## Build System

### Turborepo

The monorepo uses Turborepo for orchestrating builds:

\`\`\`bash
# Build all apps
pnpm run build

# Build specific app
pnpm run build --filter frontend

# Dev mode for all
pnpm run dev

# Run tests
pnpm run test

# Lint all
pnpm run lint
\`\`\`

### Workspace Dependencies

Apps reference shared packages using workspace protocol:

\`\`\`json
{
  "@yosemite-crew/types": "workspace:^",
  "@yosemite-crew/fhirtypes": "workspace:^"
}
\`\`\`

## CI/CD

- **GitHub Actions** for continuous integration
- **SonarCloud** for code quality analysis (with Prisma client generation for backend coverage)
- **CodeQL** for security scanning
- **PR Governance** workflow — validates semantic PR titles and conventional commit messages on every PR
- **Commitlint** enforces conventional commit format with scoped types
- **lint-staged** runs ESLint, Prettier, and Secretlint on staged files pre-commit
- PRs target the \`dev\` branch and are merged to \`main\` for releases

## Design System

The frontend uses a consistent design system with:
- **Satoshi** as the primary font (body and headings)
- **Clash Grotesk** as the accent font
- **Brand blue** (#247aed) as the primary action color
- **Neutral palette** from #1d1c1b to #ffffff
- **Semantic colors** for success, warning, and danger states
- **Elevation system** with 3 shadow levels
- **16px border radius** as the default rounded corner
`;
