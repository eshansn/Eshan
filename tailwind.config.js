/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#0a1128', // Deep dark blue
                surface: '#121e3d',
                accent: '#d4af37',     // Metallic gold
                textMain: '#f8f9fa',
                textMuted: '#9ca3af',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}