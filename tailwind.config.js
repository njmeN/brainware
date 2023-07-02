/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      spacing:{
        '12%':'12%',
        '6%':"6%",
        '25px':'-5%',
        '45px':'-8%',
      },
      colors:{
           gray2: '#ADA8C3',
           lightGray:'rgba(71, 64, 96, 0.37)',
           gray:'#CAC6DD',
           darkGray:'#6C7275',
           lightBlack:'rgba(14, 12, 23, 0.85)',
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
        'xl':'1500px',
      },
    },
  },
  plugins: [],
}

