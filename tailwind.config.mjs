/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#212337",
        secondary: "#4A4A52",
        accent: "#749B3F",
        white: "#FFFFFF",
        greenDark: "#176D38",
        yellow: "#FAC714",
        grayLight: "#EBEBEB",
        black: "#000000",
        orange: "#FF6A1A",
        grayBackground: "#F4F6F6",
        grayMedium: "#D9D9D9",
        grayDark: "#4A4A52",
      },
      fontFamily: {
        questrial: ['"Questrial"', "sans-serif"],
        rubik: ['"Rubik"', "sans-serif"],
      },
      
      backgroundImage: {
        "two-images": "url('image1.jpg'), url('image2.jpg')",
      },
      backgroundSize: {
        "64-36": "64% 100%, 36% 100%",
      },
      backgroundPosition: {
        "left-right": "left, right",
      },
    },
  },
  plugins: [],
};
