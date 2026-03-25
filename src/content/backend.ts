export const content = `
# Backend (Express)

The Yosemite Crew backend is an **Express.js 4** REST API running on **Node.js 22** with ESM modules. It handles all business logic, data persistence, authentication, and third-party integrations.

## Getting Started

\`\`\`bash
# From the monorepo root
pnpm run dev --filter api
\`\`\`

## Tech Stack

- **Express 4.21** — HTTP framework
- **PostgreSQL** — Primary database (via Prisma ORM)
- **MongoDB 8.12** — Legacy database (migration in progress, via Mongoose)
- **Redis / BullMQ 5.65** — Job queue and caching
- **Socket.io 4.8** — Real-time WebSocket events
- **Stripe 20.0** — Payment processing
- **Stream Chat** — Real-time messaging
- **AWS S3** — File storage with CloudFront CDN
- **AWS Cognito** — Authentication
- **AWS SES** — Transactional emails
- **Winston 3.17** — Structured logging
- **Zod 3.24** — Runtime validation
- **Jest 29.7** — Testing

## Project Structure

\`\`\`
apps/backend/src/
├── routers/           # 37 Express route handlers
├── controllers/       # Business logic
├── services/          # Service layer
├── models/            # Mongoose schemas (legacy)
├── prisma/            # Prisma schema and migrations (PostgreSQL)
├── middleware/         # Auth, RBAC, validation
│   ├── authorizeCognito.ts      # PMS web auth
│   ├── authorizeCognitoMobile.ts # Mobile app auth
│   ├── withOrgPermissions.ts    # Org-level permissions
│   └── requirePermission.ts    # RBAC checks
├── jobs/              # BullMQ background jobs
├── utils/             # Helper functions
└── config/            # App configuration
\`\`\`

## Authentication

The backend uses **AWS Cognito** for authentication with two middleware:

- \`authorizeCognito\` — Validates tokens from the web PMS
- \`authorizeCognitoMobile\` — Validates tokens from the mobile app

## RBAC (Role-Based Access Control)

Many endpoints use RBAC middleware:

\`\`\`
authorizeCognito → withOrgPermissions → requirePermission
\`\`\`

This chain validates the user's identity, loads their organization permissions, and checks for the required permission level.

## Database Architecture

The backend is actively migrating from MongoDB to PostgreSQL. During the transition, a **read-switch** pattern allows services to read from either database based on the \`READ_FROM_POSTGRES\` environment variable:

\`\`\`typescript
// config/read-switch.ts
export const isReadFromPostgres = (): boolean =>
  process.env.READ_FROM_POSTGRES === "true";
\`\`\`

- **PostgreSQL (Prisma)** — New primary database. All new features (IDEXX integration, lab orders, Merck integration) are Postgres-only.
- **MongoDB (Mongoose)** — Legacy database. Existing services conditionally read from MongoDB when \`READ_FROM_POSTGRES\` is not enabled.
- **Dual-write** — Write operations target both databases during the migration period to ensure data consistency.

## Third-Party Integrations

### IDEXX Integration
Full integration with IDEXX veterinary laboratory services including device management, census operations, lab order creation, and result retrieval. See the [API Index](/docs/api-index) for endpoint details.

### Merck Vet Manual
Integration with Merck Veterinary Manual for clinical reference searches. Supports timezone-aware API routing (US/Canada vs. global endpoints) and automatic HTML filtering for clean results.

## Animal Health Custom FHIR

The backend models animal health workflows using FHIR resources plus custom code systems and extensions.

### Core Mappings (Domain → FHIR)

| Domain Model | FHIR Resource | Location |
|-------------|---------------|----------|
| Users/Profiles | \`Practitioner\` | \`packages/types/src/user.ts\` |
| Organizations | \`Organization\` | \`packages/types/src/organization.ts\` |
| Org Rooms | \`Location\` | \`packages/types/src/organisationRoom.ts\` |
| Services | \`HealthcareService\` | \`packages/types/src/service.ts\` |
| User-Org Roles | \`PractitionerRole\` | \`packages/types/src/userOrganization.ts\` |
| Pets (Companions) | \`Patient\` | \`packages/types/src/companion.ts\` |
| Pet Owners (Parents) | \`RelatedPerson\` | \`packages/types/src/parent.ts\` |
| Appointments | \`Appointment\` | \`packages/types/src/appointment.ts\` |
| Invoices | \`Invoice\` | \`packages/types/src/invoice.ts\` |
| Forms | \`Questionnaire\` | \`packages/types/src/form.ts\` |
| Form Submissions | \`QuestionnaireResponse\` | \`packages/types/src/form.ts\` |

### DTO Layer

Each DTO file in \`packages/types/src/dto\` provides:
- A request/response type alias (FHIR resource shape)
- A \`from*RequestDTO\` function for validation and conversion
- A \`to*ResponseDTO\` function for response formatting

## API Documentation

The API has **37 routers** covering all platform functionality. See the [API Index](/docs/api-index) for the complete list, or jump to specific APIs:

- [Appointment API](/docs/api-appointment) — Scheduling and management
- [Chat API](/docs/api-chat) — Real-time messaging
- [Companion API](/docs/api-companion) — Pet management
- [Inventory API](/docs/api-inventory) — Stock and supplies
- [Invoice API](/docs/api-invoice) — Billing and payments
- [Organization API](/docs/api-organization) — Clinic management

## Scripts

\`\`\`bash
pnpm run dev          # Start development server
pnpm run build        # Production build
pnpm run test         # Run Jest tests
pnpm run lint         # Run ESLint
\`\`\`
`;
