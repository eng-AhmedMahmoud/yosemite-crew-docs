export const content = `
# Tech Stack

## Core Technologies

| Technology | Purpose | Version |
|-----------|---------|---------|
| TypeScript | Type safety across all apps | 5.x |
| Turborepo | Monorepo build orchestration | 2.5 |
| pnpm | Package management with workspaces | 10.30+ |

## Frontend (Web PMS)

| Technology | Purpose | Version |
|-----------|---------|---------|
| Next.js | React framework with App Router | 15.5.10 |
| React | UI library | 19.1.1 |
| Tailwind CSS | Utility-first CSS framework | 4.1.17 |
| Zustand | Lightweight state management | 5.0.6 |
| React Bootstrap | Component library | 2.10.9 |
| Recharts | Data visualization / charts | 2.15.1 |
| Stream Chat React | Real-time messaging UI | 13.11.0 |
| Stripe React | Payment UI components | 5.4.1 |
| Framer Motion | Animations | 12.18.1 |
| Amazon Cognito | Authentication | 6.3.15 |
| Axios | HTTP client | 1.13.x |
| React Hook Form | Form handling | — |
| React Icons | Icon library | 5.3.0 |
| Iconify | Additional icons | 6.0.0 |

## Backend (API Server)

| Technology | Purpose | Version |
|-----------|---------|---------|
| Express | HTTP framework | 4.21.2 |
| Node.js | Runtime (ESM modules) | 22 |
| PostgreSQL | Primary database (via Prisma ORM) | — |
| Prisma | Type-safe ORM for PostgreSQL | — |
| MongoDB | Legacy database (migration in progress) | 8.12.2 (driver) |
| Mongoose | ODM for MongoDB (legacy) | — |
| Redis / BullMQ | Job queue and caching | 5.65.1 |
| Socket.io | Real-time WebSocket events | 4.8.1 |
| Stripe | Payment processing | 20.0.0 |
| Stream Chat | Server-side chat SDK | — |
| AWS S3 | File storage | — |
| AWS SES | Transactional email | — |
| AWS Cognito | Authentication | — |
| AWS Pinpoint | Push notifications | — |
| Firebase Admin | Server-side push notifications | 13.6.0 |
| Google Auth Library | Google OAuth authentication | 10.2.0 |
| Express Rate Limit | API rate limiting middleware | 7.5.0 |
| Express Mongo Sanitize | NoSQL injection prevention | 2.2.0 |
| Playwright | Server-side browser automation | 1.57.0 |
| Winston | Structured logging | 3.17.0 |
| Zod | Runtime validation | 3.24.2 |
| Class Validator | DTO validation decorators | — |
| Class Transformer | DTO transformation and serialization | 0.5.1 |
| Multer | File upload middleware | 2.1.1 |
| fhir | FHIR resource library | 4.12.0 |
| Jest | Testing framework | 29.7.0 |

## Mobile App

| Technology | Purpose | Version |
|-----------|---------|---------|
| React Native | Cross-platform mobile | 0.81.4 |
| React | UI library | 19.1.0 |
| React Navigation | Screen navigation | 7.x |
| Redux Toolkit | State management | 2.6.1 |
| Firebase Messaging | Push notifications | 23.5.0 |
| Notifee | Local notification display | 9.1.8 |
| Stream Chat RN | Chat UI for mobile | 8.8.0 |
| AWS Amplify UI | Authentication UI | 2.6.2 |
| Stripe RN | Payment processing | 0.57.0 |
| React Hook Form | Form handling | 7.63.0 |
| React Native Reanimated | Animations | 4.1.0 |
| AsyncStorage | Persistent key-value storage | 2.1.2 |
| Liquid Glass | iOS 26 glass effects | 0.7.0 |
| Vector Icons | Icon library | 10.3.0 |
| Jest | Testing framework | 29.6.3 |

## Infrastructure & DevOps

| Service | Purpose |
|---------|---------|
| AWS S3 + CloudFront | Static asset storage and CDN |
| AWS Cognito | User authentication and authorization |
| AWS SES | Transactional email delivery |
| AWS Pinpoint | Push notification delivery |
| Stream Chat | Real-time messaging platform |
| Stripe | Payment processing and billing |
| GitHub Actions | CI/CD pipelines |
| SonarCloud | Code quality and coverage analysis |
| CodeQL | Security vulnerability scanning |
| IDEXX | Veterinary laboratory diagnostics integration |
| Merck Vet Manual | Clinical reference and search integration |
| Documenso | Digital document signing |
`;
