export const content = `
# FHIR Architecture

Yosemite Crew models animal health workflows using **FHIR (Fast Healthcare Interoperability Resources)** with custom extensions adapted for veterinary use cases.

## How It Is Built

1. **Define domain models** and helpers in \`packages/types/src\`
2. **Map to FHIR** with \`toFHIR*\` helper functions
3. **Map back** from FHIR with \`fromFHIR*\` helpers where supported
4. **Wrap in DTOs** in \`packages/types/src/dto\` for request/response validation

## Core Mappings (Domain to FHIR)

| Domain Model | FHIR Resource | Source File |
|-------------|---------------|-------------|
| Users / Profiles | Practitioner | packages/types/src/user.ts |
| Organisations | Organization | packages/types/src/organization.ts |
| Organisation Rooms | Location | packages/types/src/organisationRoom.ts |
| Specialities | Organization | packages/types/src/speciality.ts |
| Services | HealthcareService | packages/types/src/service.ts |
| User-Org Roles | PractitionerRole | packages/types/src/userOrganization.ts |
| Companions (Pets) | Patient | packages/types/src/companion.ts |
| Parents (Owners) | RelatedPerson | packages/types/src/parent.ts |
| Appointments | Appointment | packages/types/src/appointment.ts |
| Invoices | Invoice | packages/types/src/invoice.ts |
| Forms | Questionnaire | packages/types/src/form.ts |
| Form Submissions | QuestionnaireResponse | packages/types/src/form.ts |
| Addresses | Address | packages/types/src/address.model.ts |

## Custom Extensions

Standard FHIR resources are extended with animal-health-specific fields. Extension URLs live under \`https://yosemitecrew.com/fhir/...\`.

### Companion (Patient) Extensions
- **Species** - animal species classification
- **Neuter status** - spayed/neutered flag
- **Blood group** - blood type for the animal
- **Breeding info** - breeding-related metadata

### Organisation Extensions
- **Certifications** - veterinary certifications
- **Verification flags** - business verification status
- **Organisation IDs** - external identifier mappings

### Appointment Extensions
- **Emergency flag** - marks urgent appointments
- **Attachments** - linked documents and files
- **Form IDs** - associated questionnaire references

### Invoice Extensions
- **Payment metadata** - Stripe payment intent details
- **Billing information** - connected account references

### Form Extensions
- **Schema metadata** - form field definitions
- **Submission metadata** - response tracking and signing status

## DTO Layer (API Contracts)

Each DTO file in \`packages/types/src/dto\` provides:

- A **request/response type alias** that matches the FHIR resource shape
- A **from*RequestDTO** function that validates resourceType and converts to the domain model
- A **to*ResponseDTO** function that converts the domain model back to the FHIR resource

### Example DTOs

| DTO File | FHIR Resource |
|----------|---------------|
| packages/types/src/dto/appointment.dto.ts | Appointment |
| packages/types/src/dto/companion.dto.ts | Patient |
| packages/types/src/dto/organization.dto.ts | Organization |
| packages/types/src/dto/form.dto.ts | Questionnaire / QuestionnaireResponse |

## Adding or Extending a Resource

1. Add or update the domain type in \`packages/types/src\`
2. Implement toFHIR* and fromFHIR* in the same file, including any extension URLs
3. Export the types and helpers from \`packages/types/src/index.ts\`
4. Add a DTO wrapper in \`packages/types/src/dto\` to validate resourceType and expose request/response helpers
5. Use the DTO helpers in backend controllers and services instead of hand-rolling FHIR shapes
`;
