/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },

    extend: {
      minHeight: {
        "vh-164": "calc(100vh - 164px)",
        "vh-chat": "calc(100vh - 260px)",
        "vh-mobile": "calc(100vh - 44px - 1.75rem - 1.75rem )",
      },
      maxHeight: {
        "chat-area": "calc(100vh - 356px)",
        "vh-chat": "calc(100vh - 260px)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
