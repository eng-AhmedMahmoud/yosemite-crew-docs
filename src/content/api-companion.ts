export const content = `
# Companion API

Manages pet (companion) profiles including creation, retrieval, updates, profile pictures, and search functionality.

## Mobile Endpoints

### POST /
Create a new companion from the mobile app.
- **Auth:** \`authorizeCognitoMobile\`
- **Controller:** \`CompanionController.createCompanionMobile\`
- **Response:** \`201\` — \`{ message }\`

### GET /:id
Get companion details by ID (mobile).
- **Auth:** \`authorizeCognitoMobile\`
- **Params:** \`id\`
- **Controller:** \`CompanionController.getCompanionById\`

### PUT /:id
Delete a companion (soft delete).
- **Auth:** \`authorizeCognitoMobile\`
- **Params:** \`id\`
- **Controller:** \`CompanionController.deleteCompanion\`
- **Response:** \`204\` — \`{ message }\`

### POST /profile/presigned
Get a pre-signed URL for uploading a companion profile picture.
- **Auth:** \`authorizeCognitoMobile\`
- **Controller:** \`CompanionController.getProfileUploadUrl\`

---

## PMS Endpoints

### GET /org/search
Search companions by name within the authenticated user's org context.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`requirePermission\`
- **Query:** \`name\`
- **Controller:** \`CompanionController.searchCompanionByName\`

### POST /org/:orgId
Create a new companion from the PMS.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Params:** \`orgId\`
- **Controller:** \`CompanionController.createCompanionPMS\`
- **Response:** \`201\` — \`{ message }\`

### GET /org/:id
Get companion details by ID (PMS).
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Params:** \`id\`
- **Controller:** \`CompanionController.getCompanionById\`

### PUT /org/:id
Update companion details from PMS.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Params:** \`id\`
- **Controller:** \`CompanionController.updateCompanion\`

### GET /pms/:parentId/:organisationId/list
List parent's companions that are not yet linked to the organisation.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Params:** \`parentId\`, \`organisationId\`
- **Controller:** \`CompanionController.listParentCompanionsNotInOrganisation\`
`;
