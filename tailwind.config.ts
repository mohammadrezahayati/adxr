import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          '.bg-base-400': {
            "background-color": "#1D232A"
          },
          '.bg-base-500': {
            "background": "rgba(0, 0, 0, 0.35)",
            'box-shadow': "0 4px 30px rgba(0, 0, 0, 0.1)",
            " backdrop-filter": "blur(7.1px)",
            "-webkit-backdrop-filter": "blur(7.1px)",
            "border": "1px solid rgba(0, 0, 0, 0.3)",
          },
        },
      },
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          '.bg-base-400': {
            "background-color": "#FFFFFF",
          },
          '.bg-base-500': {
            "background": "rgba(255, 255, 255, 0.35)",
            'box-shadow': "0 4px 30px rgba(0, 0, 0, 0.1)",
            " backdrop-filter": "blur(7.1px)",
            "-webkit-backdrop-filter": "blur(7.1px)",
            "border": "1px solid rgba(255, 255, 255, 0.3)",
          },
        },
      },
    ], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
export default config;
