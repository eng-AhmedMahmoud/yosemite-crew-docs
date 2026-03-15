export const content = `
# Installation

## Prerequisites

- **Git** — version control
- **Node.js** — v20 or later recommended
- **pnpm** — package manager (v8.15+)
- **MongoDB** — for the backend database
- **Redis** — for caching and job queues

## Clone the Repository

Create a fork from the [Yosemite-Crew repository](https://github.com/YosemiteCrew/Yosemite-Crew) as described in GitHub docs. You can skip this step if you want to just run the project and not contribute.

\`\`\`bash
# Clone your fork (stable)
git clone https://github.com/yourusername/Yosemite-Crew.git

# Or clone dev branch for bleeding edge
git clone -b dev https://github.com/yourusername/Yosemite-Crew.git

cd Yosemite-Crew
\`\`\`

## Install Dependencies

\`\`\`bash
pnpm install
\`\`\`

## Run the Applications

### Web (Frontend + Backend)

\`\`\`bash
# Run the website only
pnpm run dev --filter website

# Run the API only
pnpm run dev --filter api

# Run both website & API
pnpm run dev
\`\`\`

### Mobile App

\`\`\`bash
# Navigate to mobile app directory
cd apps/mobileAppYC

# Start Metro server
pnpm run start

# Run on Android
pnpm run android

# Run on iOS
pnpm run ios
\`\`\`

## Test Credentials

For development and testing, use the following credentials:

| Role | Email | Password |
|------|-------|----------|
| Admin | \`admin@yosemitecrew.com\` | \`Test1234!\` |
| Vet | \`vet@yosemitecrew.com\` | \`Test1234!\` |

## Environment Variables

Each app has its own environment configuration:

- **Frontend:** \`apps/frontend/.env.local\`
- **Backend:** \`apps/backend/.env\`
- **Mobile:** \`apps/mobileAppYC/variables.local.ts\`

Refer to the individual app setup guides for detailed environment variable configuration.
`;
