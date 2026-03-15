export const content = `
# User API

Manages basic user profile operations including retrieval and name updates.

## Endpoints

### GET /:id
Get a user by ID.
- **Auth:** \`authorizeCognito\`
- **Params:** \`id\` — the user ID
- **Controller:** \`UserController.getById\`
- **Response:** \`200\` — \`{ data: User }\`

### PATCH /name
Update the authenticated user's name.
- **Auth:** \`authorizeCognito\`
- **Body:** \`{ firstName, lastName }\`
- **Controller:** \`UserController.updateName\`
- **Response:** \`200\` — \`{ data, message }\`
`;
