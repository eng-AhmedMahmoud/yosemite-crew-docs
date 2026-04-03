export const content = `
# Task API

Manages care tasks, task libraries, and task templates for both mobile app and PMS platforms. Supports custom tasks, library-based tasks, and template-based task creation.

## Mobile Endpoints

### POST /mobile/
Create a custom task from the mobile app.
- **Auth:** \`authorizeCognitoMobile\`
- **Body:** \`{ title, description, assignedTo, companionId, dueDate, frequency }\`
- **Controller:** \`TaskController.createCustomTask\`
- **Response:** \`201\` — \`{ data, message }\`

### GET /mobile/task
List parent-level tasks for the authenticated user.
- **Auth:** \`authorizeCognitoMobile\`
- **Controller:** \`TaskController.listParentTasks\`

### GET /mobile/:taskId
Get a specific task by ID.
- **Auth:** \`authorizeCognitoMobile\`
- **Params:** \`taskId\`
- **Controller:** \`TaskController.getById\`

### PATCH /mobile/:taskId
Update a task from the mobile app.
- **Auth:** \`authorizeCognitoMobile\`
- **Params:** \`taskId\`
- **Body:** Task fields to update
- **Controller:** \`TaskController.updateTask\`

### POST /mobile/:taskId/status
Update the status of a task.
- **Auth:** \`authorizeCognitoMobile\`
- **Params:** \`taskId\`
- **Body:** \`{ status, completion }\`
- **Controller:** \`TaskController.changeStatus\`

### GET /mobile/companion/:companionId
List tasks for a specific companion.
- **Auth:** \`authorizeCognitoMobile\`
- **Params:** \`companionId\`
- **Controller:** \`TaskController.listForCompanion\`

---

## PMS Endpoints

### POST /pms/from-library
Create a task from the task library.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Body:** \`{ libraryId, companionId, assignedTo, dueDate }\`
- **Controller:** \`TaskController.createFromLibrary\`
- **Response:** \`201\` — \`{ data, message }\`

### POST /pms/from-template
Create tasks from a task template.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Body:** \`{ templateId, companionId, assignedTo, startDate }\`
- **Controller:** \`TaskController.createFromTemplate\`
- **Response:** \`201\` — \`{ data, message }\`

### POST /pms/custom
Create a custom task from the PMS.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Body:** \`{ title, description, companionId, assignedTo, dueDate, frequency }\`
- **Controller:** \`TaskController.createCustomTaskFromPms\`
- **Response:** \`201\` — \`{ data, message }\`

### GET /pms/organisation/:organisationId
List all employee tasks for an organisation.
- **Auth:** \`authorizeCognito\`
- **Params:** \`organisationId\`
- **Controller:** \`TaskController.listEmployeeTasks\`

### GET /pms/companion/:companionId
List tasks for a specific companion from the PMS.
- **Auth:** \`authorizeCognito\`
- **Params:** \`companionId\`
- **Controller:** \`TaskController.listForCompanion\`

---

## Task Library Endpoints

### GET /pms/library
List all task library entries.
- **Auth:** \`authorizeCognito\`
- **Controller:** \`TaskLibraryController.list\`

### POST /pms/library
Create a new task library entry.
- **Controller:** \`TaskLibraryController.create\`

### PUT /pms/library/:libraryId
Update a task library entry.
- **Params:** \`libraryId\`
- **Body:** Library entry fields to update
- **Controller:** \`TaskLibraryController.update\`

### GET /pms/library/:libraryId
Get a task library entry by ID.
- **Auth:** \`authorizeCognito\`
- **Params:** \`libraryId\`
- **Controller:** \`TaskLibraryController.getById\`

---

## Task Template Endpoints

### GET /pms/templates/organisation/:organisationId
List all task templates for an organisation.
- **Auth:** \`authorizeCognito\`
- **Params:** \`organisationId\`
- **Controller:** \`TaskTemplateController.list\`

### GET /pms/templates/:templateId
Get a specific task template by ID.
- **Auth:** \`authorizeCognito\`
- **Params:** \`templateId\`
- **Controller:** \`TaskTemplateController.getById\`

### POST /pms/templates
Create a new task template.
- **Auth:** \`authorizeCognito\`
- **Body:** Template definition payload
- **Controller:** \`TaskTemplateController.create\`
- **Response:** \`201\` — \`{ data, message }\`

### PATCH /pms/templates/:templateId
Update a task template.
- **Auth:** \`authorizeCognito\`
- **Params:** \`templateId\`
- **Body:** Template fields to update
- **Controller:** \`TaskTemplateController.update\`

### DELETE /pms/templates/:templateId
Archive a task template.
- **Auth:** \`authorizeCognito\`
- **Params:** \`templateId\`
- **Controller:** \`TaskTemplateController.archive\`

---

## PMS Task Management

### GET /pms/:taskId
Get a specific task by ID from the PMS.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission("tasks:view:any" | "tasks:view:own")\`
- **Params:** \`taskId\`
- **Controller:** \`TaskController.getById\`

### PATCH /pms/:taskId
Update a task from the PMS.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission("tasks:edit:any" | "tasks:edit:own")\`
- **Params:** \`taskId\`
- **Body:** Task fields to update
- **Controller:** \`TaskController.updateTaskPMS\`

### POST /pms/:taskId/status
Update the status of a task from the PMS.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission("tasks:edit:any" | "tasks:edit:own")\`
- **Params:** \`taskId\`
- **Body:** \`{ status, completion }\`
- **Controller:** \`TaskController.changeStatusPMS\`
`;
