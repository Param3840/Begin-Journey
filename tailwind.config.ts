import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        warm: {
          bg: "#F6F3EE",
          surface: "#FFFFFF",
          text: "#171717",
          muted: "#737373",
          border: "#E7E2D9",
          dark: "#171717",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["'Source Serif 4'", "serif"],
        script: ["'Lavishly Yours'", "cursive"],
      },
    },
  },
  plugins: [],
};

export default config;
