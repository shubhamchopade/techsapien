import React from "react"
import { graphql, Link } from "gatsby"
import { Container } from "../components"
import human from "../images/1.svg"
import { PostCard } from "../components/post-card/PostCard"
import SEO from "../components/seo/SEO"

const allPosts = ({ data }) => {
  // const { currentPage, numPage } = pageContext
  // const isFirst = currentPage === 1
  // const isLast = currentPage === numPage
  // const prevPage = currentPage - 1 === 1 ? "/blog/" : `/blog/${currentPage - 1}`
  // const nextPage = `/blog/${currentPage + 1}`

  console.log(data.blogs.edges)

  return (
    <>
      <Container>
        <SEO
          pageMeta={{
            title: "Blogs",
            keywords: ["blog"],
            description: "Blogs list",
          }}
        />
        {data.blogs.edges.map(edge => (
          <Link to={`/blog/${edge.node.frontmatter.slug}`}>
            <PostCard
              topText={edge.node.frontmatter.title}
              pill={edge.node.frontmatter.category}
              title={edge.node.frontmatter.title}
              image={
                edge.node.frontmatter.featureImage !== null
                  ? edge.node.frontmatter.featureImage.childImageSharp.fixed
                  : human
              }
              description={edge.node.frontmatter.excerpt}
              slug={edge.node.frontmatter.slug}
            />
          </Link>
        ))}
      </Container>
      {/* <Pagination
      
        isFirst={isFirst}
        isLast={isLast}
        prevPage={prevPage}
        nextPage={nextPage}
      /> */}
    </>
  )
}

export default allPosts

export const PageQuery = graphql`
  query AllPostsQuery($skip: Int!, $limit: Int!) {
    blogs: allMdx(
      limit: $limit
      skip: $skip
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
            featureImage {
              childImageSharp {
                fixed(fit: CONTAIN, width: 300) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`
