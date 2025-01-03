/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mainColor: '#008485', // 하나은행 녹색
        pointColor: '#F4FEF6',
        hoverColor: '#017373',
        focusColor: '#DEFAFA'
      },
    },
  },
  plugins: [],
};
