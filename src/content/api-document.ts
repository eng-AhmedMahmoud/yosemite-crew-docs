export const content = `
# Document API

Manages document uploads, metadata, viewing, and deletion for both mobile app and PMS (Practice Management System) platforms. Supports categorized document storage with signed URL-based file access.

## Mobile Endpoints

### POST /mobile/upload-url
Get a pre-signed upload URL for a document file.
- **Auth:** \`authorizeCognitoMobile\`
- **Body:** \`{ companionId, mimeType }\`
- **Controller:** \`DocumentController.getUploadUrl\`
- **Response:** \`200\` — \`{ url, key }\`

### POST /mobile/:companionId
Create a new document record for a companion.
- **Auth:** \`authorizeCognitoMobile\`
- **Params:** \`companionId\`
- **Body:** \`{ title, category, subcategory, attachments, appointmentId, visitType, issuingBusinessName, issueDate }\`
- **Controller:** \`DocumentController.createFromMobile\`
- **Response:** \`201\` — \`{ data, message }\`

### GET /mobile/:companionId
List all documents for a companion.
- **Auth:** \`authorizeCognitoMobile\`
- **Params:** \`companionId\`
- **Controller:** \`DocumentController.listByCompanion\`

### PATCH /mobile/details/:id
Update document details.
- **Auth:** \`authorizeCognitoMobile\`
- **Params:** \`id\`
- **Body:** Document fields to update
- **Controller:** \`DocumentController.updateFromMobile\`

### GET /mobile/appointments/:appointmentId
List documents associated with a specific appointment.
- **Auth:** \`authorizeCognitoMobile\`
- **Params:** \`appointmentId\`
- **Controller:** \`DocumentController.listByAppointment\`

### GET /mobile/view/:documentId
Get a download URL for a document.
- **Auth:** \`authorizeCognitoMobile\`
- **Params:** \`documentId\`
- **Controller:** \`DocumentController.getDownloadUrl\`

### POST /mobile/view
Get a signed download URL using a storage key.
- **Auth:** \`authorizeCognitoMobile\`
- **Body:** \`{ key }\`
- **Controller:** \`DocumentController.getSignedDownloadUrl\`

### DELETE /mobile/:documentId
Delete a document.
- **Auth:** \`authorizeCognitoMobile\`
- **Params:** \`documentId\`
- **Controller:** \`DocumentController.deleteFromMobile\`

### GET /search/:companionId
Search documents by title for a companion.
- **Auth:** \`authorizeCognitoMobile\`
- **Params:** \`companionId\`
- **Query:** \`title\` — search query string
- **Controller:** \`DocumentController.searchByTitle\`

---

## PMS Endpoints

All PMS endpoints require \`authorizeCognito\`, \`withOrgPermissions\`, and \`requirePermission\` middleware (RBAC).

### POST /pms/upload-url
Get a pre-signed upload URL for a document file.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Body:** \`{ companionId, mimeType }\`
- **Controller:** \`DocumentController.getUploadUrlPms\`
- **Response:** \`200\` — \`{ url, key }\`

### POST /pms/:companionId
Create a new document record from the PMS.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Params:** \`companionId\`
- **Body:** \`{ title, category, subcategory, attachments, appointmentId, visitType, issuingBusinessName, issueDate }\`
- **Controller:** \`DocumentController.createFromPms\`
- **Response:** \`201\` — \`{ data, message }\`

### GET /pms/:companionId
List all documents for a companion from the PMS.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Params:** \`companionId\`
- **Controller:** \`DocumentController.listByCompanionPms\`

### GET /pms/details/:documentId
Get a specific document by ID.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Params:** \`documentId\`
- **Controller:** \`DocumentController.getByIdPms\`

### PATCH /pms/details/:documentId
Update a document from the PMS.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Params:** \`documentId\`
- **Body:** Document fields to update
- **Controller:** \`DocumentController.updateFromPms\`

### GET /pms/view/:documentId
Get a download URL for a document.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Params:** \`documentId\`
- **Controller:** \`DocumentController.getDownloadUrlPms\`

### POST /pms/view
Get a signed download URL using a storage key.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Body:** \`{ key }\`
- **Controller:** \`DocumentController.getSignedDownloadUrlPms\`

### GET /pms/appointments/:appointmentId
List documents associated with a specific appointment from the PMS.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Params:** \`appointmentId\`
- **Controller:** \`DocumentController.listByAppointmentPms\`
`;
