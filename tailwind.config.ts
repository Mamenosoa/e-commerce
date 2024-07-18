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
      mdi:"636px",
      lg:"834px",
      lgm:"943px",
      lgh:"1231px",
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
        'accent':'var(--accent)',
        'bg-1':"var(--bg-1)",
        'bg-2':"var(--bg-2)",
      },
      backgroundColor:{
        'card':"#D7EEED",
        'bg-1': "var(--bg-1)"
      },
      fontSize:{
        "small":"10px",
        'xs':'12px',
        'sm':'14px',
        'base':'16px',
        'lg':'18px',
        'xl':'20px',
        '2xl':'24px',
        "4xl":"35px",
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
      borderRadius:{
        '3xl':"20px"
      },
      width:{
        '100':'400px',
        'lg':'90%',
        'sm':"97%"
      },
      height:{
        'md':"620px",
        'xl':'768px'
      },
      keyframes:{
        underlineAnimate:{
          "0%":{
            width:"50px"
          },
          "100%":{
          width:"100%"
          }
        }
       },
       animation:{
        "underline": "underlineAnimate 0.3s  forwards",
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
