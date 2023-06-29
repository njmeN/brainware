/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      colors:{
           gray:'#CAC6DD',
      },
      fontFamily:{
        "Inter": ['Inter', 'sans-serif'],
        'sora': ['Sora', 'sans-serif'],
        'sourceCodePro': ['Source Code Pro', 'monospace'],
        'spaceGrotesk': ['Space Grotesk', 'sans-serif'],
      },
      screens: {
        'sm': '375px',  
        'md': '768px', 
        'lg': '1110px',

      },
    },
  },
  plugins: [],
}

