import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        "dark": {
          DEFAULT: "#000000",
          100: ""
        },
        "primary": {
          DEFAULT: "#FF2E63",
        },
        "secondary": {
          DEFAULT: "#00040d",
        },
        "light": {
          DEFAULT: "#EAEAEA",
        },
      },
      backgroundImage: {
        'pattern': "url('/pattern.png')",
      },
    },
  },
  plugins: [],
};
export default config;
