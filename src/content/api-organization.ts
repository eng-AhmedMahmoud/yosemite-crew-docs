export const content = `
# Organization API

Manages organizations (veterinary businesses), nearby search, logos, specialties, and team invitations.

## Public / Mobile Endpoints

### POST /check
Search for nearby organizations (public endpoint).
- **Query:** \`lat\` — latitude, \`lng\` — longitude, \`radius\` — search radius, \`page\`, \`limit\`
- **Controller:** \`OrganizationController.nearbySearch\`

### GET /mobile/getNearby
Get nearby organizations for the authenticated mobile user.
- **Auth:** \`authorizeCognitoMobile\`
- **Query:** \`lat\` — latitude, \`lng\` — longitude, \`radius\` — search radius, \`page\`, \`limit\`
- **Controller:** \`OrganizationController.getNearby\`

### POST /logo/presigned-url
Get a pre-signed URL for uploading an organization logo.
- **Auth:** \`authorizeCognito\`
- **Body:** \`{ mimeType }\`
- **Controller:** \`OrganizationController.getLogoUploadUrl\`
- **Response:** \`200\` — \`{ url, key }\`

---

## PMS Endpoints

### POST /
List all businesses (organizations) for the authenticated user.
- **Auth:** \`authorizeCognito\`
- **Controller:** \`OrganizationController.listAll\`

### GET /:organizationId
Get an organization by ID.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Params:** \`organizationId\`
- **Controller:** \`OrganizationController.getById\`

### PUT /:organizationId
Update an organization.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Params:** \`organizationId\`
- **Body:** Organization fields to update
- **Controller:** \`OrganizationController.update\`

### DELETE /:organizationId
Delete an organization.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Params:** \`organizationId\`
- **Controller:** \`OrganizationController.delete\`

### GET /:organizationId/specality
List specialties for an organization.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Params:** \`organizationId\`
- **Controller:** \`OrganizationController.listSpecialties\`

---

## Invite Endpoints

### POST /:organisationId/invites
Create a new team member invite for an organization.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Params:** \`organisationId\`
- **Body:** \`{ email, role, permissions }\`
- **Controller:** \`OrganizationController.createInvite\`
- **Response:** \`201\` — \`{ data, message }\`

### GET /:organisationId/invites
List all pending invites for an organization.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Params:** \`organisationId\`
- **Controller:** \`OrganizationController.listInvites\`
`;
