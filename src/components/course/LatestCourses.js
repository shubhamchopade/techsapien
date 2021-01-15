import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import human from "../../images/1.svg"
import Img from "gatsby-image"
import styled from "styled-components"
import {
  CoursesContainer,
  StyledHeading,
} from "../../elements/hero/HeroElements"

const StyledImg = styled(Img)`
  width: 50%;
  max-width: 30rem;
  margin-left: auto;
  border-top-right-radius: 2rem;
`

const LatestCourses = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        limit: 1
        sort: { fields: frontmatter___date, order: DESC }
        filter: { frontmatter: { posttype: { eq: "course" } } }
      ) {
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
    <>
      <StyledHeading>COURSES</StyledHeading>
      {data.allMdx.edges.map(edge => (
        <Link to={`/course/${edge.node.frontmatter.slug}`}>
          <CoursesContainer>
            <div>
              <p>career</p>
              <h1>{edge.node.frontmatter.title}</h1>
            </div>
            <StyledImg
              fixed={
                edge.node.frontmatter.featureImage
                  ? edge.node.frontmatter.featureImage.childImageSharp.fixed
                  : human
              }
            />
          </CoursesContainer>
        </Link>
      ))}
    </>
  )
}

export default LatestCourses
