export const content = `
# User API

Manages user accounts including creation, retrieval, deletion, and name updates.

## Endpoints

### POST /
Create a new user.
- **Auth:** \`authorizeCognito\`
- **Controller:** \`UserController.create\`
- **Response:** \`201\` — \`{ data: User }\`

### GET /:id
Get a user by ID.
- **Params:** \`id\` — the user ID
- **Controller:** \`UserController.getById\`
- **Response:** \`200\` — \`{ data: User }\`

### DELETE /:id
Delete a user by ID.
- **Auth:** \`authorizeCognito\`
- **Params:** \`id\` — the user ID
- **Controller:** \`UserController.deleteById\`

### PATCH /update-name
Update the authenticated user's name.
- **Auth:** \`authorizeCognito\`
- **Body:** \`{ firstName, lastName }\`
- **Controller:** \`UserController.updateName\`
- **Response:** \`200\` — \`{ data, message }\`
`;
