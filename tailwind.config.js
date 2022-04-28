module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        'primary': '#7C2AE8',
        'secondary': '#00C4CC',
        'third': '#183B56',
        'white': '#FFFFFF',
        'gray': '#ECF1F9',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
       },
      backgroundImage: {
        'featured1': "url('/src/assets/images/featured-icons/featured1-img.png')",
        'featured2': "url('/src/assets/images/featured-icons/featured2-img.png')",
        'featured3': "url('/src/assets/images/featured-icons/featured3-img.png')",
        'featured4': "url('/src/assets/images/featured-icons/featured4-img.png')",
        'featured5': "url('/src/assets/images/featured-icons/featured5-img.png')",
        'featured6': "url('/src/assets/images/featured-icons/featured6-img.png')",
        'featured7': "url('/src/assets/images/featured-icons/featured7-img.png')",
        'featured8': "url('/src/assets/images/featured-icons/featured8-img.png')",
        'login1': "url('/src/assets/images/login/bg-2.png')",
      }
    },
  },
  plugins: [],
}
