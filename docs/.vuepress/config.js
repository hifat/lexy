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
               children: ["git/"],
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
               children: ["logicPro/", "logicPro/plugins.md"],
            },
            {
               title: "📦 Other",
               children: ["other/"],
            },
         ],
      },
   },
};
