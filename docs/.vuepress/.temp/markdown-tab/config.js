import { VPCodeTabs } from "/Users/noei/Documents/web/vue/lexy/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.137_@vuepress+bundler-vite@2.0.0-rc.31_@types+no_6ba63281ac90d0ac630d455ae5487c3e/node_modules/@vuepress/plugin-markdown-tab/dist/client/components/VPCodeTabs.js";
import { VPTabs } from "/Users/noei/Documents/web/vue/lexy/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.137_@vuepress+bundler-vite@2.0.0-rc.31_@types+no_6ba63281ac90d0ac630d455ae5487c3e/node_modules/@vuepress/plugin-markdown-tab/dist/client/components/VPTabs.js";

export default {
  enhance: ({ app }) => {
    app.component("VPCodeTabs", VPCodeTabs);
    app.component("VPTabs", VPTabs);
  },
};
