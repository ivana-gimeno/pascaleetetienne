import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  server: {
    host: "::",
    port: 8083,
  },
  plugins: [react()],
});
