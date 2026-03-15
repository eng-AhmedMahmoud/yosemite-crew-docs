export const content = `
# Form API

Manages forms, form submissions, SOAP notes, consent forms, and document signing across admin, appointment, mobile, and public contexts.

## Admin Endpoints

### POST /admin/:orgId
Create a new form for an organization.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Params:** \`orgId\`
- **Body:** Form definition payload
- **Controller:** \`FormController.create\`
- **Response:** \`201\` — \`{ data, message }\`

### GET /admin/:orgId/forms
List all forms for an organization.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Params:** \`orgId\`
- **Controller:** \`FormController.list\`

### GET /admin/:orgId/:formId
Get a specific form by ID.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Params:** \`orgId\`, \`formId\`
- **Controller:** \`FormController.getById\`

### PUT /admin/:orgId/:formId
Update an existing form.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Params:** \`orgId\`, \`formId\`
- **Body:** Updated form definition
- **Controller:** \`FormController.update\`

### POST /admin/:formId/publish
Publish a form, making it available for submissions.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Params:** \`formId\`
- **Controller:** \`FormController.publish\`

### POST /admin/:formId/unpublish
Unpublish a form, removing it from active use.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Params:** \`formId\`
- **Controller:** \`FormController.unpublish\`

### POST /admin/:formId/archive
Archive a form.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Params:** \`formId\`
- **Controller:** \`FormController.archive\`

### POST /admin/:formId/submit
Submit a form response from the admin panel.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Params:** \`formId\`
- **Body:** Form submission data
- **Controller:** \`FormController.submit\`

---

## Appointment Endpoints

### GET /appointments/:appointmentId/soap-notes
Get SOAP notes for an appointment.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Params:** \`appointmentId\`
- **Query:** \`latestOnly\` — boolean, return only the latest SOAP note
- **Controller:** \`FormController.getSoapNotes\`

### GET /appointments/:appointmentId/forms
Get forms associated with an appointment.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Params:** \`appointmentId\`
- **Query:** \`isPMS\` — boolean, \`serviceId\`, \`species\`
- **Controller:** \`FormController.getAppointmentForms\`

---

## Signing Endpoints

### POST /form-submissions/:submissionId/sign
Sign a form submission.
- **Auth:** \`authorizeCognito\`
- **Params:** \`submissionId\`
- **Controller:** \`FormController.signSubmission\`

### GET /form-submissions/:submissionId/signed-document
Get the signed document for a submission.
- **Auth:** \`authorizeCognito\`
- **Params:** \`submissionId\`
- **Controller:** \`FormController.getSignedDocument\`

---

## Public Endpoints

### GET /public/:formId
Get a form for public submission (no auth required).
- **Params:** \`formId\`
- **Controller:** \`FormController.getPublicForm\`

---

## Mobile Endpoints

### GET /mobile/submissions/:formId
Get submissions for a specific form.
- **Auth:** \`authorizeCognitoMobile\`
- **Params:** \`formId\`
- **Controller:** \`FormController.getMobileSubmissions\`

### GET /mobile/forms/:formId/submissions
Get all submissions for a form from mobile.
- **Auth:** \`authorizeCognitoMobile\`
- **Params:** \`formId\`
- **Controller:** \`FormController.getMobileFormSubmissions\`

### GET /mobile/forms/:organizationId/:serviceId/consent-form
Get the consent form for a specific service.
- **Auth:** \`authorizeCognitoMobile\`
- **Params:** \`organizationId\`, \`serviceId\`
- **Query:** \`species\`
- **Controller:** \`FormController.getConsentForm\`

### GET /mobile/appointments/:appointmentId/soap-notes
Get SOAP notes for an appointment from mobile.
- **Auth:** \`authorizeCognitoMobile\`
- **Params:** \`appointmentId\`
- **Controller:** \`FormController.getMobileSoapNotes\`

### GET /mobile/appointments/:appointmentId/forms
Get forms associated with an appointment from mobile.
- **Auth:** \`authorizeCognitoMobile\`
- **Params:** \`appointmentId\`
- **Controller:** \`FormController.getMobileAppointmentForms\`

### GET /mobile/form-submissions/:submissionId/pdf
Download a form submission as PDF.
- **Auth:** \`authorizeCognitoMobile\`
- **Params:** \`submissionId\`
- **Controller:** \`FormController.getSubmissionPdf\`

### POST /mobile/form-submissions/:submissionId/sign
Sign a form submission from mobile.
- **Auth:** \`authorizeCognitoMobile\`
- **Params:** \`submissionId\`
- **Controller:** \`FormController.signSubmissionMobile\`
`;
