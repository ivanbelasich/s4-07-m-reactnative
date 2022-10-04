/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "dark-purple": "#531CB3",
                "light-purple": "#AA7BC3",
                "main-purple": "#944BBB",
            },
        },
    },
    plugins: [],
};
