/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home': "url(/img-home.png)",
        'home-pc': "url(/home-pc.png)",
        'gradient': "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.6) 100%)",
        
        'header': "linear-gradient(to bottom, rgba(0,0,0,0.95) 0%,rgba(0,0,0, 0.95) 100%)"
      },
      
    },
  },
  plugins: [],
}