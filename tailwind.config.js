/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#144EE3",
        secondary: "#181E29",
        tetiary: "#353C4A",
        tableText:'#C9CED6'
      },
   
      fontFamily:{
        body:['ui-monospace']
      },
      fontSize: {
        "text-base": "1rem",
        "text-20": "1.25rem",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
