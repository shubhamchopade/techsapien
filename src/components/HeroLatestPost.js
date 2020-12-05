import { Link, useStaticQuery } from "gatsby"
import React from "react"

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
          <p>{edge.node.frontmatter.title}</p>
          <p>{edge.node.frontmatter.date}</p>
          <p>{edge.node.frontmatter.excerpt}</p>
        </Link>
      ))}
    </div>
  )
}

export default HeroLatestPost
