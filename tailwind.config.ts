import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     screens:{
      md:"480px",
      lg:"834px",
      lgm:"943px",
      xl:"1024px",
      xlm:"1070px",
      full:"1440px",
     
    },
    extend: {
      container:{
        center:true
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        'accent':'var(--accent)'
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
      },
      width:{
        '100':'400px'
        ,'lg':'90%',
        'sm':"97%"
      },
      height:{
        'md':"620px",
        'xl':'768px'
      }
    },
  },
  plugins: [nextui({
    themes:{
      light:{
        colors:{
          primary:{
            DEFAULT:'black'
          }
        }
      }
    }
  })],
};
export default config;
