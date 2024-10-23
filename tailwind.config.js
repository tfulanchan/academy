const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
    container: false,
  },
  darkMode: ["class", '[data-theme="dark"]'],
  content: ["./src/**/*.{jsx,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Source Sans 3"', ...fontFamily.sans],
      },
      borderRadius: {
        sm: "4px",
      },
      screens: {
        sm: "0px",
        lg: "997px",
      },
      colors: {},
    },
  },
  // variants: {
  //   listStyleType: ['responsive', 'hover', 'focus'],
  //   listStylePosition: ['responsive', 'hover', 'focus'],
  // },
  // corePlugins: {
  //   preflight: false,
  // }
};