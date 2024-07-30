import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: {
          DEFAULT: "#EAE7EF",
          2: "#BAB7BF",
        },
        background: {
          DEFAULT: "#0E0D11",
          2: "#272530",
        },
        primary: {
          DEFAULT: "#A48BE6",
        },
        accent: {
          DEFAULT: "#8637F5",
          2: "#9434DF",
          3: "#37C7F5",
        },
      },
    },
  },
  plugins: [],
};
export default config;
