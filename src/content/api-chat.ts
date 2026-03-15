export const content = `
# Chat API

Manages real-time chat functionality using Stream Chat, including token generation, appointment-based sessions, direct messaging, group chats, and session lifecycle for both mobile and PMS platforms.

## Mobile Endpoints

### POST /mobile/token
Generate a Stream Chat token for the authenticated mobile user.
- **Auth:** \`authorizeCognitoMobile\`
- **Controller:** \`ChatController.generateToken\`

### POST /mobile/appointments/:appointmentId
Create or ensure a chat session exists for an appointment.
- **Auth:** \`authorizeCognitoMobile\`
- **Params:** \`appointmentId\`
- **Controller:** \`ChatController.ensureAppointmentSession\`

### POST /mobile/sessions/:sessionId/open
Open/activate a chat session.
- **Auth:** \`authorizeCognitoMobile\`
- **Params:** \`sessionId\`
- **Controller:** \`ChatController.openChat\`

### GET /mobile/sessions
List all chat sessions for the authenticated mobile user.
- **Auth:** \`authorizeCognitoMobile\`
- **Controller:** \`ChatController.listMySessions\`

---

## PMS Endpoints

### POST /pms/token
Generate a Stream Chat token for a PMS user.
- **Auth:** \`authorizeCognito\`
- **Controller:** \`ChatController.generateTokenForPMS\`

### POST /pms/appointments/:appointmentId
Create or ensure a chat session for an appointment (PMS side).
- **Auth:** \`authorizeCognito\`
- **Params:** \`appointmentId\`
- **Controller:** \`ChatController.ensureAppointmentSession\`

### POST /pms/org/direct
Create a direct 1:1 chat between organisation members.
- **Auth:** \`authorizeCognito\`
- **Controller:** \`ChatController.createOrgDirectChat\`

### POST /pms/org/group
Create a group chat for organisation members.
- **Auth:** \`authorizeCognito\`
- **Controller:** \`ChatController.createOrgGroupChat\`

### POST /pms/sessions/:sessionId/open
Open/activate a PMS chat session.
- **Auth:** \`authorizeCognito\`
- **Params:** \`sessionId\`
- **Controller:** \`ChatController.openChat\`

### GET /pms/sessions/:organisationId
List chat sessions for an organisation.
- **Auth:** \`authorizeCognito\`
- **Params:** \`organisationId\`
- **Controller:** \`ChatController.listMySessions\`

### POST /pms/sessions/:sessionId/close
Close an active chat session.
- **Auth:** \`authorizeCognito\`
- **Params:** \`sessionId\`
- **Controller:** \`ChatController.closeSession\`

### POST /pms/groups/:sessionId/members/add
Add members to a group chat.
- **Auth:** \`authorizeCognito\`
- **Params:** \`sessionId\`
- **Controller:** \`ChatController.addGroupMembers\`

### POST /pms/groups/:sessionId/members/remove
Remove members from a group chat.
- **Auth:** \`authorizeCognito\`
- **Params:** \`sessionId\`
- **Controller:** \`ChatController.removeGroupMembers\`

### PATCH /pms/groups/:sessionId
Update group chat details (name, image, etc.).
- **Auth:** \`authorizeCognito\`
- **Params:** \`sessionId\`
- **Controller:** \`ChatController.updateGroup\`

### DELETE /pms/groups/:sessionId
Delete a group chat.
- **Auth:** \`authorizeCognito\`
- **Params:** \`sessionId\`
- **Controller:** \`ChatController.deleteGroup\`
`;
