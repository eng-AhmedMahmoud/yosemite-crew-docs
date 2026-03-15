export const content = `
# Notification API

Manages push and in-app notifications for mobile app users. Provides listing and read-status tracking.

## Mobile Endpoints

### GET /mobile
List notifications for the authenticated mobile user.
- **Auth:** \`authorizeCognitoMobile\`
- **Controller:** \`NotificationController.list\`
- **Response:** \`200\` — \`{ data: Notification[] }\`

### POST /mobile/:notificationId/seen
Mark a notification as seen.
- **Auth:** \`authorizeCognitoMobile\`
- **Params:** \`notificationId\`
- **Controller:** \`NotificationController.markAsSeen\`
- **Response:** \`200\` — \`{ message }\`
`;
