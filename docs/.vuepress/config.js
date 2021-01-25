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
               collapsable: false
            },
            {
               title: "🔶 Duolingo",
               collapsable: false,
               children: [
                  "duolingo/",
                  "duolingo/practice.md",
                  "duolingo/adjective.md",
                  "duolingo/place.md",
                  "duolingo/people.md"
               ]
            },
            {
               title: "~ Libra",
               collapsable: false
            },
            {
               title: "🎭 HCI",
               collapsable: false,
               children: ["HCI/"]
            },
            {
               title: "ML",
               collapsable: false,
               children: ["ML/"]
            }
         ]
      }
   }
};