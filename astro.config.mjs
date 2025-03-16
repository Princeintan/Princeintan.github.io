import { defineConfig } from 'astro/config';
// import tailwindcss from "@tailwindcss/vite";
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  // vite: {
  //   plugins: [tailwindcss()],
  // },
 site: 'https://prashantmaths.com',
});