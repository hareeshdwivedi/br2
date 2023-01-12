/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.js',
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '0 5px 15px rgb(0 0 0 / 10%)',
      },
      colors: {
        secondary: '#29f3c3',
      },
    },
  },
  plugins: [],
};
