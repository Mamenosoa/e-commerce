import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize:{
        'xs':'12px',
        'sm':'14px',
        'base':'16px',
        'lg':'18px',
        'xl':'20px',
        '2xl':'24px',
        'big':'60px'
      },
      margin:{
        'sm':'16px',
        'lg':'32px',
        'xl':'64px'
      },
      padding:{
        'sm':'16px',
        'lg':'32px',
        'xl':'64px'
      }
    },
  },
  plugins: [],
};
export default config;
