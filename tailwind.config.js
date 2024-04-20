/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "3xl": "72px",
        "2xl": "48px",
        xl: "24px",
        lg: "20px",
        base: "18px",
        sm: "16px",
      },
      colors: {
        primary: "#4640DE",
        second: "#25324B",
        link: "#515B6F",
        text: "#7C8493",
        gray: "#D6DDEB",
        blue: "#26A4FF",
        black: "#202430",
      },
      backgroundColor: {
        primary: "#F8F8FD",
        button: "#4640DE",
        footer: "#202430",
        input: "#F8F8F8",
        decorate: "#E2E2E2",
      },
    },
  },
  plugins: [],
};
