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
        'rosado': '#D392C9',
        'white': '#ffffff',
        'pale': '#F3F3F3',
        'dark': '#434343'
      },
    },
  },
  plugins: [],
}

