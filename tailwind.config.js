const plugin = require("tailwindcss/plugin")

const myClass = plugin(function({addUtilities}){
  addUtilities({
    ".my-rotate-y-180":{
      transform:"rotateY(180deg)",
    },
    ".preserve-3d":{
      transformStyle:"preserve-3d",
    },
    ".perspective": {
      perspective:"1000px"
    },
    ".backface-hidden":{
      backfaceVisibility : "hidden",
    }
  })
})

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode:'class',
  theme: {
    extend: {
      backgroundColor : {
        primary: 'var(--color-bg-primary)',
        second: 'var(--color-bg-secondary)',
        buttons: 'var(--color-bg-button)',
      },
      textColor:{
        accent: 'var(--color-text-accent)',
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        btnText: 'var(--color-bg-secondary)',
      },
      borderColor: {  
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
        input: 'var(--color-bg-input)',
        accent: 'var(--color-text-accent)',

      }
    },
  },
  plugins: [myClass],
}
