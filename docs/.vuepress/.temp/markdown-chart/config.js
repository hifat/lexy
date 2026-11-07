import { defineClientConfig } from "vuepress/client";
import Mermaid from "/Users/noei/Documents/web/vue/lexy/node_modules/.pnpm/@vuepress+plugin-markdown-chart@2.0.0-rc.137_@vuepress+bundler-vite@2.0.0-rc.31_@types+_79675b3fc4211d948d37f7d5879279d8/node_modules/@vuepress/plugin-markdown-chart/dist/client/components/Mermaid.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("Mermaid", Mermaid);
  },
});
