export const content = `
# Inventory API

Manages inventory items, batches, stock levels, vendors, meta fields, and alerts for veterinary practice organizations. All endpoints require \`authorizeCognito\`, \`withOrgPermissions\`, and \`requirePermission\` middleware (RBAC).

## Item Endpoints

### POST /items
Create a new inventory item.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Body:** Item definition payload (name, SKU, category, unit, reorder level, etc.)
- **Controller:** \`InventoryController.createItem\`
- **Response:** \`201\` — \`{ data, message }\`

### PATCH /items/:itemId
Update an existing inventory item.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Params:** \`itemId\`
- **Body:** Fields to update
- **Controller:** \`InventoryController.updateItem\`

### POST /items/:itemId/hide
Hide an inventory item from active lists.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Params:** \`itemId\`
- **Controller:** \`InventoryController.hideItem\`

### POST /items/:itemId/archive
Archive an inventory item.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Params:** \`itemId\`
- **Controller:** \`InventoryController.archiveItem\`

### POST /items/:itemId/active
Reactivate a hidden or archived inventory item.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Params:** \`itemId\`
- **Controller:** \`InventoryController.activateItem\`

### GET /organisation/:organisationId/items
List all inventory items for an organisation.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Params:** \`organisationId\`
- **Controller:** \`InventoryController.listItems\`

### GET /organisation/:organisationId/turnover
Get inventory turnover report for an organisation.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Params:** \`organisationId\`
- **Query:** \`from\` — start date, \`to\` — end date
- **Controller:** \`InventoryController.getTurnover\`

### GET /items/:itemId
Get details of a specific inventory item.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Params:** \`itemId\`
- **Controller:** \`InventoryController.getItem\`

---

## Batch Endpoints

### POST /items/:itemId/batches
Add a new batch to an inventory item.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Params:** \`itemId\`
- **Body:** \`{ batchNumber, quantity, expiryDate, costPerUnit }\`
- **Controller:** \`InventoryController.addBatch\`
- **Response:** \`201\` — \`{ data, message }\`

### PATCH /batches/:batchId
Update an existing batch.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Params:** \`batchId\`
- **Body:** Fields to update
- **Controller:** \`InventoryController.updateBatch\`

### DELETE /batches/:batchId
Delete a batch.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Params:** \`batchId\`
- **Controller:** \`InventoryController.deleteBatch\`

---

## Stock Endpoints

### POST /stock/consume
Consume stock for a single item.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Body:** \`{ itemId, quantity, reason, referenceId }\`
- **Controller:** \`InventoryController.consumeStock\`

### POST /stock/consume/bulk
Consume stock for multiple items in a single operation.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Body:** \`{ items: [{ itemId, quantity, reason, referenceId }] }\`
- **Controller:** \`InventoryController.consumeStockBulk\`

### POST /items/:itemId/adjust
Adjust the on-hand stock quantity for an item.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Params:** \`itemId\`
- **Body:** \`{ newOnHand, reason }\`
- **Controller:** \`InventoryController.adjustStock\`

### POST /items/:itemId/allocate
Allocate stock for a specific reference (e.g., appointment or order).
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Params:** \`itemId\`
- **Body:** \`{ quantity, referenceId }\`
- **Controller:** \`InventoryController.allocateStock\`

### POST /items/:itemId/release
Release previously allocated stock back to available inventory.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Params:** \`itemId\`
- **Body:** \`{ quantity, referenceId }\`
- **Controller:** \`InventoryController.releaseStock\`

---

## Vendor Endpoints

### POST /vendors
Create a new vendor.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Body:** Vendor details (name, contact, address, etc.)
- **Controller:** \`InventoryController.createVendor\`
- **Response:** \`201\` — \`{ data, message }\`

### GET /organisation/:organisationId/vendors
List all vendors for an organisation.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Params:** \`organisationId\`
- **Controller:** \`InventoryController.listVendors\`

### GET /vendors/:vendorId
Get a specific vendor by ID.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Params:** \`vendorId\`
- **Controller:** \`InventoryController.getVendor\`

### PATCH /vendors/:vendorId
Update vendor details.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Params:** \`vendorId\`
- **Body:** Fields to update
- **Controller:** \`InventoryController.updateVendor\`

### DELETE /vendors/:vendorId
Delete a vendor.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Params:** \`vendorId\`
- **Controller:** \`InventoryController.deleteVendor\`

---

## Meta Field Endpoints

### POST /meta-fields
Create a custom meta field for inventory items.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Body:** \`{ name, type, options, required }\`
- **Controller:** \`InventoryController.createMetaField\`
- **Response:** \`201\` — \`{ data, message }\`

### GET /meta-fields
List all custom meta fields.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Controller:** \`InventoryController.listMetaFields\`

### PATCH /meta-fields/:fieldId
Update a custom meta field.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Params:** \`fieldId\`
- **Body:** Fields to update
- **Controller:** \`InventoryController.updateMetaField\`

### DELETE /meta-fields/:fieldId
Delete a custom meta field.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Params:** \`fieldId\`
- **Controller:** \`InventoryController.deleteMetaField\`

---

## Alert Endpoints

### GET /organisation/:organisationId/alerts/low-stock
Get items with stock levels below their reorder threshold.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Params:** \`organisationId\`
- **Controller:** \`InventoryController.getLowStockAlerts\`

### GET /organisation/:organisationId/alerts/expiring
Get items with batches approaching their expiry date.
- **Auth:** \`authorizeCognito\`
- **RBAC:** \`withOrgPermissions\`, \`requirePermission\`
- **Params:** \`organisationId\`
- **Controller:** \`InventoryController.getExpiringAlerts\`
`;
