module.exports = {
   title: "Lecy",
   description: "Just playing around",
   themeConfig: {
      sidebar: {
         "/": [
            {
               title: "📓 Lecy",
               children: ["/"],
            },
            {
               title: "🐳 Docker",
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
               title: "⛴️ k8s",
               children: ["k8s/", "k8s/context.md"],
            },
            {
               title: "🏟️ Colima",
               children: [
                  "colima/",
               ],
            },
            {
               title: "📮 Type Script",
               children: ["typeScript/", "typeScript/JSDocs.md"],
            },
            {
               title: "😈 Golang",
               children: ["golang/", "golang/go-swagger.md"],
            },
            {
               title: "🦀 Rust",
               children: ["rust/"],
            },
            {
               title: "🔶 Duolingo",
               collapsable: true,
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
               title: "🎭 HCI",
               children: ["HCI/"],
            },
            {
               title: "⚙️ ML",
               children: ["ML/", "ML/test.md"],
            },
            {
               title: "🔀 Git",
               children: ["git/", "git/ssh-key.md"],
            },
            {
               title: "🗺️ GPS",
               children: ["GPS/"],
            },
            {
               title: "🧱 Redis",
               children: [
                  "redis/",
                  "redis/k6.md",
                  "redis/influxdb.md",
                  "redis/grafana.md",
               ],
            },
            {
               title: "😼 NestJS",
               children: ["nestjs/"],
            },
            {
               title: "📊 Oracle DB",
               children: ["oracle/"],
            },
            {
               title: "🔐 Security",
               children: ["security/OWASP.md"],
            },
            {
               title: "🔎 Elasticsearch",
               children: [
                  "elasticsearch/",
                  "elasticsearch/search-and-query.md",
               ],
            },
            {
               title: "🗼 Infra",
               children: ["infra/jenkins.md"],
            },
            {
               title: "🖥️  iTerm2",
               children: ["iTerm2/", "iTerm2/issue-report.md"],
            },
            {
               title: "🗺️ Windows command",
               children: ["WindowsCMD/"],
            },
            {
               title: "🍎 Mac command",
               children: ["macCMD/"],
            },
            {
               title: "🦉 Ubuntu",
               children: ["Ubuntu/"],
            },
            {
               title: "💸 Financial",
               children: ["financial/money101.md"],
            },
            {
               title: "🎹 Logic Pro",
               children: ["logicPro/", "logicPro/plugin-instrument.md"],
            },
            {
               title: "🤖 n8n",
               children: ["n8n/"],
            },
            {
               title: "▶️ YouTube",
               children: [
                  "youtube/cyber-security-bookmark.md",
                  "youtube/go-garble.md",
                  "youtube/mongo-db-principle.md",
               ],
            },
            {
               title: "‼️ Issue Report",
               children: ["issueReport/nodejs.md"],
            },
            {
               title: "📦 Other",
               children: [
                  "other/",
                  "other/vm-fix-ip.md",
               ],
            },
         ],
      },
   },
};
