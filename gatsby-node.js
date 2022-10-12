const fetch = require(`node-fetch`)
exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
  createNodeId,
}) => {
  // get data from GitHub API at build time

  const result = await fetch(
    `https://raw.githubusercontent.com/sindresorhus/awesome/main/readme.md`
  )
  const resultData = await result.text()
  const contents = resultData.split("## ")

  let content = contents.map((c, i) => {
    let heading = ""
    let title = ""
    let link = ""
    let data = []
    let description = ""
    heading = c.split("\n\n")[0]
    title =
      c.match(/\[.*?\]/g) &&
      c.match(/\[.*?\]/g).map(x => x.replace(/[[]]/g, ""))
    link =
      c.match(/\(.*?\)/g) &&
      c.match(/\(.*?\)/g).map(x => x.replace(/[()]/g, ""))
    // description = c.match(/\ -.*?\./g) ? c.match(/\ -.*?\./g) : "null"
    description = c
      .split("\n\n")
      .map(x => x.replace(/\-.*\)/g, ""))[1]
      .split("\n")

    console.log(description)

    if (title) {
      for (let i = 0; i < title.length; i++) {
        const getReadMe = async () => {
          return await fetch(
            `https://raw.githubusercontent.com/sindresorhus/awesome/main/readme.md`
          )
        }
        data.push({
          title: title[i].replace(/[[]]/g, ""),
          link: link[i],
          owner: link[i].split("/", 5)[3],
          repoName:
            link[i].split("/", 5)[4] && link[i].split("/", 5)[4].split("#")[0],
          description: description[i],
          markdown: getReadMe(),
        })
      }
    }
    return { heading, data }
  })
  content = content.splice(2, content.length)

  // console.log(content)

  // create node for build time data example in the docs
  content.map((cont, i) =>
    createNode({
      ...cont,
      // required fields
      id: createNodeId(i),
      parent: null,
      children: [],
      internal: {
        type: `github`,
        contentDigest: createContentDigest(cont),
      },
    })
  )
}

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      all: allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              title
              date
              excerpt
              slug
              posttype
            }
            id
          }
        }
      }
      posts: allMdx(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { frontmatter: { posttype: { eq: "blog" } } }
      ) {
        edges {
          node {
            frontmatter {
              date
              excerpt
              slug
              title
              category
              posttype
            }
            id
          }
        }
      }
    }
  `)

  //Create Paginated Pages for Posts

  const postsPerPage = 9
  let count = 0

  const numPages = Math.ceil(data.all.edges.length / postsPerPage)
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

  // actions.createPage({
  //   path: "/resource",
  //   component: require.resolve("./src/templates/allResources.js"),
  // })
  actions.createPage({
    path: "/course",
    component: require.resolve("./src/templates/allCourses.js"),
  })

  data.all.edges.forEach((edge, index) => {
    // if (edge.node.frontmatter.posttype === "resource") {
    //   //Create Single Resource
    //   const slug = `/resource/${edge.node.frontmatter.slug}`
    //   const id = edge.node.id
    //   actions.createPage({
    //     path: slug,
    //     component: require.resolve("./src/templates/singleResource.js"),
    //     context: { id },
    //   })
    // } else 
    if (edge.node.frontmatter.posttype === "blog") {
      //Create Single Blog Posts

      const postsArr = data.posts.edges
      const slug = `/blog/${edge.node.frontmatter.slug}`
      const id = edge.node.id
      const previous =
        (count === postsArr.length) === 0 ? null : postsArr[count - 1]
      const next = count === postsArr.length ? null : postsArr[count + 1]
      count += 1

      actions.createPage({
        path: slug,
        component: require.resolve("./src/templates/singlePost.js"),
        context: { id, previous, next },
      })
    } else {
      //Create Single Course
      const slug = `/course/${edge.node.frontmatter.slug}`
      const id = edge.node.id
      actions.createPage({
        path: slug,
        component: require.resolve("./src/templates/singleCourse.js"),
        context: { id },
      })
    }
  })
}
