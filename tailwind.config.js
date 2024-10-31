/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        darkMode: "class",
        extend: {
            container: {
                width: 1200,
                center: true,
            },
            colors: {
                primary: "var(--color-primary)",
                secondary: "var(--color-secondary)",
                textColor: "var(--color-text)",
                grey: "var(--color-grey)",
                bodyColor: "var(--color-bg)",
                error: "var(--color-error)",
            },
        },
    },
    plugins: [],
};
