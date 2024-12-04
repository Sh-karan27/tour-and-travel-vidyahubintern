/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: {
          normal: "#adb5bd",
        },
        heading: {
          default: "#E8614D",
          // dark
        },
        paragraph: {
          // default
          // dark
        },
        background: {
          // default
          // dark
        },
      },
      padding: {
        section: "5rem",
        button: "1rem",
      },
    },
  },
  plugins: [],
};
