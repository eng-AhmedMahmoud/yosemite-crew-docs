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
- **Note:** Router file exists (\`base-availability.router.ts\`) but is not currently registered in \`routers/index.ts\`.

## Code
Provides FHIR code system entries and value-set mappings used across the platform (e.g. species, breeds, observation codes).
- **Base path:** \`/v1/codes\`
- **Endpoints:** 2
- **Auth:** \`authorizeCognito\`
- **Key routes:**
  - \`GET /v1/codes/entries\` — List code system entries
  - \`GET /v1/codes/mappings\` — List value-set mappings

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
- **Base path:** \`/v1/dashboard\`
- **Endpoints:** 7
- **Auth:** \`authorizeCognito\` + RBAC (\`analytics:view:any\`)
- **Key routes:**
  - \`GET /v1/dashboard/summary/:organisationId\` — Aggregated summary metrics
  - \`GET /v1/dashboard/appointments/:organisationId/trend\` — Appointment trend data
  - \`GET /v1/dashboard/revenue/:organisationId/trend\` — Revenue trend data
  - \`GET /v1/dashboard/appointment-leaders/:organisationId\` — Top practitioners by appointments
  - \`GET /v1/dashboard/revenue-leaders/:organisationId\` — Top practitioners by revenue
  - \`GET /v1/dashboard/inventory/:organisationId/turnover\` — Inventory turnover metrics
  - \`GET /v1/dashboard/inventory/:organisationId/products\` — Product-level turnover

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
- **Base path:** \`/v1/integration\`
- **Endpoints:** 6
- **Auth:** \`authorizeCognito\` + RBAC
- **Key routes:**
  - \`GET /v1/integration/:organisationId\` — List all integrations
  - \`GET /v1/integration/:organisationId/:provider\` — Get integration details
  - \`POST /v1/integration/:organisationId/:provider/validate\` — Validate credentials
  - \`POST /v1/integration/:organisationId/:provider/enable\` — Enable integration
  - \`POST /v1/integration/:organisationId/:provider/disable\` — Disable integration
  - \`PATCH /v1/integration/:organisationId/:provider\` — Update credentials

## Lab Orders (IDEXX)
Manages IDEXX laboratory test orders including creation, updates, cancellation, and provider test catalog lookups. Both lab orders and lab census share the \`/v1/labs\` base path via \`lab-order.router.ts\`.
- **Base path:** \`/v1/labs\`
- **Endpoints:** 8 (order-specific)
- **Auth:** \`authorizeCognito\` + RBAC (\`labs:view:any\` / \`labs:edit:any\`)
- **Key routes:**
  - \`GET /v1/labs/pms/organisation/:organisationId/:provider/orders\` — List orders
  - \`POST /v1/labs/pms/organisation/:organisationId/:provider/orders\` — List orders (POST) / Create order
  - \`GET /v1/labs/pms/organisation/:organisationId/:provider/tests\` — Search provider test catalog
  - \`POST /v1/labs/pms/organisation/:organisationId/:provider/tests\` — Search provider test catalog (POST)
  - \`GET /v1/labs/pms/organisation/:organisationId/:provider/orders/:idexxOrderId\` — Get order details
  - \`PUT /v1/labs/pms/organisation/:organisationId/:provider/orders/:idexxOrderId\` — Update order
  - \`DELETE /v1/labs/pms/organisation/:organisationId/:provider/orders/:idexxOrderId\` — Cancel order

## Lab Census (IDEXX)
Manages IDEXX In-Clinic (IVLS) device census for patient identification and sample tracking. Registered in the same \`lab-order.router.ts\` under the \`/v1/labs\` base path.
- **Base path:** \`/v1/labs\`
- **Endpoints:** 9
- **Auth:** \`authorizeCognito\` + RBAC (\`labs:view:any\` / \`labs:edit:any\`)
- **Key routes:**
  - \`GET /v1/labs/pms/organisation/:organisationId/:provider/ivls/devices\` — List IVLS devices
  - \`GET /v1/labs/pms/organisation/:organisationId/:provider/census\` — List census entries
  - \`POST /v1/labs/pms/organisation/:organisationId/:provider/census\` — Add patient to census
  - \`DELETE /v1/labs/pms/organisation/:organisationId/:provider/census\` — Delete all census entries
  - \`GET /v1/labs/pms/organisation/:organisationId/:provider/census/:censusId\` — Get census by ID
  - \`DELETE /v1/labs/pms/organisation/:organisationId/:provider/census/:censusId\` — Delete census by ID
  - \`GET /v1/labs/pms/organisation/:organisationId/:provider/census/patient/:patientId\` — Get patient from census
  - \`POST /v1/labs/pms/organisation/:organisationId/:provider/census/patient\` — Get patient from census (POST)
  - \`DELETE /v1/labs/pms/organisation/:organisationId/:provider/census/patient/:patientId\` — Remove patient from census

## Lab Results (IDEXX)
Retrieves lab test results and downloadable reports from IDEXX.
- **Base path:** \`/v1/labs\`
- **Endpoints:** 5
- **Auth:** \`authorizeCognito\` + RBAC (\`labs:view:any\`)
- **Key routes:**
  - \`GET /v1/labs/pms/organisation/:organisationId/:provider/results\` — List results
  - \`GET /v1/labs/pms/organisation/:organisationId/:provider/results/search\` — Search results
  - \`GET /v1/labs/pms/organisation/:organisationId/:provider/results/:resultId\` — Get result details
  - \`GET /v1/labs/pms/organisation/:organisationId/:provider/results/:resultId/pdf\` — Download result PDF
  - \`GET /v1/labs/pms/organisation/:organisationId/:provider/results/:resultId/notifications/pdf\` — Download notifications PDF

## Knowledge / Merck Vet Manual
Provides clinical reference search via the Merck Veterinary Manual API with timezone-aware endpoint routing (US/Canada vs. global) and automatic HTML response filtering. Rate-limited to 120 requests per 15 minutes per org:user pair.
- **Base path:** \`/v1/knowledge\`
- **Endpoints:** 1
- **Auth:** \`authorizeCognito\` + RBAC (\`integrations:view:any\`)
- **Key routes:**
  - \`GET /v1/knowledge/pms/organisation/:organisationId/merck/manuals/search\` — Search manuals (params: q, audience, language, media, timezone, code, codeSystem)

## User Profile
Manages detailed user profile information beyond basic account data.
- **Endpoints:** 4
- **Auth:** \`authorizeCognito\`
`;
