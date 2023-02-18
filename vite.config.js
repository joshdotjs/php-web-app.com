import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import path from 'path';
import reactRefresh from '@vitejs/plugin-react-refresh'; // NEW


export default defineConfig({
  plugins: [
      laravel({
          input: ['resources/css/app.css', 'resources/js/app.js'],
          refresh: true,
      }),
      reactRefresh(), // NEW
  ],
  resolve: { // https://javascript.plainenglish.io/how-to-set-up-path-resolving-in-vite-ad284e0d9eae
    alias: {
      '@': path.resolve(__dirname, './resources/js'),
      'util': path.resolve(__dirname, './resources/js/util'),
      'scss': path.resolve(__dirname, './resources/scss'),
      'img': path.resolve(__dirname, './public/img'),
    },
  },
});
