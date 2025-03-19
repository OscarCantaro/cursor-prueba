/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
      fontFamily: {
        // Redefine las familias sans, serif y mono
        'sans': ['Poppins', 'system-ui', 'sans-serif'],
        'serif': ['"Playfair Display"', 'Georgia', 'serif'],
        'mono': ['Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      extend: {
        // Agrega fuentes adicionales si es necesario
      },
    },
    plugins: [],
  }