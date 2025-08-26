import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        neon: {
          violet: '#a855f7',
          violetLight: '#c084fc',
          violetDark: '#7e22ce',
          violetGlow: 'rgba(168, 85, 247, 0.7)',
        },
        // ... rest of your existing colors
      },
      // ... rest of your existing config
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;