export const content = `
# Invoice API

Manages invoices, charges, checkout sessions, and payment intent lookups for both mobile app and PMS platforms.

## Mobile Endpoints

### POST /mobile/appointment/:appointmentId
List invoices for an appointment from the mobile app.
- **Auth:** \`authorizeCognitoMobile\`
- **Params:** \`appointmentId\`
- **Controller:** \`InvoiceController.listInvoicesForAppointment\`

### GET /mobile/payment-intent/:paymentIntentId
Get the invoice associated with a Stripe payment intent.
- **Auth:** \`authorizeCognitoMobile\`
- **Params:** \`paymentIntentId\`
- **Controller:** \`InvoiceController.getInvoiceByPaymentIntentId\`

### GET /mobile/:invoiceId
Get a specific invoice by ID.
- **Auth:** \`authorizeCognitoMobile\`
- **Params:** \`invoiceId\`
- **Controller:** \`InvoiceController.getInvoiceById\`

---

## PMS Endpoints

### POST /appointment/:appointmentId/charges
Add charges to an appointment invoice.
- **Auth:** \`authorizeCognito\`
- **Params:** \`appointmentId\`
- **Body:** \`{ charges: [{ description, amount, quantity, itemId }] }\`
- **Controller:** \`InvoiceController.addChargesToAppointment\`
- **Response:** \`201\` — \`{ data, message }\`

### POST /appointment/:appointmentId
List invoices for an appointment.
- **Auth:** \`authorizeCognito\`
- **Params:** \`appointmentId\`
- **Controller:** \`InvoiceController.listInvoicesForAppointment\`

### GET /payment-intent/:paymentIntentId
Get the invoice associated with a Stripe payment intent.
- **Auth:** \`authorizeCognito\`
- **Params:** \`paymentIntentId\`
- **Controller:** \`InvoiceController.getInvoiceByPaymentIntentId\`

### GET /organisation/:organisationId/list
List all invoices for an organisation.
- **Auth:** \`authorizeCognito\`
- **Params:** \`organisationId\`
- **Controller:** \`InvoiceController.listInvoicesForOrganisation\`

### POST /:invoiceId/checkout-session
Create a Stripe checkout session for an invoice and email parent.
- **Auth:** \`authorizeCognito\`
- **Params:** \`invoiceId\`
- **Controller:** \`InvoiceController.createCheckoutSessionForInvoice\`

### POST /:invoiceId/mark-paid
Mark an invoice as paid manually (in-clinic payment).
- **Auth:** \`authorizeCognito\`
- **Params:** \`invoiceId\`
- **Controller:** \`InvoiceController.markInvoicePaidManually\`

### PATCH /:invoiceId/payment-collection-method
Update the payment collection method for an invoice.
- **Auth:** \`authorizeCognito\`
- **Params:** \`invoiceId\`
- **Body:** \`{ paymentCollectionMethod: "PAYMENT_INTENT" | "PAYMENT_LINK" | "PAYMENT_AT_CLINIC" }\`
- **Controller:** \`InvoiceController.updatePaymentCollectionMethod\`
- **Response:** \`200\` — Updated invoice object

### GET /:invoiceId
Get a specific invoice by ID.
- **Auth:** \`authorizeCognito\`
- **Params:** \`invoiceId\`
- **Controller:** \`InvoiceController.getInvoiceById\`
`;
