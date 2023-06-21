import { defineConfig } from "astro/config";
import react from '@astrojs/react';
// import storyblok from "@storyblok/astro";

export default defineConfig({
  integrations: [
    react(),
    // storyblok({
    //   accessToken: "<your-access-token>",
    // }),
  ],
  vite: {
    ssr: {
      noExternal: ['antd'],
    }
  }
});
