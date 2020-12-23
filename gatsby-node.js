exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              title
              date
              excerpt
              slug
            }
            id
          }
        }
      }
    }
  `)

  //Create Paginated Pages for Posts

  const postsPerPage = 9

  const numPages = Math.ceil(data.allMdx.edges.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? `/blog/` : `/blog/${i + 1}`,
      component: require.resolve("./src/templates/allPosts.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  //Create Single Blog Posts
  data.allMdx.edges.forEach(edge => {
    const slug = `/blog/${edge.node.frontmatter.slug}`
    const id = edge.node.id
    actions.createPage({
      path: slug,
      component: require.resolve("./src/templates/singlePost.js"),
      context: { id },
    })
  })
}
