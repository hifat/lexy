import { GitContributors } from "/Users/noei/Documents/web/vue/lexy/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-rc.137_@vuepress+bundler-vite@2.0.0-rc.31_@types+node@26.6.6_c271169c12dd7cb57980efde31594874/node_modules/@vuepress/plugin-git/dist/client/components/GitContributors.js";
import { GitChangelog } from "/Users/noei/Documents/web/vue/lexy/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-rc.137_@vuepress+bundler-vite@2.0.0-rc.31_@types+node@26.6.6_c271169c12dd7cb57980efde31594874/node_modules/@vuepress/plugin-git/dist/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
