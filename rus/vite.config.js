import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path"; // импорт обязателен

export default defineConfig({
  base: "/", // если сайт в корне домена; для подпапки укажи base: "/subdir/"
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"), // теперь "@/assets/..." = src/assets/...
    },
  },
  plugins: [react(), tailwindcss()],
});
