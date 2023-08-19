import { shadcnPreset } from './src/lib/shadcn-ui/preset';

import { Config } from 'tailwindcss';

const config = {
  content: [
    './components/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    '../../packages/ui/src/**/*.{ts,tsx}',
  ],
  presets: [shadcnPreset],
} satisfies Config;

export default config;
