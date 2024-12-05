import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        nav: "#124E66",
        font: "#748D92",
        text: "#D3D9D4",
        back: "#748D92",

      },
      fontFamily: {
        'Jura': ["Jura"],
        'Anaheim': ["Anaheim"],
        'Neo': ["GFS Neohellenic"],
      },
    },
  },
  plugins: [],
};
export default config;
