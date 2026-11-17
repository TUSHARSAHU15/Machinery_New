/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#004669',
          dark: '#003854',
          light: '#076290',
        },
        gold: {
          DEFAULT: '#e8b328',
          hover: '#d49f14',
          light: '#f4c23d',
        },
        cg: {
          heading: '#435363',
          body: '#8997a5',
          muted: '#666666',
          link: '#336699',
          border: '#c6d093',
          divider: '#eef2f5',
          input: '#e1e8ed',
          bgLight: '#F5FAFE',
        },
        whatsapp: '#25D366',
      },
      fontFamily: {
        sans: ["'Open Sans'", 'system-ui', 'sans-serif'],
        roboto: ["'Roboto'", 'sans-serif'],
        heading: ["'Open Sans'", 'sans-serif'],
      },
      maxWidth: {
        boxed: '1170px',
      },
      boxShadow: {
        boxed: '0px 0px 30px rgba(0, 0, 0, 0.4)',
        card: '0 1px 3px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
