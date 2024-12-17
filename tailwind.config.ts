import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        black: '#000000',
        // primary: '#93B10B',
        // secondary: '#E4F2F6',
        tertiary: '#818181',
        error: '#DC2626',
        success: '#10B981',
        button: '#2A8CBF',
        bgDark: '#14161F',
        boxColorDark: '#1A1B26',
        boxOutline: '#283135',
        boxShadow: '#2B2D3F',
        newLinear: '#5A5F89',
        lightBg: '#F0F0F0',
        'bg-gradientOne': '#252736',
        'bg-gradientTwo': '#010103',
        UploadImgBgGradientOne: '#2F3145',
        inputBg: '#1A1B26',
        inputBorder: '#283135',
        UploadImgBgGradientTwo: '#242635',

        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
            DEFAULT: 'hsl(var(--card))',
            foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
            DEFAULT: 'hsl(var(--popover))',
            foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
            DEFAULT: '#93B10B',
            foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
            DEFAULT: '#E4F2F6',
            foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
            DEFAULT: 'hsl(var(--muted))',
            foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
            DEFAULT: 'hsl(var(--accent))',
            foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
            DEFAULT: 'hsl(var(--destructive))',
            foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
            '1': 'hsl(var(--chart-1))',
            '2': 'hsl(var(--chart-2))',
            '3': 'hsl(var(--chart-3))',
            '4': 'hsl(var(--chart-4))',
            '5': 'hsl(var(--chart-5))',
        },
    },
    },
  },
  plugins: [],
} satisfies Config;
