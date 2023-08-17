import { shadcnPreset } from './lib/shadcn-ui/preset';

import { Config } from 'tailwindcss';

const config = {
  content: [
    './components/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    '../../packages/ui/components/**/*.{ts,tsx}',
  ],
  presets: [shadcnPreset],
} satisfies Config;

export default config;
