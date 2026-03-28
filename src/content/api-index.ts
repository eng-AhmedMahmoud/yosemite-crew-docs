export const content = `
# Backend API Index

API docs are split by router. Base paths reflect the registration in \`apps/backend/src/routers/index.ts\`.

## Core APIs

| Router | Base Path | Description | Endpoints |
|--------|-----------|-------------|-----------|
| [Appointment](/docs/api-appointment) | \`/fhir/v1/appointment\` | Scheduling, rescheduling, cancellation, check-in | 18 |
| [Chat](/docs/api-chat) | \`/v1/chat\` | Token generation, channels, sessions | 18 |
| [Companion](/docs/api-companion) | \`/fhir/v1/companion\` | Pet profiles, creation, updates, search | 7 |
| [Document](/docs/api-document) | \`/v1/document\` | File upload, creation, retrieval | 20 |
| [Form](/docs/api-form) | \`/fhir/v1/form\` | Digital forms, submissions, SOAP notes | 17 |
| [Inventory](/docs/api-inventory) | \`/v1/inventory\` | Items, batches, stock, vendors, alerts | 33 |
| [Invoice](/docs/api-invoice) | \`/fhir/v1/invoice\` | Billing, payment intents, checkout, collection methods | 11 |
| [Organization](/docs/api-organization) | \`/fhir/v1/organization\` | Clinic management, search, invites | 10 |
| [Task](/docs/api-task) | \`/v1/task\` | Task management, templates, library | 16 |
| [User](/docs/api-user) | \`/fhir/v1/user\` | User retrieval and name updates | 2 |

## Supporting APIs

| Router | Base Path | Description | Endpoints |
|--------|-----------|-------------|-----------|
| [Notification](/docs/api-notification) | \`/v1/notification\` | Push notification listing and status | 2 |
| [Stripe](/docs/api-stripe) | \`/v1/stripe\` | Payment processing, connected accounts | 11 |
| Account Withdrawal | \`/v1/account-withdrawal\` | User account deletion requests | 1 |
| Adverse Event | \`/v1/adverse-event\` | Adverse event reporting | 4 |
| Audit Trail | \`/v1/audit-trail\` | Activity logging per companion/appointment | 2 |
| Auth User Mobile | \`/v1/authUser\` | Mobile user signup | 1 |
| Availability | \`/fhir/v1/availability\` | Schedule management, occupancy | 10 |
| Base Availability | — (file exists, not registered) | Default availability templates | 2 |
| Code | \`/v1/codes\` | FHIR code system entries and mappings | 2 |
| Companion Organisation | \`/v1/companion-organisation\` | Link pets to clinics | 9 |
| Contact Us | \`/v1/contact-us\` | Support request management | 3 |
| Co-Parent Invite | \`/v1/coparent-invite\` | Pet co-ownership invitations | 4 |
| Dashboard | \`/v1/dashboard\` | Analytics and reporting | 7 |
| Device Token | \`/v1/device-token\` | Push notification token management | 2 |
| Documenso | \`/v1/documenso\` | Digital document signing | 2 |
| Expense | \`/v1/expense\` | Pet expense tracking | 5 |
| Mobile Config | \`/v1/mobile-config\` | Mobile app configuration | — |
| Observation Tool | \`/v1/observation-tools\` | Clinical observation tools | 18 |
| Organisation Document | \`/v1/organisation-document\` | Clinic document management | 8 |
| Organisation Invite | \`/fhir/v1/organisation-invites\` | Staff invitation workflow | 3 |
| Organisation Room | \`/fhir/v1/organisation-room\` | Exam room management | 4 |
| Organisation Rating | \`/v1/organisation-rating\` | Clinic ratings from pet owners | 2 |
| Parent | \`/fhir/v1/parent\` | Pet owner profiles | 7 |
| Parent Companion | \`/v1/parent-companion\` | Parent-pet relationship management | 5 |
| Service | \`/fhir/v1/service\` | Veterinary services and slots | 4 |
| Speciality | \`/fhir/v1/speciality\` | Veterinary specialties | 4 |
| User Organization | \`/fhir/v1/user-organization\` | User-org role mappings | 4 |
| User Profile | \`/fhir/v1/user-profile\` | Profile management and pictures | 5 |

## Integration APIs

| Router | Base Path | Description | Endpoints |
|--------|-----------|-------------|-----------|
| Integration | \`/v1/integration\` | Third-party integration management (IDEXX, Merck) | 6 |
| Lab Orders + Census | \`/v1/labs\` | IDEXX lab orders, provider tests, and census operations | 17 |
| Lab Results | \`/v1/labs\` | Lab result retrieval and PDF downloads | 5 |
| Knowledge (Merck) | \`/v1/knowledge\` | Merck Vet Manual search with timezone routing | 1 |

## Authentication Patterns

All authenticated endpoints use one of two middleware:

- **\`authorizeCognito\`** — For PMS (web) requests
- **\`authorizeCognitoMobile\`** — For mobile app requests

Many endpoints additionally use RBAC:

\`\`\`
authorizeCognito → withOrgPermissions → requirePermission
\`\`\`
`;
