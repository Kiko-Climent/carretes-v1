/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['PPNeueMontreal Regular', 'sans-serif'], // Normal para el cuerpo
        mono: ['PPNeueMontrealMono Regular', 'monospace'], // Mono Regular
      },
      fontWeight: {
        normal: 400, // Regular
        medium: 500, // Medium
        semibold: 600, // Puedes usar Medium en lugar de SemiBold si decides eso
        bold: 700, // Bold o Mono Bold
        extrabold: 900,
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};