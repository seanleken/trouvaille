/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F5EDE3',
        terracotta: '#C2704E',
        ochre: '#D4A54A',
        olive: '#6B7B4C',
        charcoal: '#2E2A27',
        'warm-gray': '#8C8279',
        plaster: '#E8DDD1',
        wine: '#722F37',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
        accent: ['"Caveat"', 'cursive'],
      },
      boxShadow: {
        warm: '0 4px 20px rgba(46,42,39,0.08)',
      },
    },
  },
  plugins: [],
};
