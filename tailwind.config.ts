import type { Config } from 'tailwindcss';
import scrollbar from 'tailwind-scrollbar';
import tailwindcssAnimate from 'tailwindcss-animate';
import tailwindScrollbarHide from 'tailwind-scrollbar-hide';

const config: Config = {
  darkMode: ['class'],

  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
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
        _primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
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
        primary: {
          '500': '#DBDCFF',
          '600': '#313399',
          '700': '#2E294A',
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        warning: {
          '100': '#FFF5D6',
        },
        hfpBlue: '#2d2a8f',
        hfpLight: '#e4e1fb',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      fontSize: {
        'heading-1': [
          '1.25rem',
          {
            fontWeight: '500',
          },
        ],
        'desktop-heading-1': [
          '1.75rem',
          {
            fontWeight: '500',
          },
        ],
        'heading-2': [
          '1rem',
          {
            fontWeight: '400',
          },
        ],
        'heading-4': [
          '2rem',
          {
            fontWeight: '500',
          },
        ],
        'heading-2-medium': [
          '1rem',
          {
            fontWeight: '500',
          },
        ],
        'desktop-heading-2': [
          '1rem',
          {
            fontWeight: '400',
          },
        ],
        'desktop-heading-2-medium': [
          '1rem',
          {
            fontWeight: '500',
          },
        ],
        'heading-3': [
          '0.875rem',
          {
            fontWeight: '400',
          },
        ],
        'desktop-heading-3': [
          '1.25rem',
          {
            fontWeight: '500',
          },
        ],
        'heading-3-light': [
          '0.875rem',
          {
            fontWeight: '300',
          },
        ],
        'heading-3-medium': [
          '0.875rem',
          {
            fontWeight: '500',
          },
        ],
        description: [
          '0.75rem',
          {
            fontWeight: '400',
          },
        ],
        'desktop-description': [
          '1rem',
          {
            fontWeight: '400',
          },
        ],
        title: [
          '0.5rem',
          {
            fontWeight: '400',
          },
        ],
        'title-medium': [
          '0.5rem',
          {
            fontWeight: '500',
          },
        ],
        'desktop-title': [
          '1.25rem',
          {
            fontWeight: '400',
          },
        ],
        'desktop-title-medium': [
          '1.25rem',
          {
            fontWeight: '500',
          },
        ],
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      boxShadow: {
        shadow: '4px 4px 14px 0px #4d4fb426',
      },
      screens: {
        desktop: '768px',
      },
    },
  },
  plugins: [tailwindcssAnimate, tailwindScrollbarHide, scrollbar],
};
export default config;
