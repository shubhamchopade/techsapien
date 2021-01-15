import React from "react"
import { graphql, Link } from "gatsby"
import {
  Container,
  Content,
  ContentCard,
  FeatureImage,
  Pagination,
} from "../components"
import { H1, P } from "../elements"
import human from "../images/1.svg"
import { PostCard } from "../components/post-card/PostCard"

const allPosts = ({ pageContext, data }) => {
  const { currentPage, numPage } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPage
  const prevPage = currentPage - 1 === 1 ? "/blog/" : `/blog/${currentPage - 1}`
  const nextPage = `/blog/${currentPage + 1}`
  const posts = data.allMdx.edges

  return (
    <>
      <Container>
        {data.allMdx.edges.map(edge => (
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
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </>
  )
}

export default allPosts

export const PageQuery = graphql`
  query AllPostsQuery($skip: Int!, $limit: Int!) {
    allMdx(
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
