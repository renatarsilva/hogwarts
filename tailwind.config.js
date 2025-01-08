/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gryffindor: {
          DEFAULT: "#ae0001",
          dark: "#CB0F2A",
          accent: "#eeba35",
          secondary: "#F1AC29",
        },
        slytherin: {
          DEFAULT: "#0E5B51",
          dark: "#8B8F8B",
          accent: "#A2A2A2",
          secondary: "#BFC3C6",
        },
        ravenclaw: {
          DEFAULT: "#0B5A89",
          dark: "#91979b",
          accent: "#A2ABB2",
          secondary: "#F1F1F1",
        },
        hufflepuff: {
          DEFAULT: "#ECAF1F",
          dark: "#000000",
          accent: "#504E53",
          secondary: "#F1F1F1",
        },
        hogwarts: {
          black: "#000000",
          gold: {
            DEFAULT: "#d3a625",
            dark: "#946b2d",
            darker: "#372e29",
            light: "#eeba30",
            lighter: "#726255",
          },
          silver: {
            DEFAULT: "#aaaaaa",
            dark: "#5d5d5d",
            light: "#bebebe",
          },
        },
        color: {
          1: "#e4b518" /* amarelo ouro para hover */,
          2: "#FFC876",
          3: "#FF776F",
          4: "#7ADB78",
          5: "#858DFF",
          6: "#FF98E2",
        },
        stroke: {
          1: "#26242C",
        },
        n: {
          1: "#FFFFFF",
          2: "#CAC6DD",
          3: "#ADA8C3",
          4: "#757185",
          5: "#3F3A52",
          6: "#252134",
          7: "#15131D",
          8: "#00000d" /*Azul marinho para fundo*/,
          9: "#474060",
          10: "#43435C",
          11: "#1B1B2E",
          12: "#2E2A41",
          13: "#6C7275",
        },
      },
      fontFamily: {
        sans: ["var(--font-sora)", ...fontFamily.sans],
        code: "var(--font-code)",
        grotesk: "var(--font-grotesk)",
      },
      letterSpacing: {
        tagline: ".15em",
      },
      spacing: {
        0.25: "0.0625rem",
        7.5: "1.875rem",
        15: "3.75rem",
      },
      opacity: {
        15: ".15",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      transitionTimingFunction: {
        DEFAULT: "linear",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
      borderWidth: {
        DEFAULT: "0.0625rem",
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
        "conic-gradient":
          "conic-gradient( from 225deg,  #726255 0%,   #8a5f2c 15%,   #946b2d 30%,   #b88d24 45%,   #d3a625 60%,   #e2b42c 75%,   #eeba30 90%,   #726255 100% )",
        "conic-gradient-silver":
          "conic-gradient( from 225deg,  #bebebe 0%,   #5d5d5d 15%,   #8B8F8B 30%,   #aaaaaa 45%,   #BFC3C6 60%,   #cacaca 75%,    #fafafa 90%,   #bebebe 100% )",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});
      addComponents({
        ".container": {
          "@apply max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]":
            {},
        },
        ".h1": {
          "@apply font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]":
            {},
        },
        ".h2": {
          "@apply text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight":
            {},
        },
        ".h3": {
          "@apply text-[2rem] leading-normal md:text-[2.5rem]": {},
        },
        ".h4": {
          "@apply text-[2rem] leading-normal": {},
        },
        ".h5": {
          "@apply text-2xl leading-normal": {},
        },
        ".h6": {
          "@apply font-semibold text-lg leading-8": {},
        },
        ".body-1": {
          "@apply text-[0.875rem] leading-[1.5rem] md:text-[1rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-8":
            {},
        },
        ".body-2": {
          "@apply font-light text-[0.875rem] leading-6 md:text-base": {},
        },
        ".caption": {
          "@apply text-sm": {},
        },
        ".tagline": {
          "@apply font-grotesk font-light text-xs tracking-tagline uppercase":
            {},
        },
        ".quote": {
          "@apply font-code text-lg leading-normal": {},
        },
        ".button": {
          "@apply font-code text-xs font-bold uppercase tracking-wider": {},
        },
      });
      addUtilities({
        ".tap-highlight-color": {
          "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
        },
      });
    }),
  ],
};
