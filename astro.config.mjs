import { defineConfig } from "astro/config";
import react from '@astrojs/react';
// import storyblok from "@storyblok/astro";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [react()
  // storyblok({
  //   accessToken: "<your-access-token>",
  // }),
  , tailwind(), image()],
  vite: {
    ssr: {
      noExternal: ['antd']
    }
  }
});
