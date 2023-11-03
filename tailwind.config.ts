import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "0rem",
      },
    },
    extend: {
      colors: {
        "tri-petch-grey": "#C2C2C2",
        "tri-petch-light-grey": "#F5F4F9",
        "tri-petch-purple": "#5E3DB3",
        "tri-petch-dark-purple": "#090C35",
        "tri-petch-light-purple": "#603EBE",
        "tri-petch-lighter-purple": "#8F6BE8",
      },
    },
  },
  plugins: [],
};
export default config;
