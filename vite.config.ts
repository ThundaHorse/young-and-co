import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import commonjs from 'vite-plugin-commonjs';
import viteCompression from 'vite-plugin-compression';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    commonjs(),
    viteCompression({
      algorithm: 'gzip',
      deleteOriginFile: false,
    }),
  ],
  build: {
    commonjsOptions: { transformMixedEsModules: true },
  },
});
