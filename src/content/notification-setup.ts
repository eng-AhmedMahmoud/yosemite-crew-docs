export const content = `
# Notification Setup Guide

Complete guide for implementing push notifications using Firebase Cloud Messaging (FCM) and Notifee.

## Overview

| Library | Version | Purpose |
|---------|---------|---------|
| React Native Firebase Messaging | 23.5.0 | Cloud messaging transport |
| Notifee | 9.1.8 | Local notification display and channels |

## Mobile App Configuration

### 1. Request Permissions

\`\`\`javascript
import messaging from '@react-native-firebase/messaging';

const authStatus = await messaging().requestPermission();
const enabled =
  authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  authStatus === messaging.AuthorizationStatus.PROVISIONAL;
\`\`\`

### 2. Channel Setup

\`\`\`javascript
import notifee from '@notifee/react-native';

await notifee.createChannel({
  id: 'yc_general_notifications',
  name: 'General Notifications',
  importance: AndroidImportance.HIGH,
});
\`\`\`

### 3. Deep-Link Handling

The app uses the \\\`yc://\\\` custom URL scheme for navigation from notifications.

## Deep-Link Contract

| navigationId | Screen | referenceId |
|--------------|--------|-------------|
| \\\`appointment-details\\\` | Appointment detail | appointmentId |
| \\\`chat\\\` | Chat conversation | channelId |
| \\\`companion-profile\\\` | Pet profile | companionId |
| \\\`document-view\\\` | Document viewer | documentId |
| \\\`task-detail\\\` | Task detail | taskId |
| \\\`invoice-view\\\` | Invoice detail | invoiceId |

## Android Setup

### AndroidManifest.xml
\`\`\`xml
<uses-permission android:name="android.permission.POST_NOTIFICATIONS" />
<uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED" />
\`\`\`

### build.gradle
\`\`\`groovy
apply plugin: 'com.google.gms.google-services'
\`\`\`

Place \\\`google-services.json\\\` in \\\`apps/mobileAppYC/android/app/\\\`.

## iOS Setup

- Enable **Push Notifications** capability in Xcode
- Enable **Background Modes** > **Remote notifications**
- Create APNs key in Apple Developer Console
- Upload key to Firebase Console
- Place \\\`GoogleService-Info.plist\\\` in \\\`apps/mobileAppYC/ios/YosemiteCrew/\\\`

## Backend Developer Checklist

### Token Lifecycle

| Event | Action |
|-------|--------|
| User logs in | Save FCM token via \\\`POST /deviceToken/register\\\` |
| User logs out | Clear token via \\\`POST /deviceToken/unregister\\\` |
| Token refreshes | Update stored token |
| App opens | Check and refresh token if needed |

### Message Payload Structure

\`\`\`json
{
  "message": {
    "token": "<fcm-device-token>",
    "notification": {
      "title": "Appointment Confirmed",
      "body": "Your appointment with Dr. Smith is confirmed for 2pm"
    },
    "data": {
      "navigationId": "appointment-details",
      "referenceId": "appointment-123",
      "type": "appointment_confirmed"
    }
  }
}
\`\`\`

### Node.js Sender Example

\`\`\`javascript
import admin from 'firebase-admin';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

async function sendNotification(token, title, body, data) {
  await admin.messaging().send({
    token,
    notification: { title, body },
    data,
    android: {
      notification: { channelId: 'yc_general_notifications' },
    },
  });
}
\`\`\`

## Topic Messaging

Send to all users subscribed to a topic:

\`\`\`javascript
await admin.messaging().send({
  topic: 'org-updates',
  notification: {
    title: 'Clinic Update',
    body: 'New services available',
  },
});
\`\`\`
`;
