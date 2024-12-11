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
        nav: "#8B0000",
        font: "#B22222",
        text: "#F5E6E6",
        back: "#CD5C5C",

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
