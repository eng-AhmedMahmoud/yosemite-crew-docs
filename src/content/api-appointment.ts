export const content = `
# Appointment API

Manages appointment scheduling, rescheduling, cancellation, and check-in for both mobile app and PMS (Practice Management System) platforms.

## Status Types

**AppointmentStatus:** \\\`REQUESTED\\\` | \\\`UPCOMING\\\` | \\\`CHECKED_IN\\\` | \\\`IN_PROGRESS\\\` | \\\`COMPLETED\\\` | \\\`CANCELLED\\\` | \\\`NO_SHOW\\\`

**AppointmentPaymentStatus:** \\\`PAID\\\` | \\\`UNPAID\\\`

Payment status is tracked separately from appointment status. The previous \\\`NO_PAYMENT\\\` appointment status value has been removed in favour of the dedicated \\\`AppointmentPaymentStatus\\\` field.

---

## Mobile Endpoints

### POST /mobile
Create a new appointment from the mobile app.
- **Auth:** \`authorizeCognitoMobile\`
- **Body:** \`AppointmentRequestDTO\`
- **Controller:** \`AppointmentController.createRequestedFromMobile\`
- **Response:** \`201\` — \`{ data, message }\`

### GET /mobile/parent
List all appointments for the authenticated parent.
- **Auth:** \`authorizeCognitoMobile\`
- **Controller:** \`AppointmentController.listByParent\`

### POST /mobile/documentUpload
Get a pre-signed URL for uploading appointment documents.
- **Auth:** \`authorizeCognitoMobile\`
- **Body:** \`{ companionId, mimeType }\`
- **Controller:** \`AppointmentController.getDocumentUplaodURL\`

### GET /mobile/companion/:companionId
List appointments for a specific companion (pet).
- **Auth:** \`authorizeCognitoMobile\`
- **Params:** \`companionId\`
- **Controller:** \`AppointmentController.listByCompanion\`

### PATCH /mobile/:appointmentId/reschedule
Reschedule an existing appointment.
- **Auth:** \`authorizeCognitoMobile\`
- **Params:** \`appointmentId\`
- **Body:** \`{ startTime, endTime, concern, isEmergency }\`
- **Controller:** \`AppointmentController.rescheduleFromMobile\`

### PATCH /mobile/:appointmentId/cancel
Cancel an appointment from the mobile app.
- **Auth:** \`authorizeCognitoMobile\`
- **Params:** \`appointmentId\`
- **Body:** \`CancelBody\`
- **Controller:** \`AppointmentController.cancelFromMobile\`

### PATCH /mobile/:appointmentId/checkin
Check in for an appointment.
- **Auth:** \`authorizeCognitoMobile\`
- **Params:** \`appointmentId\`
- **Controller:** \`AppointmentController.checkInAppointment\`

### GET /mobile/:appointmentId
Get appointment details by ID.
- **Auth:** \`authorizeCognitoMobile\`
- **Params:** \`appointmentId\`
- **Controller:** \`AppointmentController.getById\`

---

## PMS Endpoints

### POST /pms
Create a new appointment from the PMS.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Query:** \`createPayment\`
- **Body:** \`AppointmentRequestDTO\`
- **Controller:** \`AppointmentController.createFromPms\`
- **Response:** \`201\` — \`{ data, message }\`

### GET /pms/organisation/:organisationId
List all appointments for an organisation.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Params:** \`organisationId\`
- **Controller:** \`AppointmentController.listByOrganisation\`

### GET /pms/organisation/:organisationId/companion/:companionId
List appointments for a specific companion within an organisation.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Params:** \`organisationId\`, \`companionId\`
- **Controller:** \`AppointmentController.listByCompanionForOrganisation\`

### PATCH /pms/:organisationId/:appointmentId/accept
Accept a requested appointment.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Params:** \`organisationId\`, \`appointmentId\`
- **Controller:** \`AppointmentController.acceptRequested\`
- **Response:** \`200\` — \`{ data, message }\`

### PATCH /pms/:organisationId/:appointmentId/reject
Reject a requested appointment.
- **Auth:** \`authorizeCognito\` + RBAC
- **Params:** \`organisationId\`, \`appointmentId\`
- **Controller:** \`AppointmentController.rejectRequested\`

### PATCH /pms/:organisationId/:appointmentId/cancel
Cancel an appointment from the PMS.
- **Auth:** \`authorizeCognito\` + RBAC
- **Params:** \`organisationId\`, \`appointmentId\`
- **Controller:** \`AppointmentController.cancelFromPMS\`

### PATCH /pms/:organisationId/:appointmentId/checkin
Check in a patient from the PMS.
- **Auth:** \`authorizeCognito\` + RBAC
- **Params:** \`organisationId\`, \`appointmentId\`
- **Controller:** \`AppointmentController.checkInAppointmentForPMS\`

### PATCH /pms/:organisationId/:appointmentId
Update an existing appointment.
- **Auth:** \`authorizeCognito\` + RBAC
- **Params:** \`organisationId\`, \`appointmentId\`
- **Body:** \`AppointmentRequestDTO\`
- **Controller:** \`AppointmentController.updateFromPms\`

### POST /pms/:organisationId/:appointmentId/forms
Attach forms to an appointment.
- **Auth:** \`authorizeCognito\` + RBAC
- **Params:** \`organisationId\`, \`appointmentId\`
- **Body:** \`AttachFormsBody\`
- **Controller:** \`AppointmentController.attachFormsToAppointment\`

### GET /pms/:organisationId/:appointmentId
Get appointment details from PMS context.
- **Auth:** \`authorizeCognito\` + RBAC
- **Params:** \`organisationId\`, \`appointmentId\`
- **Controller:** \`AppointmentController.getById\`
`;
