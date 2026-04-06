export const content = `
# Mobile App (React Native)

The Yosemite Crew mobile app is built with **React Native 0.81.4** and TypeScript, providing pet owners with appointment scheduling, virtual consultations, health record management, and real-time chat with veterinary providers.

## Prerequisites

- **Node.js** v20+
- **pnpm** package manager
- **React Native CLI** (\`npx react-native\`)
- **Android Studio** (for Android development)
- **Xcode** (for iOS development, macOS only)
- **AWS Account** with Amplify, Cognito, SES configured
- **Firebase Project** with Cloud Messaging enabled

## Setup

### 1. Install Monorepo Dependencies

\`\`\`bash
# From root of Yosemite-Crew
pnpm install
\`\`\`

### 2. AWS Amplify Sandbox

\`\`\`bash
cd apps/mobileAppYC
npx ampx sandbox
\`\`\`

This generates the \`amplify_outputs.json\` file needed for authentication.

### 3. AWS Credentials

Create an IAM user with permissions for:
- **Amazon Cognito** — User pool management
- **Amazon SES** — Email sending for OTP
- **Amazon Pinpoint** — Push notifications

### 4. Environment Configuration

Create \`apps/mobileAppYC/variables.local.ts\` with your credentials:

\`\`\`typescript
export const API_BASE_URL = "http://localhost:3001";
export const STREAM_API_KEY = "your-stream-key";
export const STRIPE_PUBLISHABLE_KEY = "your-stripe-key";
// ... other configuration
\`\`\`

### 5. Firebase Setup

**Android:**
- Place \`google-services.json\` in \`apps/mobileAppYC/android/app/\`

**iOS:**
- Place \`GoogleService-Info.plist\` in \`apps/mobileAppYC/ios/YosemiteCrew/\`

### 6. Update Application Identifiers

Update the bundle identifier and package name in:
- \`android/app/build.gradle\` — \`applicationId\`
- \`ios/YosemiteCrew.xcodeproj\` — Bundle Identifier

## Running the App

\`\`\`bash
cd apps/mobileAppYC

# Start Metro bundler
pnpm run start

# Run on Android
pnpm run android

# Run on iOS
pnpm run ios
\`\`\`

## Key Features

- **Authentication** — AWS Amplify with Cognito
- **Appointment Booking** — Search clinics, view availability, book appointments
- **Push Notifications** — Firebase Cloud Messaging with Notifee
- **Real-time Chat** — Stream Chat integration
- **Pet Profiles** — Manage companion (pet) profiles with breeding info, medical records, insurance, and physical attributes
- **Breed Data** — Bundled breed catalogs (dogs, cats, horses) for offline species/breed selection
- **Linked Businesses** — Discover, search, and link to veterinary businesses via directory search or QR code scanning
- **Documents** — View and upload medical documents
- **Payments** — Stripe integration for appointment billing
- **Deep Linking** — Custom \`yc://\` scheme for navigation

## Tech Stack

| Library | Purpose |
|---------|---------|
| React Navigation 7 | Screen navigation |
| Redux Toolkit 2.6 | State management |
| Firebase Messaging 23.5 | Push notifications |
| Notifee 9.1 | Local notification display |
| Stream Chat RN 8.8 | Chat UI |
| AWS Amplify UI 2.6 | Authentication screens |
| Stripe RN 0.57 | Payment processing |
| React Hook Form 7.63 | Form handling |
| Reanimated 4.1 | Smooth animations |
| AsyncStorage 2.1 | Persistent storage |
| Liquid Glass 0.7 | iOS 26 glass effects |

## Troubleshooting

- **Metro cache issues:** \`pnpm start -- --reset-cache\`
- **iOS pod issues:** \`cd ios && pod install --repo-update\`
- **Android build errors:** Ensure \`google-services.json\` is in place
- **Amplify errors:** Verify \`amplify_outputs.json\` exists after sandbox setup
`;
