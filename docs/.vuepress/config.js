module.exports = {
   title: "Lecy",
   description: "Just playing around",
   themeConfig: {
      sidebar: {
         "/": [
            {
               title: "📓 Lecy",
               children: ["/"]
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
               ]
            },
            {
               title: "📮 Type Script",
               children: [
                  "typeScript/",
                  "typeScript/JSDocs.md"
               ],
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
               ]
            },
            {
               title: "🎭 HCI",
               children: ["HCI/"]
            },
            {
               title: "⚙️ ML",
               children: [
                  "ML/",
                  "ML/test.md",
               ]
            },
            {
               title: "🔀 Git",
               children: ["git/"]
            },
            {
               title: "🗺️ GPS",
               children: ["GPS/"]
            },
            {
               title: "🗺️ Windows command",
               children: ["WindowsCMD/"]
            },
            {
               title: "🦉 Ubuntu",
               children: ["Ubuntu/"]
            },
            {
               title: "💸 Financial",
               children: ["financial/money101.md"]
            },
            {
               title: "🧱 Redis",
               children: [
                  "redis/",
                  "redis/k6.md",
                  "redis/influxdb.md",
                  "redis/grafana.md",
               ]
            },
            {
               title: "😼 NestJS",
               children: ["nestjs/"]
            },
            {
               title: "📦 Other",
               children: ["other/"]
            },
         ]
      }
   }
};