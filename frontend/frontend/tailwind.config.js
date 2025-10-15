import daisyui from 'daisyui';

 /** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",           // include index.html for global classes
    "./src/**/*.{js,ts,jsx,tsx}",  // include all React components
   ],
   theme: {
     extend: {},
   },
   plugins: [daisyui],
   daisyui:{
    themes: ["light","dark"]
   }
 }