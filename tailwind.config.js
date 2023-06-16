/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#223E3F',
        secondary: '#CF8420',
        'light-gray': '#7B7B7B',
      },
      gridTemplateColumns: {
        'list-cards': 'repeat(auto-fit, minmax(250px, 1fr))',
      },
      screens: {
        xs: '400px',
      },
    },
  },
  plugins: [],
};
