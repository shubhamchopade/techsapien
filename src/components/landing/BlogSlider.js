import { Link, useStaticQuery } from "gatsby"
import React from "react"
import { PostCard } from "../post-card/PostCard"
import { Container } from "../../components"
import human from "../../images/1.svg"

export const BlogSlider = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(limit: 3) {
        edges {
          node {
            frontmatter {
              title
              date
              excerpt
              slug
              category
              featureImage {
                childImageSharp {
                  fixed(fit: CONTAIN, width: 300) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
            id
          }
        }
      }
    }
  `)
  return (
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
          />
        </Link>
      ))}
    </Container>
  )
}
