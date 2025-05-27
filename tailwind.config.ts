import type { Config } from "tailwindcss";
import type { PluginAPI } from 'tailwindcss/types/config';

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        scroll: 'scroll 40s linear infinite',
      },
      colors: {
        mainBlue:"#1A75BA",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }:PluginAPI) {
      addUtilities({
        '.hide-scrollbar': {
          /* Works in most browsers */
          '-ms-overflow-style': 'none', // IE & Edge
          'scrollbar-width': 'none',    // Firefox
        },
        '.hide-scrollbar::-webkit-scrollbar': {
          display: 'none',              // Chrome, Safari, Opera
        },
     
      });
    },
  ],
} satisfies Config;
