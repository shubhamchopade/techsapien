import React from "react"
import { graphql, Link } from "gatsby"
import human from "../images/1.svg"

const allResources = ({ data }) => {
  return (
    <>
      {data.allMdx.edges.map(edge => (
        <Link to={`/resource/${edge.node.frontmatter.slug}`}>
          <h1>{edge.node.frontmatter.title}</h1>
          <h1>{edge.node.frontmatter.date}</h1>
        </Link>
      ))}
    </>
  )
}

export default allResources

export const PageQuery = graphql`
  query AllResourcesQuery {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { posttype: { eq: "resource" } } }
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
