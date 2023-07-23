/** @type {import('tailwindcss').Config} */

export default {
  darkMode: false,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

    // Path to the Tremor module
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    transparent: "transparent",
    current: "currentColor",
    extend: {
      maxWidth: {
        "8xl": "90rem",
      },
      container: { center: true },
    },
  },
  safelist: [],
  plugins: [
    require("@headlessui/tailwindcss"),
    require("@tailwindcss/line-clamp"),
  ],
};
