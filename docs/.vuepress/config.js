module.exports = {
   title: "Lecy",
   description: "Just playing around",
   themeConfig: {
      sidebar: {
         "/": [
            {
               title: "📓 Lecy",
               collapsable: false,
               children: ["/"]
            },
            {
               title: "🐳 Docker",
               collapsable: false,
               children: [
                  "docker/",
                  "docker/integrate.md",
                  "docker/docker-compose.md",
                  "docker/kubernetes.md",
                  "docker/best-practices.md",
               ]
            },
            {
               title: "📮 Type Script",
               collapsable: false,
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
               collapsable: false,
               children: ["HCI/"]
            },
            {
               title: "⚙️ ML",
               collapsable: false,
               children: [
                  "ML/",
                  "ML/test.md",
               ]
            },
            {
               title: "🔀 Git",
               collapsable: false,
               children: ["git/"]
            },
            {
               title: "🗺️ GPS",
               collapsable: false,
               children: ["GPS/"]
            },
            {
               title: "🗺️ Windows command",
               collapsable: false,
               children: ["WindowsCMD/"]
            },
            {
               title: "🦉 Ubuntu",
               collapsable: false,
               children: ["Ubuntu/"]
            },
            {
               title: "Other",
               collapsable: false,
               children: ["other/"]
            },
         ]
      }
   }
};