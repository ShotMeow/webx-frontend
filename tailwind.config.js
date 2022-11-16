const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{ts,tsx}",
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#FAFDFF",
                primary: "#4173FF",
                "primary-active": "#335ED8",
                black: "#1E1E1E",
                gray: "#929292",
                "light-gray": "#C9C9C9",
                frontend: "#197AD4",
                design: "#D01A3B",
                backend: "#1BBD65",
            },
            fontSize: {
                xs: "16px",
                sm: "20px",
                tiny: "24px",
                base: "32px",
                lg: "36px",
                xl: "48px",
            },
            boxShadow: {
                DEFAULT: "0px 0px 60px 2px rgba(0, 0, 0, 0.05)",
            },
            fontFamily: {
                sans: ["Nunito", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [],
};
