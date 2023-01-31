import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import path from 'path';

export default defineConfig({
  plugins: [
      laravel({
          input: ['resources/css/app.css', 'resources/js/app.js'],
          refresh: true,
      }),
  ],
  resolve: { // https://javascript.plainenglish.io/how-to-set-up-path-resolving-in-vite-ad284e0d9eae
    alias: {
      '@': path.resolve(__dirname, './resources/js'),
    },
  },
});
