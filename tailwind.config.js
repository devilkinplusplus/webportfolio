/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        lg: '1140px',
        xl: '1140px',
        '2xl': '1140px',
      },
    },
    extend: {
      colors:{
        "black-pro":"#040D12",
        "orange-pro":"#FF4C29",
        "orange-bright":"#FD7014"
      },
      fontFamily:{
        gemunu:['Gemunu Libre', 'sans-serif'],
      },
      width:{
        "128":"512px",
        "256":"768px"
      },
      height:{
        "128":"512px",
      }
    },

  },
  plugins: [],
}

