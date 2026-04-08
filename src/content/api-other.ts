export const content = `
# Other APIs

Summary of additional APIs not covered in individual documentation pages. Each API follows the same authentication and RBAC patterns used throughout the platform.

---

## Account Withdrawal
Handles user account deletion and data withdrawal requests.
- **Base path:** \`/v1/account-withdrawal\`
- **Endpoints:** 1
- **Auth:** \`authorizeCognitoMobile\`
- **Key routes:**
  - \`POST /v1/account-withdrawal/withdraw\` — Submit withdrawal request

## Adverse Event
Tracks and manages adverse events and reactions for companions.
- **Base path:** \`/v1/adverse-event\`
- **Endpoints:** 5
- **Auth:** Mixed (\`authorizeCognitoMobile\` for mobile, public for PMS)
- **Key routes:**
  - \`POST /v1/adverse-event/\` — Submit report from mobile
  - \`GET /v1/adverse-event/regulatory-authority/\` — Get regulatory authority info
  - \`GET /v1/adverse-event/organisation/:organisationId\` — List reports for org
  - \`GET /v1/adverse-event/:id\` — View single report
  - \`PATCH /v1/adverse-event/:id/status\` — Update report status

## Audit Trail
Provides audit logging and trail retrieval for organisation-level actions. Supports both GET and POST for companion and appointment audit trails.
- **Base path:** \`/v1/audit-trail\`
- **Endpoints:** 4
- **Auth:** \`authorizeCognito\` + RBAC (\`audit:view:any\`)
- **Key routes:**
  - \`GET /v1/audit-trail/companion/:companionId\` — List audit trail for companion
  - \`POST /v1/audit-trail/companion\` — List audit trail for companion (POST)
  - \`GET /v1/audit-trail/appointment/:appointmentId\` — List audit trail for appointment
  - \`POST /v1/audit-trail/appointment\` — List audit trail for appointment (POST)

## Auth User Mobile
Manages mobile user signup flow.
- **Base path:** \`/v1/authUser\`
- **Endpoints:** 1
- **Auth:** \`authorizeCognitoMobile\`
- **Key routes:**
  - \`POST /v1/authUser/signup\` — Mobile user signup

## Availability
Manages practitioner availability including base schedules, weekly overrides, occupancy, and computed final availability.
- **Base path:** \`/fhir/v1/availability\`
- **Endpoints:** 12
- **Auth:** \`authorizeCognito\` (all routes via \`router.use\`)
- **Key routes:**
  - \`POST /fhir/v1/availability/:orgId/base\` — Set all base availability
  - \`GET /fhir/v1/availability/:orgId/base\` — Get base availability
  - \`DELETE /fhir/v1/availability/:orgId/base\` — Delete base availability
  - \`POST /fhir/v1/availability/:orgId/:userId/base\` — Set base availability for specific user
  - \`POST /fhir/v1/availability/:orgId/weekly\` — Add weekly override
  - \`GET /fhir/v1/availability/:orgId/weekly\` — Get weekly overrides
  - \`DELETE /fhir/v1/availability/:orgId/weekly\` — Delete weekly override
  - \`POST /fhir/v1/availability/:orgId/occupancy\` — Add occupancy
  - \`POST /fhir/v1/availability/:orgId/occupancy/bulk\` — Bulk add occupancies
  - \`GET /fhir/v1/availability/:orgId/occupancy\` — Get occupancy
  - \`GET /fhir/v1/availability/:orgId/final\` — Get computed final availability
  - \`GET /fhir/v1/availability/:orgId/status\` — Get current availability status

## Base Availability
Manages recurring base availability templates for practitioners.
- **Endpoints:** 3
- **Auth:** None (public)
- **Note:** Router file exists (\`base-availability.router.ts\`) but is not currently registered in \`routers/index.ts\`.
- **Key routes:**
  - \`POST /\` — Create base availability
  - \`PUT /:userId\` — Update base availability for user
  - \`GET /:userId\` — Get base availability for user

## Code
Provides FHIR code system entries and value-set mappings used across the platform (e.g. species, breeds, observation codes).
- **Base path:** \`/v1/codes\`
- **Endpoints:** 2
- **Auth:** \`authorizeCognito\`
- **Key routes:**
  - \`GET /v1/codes/entries\` — List code system entries
  - \`GET /v1/codes/mappings\` — List value-set mappings

## Companion Organisation
Links companions (pets) to organisations and manages the relationship lifecycle including invitations, approvals, and revocations.
- **Base path:** \`/v1/companion-organisation\`
- **Endpoints:** 10
- **Auth:** Mixed (\`authorizeCognitoMobile\` for mobile, \`authorizeCognito\` + RBAC for PMS)
- **Key routes (Mobile):**
  - \`POST /v1/companion-organisation/link\` — Link companion by parent
  - \`POST /v1/companion-organisation/invite\` — Send invite
  - \`POST /v1/companion-organisation/:linkId/approve\` — Approve pending link
  - \`POST /v1/companion-organisation/:linkId/deny\` — Deny pending link
  - \`DELETE /v1/companion-organisation/revoke/:linkId\` — Revoke link
  - \`GET /v1/companion-organisation/:companionId\` — Get links by org type
- **Key routes (PMS):**
  - \`POST /v1/companion-organisation/pms/accept\` — Accept invite
  - \`POST /v1/companion-organisation/pms/reject\` — Reject invite
  - \`POST /v1/companion-organisation/pms/:organisationId/:companionId/link\` — Link directly from PMS
  - \`GET /v1/companion-organisation/pms/:organisationId/list\` — List links for org

## Contact Us
Handles contact form submissions from mobile and web, with admin tools for managing support requests.
- **Base path:** \`/v1/contact-us\`
- **Endpoints:** 6
- **Auth:** Mixed (\`authorizeCognitoMobile\` for mobile, public for web, \`authorizeCognito\` for admin)
- **Key routes:**
  - \`POST /v1/contact-us/contact\` — Submit contact request (mobile)
  - \`POST /v1/contact-us/contact-web\` — Submit contact request (web, public)
  - \`POST /v1/contact-us/attachments/presigned-url\` — Get attachment upload URL
  - \`GET /v1/contact-us/requests\` — List support requests (admin)
  - \`GET /v1/contact-us/requests/:id\` — Get request by ID (admin)
  - \`PATCH /v1/contact-us/requests/:id/status\` — Update request status (admin)

## Co-Parent Invite
Manages co-parent invitation flows for shared companion ownership.
- **Base path:** \`/v1/coparent-invite\`
- **Endpoints:** 5
- **Auth:** Mixed (\`authorizeCognitoMobile\` + public)
- **Key routes:**
  - \`POST /v1/coparent-invite/sent\` — Send invite
  - \`POST /v1/coparent-invite/accept\` — Accept invite
  - \`POST /v1/coparent-invite/validate\` — Validate invite (public)
  - \`POST /v1/coparent-invite/decline\` — Decline invite (public)
  - \`GET /v1/coparent-invite/pending\` — List pending invites

## Dashboard
Provides aggregated dashboard data for PMS users including metrics and statistics. Supports both PostgreSQL and MongoDB backends via the read-switch pattern.
- **Base path:** \`/v1/dashboard\`
- **Endpoints:** 7
- **Auth:** \`authorizeCognito\` + RBAC (\`analytics:view:any\`)
- **Common query parameters:**
  - \`range\` — Time window for data: \`today\`, \`yesterday\`, \`last_7_days\`, \`last_30_days\`, \`this_week\`, \`this_month\`, \`last_week\`, \`last_month\`, \`last_6_months\`, \`last_1_year\`
  - \`bucket\` — Trend granularity: \`day\` or \`month\` (applies to trend endpoints)
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
- **Base path:** \`/v1/device-token\`
- **Endpoints:** 2
- **Auth:** \`authorizeCognitoMobile\`
- **Key routes:**
  - \`POST /v1/device-token/register\` — Register device token
  - \`POST /v1/device-token/unregister\` — Unregister device token

## Documenso
Integrates with Documenso for electronic document signing workflows.
- **Base path:** \`/v1/documenso\`
- **Endpoints:** 2
- **Auth:** Mixed (\`authorizeCognito\` + RBAC for redirect, public for API key storage)
- **Key routes:**
  - \`POST /v1/documenso/pms/redirect/:orgId\` — Create redirect URL
  - \`POST /v1/documenso/pms/store-api-key/:orgId\` — Store API key

## Expense
Manages pet expense tracking for parents including CRUD and summaries.
- **Base path:** \`/v1/expense\`
- **Endpoints:** 6
- **Auth:** \`authorizeCognitoMobile\`
- **Key routes:**
  - \`POST /v1/expense/\` — Create expense
  - \`PATCH /v1/expense/:expenseId\` — Update expense
  - \`DELETE /v1/expense/:expenseId\` — Delete expense
  - \`GET /v1/expense/:expenseId\` — Get expense by ID
  - \`GET /v1/expense/companion/:companionId/list\` — List expenses by companion
  - \`GET /v1/expense/companion/:companionId/summary\` — Get expense summary

## Mobile Config
Provides runtime configuration values for the mobile app.
- **Base path:** \`/v1/mobile-config\`
- **Endpoints:** 1
- **Auth:** None (public)

## Observation Tool
Records and retrieves clinical observation tool definitions and submissions for companions during visits. Supports both mobile and PMS workflows.
- **Base path:** \`/v1/observation-tools\`
- **Endpoints:** 17
- **Auth:** Mixed (\`authorizeCognitoMobile\` for mobile, \`authorizeCognito\` for PMS)
- **Key routes (Mobile — 5):**
  - \`GET /mobile/tools\` — List observation tool definitions
  - \`GET /mobile/tools/:toolId\` — Get tool definition
  - \`POST /mobile/tools/:toolId/submissions\` — Submit observation
  - \`POST /mobile/submissions/:submissionId/link-appointment\` — Link submission to appointment
  - \`GET /mobile/tasks/:taskId/preview\` — Preview task
- **Key routes (PMS — 12):**
  - \`GET /pms/tools\` — List tool definitions
  - \`GET /pms/tools/:toolId\` — Get tool definition
  - \`POST /pms/tools\` — Create tool definition
  - \`PATCH /pms/tools/:toolId\` — Update tool definition
  - \`POST /pms/tools/:toolId/archive\` — Archive tool
  - \`GET /pms/submissions\` — List submissions
  - \`GET /pms/submissions/:submissionId\` — Get submission
  - \`POST /pms/submissions/:submissionId/link-appointment\` — Link submission
  - \`POST /pms/appointments/:appointmentId/submissions\` — List submissions for appointment
  - \`GET /pms/tasks/:taskId/submission\` — Get submission by task
  - \`GET /pms/tasks/:taskId/preview\` — Preview task
  - \`GET /pms/appointments/:appointmentId/task-previews\` — List task previews for appointment

## Organisation Document
Manages organisation-level document templates and files with both PMS and mobile access.
- **Base path:** \`/v1/organisation-document\`
- **Endpoints:** 8
- **Auth:** Mixed (\`authorizeCognito\` + RBAC for PMS, \`authorizeCognitoMobile\` for mobile)
- **Key routes (PMS — 7):**
  - \`POST /pms/:orgId/documents/upload\` — Upload document file
  - \`POST /pms/:orgId/documents\` — Create document record
  - \`PATCH /pms/:orgId/documents/:documentId\` — Update document
  - \`DELETE /pms/:orgId/documents/:documentId\` — Delete document
  - \`GET /pms/:orgId/documents\` — List documents
  - \`GET /pms/:orgId/documents/:documentId\` — Get document by ID
  - \`POST /pms/:orgId/documents/policy\` — Upsert document policy
- **Key routes (Mobile — 1):**
  - \`GET /mobile/:orgId/documents\` — List public documents

## Organisation Invite
Handles team member invitation acceptance and management.
- **Base path:** \`/fhir/v1/organisation-invites\`
- **Endpoints:** 3
- **Auth:** \`authorizeCognito\`
- **Key routes:**
  - \`POST /fhir/v1/organisation-invites/:token/accept\` — Accept invite
  - \`POST /fhir/v1/organisation-invites/:token/decline\` — Decline invite
  - \`GET /fhir/v1/organisation-invites/me/pending\` — List my pending invites

## Organisation Room
Manages rooms and physical spaces within an organisation's facility.
- **Base path:** \`/fhir/v1/organisation-room\`
- **Endpoints:** 4
- **Auth:** \`authorizeCognito\` + RBAC (\`room:view:any\` / \`room:edit:any\`)
- **Key routes:**
  - \`POST /fhir/v1/organisation-room/\` — Create room
  - \`PUT /fhir/v1/organisation-room/:id\` — Update room
  - \`GET /fhir/v1/organisation-room/organization/:organizationId\` — List rooms
  - \`DELETE /fhir/v1/organisation-room/:id\` — Delete room

## Organisation Rating
Manages ratings and reviews for organisations from pet parents.
- **Base path:** \`/v1/organisation-rating\`
- **Endpoints:** 2
- **Auth:** \`authorizeCognitoMobile\`
- **Key routes:**
  - \`POST /v1/organisation-rating/:organisationId\` — Rate organisation
  - \`GET /v1/organisation-rating/:organisationId/is-rated\` — Check if user rated

## Parent
Manages parent (pet owner) profiles and account information with both mobile and PMS access.
- **Base path:** \`/fhir/v1/parent\`
- **Endpoints:** 10
- **Auth:** Mixed (\`authorizeCognitoMobile\` for mobile, \`authorizeCognito\` for PMS)
- **Key routes (Mobile — 6):**
  - \`POST /fhir/v1/parent/\` — Create parent profile
  - \`GET /fhir/v1/parent/:id\` — Get parent profile
  - \`PUT /fhir/v1/parent/:id\` — Update parent profile
  - \`DELETE /fhir/v1/parent/:id\` — Delete parent profile
  - \`POST /fhir/v1/parent/profile/presigned\` — Get profile upload URL
  - \`GET /fhir/v1/parent/:parentId/companions\` — List parent's companions
- **Key routes (PMS — 4):**
  - \`POST /fhir/v1/parent/pms/parents\` — Create parent from PMS
  - \`GET /fhir/v1/parent/pms/parents/:id\` — Get parent from PMS
  - \`PUT /fhir/v1/parent/pms/parents/:id\` — Update parent from PMS
  - \`GET /fhir/v1/parent/pms/search\` — Search parents by name

## Parent Companion
Manages the relationship between parents and their companions (pets).
- **Base path:** \`/v1/parent-companion\`
- **Endpoints:** 5
- **Auth:** \`authorizeCognitoMobile\`
- **Key routes:**
  - \`GET /v1/parent-companion/parent/:parentId\` — Get links for parent
  - \`GET /v1/parent-companion/companion/:companionId\` — Get links for companion
  - \`PATCH /v1/parent-companion/:companionId/:targetParentId/permissions\` — Update permissions
  - \`POST /v1/parent-companion/:companionId/:targetParentId/promote\` — Promote to primary
  - \`DELETE /v1/parent-companion/:companionId/:coParentId\` — Remove co-parent

## Service
Manages veterinary services offered by organisations including bookable slots.
- **Base path:** \`/fhir/v1/service\`
- **Endpoints:** 7
- **Auth:** None (all public)
- **Key routes:**
  - \`POST /fhir/v1/service/\` — Create service
  - \`GET /fhir/v1/service/organisation/search\` — Search organisations by service name
  - \`GET /fhir/v1/service/organisation/:organisationId\` — List services for organisation
  - \`POST /fhir/v1/service/bookable-slots\` — Get bookable slots for service
  - \`GET /fhir/v1/service/:id\` — Get service by ID
  - \`PATCH /fhir/v1/service/:id\` — Update service
  - \`DELETE /fhir/v1/service/:id\` — Delete service

## Speciality
Manages veterinary specialities and their associations.
- **Base path:** \`/fhir/v1/speciality\`
- **Endpoints:** 4
- **Auth:** \`authorizeCognito\` + RBAC (\`specialities:view:any\` / \`specialities:edit:any\`)
- **Key routes:**
  - \`POST /fhir/v1/speciality/\` — Create speciality
  - \`GET /fhir/v1/speciality/:organisationId\` — List specialities for organisation
  - \`PUT /fhir/v1/speciality/:id\` — Update speciality
  - \`DELETE /fhir/v1/speciality/:organisationId/:specialityId\` — Delete speciality

## User Organization
Manages the relationship between users and their organisations, including role mappings and membership.
- **Base path:** \`/fhir/v1/user-organization\`
- **Endpoints:** 7
- **Auth:** Mixed (\`authorizeCognito\` for authenticated routes, public for some)
- **Key routes:**
  - \`POST /fhir/v1/user-organization/\` — Upsert mapping (public)
  - \`GET /fhir/v1/user-organization/user/mapping\` — List mappings for user
  - \`GET /fhir/v1/user-organization/org/mapping/:organisationId\` — List by organisation
  - \`GET /fhir/v1/user-organization/:id\` — Get mapping by ID (public)
  - \`GET /fhir/v1/user-organization/\` — List all mappings (public)
  - \`DELETE /fhir/v1/user-organization/:id\` — Delete mapping (public)
  - \`PUT /fhir/v1/user-organization/:id\` — Update mapping (public)

## User Profile
Manages detailed user profile information beyond basic account data.
- **Base path:** \`/fhir/v1/user-profile\`
- **Endpoints:** 5
- **Auth:** \`authorizeCognito\`
- **Key routes:**
  - \`POST /fhir/v1/user-profile/:organizationId/profile\` — Create profile
  - \`PUT /fhir/v1/user-profile/:organizationId/profile\` — Update profile
  - \`GET /fhir/v1/user-profile/:organizationId/profile\` — Get own profile
  - \`GET /fhir/v1/user-profile/:userId/:organizationId/profile\` — Get user profile by ID
  - \`POST /fhir/v1/user-profile/:organizationId/profile-picture\` — Get profile picture upload URL

---

## Integration APIs

### Integration Management
Manages third-party integration accounts (IDEXX, Merck) for organisations, including credential storage, validation, and enable/disable flows.
- **Base path:** \`/v1/integration\`
- **Endpoints:** 6
- **Auth:** \`authorizeCognito\` + RBAC (\`integrations:view:any\` / \`integrations:edit:any\`)
- **Key routes:**
  - \`GET /v1/integration/pms/organisation/:organisationId\` — List all integrations
  - \`GET /v1/integration/pms/organisation/:organisationId/:provider\` — Get integration details
  - \`POST /v1/integration/pms/organisation/:organisationId/:provider/credentials\` — Update credentials
  - \`POST /v1/integration/pms/organisation/:organisationId/:provider/enable\` — Enable integration
  - \`POST /v1/integration/pms/organisation/:organisationId/:provider/disable\` — Disable integration
  - \`POST /v1/integration/pms/organisation/:organisationId/:provider/validate\` — Validate credentials

### Lab Orders (IDEXX)
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

### Lab Census (IDEXX)
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

### Lab Results (IDEXX)
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

### Knowledge / Merck Vet Manual
Provides clinical reference search via the Merck Veterinary Manual API with timezone-aware endpoint routing (US/Canada vs. global) and automatic HTML response filtering. Rate-limited to 120 requests per 15 minutes per org:user pair.
- **Base path:** \`/v1/knowledge\`
- **Endpoints:** 1
- **Auth:** \`authorizeCognito\` + RBAC (\`integrations:view:any\`)
- **Key routes:**
  - \`GET /v1/knowledge/pms/organisation/:organisationId/merck/manuals/search\` — Search manuals (params: q, audience, language, media, timezone, code, codeSystem, displayName, originalText, subTopicCode, subTopicDisplay)
`;
