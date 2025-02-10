import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [react(), tailwindcss()],
});

// module.exports = {
//   theme: {
//     screens: {
//       xs: "320px",

//       xxs: "425px",

//       sm: "640px",

//       md: "768px",

//       lg: "1024px",

//       xl: "1280px",
//     },
//   },
// };
