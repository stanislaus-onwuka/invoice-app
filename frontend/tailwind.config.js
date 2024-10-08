/** @type {import('tailwindcss').Config} */


const dashboardColors = {
  "default-white": "rgba(242, 243, 249, 1)",
  "default-gray": "rgba(248, 248, 251, 1)",
  "gray-1": "rgba(105, 117, 152, 1)",
  "gray-2": "rgba(79, 79, 79, 1)",
  "gray-3": "rgba(227, 230, 239, 1)",
  "gray-4": "rgba(246, 248, 250, 1)",
  "gray-5": "rgba(55, 59, 71, 1)",
  "gray-5-20": "rgba(55, 59, 71, 0.2)",
  "gray-6": "rgba(102, 111, 119, 1)",
  "main-content-bg": "#F2F3F9",
  "blue-1": "#003EFF",
  "blue-20": "#A1B8FF",
  "success": "rgba(182, 253, 211, 1)",
  "danger": "rgba(255, 183, 189, 1)",
  "neutral": "rgba(217, 217, 224, 1)",
  "neutral-black": "rgba(31, 31, 35, 1)",
  "warning": "rgba(248, 227, 155, 1)",
  "green-1": "rgba(18, 144, 67, 1)",
  "green-20": "rgba(18, 144, 67, 0.2)",
  "red-1": "rgba(255, 86, 99, 1)",
  "red-20": "rgba(255, 86, 99, 0.2)",
  "secondary-orange": "rgba(217, 143, 0, 1)",
  "secondary-light-green": "rgba(230, 255, 240, 1)",
  "light-yellow": "rgba(255, 248, 235, 1)",
  "light-red": "rgba(255, 244, 245, 1)",
  "light-blue": "rgba(242, 251, 255, 1)",
  "yellow-20": "rgba(217, 143, 0, 0.2)",
  "fushia-60": "rgba(252, 221, 236, 1)"
} 



module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...dashboardColors
      },
      backgroundColors: {
        ...dashboardColors
      }
    },
  },
  plugins: [],
}

