import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      display: ["Manrope", "ui-serif"],
    },
    extend: {
      colors: {
        mainBtn: "#3470FF",
        active: "#0B44CD",
        inputColor: "#F7F7FB",
        textColor: "#121417",
        subColor: "#12141780",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]

    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: false, // Shows info about daisyUI version and used config in the console when building your CSS
  },
};
