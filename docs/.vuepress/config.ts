import { viteBundler } from "@vuepress/bundler-vite";
import { markdownChartPlugin } from "@vuepress/plugin-markdown-chart";
import { markdownMathPlugin } from "@vuepress/plugin-markdown-math";
import { shikiPlugin } from "@vuepress/plugin-shiki";
import { defaultTheme } from "@vuepress/theme-default";
import { defineUserConfig } from "vuepress";

export default defineUserConfig({
   lang: "en-US",
   title: "Lecy",
   description: "Just playing around",

   bundler: viteBundler(),
   theme: defaultTheme({
      sidebar: {
         "/": [
            {
               text: "📓 Lecy",
               children: ["/"],
            },
            {
               text: "🤖 LLM",
               children: ["llm-learning/lesson-1.md"],
            },
            {
               text: "🐳 Docker",
               children: [
                  "docker/",
                  "docker/integrate.md",
                  "docker/docker-file.md",
                  "docker/docker-compose.md",
                  "docker/kubernetes.md",
                  "docker/best-practices.md",
                  "docker/did-you-know.md",
               ],
            },
            {
               text: "⛴️ k8s",
               children: ["k8s/", "k8s/context.md"],
            },
            {
               text: "🏟️ Colima",
               children: ["colima/"],
            },
            {
               text: "📮 Type Script",
               children: ["typeScript/", "typeScript/JSDocs.md"],
            },
            {
               text: "😈 Golang",
               children: ["golang/", "golang/go-swagger.md"],
            },
            {
               text: "🦀 Rust",
               children: ["rust/"],
            },
            {
               text: "🔶 Duolingo",
               collapsible: true,
               children: [
                  "duolingo/",
                  "duolingo/practice.md",
                  "duolingo/adjective.md",
                  "duolingo/place.md",
                  "duolingo/people.md",
                  "duolingo/determiners.md",
                  "duolingo/education.md",
                  "duolingo/verb.md",
                  "duolingo/infinitive.md",
                  "duolingo/adjective_3.md",
               ],
            },
            {
               text: "🎭 HCI",
               children: ["HCI/"],
            },
            {
               text: "⚙️ ML",
               children: ["ML/", "ML/test.md"],
            },
            {
               text: "🔀 Git",
               children: ["git/", "git/ssh-key.md"],
            },
            {
               text: "🗺️ GPS",
               children: ["GPS/"],
            },
            {
               text: "🧱 Redis",
               children: [
                  "redis/",
                  "redis/k6.md",
                  "redis/influxdb.md",
                  "redis/grafana.md",
               ],
            },
            {
               text: "😼 NestJS",
               children: ["nestjs/"],
            },
            {
               text: "📊 Oracle DB",
               children: ["oracle/"],
            },
            {
               text: "🔐 Security",
               children: ["security/OWASP.md"],
            },
            {
               text: "🔎 Elasticsearch",
               children: [
                  "elasticsearch/",
                  "elasticsearch/search-and-query.md",
               ],
            },
            {
               text: "🗼 Infra",
               children: ["infra/jenkins.md"],
            },
            {
               text: "🖥️  iTerm2",
               children: ["iTerm2/", "iTerm2/issue-report.md"],
            },
            {
               text: "🗺️ Windows command",
               children: ["WindowsCMD/"],
            },
            {
               text: "🍎 Mac command",
               children: ["macCMD/"],
            },
            {
               text: "🦉 Ubuntu",
               children: ["Ubuntu/"],
            },
            {
               text: "💸 Financial",
               children: ["financial/money101.md"],
            },
            {
               text: "🎹 Logic Pro",
               children: ["logicPro/", "logicPro/plugin-instrument.md"],
            },
            {
               text: "🤖 n8n",
               children: ["n8n/"],
            },
            {
               text: "▶️ YouTube",
               children: [
                  "youtube/cyber-security-bookmark.md",
                  "youtube/go-garble.md",
                  "youtube/mongo-db-principle.md",
               ],
            },
            {
               text: "‼️ Issue Report",
               children: ["issueReport/nodejs.md"],
            },
            {
               text: "📦 Other",
               children: ["other/", "other/vm-fix-ip.md"],
            },
            {
               text: "🧩 Roblox",
               children: ["roblox/", "roblox/screen-ui.md"],
            },
         ],
      },
   }),

   plugins: [
      markdownMathPlugin({ type: "katex" }),
      shikiPlugin({
         langs: [
            "bash",
            "css",
            "diff",
            "html",
            "js",
            "json",
            "md",
            "sql",
            "ts",
            "vue",
            "yaml",
         ],
         langAlias: {
            bashell: "bash",
            sqlc: "sql",
         },
         theme: "github-dark",
         lineNumbers: true,
      }),
      markdownChartPlugin({ mermaid: true }),
   ],
});
