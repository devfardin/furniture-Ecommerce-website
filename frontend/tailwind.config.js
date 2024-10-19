/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app.jsx",
  ],
  theme: {
    extend: {
      colors:{
          primary:'#599A8D',
          heading: '#333333',
          bg: '#F4F8FB',
          pera: '#666666',
          dashPrimary: '#757FEF',
          dashHoverBg: '#F5F5F9',
          dashColor: '#260944',
          dashBorder: '#ededed'
        }
      
    },
  },
  plugins: [
  ],
}

