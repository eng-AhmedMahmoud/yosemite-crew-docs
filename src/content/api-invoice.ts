export const content = `
# Invoice API

Manages invoices, charges, checkout sessions, and payment intent lookups for both mobile app and PMS platforms.

## Mobile Endpoints

### GET /mobile/appointment/:appointmentId
Get the invoice for a specific appointment.
- **Auth:** \`authorizeCognitoMobile\`
- **Params:** \`appointmentId\`
- **Controller:** \`InvoiceController.getByAppointmentMobile\`

### GET /mobile/payment-intent/:paymentIntentId
Get the invoice associated with a Stripe payment intent.
- **Auth:** \`authorizeCognitoMobile\`
- **Params:** \`paymentIntentId\`
- **Controller:** \`InvoiceController.getByPaymentIntentMobile\`

### GET /mobile/:invoiceId
Get a specific invoice by ID.
- **Auth:** \`authorizeCognitoMobile\`
- **Params:** \`invoiceId\`
- **Controller:** \`InvoiceController.getByIdMobile\`

---

## PMS Endpoints

### POST /appointment/:appointmentId/charges
Add charges to an appointment invoice.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Params:** \`appointmentId\`
- **Body:** \`{ charges: [{ description, amount, quantity, itemId }] }\`
- **Controller:** \`InvoiceController.addCharges\`
- **Response:** \`201\` — \`{ data, message }\`

### GET /appointment/:appointmentId
Get the invoice for a specific appointment.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Params:** \`appointmentId\`
- **Controller:** \`InvoiceController.getByAppointment\`

### GET /payment-intent/:paymentIntentId
Get the invoice associated with a Stripe payment intent.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Params:** \`paymentIntentId\`
- **Controller:** \`InvoiceController.getByPaymentIntent\`

### GET /organisation/:organisationId/list
List all invoices for an organisation.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Params:** \`organisationId\`
- **Controller:** \`InvoiceController.listByOrganisation\`

### POST /:invoiceId/checkout-session
Create a Stripe checkout session for an invoice.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Params:** \`invoiceId\`
- **Controller:** \`InvoiceController.createCheckoutSession\`

### GET /:invoiceId
Get a specific invoice by ID.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Params:** \`invoiceId\`
- **Controller:** \`InvoiceController.getById\`

### PATCH /:invoiceId/payment-collection-method
Update the payment collection method for an invoice.
- **Auth:** \`authorizeCognito\`
- **Params:** \`invoiceId\`
- **Body:** \`{ paymentCollectionMethod: "PAYMENT_INTENT" | "PAYMENT_LINK" | "PAYMENT_AT_CLINIC" }\`
- **Controller:** \`InvoiceController.updatePaymentCollectionMethod\`
- **Response:** \`200\` — Updated invoice object
`;
