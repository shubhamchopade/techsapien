import { Link, useStaticQuery } from "gatsby"
import React from "react"
import { PostCard } from "./post-card/PostCard"

const HeroLatestPost = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(limit: 1, sort: { fields: frontmatter___date, order: DESC }) {
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
    <div>
      {data.allMdx.edges.map(edge => (
        <Link to={`blogs/${edge.node.frontmatter.slug}`}>
          <PostCard
            topText={edge.node.frontmatter.title}
            pill={edge.node.frontmatter.category}
            title={edge.node.frontmatter.title}
            image={edge.node.frontmatter.featureImage.childImageSharp.fixed}
            description={edge.node.frontmatter.excerpt}
          />
        </Link>
      ))}
    </div>
  )
}

export default HeroLatestPost
