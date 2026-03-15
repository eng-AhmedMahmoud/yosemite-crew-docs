export const content = `
# Liquid Glass (iOS 26)

Documentation for the Liquid Glass React Native library (\`@callstack/liquid-glass\` v0.7.0), bringing iOS 26 liquid glass visual effects to React Native.

## Installation

\`\`\`bash
npm install @callstack/liquid-glass
\`\`\`

**Requirements:** Xcode 26+, iOS 26+ deployment target, React Native 0.81+

## LiquidGlassView

The primary component that wraps children with a liquid glass effect.

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \\\`interactive\\\` | \\\`boolean\\\` | \\\`false\\\` | Enables interactive glass distortion on touch |
| \\\`effect\\\` | \\\`'clear' \\| 'regular' \\| 'none'\\\` | \\\`'regular'\\\` | Glass effect intensity |
| \\\`tintColor\\\` | \\\`string\\\` | — | Custom tint color for the glass |
| \\\`colorScheme\\\` | \\\`'dark' \\| 'light' \\| 'auto'\\\` | \\\`'auto'\\\` | Color scheme adaptation |

### Usage

\`\`\`jsx
import { LiquidGlassView } from '@callstack/liquid-glass';

function GlassCard() {
  return (
    <LiquidGlassView
      effect="regular"
      interactive
      style={{ borderRadius: 20, padding: 16 }}
    >
      <Text>This content has a glass effect</Text>
    </LiquidGlassView>
  );
}
\`\`\`

### Effect Modes

| Effect | Description |
|--------|-------------|
| \\\`clear\\\` | Transparent glass with subtle blur |
| \\\`regular\\\` | Standard frosted glass appearance |
| \\\`none\\\` | No glass effect (useful for conditional rendering) |

## LiquidGlassContainerView

Groups multiple glass views so their effects merge together seamlessly.

\`\`\`jsx
import {
  LiquidGlassView,
  LiquidGlassContainerView,
} from '@callstack/liquid-glass';

function MergedGlassCards() {
  return (
    <LiquidGlassContainerView>
      <LiquidGlassView effect="regular" style={styles.card}>
        <Text>Card 1</Text>
      </LiquidGlassView>
      <LiquidGlassView effect="regular" style={styles.card}>
        <Text>Card 2</Text>
      </LiquidGlassView>
    </LiquidGlassContainerView>
  );
}
\`\`\`

## PlatformColor Integration

Use PlatformColor for automatic text color adaptation:

\`\`\`jsx
import { PlatformColor } from 'react-native';

<Text style={{ color: PlatformColor('label') }}>
  Auto-adapting text color
</Text>
\`\`\`

## Known Issues

- Only available on iOS 26+; renders as a plain view on earlier versions
- Requires Xcode 26 beta or later for compilation
- Performance may degrade with many nested glass views
- The library is in early release (v0.7.0) and the API may change
`;
