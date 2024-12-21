
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
        sora: ["Sora", "serif"],
        mirza: ["Mirza", "serif"],
        kite_one: ["Kite_One", "serif"],
        kavivanar: ["Kavivanar", "serif"],
        inter_tight: ["Inter_Tight", "serif"],
      },
      colors: {
        'primary': '#3f3cbb',
        'purple': '#8D56A9',
        'rosa': '#F4E7F2',
        'white': '#ffffff',
        'dark': '#434343',
      },
    },
  },
  plugins: [],
}

