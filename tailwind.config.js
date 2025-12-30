/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'azza-gold': '#C5A059', // The text gold
                'azza-blue': '#00264D', // THE DEEP NAVY BLUE (New!)
                'azza-cream': '#F9F8F3', // The body background
                'azza-black': '#1A1A1A',
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['"Lato"', 'sans-serif'],
            }
        },
    },
    plugins: [],
}