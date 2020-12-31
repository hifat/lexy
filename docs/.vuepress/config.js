module.exports = {
   title: "Lexy",
   description: "Just playing around",
   themeConfig: {
      sidebar: {
         "/": [
            {
               title: "Lexy",
               collapsable: false,
               children: ["/"]
            },
            {
               title: "Doulingo",
               collapsable: false,
               children: ["", "doulingo/adjective.md", "doulingo/place.md"]
            }
         ]
      }
   }
};
