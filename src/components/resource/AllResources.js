import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import arrow from "../../images/arrow.svg"
import {
  ResourcePill,
  ResourcesContainer,
} from "../../elements/hero/HeroElements"

const AllResources = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { frontmatter: { posttype: { eq: "resource" } } }
      ) {
        edges {
          node {
            frontmatter {
              title
              date
              excerpt
              slug
              category
              color
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
    <ResourcesContainer>
      {data.allMdx.edges.map(edge => (
        <ResourcePill
          to={`/resource/${edge.node.frontmatter.slug}`}
          color={edge.node.frontmatter.color}
        >
          <p>{edge.node.frontmatter.title}</p>
          <img alt={edge.node.frontmatter.slug} src={arrow} />
        </ResourcePill>
      ))}
    </ResourcesContainer>
  )
}

export default AllResources
