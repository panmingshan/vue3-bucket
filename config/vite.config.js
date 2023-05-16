import { defineConfig, loadEnv, mergeConfig } from "vite";
import base from "./vite.base";

/** @type {import('vite').UserConfig} */
export default defineConfig(async ({ command, mode }) => {
  let baseC = await base();

  let envCon = null;
  if (command === "serve") {
    envCon = {
      // dev 独有配置
    };
  } else {
    // command === 'build'
    envCon = {
      // build 独有配置
    };
  }
  return mergeConfig(baseC,envCon)
});
