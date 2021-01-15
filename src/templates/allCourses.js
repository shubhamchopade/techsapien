import React from "react"
import { graphql, Link } from "gatsby"
import human from "../images/1.svg"
import Img from "gatsby-image"
import { CoursesContainer } from "../elements/hero/HeroElements"
import styled from "styled-components"

const StyledImg = styled(Img)`
  width: 50%;
  max-width: 30rem;
  margin-left: auto;
  border-top-right-radius: 2rem;
`

const allCourses = ({ data }) => {
  return (
    <>
      {data.allMdx.edges.map(edge => (
        <Link to={`/course/${edge.node.frontmatter.slug}`}>
          <CoursesContainer color={edge.node.frontmatter.color}>
            <div>
              <p className="course-type">career</p>
              <h1>{edge.node.frontmatter.title}</h1>
              <p className="course-description">
                {edge.node.frontmatter.description}
              </p>
              <p className="course-link">Start Now</p>
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

export default allCourses

export const PageQuery = graphql`
  query AllCoursesQuery {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { posttype: { eq: "course" } } }
    ) {
      edges {
        node {
          frontmatter {
            date
            excerpt
            slug
            title
            category
            description
            color
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
