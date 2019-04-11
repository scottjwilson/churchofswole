const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    {
      allContentfulTrainer {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  `)
    .then(result => {
      result.data.allContentfulTrainer.edges.forEach(({ node }) => {
        createPage({
          path: `trainers/${node.name}`,
          component: path.resolve("src/templates/trainer-template.js"),
          context: {
            id: node.id,
          },
        })
      })
    })
    .catch(err => console.log(err))
}
