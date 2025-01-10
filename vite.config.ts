import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3010,
    // host: true,
    // proxy: {
    //   '/api': {
    //     target: env.VITE_API_URL,
    //     changeOrigin: true,
    //     secure: false,
    //     ws: true,
    //     rewrite: (path) => {
    //       // Exclude '/api/uploads' from being rewritten
    //       if (path.includes('uploads')) {
    //         return path; // Do not rewrite
    //       }
    //       return path.replace(/^\/api/, '');
    //     },
    //   },
    // },
    // cors: false,
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
