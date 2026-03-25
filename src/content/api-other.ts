export const content = `
# Other APIs

Summary of additional APIs not covered in individual documentation pages. Each API follows the same authentication and RBAC patterns used throughout the platform.

---

## Account Withdrawal
Handles user account deletion and data withdrawal requests.
- **Endpoints:** 2
- **Auth:** \`authorizeCognitoMobile\`

## Adverse Event
Tracks and manages adverse events and reactions for companions.
- **Endpoints:** 4
- **Auth:** \`authorizeCognito\` + RBAC

## Audit Trail
Provides audit logging and trail retrieval for organisation-level actions.
- **Endpoints:** 3
- **Auth:** \`authorizeCognito\` + RBAC

## Auth User Mobile
Manages mobile user authentication flows including signup, login, and token refresh.
- **Endpoints:** 5
- **Auth:** Mixed (public + \`authorizeCognitoMobile\`)

## Availability
Manages practitioner availability slots for appointment scheduling.
- **Endpoints:** 6
- **Auth:** \`authorizeCognito\` + RBAC

## Base Availability
Manages recurring base availability templates for practitioners.
- **Endpoints:** 4
- **Auth:** \`authorizeCognito\` + RBAC

## Companion Organisation
Links companions (pets) to organisations and manages the relationship.
- **Endpoints:** 5
- **Auth:** \`authorizeCognito\` + RBAC

## Contact Us
Handles contact form submissions from the public website.
- **Endpoints:** 1
- **Auth:** None (public)

## Co-Parent Invite
Manages co-parent invitation flows for shared companion ownership.
- **Endpoints:** 4
- **Auth:** \`authorizeCognitoMobile\`

## Dashboard
Provides aggregated dashboard data for PMS users including metrics and statistics. Supports both PostgreSQL and MongoDB backends via the read-switch pattern.
- **Endpoints:** 3
- **Auth:** \`authorizeCognito\` + RBAC

## Device Token
Manages device tokens for push notification delivery.
- **Endpoints:** 2
- **Auth:** \`authorizeCognitoMobile\`

## Documenso
Integrates with Documenso for electronic document signing workflows.
- **Endpoints:** 3
- **Auth:** \`authorizeCognito\` + RBAC

## Expense
Manages practice expenses and financial tracking.
- **Endpoints:** 5
- **Auth:** \`authorizeCognito\` + RBAC

## Mobile Config
Provides runtime configuration values for the mobile app.
- **Endpoints:** 1
- **Auth:** \`authorizeCognitoMobile\`

## Observation Tool
Records and retrieves clinical observations for companions during visits.
- **Endpoints:** 4
- **Auth:** \`authorizeCognito\` + RBAC

## Organisation Document
Manages organisation-level document templates and files.
- **Endpoints:** 5
- **Auth:** \`authorizeCognito\` + RBAC

## Organisation Invite
Handles team member invitation acceptance and management.
- **Endpoints:** 4
- **Auth:** \`authorizeCognito\`

## Organisation Room
Manages rooms and physical spaces within an organisation's facility.
- **Endpoints:** 5
- **Auth:** \`authorizeCognito\` + RBAC

## Organisation Rating
Manages ratings and reviews for organisations from pet parents.
- **Endpoints:** 3
- **Auth:** \`authorizeCognitoMobile\`

## Parent
Manages parent (pet owner) profiles and account information.
- **Endpoints:** 4
- **Auth:** \`authorizeCognitoMobile\`

## Parent Companion
Manages the relationship between parents and their companions (pets).
- **Endpoints:** 6
- **Auth:** \`authorizeCognitoMobile\`

## Service
Manages veterinary services offered by organisations.
- **Endpoints:** 6
- **Auth:** \`authorizeCognito\` + RBAC

## Speciality
Manages veterinary specialities and their associations.
- **Endpoints:** 4
- **Auth:** \`authorizeCognito\` + RBAC

## User Organization
Manages the relationship between users and their organisations, including roles and permissions.
- **Endpoints:** 5
- **Auth:** \`authorizeCognito\` + RBAC

## Integration Management
Manages third-party integration accounts (IDEXX, Merck) for organisations, including credential storage, validation, and enable/disable flows.
- **Endpoints:** 6
- **Auth:** \`authorizeCognito\` + RBAC
- **Key routes:**
  - \`GET /integrations/:organisationId\` — List all integrations
  - \`GET /integrations/:organisationId/:provider\` — Get integration details
  - \`POST /integrations/:organisationId/:provider/validate\` — Validate credentials
  - \`POST /integrations/:organisationId/:provider/enable\` — Enable integration
  - \`POST /integrations/:organisationId/:provider/disable\` — Disable integration
  - \`PATCH /integrations/:organisationId/:provider\` — Update credentials

## Lab Orders (IDEXX)
Manages IDEXX laboratory test orders including creation, updates, cancellation, and provider test catalog lookups.
- **Endpoints:** 6
- **Auth:** \`authorizeCognito\` + RBAC
- **Key routes:**
  - \`POST /lab-orders/list/:provider/:organisationId\` — List orders (filter by appointment, companion, status)
  - \`POST /lab-orders/provider-tests/:provider/:organisationId\` — Search provider test catalog
  - \`POST /lab-orders/create/:provider/:organisationId\` — Create lab order
  - \`GET /lab-orders/:provider/:organisationId/:orderId\` — Get order details
  - \`PATCH /lab-orders/:provider/:organisationId/:orderId\` — Update order
  - \`DELETE /lab-orders/:provider/:organisationId/:orderId\` — Cancel order

## Lab Census (IDEXX)
Manages IDEXX In-Clinic (IVLS) device census for patient identification and sample tracking.
- **Endpoints:** 4
- **Auth:** \`authorizeCognito\` + RBAC
- **Key routes:**
  - \`GET /lab-census/list-ivls-devices/:provider/:organisationId\` — List IVLS devices
  - \`GET /lab-census/list-census/:provider/:organisationId\` — List census entries
  - \`POST /lab-census/add-census-patient/:provider/:organisationId\` — Add patient to census
  - \`POST /lab-census/census-patient/:provider/:organisationId\` — Get patient from census

## Lab Results (IDEXX)
Retrieves lab test results and downloadable reports from IDEXX.
- **Endpoints:** 5
- **Auth:** \`authorizeCognito\` + RBAC
- **Key routes:**
  - \`GET /lab-results/list/:provider/:organisationId\` — List results (filter by order, companion)
  - \`GET /lab-results/get/:provider/:resultId\` — Get result details
  - \`GET /lab-results/pdf/:provider/:resultId\` — Download result PDF
  - \`GET /lab-results/notifications-pdf/:provider/:resultId\` — Download notifications PDF
  - \`GET /lab-results/search/:provider\` — Search results

## Merck Vet Manual
Provides clinical reference search via the Merck Veterinary Manual API with timezone-aware endpoint routing (US/Canada vs. global) and automatic HTML response filtering.
- **Endpoints:** 1
- **Auth:** \`authorizeCognito\`
- **Key routes:**
  - \`GET /merck/search/:organisationId\` — Search manuals (params: q, audience, language, media, timezone, code, codeSystem)

## User Profile
Manages detailed user profile information beyond basic account data.
- **Endpoints:** 4
- **Auth:** \`authorizeCognito\`
`;
