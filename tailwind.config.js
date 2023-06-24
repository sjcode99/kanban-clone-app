/** @type {import('tailwindcss').Config} */
export default {
    content: ["./public/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          inter: ["Inter", "sans-serif"],
        },
        visibility: ["group-hover"],
      },
    },
    plugins: [],
  };
  