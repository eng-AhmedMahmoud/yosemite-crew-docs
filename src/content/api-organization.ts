export const content = `
# Organization API

Manages organizations (veterinary businesses), nearby search, logos, specialties, and team invitations.

## Public / Mobile Endpoints

### POST /check
Check whether an organisation is a PMS organisation.
- **Controller:** \`OrganizationController.checkIsPMSOrganistaion\`

### GET /getNearby
Get nearby organizations (public, paginated).
- **Query:** \`lat\`, \`lng\`, \`radius\`, \`page\`, \`limit\`
- **Controller:** \`OrganizationController.getNearbyPaginated\`

### GET /mobile/getNearby
Get nearby organizations for the authenticated mobile user.
- **Auth:** \`authorizeCognitoMobile\`
- **Query:** \`lat\`, \`lng\`, \`radius\`, \`page\`, \`limit\`
- **Controller:** \`OrganizationController.getNearbyPaginated\`

### POST /logo/presigned-url
Get a pre-signed URL for uploading an organization logo.
- **Body:** \`{ mimeType }\`
- **Controller:** \`OrganizationController.getLogoUploadUrl\`
- **Response:** \`200\` — \`{ url, key }\`

### POST /logo/presigned-url/:orgId
Get a pre-signed URL for uploading a logo for a specific organization.
- **Params:** \`orgId\`
- **Controller:** \`OrganizationController.getLogoUploadUrl\`

---

## PMS Endpoints

### POST /
Onboard a new business (organisation).
- **Auth:** \`authorizeCognito\`
- **Controller:** \`OrganizationController.onboardBusiness\`

### GET /
List all businesses for the authenticated user.
- **Auth:** \`authorizeCognito\`
- **Controller:** \`OrganizationController.getAllBusinesses\`

### GET /:organizationId
Get an organization by ID.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission("teams:view:any")\`
- **Params:** \`organizationId\`
- **Controller:** \`OrganizationController.getBusinessById\`

### PUT /:organizationId
Update an organization.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission("teams:edit:any")\`
- **Params:** \`organizationId\`
- **Body:** Organization fields to update
- **Controller:** \`OrganizationController.updateBusinessById\`

### DELETE /:organizationId
Delete an organization (owner only).
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission("org:delete")\`
- **Params:** \`organizationId\`
- **Controller:** \`OrganizationController.deleteBusinessById\`

### GET /:organizationId/specality
List specialties for an organization.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission("specialities:view:any")\`
- **Params:** \`organizationId\`
- **Controller:** \`SpecialityController.getAllByOrganizationId\`

---

## Invite Endpoints

### POST /:organisationId/invites
Create a new team member invite for an organization.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Params:** \`organisationId\`
- **Body:** \`{ email, role, permissions }\`
- **Controller:** \`OrganisationInviteController.createInvite\`
- **Response:** \`201\` — \`{ data, message }\`

### GET /:organisationId/invites
List all pending invites for an organization.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission("teams:view:any")\`
- **Params:** \`organisationId\`
- **Controller:** \`OrganisationInviteController.listOrganisationInvites\`
`;
