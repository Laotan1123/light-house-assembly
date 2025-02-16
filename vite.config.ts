import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Light-house-assembly/',
  optimizeDeps: {
    exclude: ['lucide-react']
  },
});
