import { defineConfig } from 'astro/config';
// import tailwindcss from "@tailwindcss/vite";
import tailwind from '@astrojs/tailwind';
import preact from '@astrojs/preact';


export default defineConfig({
  integrations: [tailwind(), preact()], 
  // vite: {
  //   plugins: [tailwindcss()],
  // },
  site: 'https://princeintan.github.io',
  base: '/',
});