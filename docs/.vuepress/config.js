module.exports = {
   title: "Lexy",
   description: "Just playing around",
   themeConfig: {
      sidebar: {
         "/": [
            {
               title: "📓 Lexy",
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
               children: ["duolingo/", "duolingo/adjective.md", "duolingo/place.md"]
            }
         ]
      }
   }
};