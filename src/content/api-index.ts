export const content = `
# Backend API Index

API docs are split by router. Base paths reflect the registration in \`apps/backend/src/routers/index.ts\`.

## Core APIs

| Router | Description | Endpoints |
|--------|-------------|-----------|
| [Appointment](/docs/api-appointment) | Scheduling, rescheduling, cancellation, check-in | 18 |
| [Chat](/docs/api-chat) | Token generation, channels, sessions | 18 |
| [Companion](/docs/api-companion) | Pet profiles, creation, updates, search | 7 |
| [Document](/docs/api-document) | File upload, creation, retrieval | 20 |
| [Form](/docs/api-form) | Digital forms, submissions, SOAP notes | 17 |
| [Inventory](/docs/api-inventory) | Items, batches, stock, vendors, alerts | 33 |
| [Invoice](/docs/api-invoice) | Billing, payment intents, checkout | 10 |
| [Organization](/docs/api-organization) | Clinic management, search, invites | 10 |
| [Task](/docs/api-task) | Task management, templates, library | 16 |
| [User](/docs/api-user) | User retrieval and name updates | 2 |

## Supporting APIs

| Router | Description | Endpoints |
|--------|-------------|-----------|
| [Notification](/docs/api-notification) | Push notification listing and status | 2 |
| [Stripe](/docs/api-stripe) | Payment processing, connected accounts | 11 |
| Account Withdrawal | User account deletion requests | 1 |
| Adverse Event | Adverse event reporting | 4 |
| Audit Trail | Activity logging per companion/appointment | 2 |
| Auth User Mobile | Mobile user signup | 1 |
| Availability | Schedule management, occupancy | 10 |
| Base Availability | Default availability templates | 2 |
| Companion Organisation | Link pets to clinics | 9 |
| Contact Us | Support request management | 3 |
| Co-Parent Invite | Pet co-ownership invitations | 4 |
| Dashboard | Analytics and reporting | 8 |
| Device Token | Push notification token management | 2 |
| Documenso | Digital document signing | 2 |
| Expense | Pet expense tracking | 5 |
| Mobile Config | Mobile app configuration | — |
| Observation Tool | Clinical observation tools | 18 |
| Organisation Document | Clinic document management | 8 |
| Organisation Invite | Staff invitation workflow | 3 |
| Organisation Room | Exam room management | 4 |
| Organisation Rating | Clinic ratings from pet owners | 2 |
| Parent | Pet owner profiles | 7 |
| Parent Companion | Parent-pet relationship management | 5 |
| Service | Veterinary services and slots | 4 |
| Speciality | Veterinary specialties | 4 |
| User Organization | User-org role mappings | 4 |
| User Profile | Profile management and pictures | 5 |

## Authentication Patterns

All authenticated endpoints use one of two middleware:

- **\`authorizeCognito\`** — For PMS (web) requests
- **\`authorizeCognitoMobile\`** — For mobile app requests

Many endpoints additionally use RBAC:

\`\`\`
authorizeCognito → withOrgPermissions → requirePermission
\`\`\`
`;
