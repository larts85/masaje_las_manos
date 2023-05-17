/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        Primary: {
          base: '#07BAC1',
          light: '#88DBDF',
          lighter: '#C1EDEF',
          darker: '#068A8F',
        },
        soport: {
          error: '#FF4E4E',
          errorLight: '#FF8282',
          success: '#00AF80',
          successLight: '#00E08B',
        },
        natural: {
          base: '#7B7B7B',
          light: '#C5C5C5',
          lighter: '#F8F8F8',
          darker: '#333333',
        },
        secondary: {
          base: '#F8D498',
          light: '#FFE7C0',
          lighter: '#FFF5E5',
          darker: '#785825',
        },
      },
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
      },
      fontSize: {
        '10px': '10px',
        '40px': '40px',
        '32px': '32px',
      },
      lineHeight: {
        '14px': '14px',
        '64px': '64px',
        '56px': '56px',
      },
    },
  },
  plugins: [],
}
