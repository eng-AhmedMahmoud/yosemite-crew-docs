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
Provides aggregated dashboard data for PMS users including metrics and statistics.
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

## User Profile
Manages detailed user profile information beyond basic account data.
- **Endpoints:** 4
- **Auth:** \`authorizeCognito\`
`;
