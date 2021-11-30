import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { replaceCodePlugin } from "vite-plugin-replace";

export default defineConfig(({ mode }) => {
  const replacements = [];

  if (mode === "development") {
    replacements.push({
      from: `import { Trip } from "wanderer.js"`,
      to: `import { Trip } from "wanderer-local/dist/index-esm.js"`,
    });
  }

  return {
    plugins: [
      vue(),
      replaceCodePlugin({
        replacements,
      }),
    ],
    server: {
      port: 5000,
    },
  };
});
