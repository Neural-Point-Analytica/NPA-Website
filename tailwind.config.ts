import type { Config } from "tailwindcss";
const {
    default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                background: "#1a1614", // Deep dark brown/black
                surface: "#262321",    // Warm dark gray
                primary: "#eeedeb",    // Off-white/Muted Beige
                secondary: "#a8a29e",  // Warm Gray
                accent: "#d6d3d1",     // Light Warm Gray
            },
            fontFamily: {
                sans: ['var(--font-noto-sans)', 'sans-serif'],
                serif: ['var(--font-noto-serif)', 'serif'],
            },
        }
    },
    plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
    const allColors = flattenColorPalette(theme("colors"));
    const newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );

    addBase({
        ":root": newVars,
    });
}

export default config;
