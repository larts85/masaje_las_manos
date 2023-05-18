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
        nautral: {
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
        variations: {
          primaryDisable: '#785825CC',
          secondaryHover: '#F8D498CC',
          transparentBorder: 'rgba(0, 0, 0, 0.7)',
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
      },
      height: {
        '92px': '92px',
        '52px': '52px',
      },
      boxShadow: {
        predetermined: '4px 4px 2px rgba(0, 0, 0, 0.25)',
        active: 'inset 4px 4px 1px rgba(0, 0, 0, 0.1)',
        disabled: 'rgba(120, 88, 37, 0.8)',
        transparentActive: 'inset 4px 4px 1px #EDE7E7',
      },
      borderWidth: {
        '3px': '3px',
        '0.5px': '0.5px',
      },
    },
  },
  plugins: [],
}
