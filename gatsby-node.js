const path = require("path")

// module.exports.onCreateNode = ({
//     node,
//     actions
// }) => {
//     const {
//         createNodeField
//     } = actions
//
//     if (node.internal.type === 'MarkdownRemark') {
//         const slug = path.basename(node.fileAbsolutePath, '.md')
//
//         createNodeField({
//             node,
//             name: 'slug',
//             value: slug
//         })
//     }
// }

/*
  query {
     allMarkdownRemark {
         edges {
             node {
                 fields {
                     slug
                 }
             }
         }
     }
 }
 */


module.exports.createPages = async ({
                                      graphql,
                                      actions
                                    }) => {
  const {
    createPage
  } = actions

  const blogTemplate = path.resolve("./src/templates/blog.jsx")

  const response = await graphql(`
        query {
  allContentfulPost {
    edges {
      node {
        author
        slug
        date
        body {
          body
        }
        title
      }
    }
  }
}
    `)

  response.data.allContentfulPost.edges.forEach((edge) => {
    createPage({
      component: blogTemplate,
      path: `/post/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    })
  })
}