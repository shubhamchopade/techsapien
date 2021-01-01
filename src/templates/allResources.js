import React from "react"
import { graphql, Link } from "gatsby"
import arrow from "../images/arrow.svg"
import { ResourcePill, ResourcesContainer } from "../elements/hero/HeroElements"

const allResources = ({ data }) => {
  return (
    <>
      {data.allMdx.edges.map(edge => (
        <Link to={`/resource/${edge.node.frontmatter.slug}`}>
          <ResourcesContainer>
            <ResourcePill color="#f2c94c">
              <p>{edge.node.frontmatter.title}</p>
              <img src={arrow} />
            </ResourcePill>
          </ResourcesContainer>
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
