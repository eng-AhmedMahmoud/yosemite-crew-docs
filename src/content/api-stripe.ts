export const content = `
# Stripe API

Handles Stripe payment processing, webhooks, connected accounts, onboarding, and subscription billing management.

## Webhook

### POST /webhook
Stripe webhook endpoint for processing payment events.
- **Auth:** Stripe signature verification
- **Body:** Stripe event payload
- **Controller:** \`StripeController.handleWebhook\`

---

## Mobile Endpoints

### POST /payment-intent/:appointmentId
Create a payment intent for an appointment from the mobile app.
- **Auth:** \`authorizeCognitoMobile\`
- **Params:** \`appointmentId\`
- **Controller:** \`StripeController.createPaymentIntentMobile\`
- **Response:** \`201\` — \`{ clientSecret, paymentIntentId }\`

### GET /payment-intent/:paymentIntentId
Get payment intent details from mobile.
- **Auth:** \`authorizeCognitoMobile\`
- **Params:** \`paymentIntentId\`
- **Controller:** \`StripeController.getPaymentIntentMobile\`

### GET /checkout-session/:sessionId
Get checkout session status (public — used for success/cancel pages).
- **Params:** \`sessionId\`
- **Controller:** \`StripeController.retrieveCheckoutSession\`

### GET /invoice/:invoiceId/payment-intent
Create a payment intent for an invoice from the mobile app.
- **Auth:** \`authorizeCognitoMobile\`
- **Params:** \`invoiceId\`
- **Controller:** \`StripeController.createPaymentIntentForInvoice\`

---

## PMS Endpoints

### POST /pms/payment-intent/:invoiceId
Create a payment intent for an invoice from the PMS.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Params:** \`invoiceId\`
- **Controller:** \`StripeController.createPaymentIntentPms\`
- **Response:** \`201\` — \`{ clientSecret, paymentIntentId }\`

---

## Connected Account Endpoints

### POST /organisation/:organisationId/account
Create or get a Stripe connected account for an organisation.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Params:** \`organisationId\`
- **Controller:** \`StripeController.createOrGetConnectedAccount\`

### GET /organisation/:organisationId/account/status
Get the status of the organisation's Stripe connected account.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Params:** \`organisationId\`
- **Controller:** \`StripeController.getAccountStatus\`

### POST /organisation/:organisationId/onboarding
Generate a Stripe onboarding link for the organisation.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Params:** \`organisationId\`
- **Controller:** \`StripeController.createOnboardingLink\`

---

## Billing Endpoints

### POST /organisation/:organisationId/billing/checkout
Create a billing checkout session for subscription management.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Params:** \`organisationId\`
- **Controller:** \`StripeController.createBillingCheckout\`

### POST /organisation/:organisationId/billing/portal
Create a Stripe billing portal session for the organisation.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Params:** \`organisationId\`
- **Controller:** \`StripeController.createBillingPortal\`

### POST /organisation/:organisationId/billing/sync-seats
Synchronize seat count with the Stripe subscription.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Params:** \`organisationId\`
- **Controller:** \`StripeController.syncSeats\`
`;
