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
        primary: {
          base: '#07BAC1',
          light: '#88DBDF',
          lighter: '#C1EDEF',
          darker: '#068A8F',
        },
        support: {
          error: '#FF4E4E',
          errorLight: '#FF8282',
          success: '#00AF80',
          successLight: '#00E08B',
        },
        neutral: {
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
        transparent: {
          secondaryDarker80: 'rgba(120,88,37,0.8)',
          secondaryBase80: 'rgba(248,212,152,0.8)',
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
      width: {
        '815px': '815px',
        '175px': '175px',
        '400px': '400px',
      },
      height: {
        '92px': '92px',
        '52px': '52px',
        '89px': '89px',
      },
      boxShadow: {
        'button-active': 'inset 3px 3px 6px rgba(0, 0, 0, 0.25)',
        'button-primary-hover': ' 2px 2px 5px rgba(0, 0, 0, 0.25)',
        'button-hover': '3px 3px 6px rgba(0, 0, 0, 0.25)',
        'button-transparent': 'inset 3px 3px 6px rgba(248, 212, 152, 0.25)',
      },
      borderWidth: {
        '3px': '3px',
        '0.5px': '0.5px',
        '1px': '1px',
      },
      borderRadius: {
        '4px': '4px',
        '8px': '8px',
        '12px': '12px',
      },
    },
  },
  plugins: [],
}
