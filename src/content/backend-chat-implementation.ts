export const content = `
# Chat Implementation Guide

This guide covers the Stream Chat backend integration for real-time messaging between pet owners (mobile app) and veterinary staff (PMS).

## Architecture Overview

### Development Flow
- Skip explicit channel creation
- Auto-generate channels on first message
- Useful for rapid prototyping

### Production Flow
- Explicit channel lifecycle management
- Channels created when appointment chat is activated
- Channels closed when session ends

## Required Endpoints

### 1. POST /api/chat/token

Generate a Stream Chat token for the authenticated user.

\`\`\`javascript
import { StreamChat } from 'stream-chat';

const serverClient = StreamChat.getInstance(
  process.env.STREAM_API_KEY,
  process.env.STREAM_API_SECRET
);

router.post('/token', authorizeCognito, async (req, res) => {
  const userId = req.user.sub;
  const token = serverClient.createToken(userId);
  res.json({ token });
});
\`\`\`

### 2. POST /api/chat/channels

Create an appointment-linked chat channel.

\`\`\`javascript
router.post('/channels', authorizeCognito, async (req, res) => {
  const { appointmentId } = req.body;
  const appointment = await Appointment.findById(appointmentId);
  if (!appointment) return res.status(404).json({ message: 'Not found' });

  const channel = await serverClient.channel('messaging', appointmentId, {
    members: [appointment.vetId, appointment.parentId],
    appointment_id: appointmentId,
  });
  await channel.create();

  appointment.chatChannelId = channel.id;
  appointment.chatStatus = 'active';
  await appointment.save();

  res.status(201).json({ channelId: channel.id });
});
\`\`\`

### 3. POST /api/chat/channels/:channelId/end

Close an active chat channel.

\`\`\`javascript
router.post('/channels/:channelId/end', authorizeCognito, async (req, res) => {
  const { channelId } = req.params;
  await Appointment.findOneAndUpdate(
    { chatChannelId: channelId },
    { chatStatus: 'closed' }
  );
  res.json({ message: 'Channel closed' });
});
\`\`\`

### 4. GET /api/chat/channels

List active channels for the authenticated user.

### 5. POST /api/webhooks/stream

Handle Stream Chat webhooks with HMAC signature verification.

## Environment Variables

| Variable | Description |
|----------|-------------|
| \\\`STREAM_API_KEY\\\` | Stream Chat API key |
| \\\`STREAM_API_SECRET\\\` | Stream Chat API secret |

## Database Schema Updates

Add to the Appointment model:

\`\`\`javascript
{
  chatChannelId: { type: String, default: null },
  chatStatus: { type: String, enum: ['active', 'closed'], default: null },
  chatActivationMinutes: { type: Number, default: 30 }
}
\`\`\`

## Frontend Integration

### Mobile (React Native)
\`\`\`javascript
import { StreamChat } from 'stream-chat';
import { Chat, Channel, MessageList, MessageInput } from 'stream-chat-react-native';

const chatClient = StreamChat.getInstance(STREAM_API_KEY);
await chatClient.connectUser({ id: userId }, token);
\`\`\`

### Web PMS (React)
\`\`\`javascript
import { StreamChat } from 'stream-chat';
import { Chat, Channel, MessageList, MessageInput } from 'stream-chat-react';

const chatClient = StreamChat.getInstance(STREAM_API_KEY);
await chatClient.connectUser({ id: userId }, token);
\`\`\`

## Testing

\`\`\`bash
# Generate token
curl -X POST http://localhost:3001/api/chat/token \\
  -H "Authorization: Bearer <cognito-token>"

# Create channel
curl -X POST http://localhost:3001/api/chat/channels \\
  -H "Authorization: Bearer <cognito-token>" \\
  -H "Content-Type: application/json" \\
  -d '{"appointmentId": "<id>"}'
\`\`\`
`;
