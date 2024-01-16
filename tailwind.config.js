/** @type {import('tailwindcss').Config} */

const shadcn_preset = {
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
};

module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './containers/**/*.{js,ts,jsx,tsx,mdx}',
    './dashboard/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  presets: [shadcn_preset],
  prefix: '',
  theme: {
    extend: {
      colors: {
        'royal-purple': 'hsl(330, 100%, 50%)',
        'vivid-orange': 'hsl(48, 100%, 50%)',
        'deep-slate-blue': 'hsl(270, 100%, 29.75%)',
        coral: 'hsl(0, 89.87%, 60.5%)',
        black: 'hsl(0, 0%, 0%)',
        white: 'hsl(0, 0%, 100%)',

        blueOne: '#34a0a4',
        lightBlue: '#eef8f5',
        redOne: '#ca2b43',
        grayOne: '#e6e4e5',
        grayButton: '#6f6f6f',
        infoIcon: '#5d5d5d',
        bgColour: '#fcfcfc',
        buttonColor: '#40769f',
        buttonEnd: 'gray',
        skillsBg: '#dedede',
        greenText: '#77ce7e',
        redText: '#d91512',
        favShare: '#39455d',
        appointmentColor: '#52b69a',

        darkgreen: '#1dbab5',
        grey: '#e5e7eb',
        grey2: '#9999',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('tailwind-scrollbar')],
};
