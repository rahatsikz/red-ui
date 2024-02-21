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
        // BackgroundColor
        "main-background": "var(--main-bg)",

        // Text color
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        neutral: "var(--neutral-color)",
      },
    },
  },
  plugins: [],
};
export default config;
