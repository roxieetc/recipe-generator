/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('/src/Assets/hero-img.png')",
        'about-image': "url('/src/Assets/about-image.jpg')",
      }
    },
  },
  plugins: [],
}
