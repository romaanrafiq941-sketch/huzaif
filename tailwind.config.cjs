/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{tsx,ts,jsx,js,html}'],
  theme: {
    extend: {
      colors: {
        coffee: '#6F4E37',
        platinum: '#E5E4E2',
        lavender: '#E6E0F0',
      },
    },
  },
  plugins: [],
};
