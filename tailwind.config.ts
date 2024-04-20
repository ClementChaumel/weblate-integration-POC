import type { Config, PluginAPI } from "tailwindcss/types/config";

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        main: "minmax(auto, 224px) minmax(auto, 1456px)",
      },
      keyframes: {
        shake: {
          "10%, 90%": {
            transform: "translate3d(-1px, 0, 0)",
          },
          "20%, 80%": {
            transform: "translate3d(2px, 0, 0)",
          },
          "30%, 50%, 70%": {
            transform: "translate3d(-4px, 0, 0)",
          },
          "40%, 60%": {
            transform: "translate3d(4px, 0, 0)",
          },
        },
        slideInToast: {
          from: {
            transform: "translateY(calc(-100% - 24px))",
          },
          to: { transform: "translateY(0)" },
        },
        slideOutToast: {
          from: {
            transform: "translateY(0)",
          },
          to: { transform: "translateY(calc(-100% - 24px))" },
        },
      },
      animation: {
        shake: "shake .8s ease-out forwards",
        slideOutToast: "slideOutToast 500ms cubic-bezier(0.71, 0.03, 1, 0.78)",
        slideInToast: "slideInToast 500ms cubic-bezier(0.08, 0.8, 0.36, 1.18)",
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }: PluginAPI) {
      addUtilities({
        ".bg-background-gradient": {
          "background-color": theme("colors.background"),
          "background-image": "url('./assets/background.png')",
          "background-repeat": "no-repeat",
          "background-size": "auto 125%",
        },
      });
    },
    require("tailwindcss-radix")({
      // Default: `radix`
      variantPrefix: false,
    }),
  ],
} as Config;
