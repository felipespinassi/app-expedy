/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/screens/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/views/**/*.{js,jsx,ts,tsx}",
    "./src/objects/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],

  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        "blue-expedy-600": "#1d2849",
        "blue-expedy-700": "#19223E",
        "orange-expedy-600": "#EA582C",
        "orange-expedy-700": "#c2410c",
        background: "#f1f1f1", // hsl(0, 0%, 100%)
        darkBackground: "#222", // hsl(222.2, 84%, 4.9%)
        foreground: "#1e1e1e", // hsl(210, 40%, 98%)
        darkForeground: "#e6f7ff", // hsl(222.2, 47.4%, 11.2%)
        muted: "#fff", // hsl(0, 0%, 100%)
        darkMuted: "#333", // hsl(222.2, 84%, 20%)
        primary: "#3b82f6",
        secondary: "#e6f7f5",
        destructive: "#ff4d4d",
      },
    },
  },

  plugins: [],
};
