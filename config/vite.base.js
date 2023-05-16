import { glob, globSync, globStream, globStreamSync, Glob } from "glob";
import { resolve } from "path";
import vueJsx from "@vitejs/plugin-vue-jsx";
import vue from "@vitejs/plugin-vue";

export default async () => {
  const input = globSync("./src/pages/**/index.html", {
    ignore: "node_modules/**",
  });

  function getPathName(path) {
    return /[^\/\\]+(?=[\\\/]index.html)/.exec(path)[0];
  }
  /** @type {import('vite').UserConfig} */
  let c = {
    build: {
      outDir: "./dist",
      emptyOutDir: true,
      rollupOptions: {
        input: input.reduce((map, curr) => {
          map[getPathName(curr)] = resolve(process.cwd(), curr);
          return map;
        }, {}),
      },
    },
    plugins: [vue(), vueJsx()],
  };

  return c;
};