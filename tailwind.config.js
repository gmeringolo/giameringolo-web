
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mirza: ["Mirza", "serif"],
        inter_tight: ["Inter_Tight", "serif"],
      },
      colors: {
        'primary': '#8f46a3',
        'purple': '#8D56A9',
        'rosa': '#F4E7F2',
        'white': '#ffffff',
        'pale': '#F3F3F3',
        'dark': '#434343',
        'globant': '#8FBE39',
        'abstracta': '#754BDE',
        'liga': '#75BDCB',
        'liga2': '#446D72',
        'cad': '#CB757A',
        'suite': '#D0852A',
        'estudio': '#3C5C87'
      },
    },
  },
  plugins: [],
}

