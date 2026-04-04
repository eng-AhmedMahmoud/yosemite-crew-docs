import { content as overview } from "./overview";
import { content as installation } from "./installation";
import { content as projectStructure } from "./project-structure";
import { content as techStack } from "./tech-stack";
import { content as frontend } from "./frontend";
import { content as backend } from "./backend";
import { content as mobileApp } from "./mobile-app";
import { content as apiIndex } from "./api-index";
import { content as apiAppointment } from "./api-appointment";
import { content as apiChat } from "./api-chat";
import { content as apiCompanion } from "./api-companion";
import { content as apiDocument } from "./api-document";
import { content as apiForm } from "./api-form";
import { content as apiInventory } from "./api-inventory";
import { content as apiInvoice } from "./api-invoice";
import { content as apiNotification } from "./api-notification";
import { content as apiOrganization } from "./api-organization";
import { content as apiStripe } from "./api-stripe";
import { content as apiTask } from "./api-task";
import { content as apiUser } from "./api-user";
import { content as apiOther } from "./api-other";
import { content as backendChatImplementation } from "./backend-chat-implementation";
import { content as notificationSetup } from "./notification-setup";
import { content as liquidGlass } from "./liquid-glass";
import { content as fhirArchitecture } from "./fhir-architecture";
import { content as engineeringStandards } from "./engineering-standards";
import { content as contributing } from "./contributing";
import { content as codeOfConduct } from "./code-of-conduct";
import { content as security } from "./security";

const contentMap: Record<string, string> = {
  overview,
  installation,
  "project-structure": projectStructure,
  "tech-stack": techStack,
  frontend,
  backend,
  "mobile-app": mobileApp,
  "api-index": apiIndex,
  "api-appointment": apiAppointment,
  "api-chat": apiChat,
  "api-companion": apiCompanion,
  "api-document": apiDocument,
  "api-form": apiForm,
  "api-inventory": apiInventory,
  "api-invoice": apiInvoice,
  "api-notification": apiNotification,
  "api-organization": apiOrganization,
  "api-stripe": apiStripe,
  "api-task": apiTask,
  "api-user": apiUser,
  "api-other": apiOther,
  "backend-chat-implementation": backendChatImplementation,
  "notification-setup": notificationSetup,
  "liquid-glass": liquidGlass,
  "fhir-architecture": fhirArchitecture,
  "engineering-standards": engineeringStandards,
  contributing,
  "code-of-conduct": codeOfConduct,
  security,
};

export function getContent(slug: string): string | undefined {
  return contentMap[slug];
}
