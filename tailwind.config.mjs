/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFBFB",
        foreground: "var(--foreground)",
        primaryBlue: {
          DEFAULT: "#054678",
          light: "#0981DE",
          secondary: "#CCE9FF",
        },

        gray: {
          DEFAULT: "#515252",
        },
        text: {
          DEFAULT: "#FFFBFB",
          dark: "#121212",
        },
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(90deg, #054678 20%, #0981DE 80%)",
        mobile: "url('../images/mobile-header.png')",
        desktop: "url('../images/header-img.png')",
      },
      fontFamily: {
        quicksand: "var(--font-quick-sand)",
        nunito: "var(--font-nunito)",
      },
    },
  },
  plugins: [],
};
